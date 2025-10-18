import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import Swal from 'sweetalert2';

const AppointmentDetailsDoctor = () => {
  const { aID } = useParams();
  const navigate = useNavigate();

  // Load local data
  const prescriptions = JSON.parse(localStorage.getItem("prescriptions") || "[]");
  const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");

  const appointment = appointments.find(a => a.appointmentID === parseInt(aID, 10));
  const prescription = prescriptions.find(p => p.appointmentID === aID);

  if (!appointment) {
    return <p>অ্যাপয়েন্টমেন্ট পাওয়া যায়নি।</p>;
  }

  const {
    name, mobile, email, age, gender, bloodGroup, profession, institute,
    problem, date, slot, mode, consultationFee
  } = appointment;

  // Handle session end
  const handleEndSession = () => {
    Swal.fire({
      title: 'আপনি কি সত্যিই সেশন শেষ করতে চান?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E8594A',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'হ্যাঁ, শেষ করুন',
      cancelButtonText: 'বাতিল করুন'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('সেশন শেষ হয়েছে!', 'রোগীর সেশন সফলভাবে শেষ হয়েছে।', 'success');
        navigate("/doctorDashboard/appointmentDoctor");
      }
    });
  };

  // 🟢 Handle prescription download click
  const handleDownloadPrescription = () => {
    if (!prescription) {
      Swal.fire({
        icon: 'info',
        title: 'কোনো প্রেসক্রিপশন পাওয়া যায়নি!',
        text: 'এই অ্যাপয়েন্টমেন্টের জন্য এখনো কোনো প্রেসক্রিপশন তৈরি করা হয়নি।',
        confirmButtonColor: '#007AF5',
        confirmButtonText: 'ঠিক আছে'
      });
      return;
    }

    // Redirect to download/view page
    navigate(`/doctorDashboard/createPrescription/${aID}`);
  };

  return (
    <div className='bg-[#EFF7FE]'>
      <div className="min-h-[850px] p-16 bg-white rounded-lg">
        {/* Back Button */}
        <div className='mb-4'>
          <button className="border-2 rounded-md flex justify-center items-center hover:bg-[#E8594A] hover:text-white transition">
            <Link to="/doctorDashboard/appointmentDoctor" className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md">
              <div className='flex gap-4 items-center'>
                <span className="text-xl"><IoArrowBackSharp /></span>
                <span className='text-center text-lg'>পিছনে যান</span>
              </div>
            </Link>
          </button>
        </div>

        {/* Appointment & Patient Info */}
        <div className='flex flex-col gap-8'>
          <div className='border p-8 rounded-md'>
            <h2 className='text-xl px-4 py-2 text-gray-800 mb-6 font-bold text-center rounded-md bg-[#EFF7FE] border'>
              অ্যাপয়েন্টমেন্ট সম্পর্কিত তথ্যসমূহ
            </h2>
            <div className='mt-4 space-y-4'>
              <p className='text-left'>তারিখঃ {date}</p>
              <p className='text-left'>সময়ঃ {slot}</p>
              <div className='flex gap-4'>
                <p className='bg-[#007AF5] rounded-md inline-block px-2 py-1 text-white'>মাধ্যমঃ {mode}</p>
                <p className='bg-[#E8594A] rounded-md inline-block px-2 py-1 text-white'>ফিঃ {consultationFee} টাকা</p>
              </div>
            </div>
          </div>

          {/* Patient Info */}
          <div className='border p-8 rounded-md'>
            <h2 className='text-xl px-4 py-2 text-gray-800 mb-6 font-bold text-center rounded-md bg-[#EFF7FE] border'>
              রোগীর তথ্যসমূহ
            </h2>
            <div className='space-y-4'>
              <p className='font-semibold text-left'>নামঃ <span className='font-nato font-normal'>{name}</span></p>
              <p className='font-semibold text-left'>মোবাইলঃ <span className='font-nato font-normal'>{mobile}</span></p>
              <p className='font-semibold text-left'>ইমেইলঃ <span className='font-nato font-normal'>{email}</span></p>
              <p className='font-semibold text-left'>বয়সঃ <span className='font-nato font-normal'>{age} বছর</span></p>
              <p className='font-semibold text-left'>জেন্ডারঃ <span className='font-nato font-normal'>{gender}</span></p>
              <p className='font-semibold text-left'>ব্লাড গ্রুপঃ <span className='font-nato font-normal'>{bloodGroup}</span></p>
              <p className='font-semibold text-left'>পেশাঃ <span className='font-nato font-normal'>{profession}</span></p>
              <p className='font-semibold  text-left'>প্রতিষ্ঠানঃ <span className='font-nato font-normal'>{institute}</span></p>
              <p className='font-semibold  text-left'>সমস্যা/রোগের বিবরণঃ <span className='font-nato font-normal'>{problem}</span></p>
            </div>

            <div className='flex mt-4'>
              <button
                onClick={handleDownloadPrescription}
                className='flex-1 bg-[#007AF5] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition'
              >
                প্রেসক্রিপশন ডাউনলোড করুন
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 mt-6'>
            <button
              onClick={() => navigate(`/doctorDashboard/createPrescription/${aID}`)}
              className='flex-1 bg-[#007AF5] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition'
            >
              প্রেসক্রিপশন লিখুন
            </button>
            <button
              onClick={handleEndSession}
              className='flex-1 bg-[#E8594A] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition'
            >
              সেশন শেষ করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsDoctor;

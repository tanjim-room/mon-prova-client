import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from '../../components/buttons/Button';
import NavBarDoctor from '../../components/NavBarDoctor';

const MySwal = withReactContent(Swal);

const AppointmentDetailsDoctor = () => {
  const { aID } = useParams();
  const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
  const appointmentIndex = appointments.findIndex(a => a.appointmentID === parseInt(aID, 10));
  const appointment = appointmentIndex !== -1 ? appointments[appointmentIndex] : null;

  if (!appointment) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold">
        অ্যাপয়েন্টমেন্ট পাওয়া যায়নি!
      </div>
    );
  }

  const {
    name,
    mobile,
    email,
    age,
    gender,
    bloodGroup,
    profession,
    institute,
    problem,
    mode,
    date,
    slot,
    consultationFee,
    status
  } = appointment;

  // 📝 SweetAlert2 Prescription Modal
  const handlePrescriptionModal = async () => {
    const prescriptions = JSON.parse(localStorage.getItem("prescriptions") || "[]");
    const existingPrescription = prescriptions.find(
      (p) => p.appointmentID === appointment.appointmentID
    );
    const previousText = existingPrescription ? existingPrescription.prescription : "";

    const { value: prescriptionText } = await MySwal.fire({
      title: '📝 প্রেসক্রিপশন লিখুন',
      input: 'textarea',
      inputValue: previousText,
      inputPlaceholder: 'এখানে প্রেসক্রিপশন লিখুন...',
      inputAttributes: { 'aria-label': 'Type your message here' },
      showCancelButton: true,
      cancelButtonText: 'বাতিল করুন',
      confirmButtonText: 'সংরক্ষণ করুন',
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#6b7280',
      inputValidator: (value) => {
        if (!value) {
          return '⚠️ দয়া করে প্রেসক্রিপশন লিখুন!';
        }
      }
    });

    if (prescriptionText) {
      const newPrescription = {
        appointmentID: appointment.appointmentID,
        patientName: name,
        doctorName: appointment.doctorName,
        date,
        slot,
        mode,
        prescription: prescriptionText,
        createdAt: new Date().toISOString(),
      };

      const existingIndex = prescriptions.findIndex(
        (p) => p.appointmentID === appointment.appointmentID
      );
      if (existingIndex !== -1) {
        prescriptions[existingIndex] = newPrescription;
      } else {
        prescriptions.push(newPrescription);
      }

      localStorage.setItem("prescriptions", JSON.stringify(prescriptions));

      await MySwal.fire({
        icon: 'success',
        title: '✅ সংরক্ষণ সম্পন্ন!',
        text: 'প্রেসক্রিপশন সফলভাবে সংরক্ষণ করা হয়েছে।',
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: '#16a34a',
      });
    }
  };

  //  Handle Finish Appointment
  const handleFinishAppointment = async () => {
    const result = await MySwal.fire({
      title: 'আপনি কি নিশ্চিত?',
      text: 'এই অ্যাপয়েন্টমেন্টটি সম্পন্ন হিসেবে চিহ্নিত হবে।',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'হ্যাঁ, সম্পন্ন করুন',
      cancelButtonText: 'বাতিল',
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#6b7280',
    });

    if (result.isConfirmed) {
      // Update status to completed
      appointments[appointmentIndex].status = "completed";
      localStorage.setItem("appointments", JSON.stringify(appointments));

      await MySwal.fire({
        icon: 'success',
        title: '✅ সম্পন্ন!',
        text: 'অ্যাপয়েন্টমেন্ট সফলভাবে সম্পন্ন হিসেবে সংরক্ষণ করা হয়েছে।',
        confirmButtonText: 'ঠিক আছে',
        confirmButtonColor: '#16a34a',
      });
    }
  };

  return (
    <div>
      <NavBarDoctor />
      <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">
        <div className='flex justify-between'>
          <div className='text-left w-full'>
            <h2 className='text-2xl text-gray-800 font-bold'>📋 অ্যাপয়েন্টমেন্ট তথ্য</h2>
            <div className='mt-4'>
              <p>মাধ্যমঃ {mode}</p>
              <p>তারিখঃ {date}</p>
              <p>সময়ঃ {slot}</p>
              <p>ফিঃ {consultationFee} টাকা</p>
              <p>স্ট্যাটাসঃ <span className='font-semibold'>{status || "Pending"}</span></p>
            </div>

            <div className='mt-4 text-left'>
              <h2 className='text-2xl text-gray-800 mb-4 font-bold'>🧑 রোগীর তথ্য</h2>
              <p>রোগীর নামঃ {name}</p>
              <p>মোবাইলঃ {mobile}</p>
              <p>ইমেইলঃ {email}</p>
              <p>বয়সঃ {age} বছর</p>
              <p>জেন্ডারঃ {gender}</p>
              <p>ব্লাড গ্রুপঃ {bloodGroup}</p>
              <p>পেশাঃ {profession}</p>
              <p>প্রতিষ্ঠানঃ {institute}</p>
              <p>সমস্যা/রোগের বিবরণঃ {problem}</p>
            </div>
          </div>
        </div>

        <div className='flex justify-between gap-8 mt-8'>
          <div className='w-full' onClick={handlePrescriptionModal}>
            <Button text="প্রেস্ক্রিপশন লিখুন" />
          </div>
          <div className='w-full' onClick={handleFinishAppointment}>
            <Button text="শেষ করুন" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailsDoctor;

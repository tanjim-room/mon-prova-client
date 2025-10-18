import React from 'react';
import NavBar from '../../components/NavBar';
import { useParams, Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

const AppointmentDetailsPatient = () => {
    const { aID } = useParams()
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const appointment = appointments.find(a => a.appointmentID === parseInt(aID, 10));


    const { name, mobile, email, age, gender, bloodGroup, profession, instituteDoc, problem,
        doctorName, speciality, mode, date, slot, status, consultationFee, img, institute, degrees, regNo, designation, yearsOfExperience, expertise, shortBio, medium

    } = appointment
   
    return (
        <div className='bg-[#EFF7FE]'>

            <div>

                <div className="min-h-[850px] p-16 bg-white rounded-lg">
                    <div className='mb-4'>
                        <button className="border-2 rounded-md flex justify-center items-center hover:bg-[#E8594A] hover:text-white transition">
                            <Link
                                to="/patientDashboard/appointment"
                                className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md "
                            >
                                <div className='flex gap-4 items-center'>
                                    <span className="text-xl"><IoArrowBackSharp></IoArrowBackSharp></span>
                                    <span className='text-center text-lg'>ফিরে যান</span>
                                </div>
                            </Link>
                        </button>
                    </div>

                    <div className='flex justify-between gap-8'>
                        <div className='text-left w-full'>
                            <div className='text-left '>


                                <div className='border p-8 rounded-md'>
                                    <h2 className='text-xl px-4 py-2 text-gray-800 mb-6 font-bold text-center rounded-md bg-[#EFF7FE] border'>অ্যাপয়েন্টমেন্ট সম্পর্কিত তথ্যসমূহ</h2>
                                    <div className='mt-4 space-y-4'>
                                        <p>তারিখঃ {date}</p>
                                        <p>সময়ঃ {slot}</p>
                                       <div className='flex justify-between gap-4'>
                                         <p className='bg-[#007AF5] rounded-md inline-block px-2 py-1 text-white'>মাধ্যমঃ {mode}</p>
                                       
                                        <p className='bg-[#E8594A] rounded-md inline-block px-2 py-1 text-white'>ফিঃ {consultationFee} টাকা</p>
                                       </div>
                                    </div>
                                </div>

                                <div className='mt-4 text-left p-8 rounded-md border h-full'>
                                    <h2 className='text-xl px-4 py-2 text-gray-800 mb-6 font-bold text-center rounded-md bg-[#EFF7FE] border'>রোগীর তথ্যসমূহ</h2>
                                    <div className='space-y-4'>
                                        <p className='font-semibold'>রোগীর নামঃ <span className='font-nato font-normal'>{name}</span></p>
                                        <p className='font-semibold'>মোবাইলঃ <span className='font-nato font-normal'>{mobile}</span></p>
                                        <p className='font-semibold'>ইমেইলঃ <span className='font-nato font-normal'>{email}</span></p>
                                        <p className='font-semibold'>বয়সঃ <span className='font-nato font-normal'>{age} বছর</span></p>
                                        <p className='font-semibold'>জেন্ডারঃ<span className='font-nato font-normal'> {gender}</span></p>
                                        <p className='font-semibold'>ব্লাড গ্রুপঃ <span className='font-nato font-normal'>{bloodGroup}</span></p>
                                        <p className='font-semibold'>পেশাঃ <span className='font-nato font-normal'>{profession}</span></p>
                                        <p className='font-semibold'>প্রতিষ্ঠানঃ <span className='font-nato font-normal'>{institute}</span></p>
                                        <p className='font-semibold'>সমস্যা/রোগের বিবরণঃ<span className='font-nato font-normal'> {problem}</span></p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='w-full text-left border p-8 rounded-md'>
                            <h2 className='text-xl px-4 py-2 text-gray-800 mb-6 font-bold text-center rounded-md bg-[#EFF7FE] border'>ডাক্তার এর তথ্যসমূহ</h2>
                            <div className=''>
                                <div className='flex gap-6 items-center'>
                                    <div>
                                        <img src={img} alt="" className='w-36 h-36 object-cover rounded-full border' />
                                    </div>
                                    <div className='space-y-1'>
                                        <h2 className="card-title text-xl">{doctorName}</h2>
                                        <p className="text-lg  mt-0 mb-0 font-bold text-start text-gray-700">{speciality} </p>

                                        <div className='mt-0 text-start'>

                                            {
                                                degrees.map((degree, idx) => <span key={idx} className='text-[#1998df] text-start'>{degree}, </span>)
                                            }


                                        </div>
                                        <div className='mt-2'>
                                            <p className='text-start m text-base  text-gray-700 font-semibold'>BMDC Reg. No: <span className='bg-[#007AF5] px-2 py-1 text-white rounded-md text-sm font-semibold'>{regNo}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body ml-0 pl-0">




                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>কর্মক্ষেত্র</p>
                                        <div  className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                            <span>{designation}</span>
                                        <p className='font-semibold'>{instituteDoc}</p>
                                        </div>
                                    </div>

                                    


                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>দক্ষতাসমূহ</p>
                                        <div className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                            {
                                            expertise.map((ex, idx) => <span key={idx} className='text-sm font-semibold'>{ex}, </span>)
                                        }
                                        </div>
                                    </div>
                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>অভিজ্ঞতা</p>
                                        <div className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                            <span className='font-semibold'>{yearsOfExperience} বছর</span>
                                        </div>

                                    </div>



                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>সংক্ষিপ্ত পরিচয়</p>
                                       <div className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                         <p className='font-normal '>{shortBio}</p>
                                       </div>
                                        

                                    </div>

                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>রোগী দেখার মাধ্যম</p>
                                        <div className='bg-[#01975d] inline-block rounded-md px-2 py-2 border'>
                                            <p className='text-sm text-white font-semibold '>{medium}</p>
                                        </div>

                                    </div>

                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>পরামর্শ ফি</p>
                                        <span className='bg-[#E8594A] rounded-md inline-block px-2 py-1 text-white'>{consultationFee} টাকা</span>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetailsPatient;
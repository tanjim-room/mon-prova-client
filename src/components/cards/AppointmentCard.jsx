import { p } from 'framer-motion/client';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaVideo } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import Button from '../buttons/Button';

const AppointmentCard = ({ appointment }) => {
    const { name, doctorName, speciality, mode, date, slot, status, consultationFee, img, appointmentID } = appointment



    return (
        <div className='m-4 border rounded-md'>
            <div className="card card-side bg-base-100 shadow-sm gap-12">
                <div className="card-body">
                    <div className='flex gap-8 items-center'>
                        <div>
                            <img src={img} alt="" className='w-24 h-24 object-cover rounded-full border' />
                        </div>
                        <div className='space-y-2'>
                            <h2 className="card-title text-xl ">{doctorName}</h2>
                            <p className='text-lg text-left text-gray-800'>{speciality}</p>
                        </div>
                    </div>
                    <div className='text-start text-lg mt-4 space-y-2'>

                        <div className='space-y-2 mb-4'>
                            <p>তারিখঃ {date}</p>
                            <p>সময়ঃ  {slot}</p>
                            <p className='bg-[#007AF5] rounded-md inline-block px-2 py-1 text-white'>মাধ্যমঃ {mode}</p>
                        </div>
                        <div className='flex justify-between gap-8'>
                            <div className='w-full'>
                                {
                                    mode == 'online' && <button className="w-full border-2 rounded-md flex justify-center text-[#007AF5] items-center hover:bg-[#E8594A] hover:text-white transition">
                                        <Link
                                            to=""
                                            className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md "
                                        >
                                           <div className='flex gap-4 items-center'>
                                             <span className="text-xl "><FaVideo></FaVideo></span>
                                            <span className='text-center text-lg'>ভিডিও সেশন এ জয়েন করুন</span>
                                           </div>
                                        </Link>
                                    </button>
}
                            </div>
                            <div className='w-full'>
                                <button className="w-full border-2 rounded-md flex justify-center items-center text-[#007AF5] hover:bg-[#E8594A] hover:text-white transition">
                                        <Link
                                            to={`/patientDashboard/appointmentDetails/${appointmentID}`}
                                            className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md "
                                        >
                                           <div className='flex gap-4 items-center'>
                                             
                                             <span className="text-xl"><BiDetail></BiDetail></span>
                                            <span className='text-center text-lg'>বিস্তারিত দেখুন</span>
                                           </div>
                                        </Link>
                                    </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
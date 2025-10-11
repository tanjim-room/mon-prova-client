import { p } from 'framer-motion/client';
import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from '../buttons/Button';

const AppointmentCard = ({ appointment }) => {
    const { name, doctorName, speciality, mode, date, slot, status, consultationFee, img, appointmentID } = appointment



    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-sm gap-12">
                <div className="card-body">
                    <div className='flex gap-8 items-center'>
                        <div>
                            <img src={img} alt="" className='w-24 h-24 object-cover rounded-full' />
                        </div>
                        <div>
                            <h2 className="card-title text-xl ">ডাক্তারঃ {doctorName}</h2>
                            <p className='text-xl text-left text-gray-800'>{speciality}</p>
                        </div>
                    </div>
                    <div className='text-start text-lg mt-4'>
                        <p className=''>মাধ্যমঃ {mode}</p>
                        <p>তারিখঃ {date}</p>
                        <p>সময়ঃ {slot}</p>
                        <div className='mt-4 flex justify-between gap-8'>
                            <div className=' w-full'>
                                {
                                    mode == 'online' && <Button text="ভিডিও সেশন এ জয়েন করুন"></Button>
                                }
                            </div>
                            <div className='w-full'>
                                <Link to={`/appointmentDetailsPatient/${appointmentID}`}>
                                    <Button text="বিস্তারিত দেখুন"></Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
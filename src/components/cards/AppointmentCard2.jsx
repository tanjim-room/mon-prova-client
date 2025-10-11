import { p } from 'framer-motion/client';
import React from 'react';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';

const AppointmentCard2 = ({ appointment }) => {
    const { name, doctorName, speciality, mode, date, slot, status, consultationFee, img } = appointment



    return (
        <div className=''>
            <div className="card card-side bg-base-100 shadow-sm gap-12">
                <div className="card-body">
                    <div className='flex gap-8 items-center'>
                        {/* <div>
                            <img src={img} alt=""  className='w-24 h-24 object-cover rounded-full'/>
                        </div> */}
                        <div>
                            <h2 className="card-title text-xl ">রোগীঃ {name}</h2>
                            {/* <p className='text-xl text-left text-gray-800'>{speciality}</p> */}
                        </div>
                    </div>
                    <div className='text-start text-lg mt-4'>
                        <p className=''>মাধ্যমঃ {mode}</p>
                        <p>তারিখঃ {date}</p>
                        <p>সময়ঃ {slot}</p>
                        <div className="mt-4 flex justify-between gap-8 items-center">
                        <div className='w-full'>
                              {
                                mode == 'online' &&  <Link to="https://meet.google.com/idk-itpb-oom">
                                    <Button text="সেশন শুরু করুন"></Button>
                                     </Link>
                            }
                           
                        </div>
                         <div className="w-full">
                           
                            {
                                mode == 'online' &&  <Link to="https://meet.google.com/idk-itpb-oom">
                                    <Button text="সেশন লিঙ্ক দিন"></Button>
                                     </Link>
                            }
                           
                        </div>
                        <div className="w-full">
                           
                            <Button text="প্রেস্ক্রিপসন লিখুন"></Button>
                           
                        </div>
                         <div className="w-full">
                           
                            <Button text="শেষ করুন"></Button>
                           
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AppointmentCard2;
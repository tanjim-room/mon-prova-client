import React from 'react';
import NavBar from '../../components/NavBar';
import { useParams, Link } from 'react-router-dom';

const AppointmentDetailsPatient = () => {
    const { aID } = useParams()
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const appointment = appointments.find(a => a.appointmentID === parseInt(aID, 10));


    const { name, mobile, email, age, gender, bloodGroup, profession, instituteDoc, problem,
        doctorName, speciality, mode, date, slot, status, consultationFee, img, institute, degrees, regNo, designation, yearsOfExperience, expertise, shortBio, medium

    } = appointment
    return (
        <div>
            <NavBar></NavBar>
            <div>

                <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">

                    <div className='flex justify-between'>
                        <div className='text-left w-full'>
                            <div className='text-left'>
                                <h2 className='text-2xl text-gray-800 font-bold'>অ্যাপয়েন্টমেন্ট সম্পর্কিত তথ্যসমূহঃ</h2>
                                <div className='mt-4'>
                                    <p>মাধ্যমঃ {mode}</p>
                                    <p>তারিখঃ {date}</p>
                                    <p>সময়ঃ {slot}</p>
                                    <p>ফিঃ {consultationFee} টাকা</p>
                                </div>

                                <div className='mt-4 text-left'>
                                    <h2 className='text-2xl text-gray-800 mb-4 font-bold'>রোগীর তথ্যসমূহঃ</h2>
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
                        <div className='w-full text-left'>
                            <h2 className='text-2xl text-gray-800 mb-4 font-bold'>ডাক্তার এর তথ্যসমূহঃ</h2>
                            <div className=''>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                    <img src={img} alt="" className='w-36 h-36 object-cover rounded-full' />
                                </div>
                                <div>
                                      <h2 className="card-title text-2xl">{doctorName}</h2>
                                      <p className="text-xl  mt-0 mb-0 font-bold text-start text-gray-700">{speciality} </p>
                                      <p className='text-start text-sm mt-0 text-gray-700'>BMDC Registration No: {regNo}</p>
                                       <div className='mt-0 text-start'>
                                        
                                        {
                                            degrees.map((degree, idx) => <span key={idx} className='text-[#1998df] text-start'>{degree}, </span>)
                                        }
                                        
                                    </div>
                                </div>
                                </div>
                                <div className="card-body ml-0 pl-0">
                                  
                                   


                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text-gray-700 font-bold'>কর্মক্ষেত্র</p>
                                        <span>{designation}</span>
                                        <p className='font-semibold'>{instituteDoc}</p>
                                    </div>

                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text-gray-700 font-bold'>অভিজ্ঞতা</p>
                                        <span className=''>{yearsOfExperience} বছর</span>

                                    </div>


                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text-gray-700 font-bold'>দক্ষতাসমূহ</p>
                                        {
                                            expertise.map((ex, idx) => <span key={idx} className='text-sm'>{ex}, </span>)
                                        }
                                    </div>



                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text-gray-700 font-bold'>সংক্ষিপ্ত পরিচয়</p>
                                        <span className='text-sm '>{shortBio}</span>

                                    </div>

                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text-gray-700 font-bold'>রোগী দেখার মাধ্যম</p>
                                        <span className='text-sm'>{medium}</span>

                                    </div>

                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text-gray-700 font-bold'>পরামর্শ ফি</p>
                                        <span className=''>{consultationFee} টাকা</span>

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
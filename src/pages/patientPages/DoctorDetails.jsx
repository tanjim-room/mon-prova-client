import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from '../../components/buttons/Button';

const DoctorDetails = () => {
    
    const { doctorID } = useParams()
    const details= useLoaderData()
    const detail = details.find(detail => detail.doctorID == doctorID)
    const { doctorId, fullName, specialization, designation, degrees, consultationFee, image, expertise, institute, regNo, yearsOfExperience, shortBio,medium } = detail;
    
    
    return (
        <div>
            <NavBar></NavBar>

            <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">

                <div className="card card-side bg-base-100 shadow-sm gap-12">
                    <figure>
                        <img
                            src={image}
                            className='w-96 h-full object-cover'
                            alt="Doctor" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{fullName}</h2>
                          <div className='mt-0 text-start'>
                         <p className="text-xl  mt-0 mb-0 font-bold text-start text-gray-700">{specialization} </p>
                        {
                            degrees.map((degree,idx) => <span key={idx} className='text-[#1998df] text-start'>{degree}, </span>)
                        }
                         <p className='text-start text-sm mt-0 text-gray-700'>BMDC Registration No: {regNo}</p>
                    </div>
                   

                     <div className='text-start'> 
                     <p className='text-start text-xl mt-4 text-gray-700 font-bold'>কর্মক্ষেত্র</p>
                        <span>{designation}</span>
                        <p className='font-semibold'>{institute}</p>
                   </div>

                   <div className='text-start'> 
                     <p className='text-start text-xl mt-4 text-gray-700 font-bold'>অভিজ্ঞতা</p>
                    <span className=''>{yearsOfExperience} বছর</span>
                        
                   </div>
                  
                    
                   <div className='text-start'> 
                     <p className='text-start text-xl mt-4 text-gray-700 font-bold'>দক্ষতাসমূহ</p>
                    {
                        expertise.map((ex,idx) => <span key={idx} className='text-sm'>{ex}, </span>)
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
                   
                   
                        <div className="mt-4">
                            <Link to={`/appointmentForm/${doctorID}`}>
                                <Button text="অ্যাপয়েন্টমেন্ট নিন"></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
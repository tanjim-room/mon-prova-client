import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { p } from 'framer-motion/client';
import Button from '../buttons/Button';
import { Pointer } from 'lucide-react';
import OutlinedButton from '../buttons/OutlinedButton';

const DoctorCard = ({ doctor }) => {
    const { doctorId, fullName, specialization, designation, degrees, consultationFee, image, expertise } = doctor;
    return (
    
            <motion.div
                whileHover={{ y: -5, scale: 1.025 }}
                
                className="card shadow-xl rounded-lg p-6 relative overflow-hidden"
                style={{ backgroundColor: "#efefef" }}
            >
                {/* Glow background animation */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                ></motion.div>

                <div className="card-body relative z-10 text-white text-center p-0">
                    <div className='rounded-full flex justify-center'>
                        <img
                            src={image}
                            alt=""
                            className="w-72 h-72 object-cover mb-3 rounded-full border-2 border-blue-400"

                        />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-[#1998df]">
                        {fullName}
                    </h2>

                   
                      <div className='mt-0'>
                         <p className="text-lg  mt-2 mb-0 text-gray-800 font-bold">{specialization}</p>
                        {
                            degrees.map((degree,idx) => <span key={idx} className='text-[#1998df]'>{degree}, </span>)
                        }
                    </div>
                    
                   <div className=''> 
                     <p className='text-center text-base mt-4 text-gray-700 font-bold'>দক্ষতাসমূহ</p>
                    {
                        expertise.map((ex,idx) => <span key={idx} className='text-sm text-[#1998df]'>{ex}, </span>)
                    }
                   </div>
                  
                    <div className="mt-4">

                        <div className='flex flex-col space-y-4'>
                            <div className="bg-white px-4 py-2 w-full text-sm rounded-lg text-blue-700">পরামর্শ ফিঃ {consultationFee} টাকা </div>
                            <Link to={`/doctorDetails/${doctor.doctorID}`}>
                                <Button text="বিস্তারিত দেখুন"></Button>
                            </Link>

                        </div>

                    </div>
                </div>
            </motion.div>
    );
};

export default DoctorCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { p } from 'framer-motion/client';

const DoctorCard = ({ doctor }) => {
    const { fullName, specialization, designation, degrees, consultationFee, image, expertise } = doctor;
    return (
        <Link
            // to={link}
            className=""
        >
            <motion.div
                whileHover={{ y: -5, scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                className="card shadow-xl rounded-lg p-6 cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: "#76a4f1" }}
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
                            className="w-72 h-72 object-cover mb-3 rounded-full"

                        />
                    </div>
                    <h2 className="card-title text-2xl font-bold drop-shadow-lg">
                        {fullName}
                    </h2>

                    <p className="text-md opacity-90 mt-2">{specialization}</p>
                      <div className='flex gap-1 justify-center'>
                        {
                            degrees.map((degree,idx) => <p key={idx}>{degree},</p>)
                        }
                    </div>
                     <p className='text-center mt-4'>দক্ষতাসমূহ</p>
                   <div className='flex gap-1 justify-center'> 
                   
                    {
                        
                        expertise.map((ex,idx) => <p key={idx} className='text-sm'>{ex},</p>)
                        
                    }
                   </div>
                  
                    <div className="card-actions justify-end mt-4">

                        <div className='flex items-center gap-2'>
                            <div className="badge badge-success bg-white w-1/2 px-1 py-1 text-sm rounded-lg text-blue-700">পরামর্শ ফিঃ {consultationFee} টাকা </div>
                            <div className="badge badge-success bg-white w-1/2 px-1 py-1 text-sm rounded-lg text-blue-700">বিস্তারিত জানুন </div>

                        </div>

                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default DoctorCard;
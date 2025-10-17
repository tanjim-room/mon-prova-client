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

            className="card shadow-xl rounded-md p-6 relative overflow-hidden bg-white border"
            style={{ backgroundColor: "#ffffff" }}
        >
            {/* Glow background animation */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute top-0 right-0 w-40 h-40 bg-white rounded-md blur-3xl"
            ></motion.div>

            <div className="card-body relative z-10 text-white text-center p-0">
                <div className='flex gap-6'>
                    <div className='rounded-md flex justify-center'>
                        <img
                            src={image}
                            alt=""
                            className="w-36 h-36 object-cover mb-3 rounded-md border"

                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-left text-[#1998df]">
                            {fullName}
                        </h2>


                        <div className='mt-0'>
                            <p className="text-lg  mt-2 mb-0 text-gray-800 font-bold text-left">{specialization}</p>
                            <div className='text-left'>
                                {
                                    degrees.map((degree, idx) => <span key={idx} className='text-gray-700'>{degree}, </span>)
                                }
                            </div>
                        </div>

                        <div className='flex gap-4'>

                            <div>
                                {
                                    expertise.map((ex, idx) => <span key={idx} className='text-sm text-[#1998df]'>{ex}, </span>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">

                    <div className='flex items-center gap-4'>
                        <div className="text-white px-4 py-2 text-sm rounded-md bg-[#007AF5]">পরামর্শ ফিঃ {consultationFee} টাকা </div>
                        <div>
                            <Link  to={`/patientDashboard/doctorDetails/${doctor.doctorID}`}>
                                <div className="text-white px-4 py-2 text-sm rounded-md bg-[#E8594A]">বিস্তারিত জানুন</div>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default DoctorCard;
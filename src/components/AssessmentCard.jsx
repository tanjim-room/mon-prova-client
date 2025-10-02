import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const AssessmentCard = ({assessment}) => {
    const {title, shortTitle, icon} = assessment;
    return (
         <Link
            // to={link}
            className=""
        >
            <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card shadow-xl rounded-lg p-6 cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: "#76a4f1" }}
            >
                {/* Glow background animation */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                ></motion.div>

                <div className="card-body relative z-10 text-white text-center">
                    <div className='flex justify-center'>
                        <motion.img
                            src={icon}
                            alt={shortTitle}
                            className="w-20 h-20 mb-3"
                            initial={{ rotate: -10 }}
                            animate={{ rotate: 10 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                        />
                    </div>
                    <h2 className="card-title text-2xl font-bold drop-shadow-lg">
                        {shortTitle}
                    </h2>
                    <p className="text-sm opacity-90">{title}</p>
                    <div className="card-actions justify-end mt-4">



                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default AssessmentCard;
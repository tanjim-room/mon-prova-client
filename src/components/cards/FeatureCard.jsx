import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const FeatureCard = ({ card }) => {

    const { title, description, icon, link, color } = card;

    return (
        <Link
            to={link}
            className=""
        >
            <motion.div
                whileHover={{ y: -5, scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                className="card shadow-xl rounded-lg p-6 cursor-pointer relative overflow-hidden"
                style={{ backgroundColor: color }}
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
                            alt={title}
                            className="w-20 h-20 mb-3"
                            initial={{ rotate: -10 }}
                            animate={{ rotate: 10 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                        />
                    </div>
                    <h2 className="card-title justify-center text-2xl font-bold drop-shadow-lg text-center">
                        {title}
                    </h2>
                    <p className="text-sm opacity-90">{description}</p>
                    <div className="card-actions justify-end mt-4">



                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default FeatureCard;
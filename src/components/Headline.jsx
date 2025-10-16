import React from 'react';
import { motion } from 'framer-motion';

// Accepts either a delay prop (legacy) or motion variants passed from parent
const Headline = ({ delay = 0, variants = null }) => {
    if (variants) {
        return (
            <div className="text-left">
                <motion.h1 variants={variants} className="text-5xl md:text-6xl font-bold text-white/90 leading-tight">
                    <p className='leading-relaxed'>আপনার মানসিক স্বাস্থ্যের বিশ্বস্ত সঙ্গী</p>
                </motion.h1>
            </div>
        );
    }

    return (
        <div className="text-left">
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} className="text-5xl md:text-6xl font-bold text-white/90 leading-tight">
               <p className='leading-relaxed'>আপনার মানসিক স্বাস্থ্যের বিশ্বস্ত সঙ্গী</p>
            </motion.h1>
        </div>
    );
};

export default Headline;
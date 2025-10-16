import React from 'react';
import Logo from './Logo';
import Headline from './Headline';
import Button from './buttons/Button';
import OutlinedButton from './buttons/OutlinedButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
    const remoteBg = 'https://i.ibb.co/XfGMwLY3/Gemini-Generated-Image-fbbyq7fbbyq7fbby.png';

    // Container controls the stagger sequencing for children
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.14, delayChildren: 1.0 } },
    };

    const child = {
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <header className="w-full h-screen m-0 p-0">
            {/* background zoom: scale from 1.06 -> 1 */}
            <motion.div
                className="w-full h-full relative overflow-hidden"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                style={{
                    backgroundImage: `url('${remoteBg}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/10 to-black/25 opacity-70" />

                {/* content: appears after background zoom (staggerChildren handles sequencing) */}
                <motion.div className="relative z-10 h-full" initial="hidden" animate="visible" variants={container}>
                    <div className="p-8 absolute top-6 left-6">
                        <Logo />
                    </div>

                    <div className="absolute left-12 top-1/2 -translate-y-1/2 w-1/2">
                        <div className="">
                            <motion.div variants={child}>
                                <Headline variants={child} />
                            </motion.div>

                            <motion.p variants={child} className="pt-4 text-lg md:text-xl text-white/80 max-w-xl text-left">
                                ডিপ্রেশন, উদ্বেগ বা চাপ মোকাবিলায় এখনই খুঁজুন সঠিক সহায়তা। সহজে ডাক্তার বুক করুন, নিজের অগ্রগতি ট্র্যাক করুন, এবং মানসিক সুস্থতার পথে এগিয়ে যান।
                            </motion.p>

                            <motion.div className="flex gap-4 mt-6" variants={child}>
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/patientLogin">
                                        <div>
                                            <Button text="রোগী হিসেবে প্রবেশ করুন"></Button>
                                        </div>
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/doctorLogin">
                                        <OutlinedButton text="ডাক্তার হিসেবে প্রবেশ করুন" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Banner;
                                    
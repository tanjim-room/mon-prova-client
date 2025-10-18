import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/buttons/Button';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import Yoga from '../../../public/yoga black.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const PatientRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "নাম দিন";
        } else if (name.trim().length < 3) {
            newErrors.name = "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
        }

        if (!email.trim()) {
            newErrors.email = "ইমেইল দিন";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "সঠিক ইমেইল ঠিকানা দিন";
        }

        if (!password.trim()) {
            newErrors.password = "পাসওয়ার্ড দিন";
        } else if (password.length < 6) {
            newErrors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (validateForm()) {
            
            navigate("/patientDashboard");
        }
    };

    return (
        <div className="min-h-[950px] flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-[900px] grid grid-cols-1 md:grid-cols-2">
                
                {/* Left Side  Patient Register Form */}
                <div className="flex flex-col justify-center px-10 py-12">
                    
                    {/* Logo */}
                    <div className='relative flex justify-center mb-4'>
                        <Logo />
                    </div>

                    <h1 className="text-2xl font-semibold py-2">
                       পেশেন্ট সাইন আপ
                    </h1>

                    {/* Sign Up Form */}
                    <form onSubmit={handleRegister} className="mt-8 space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="আপনার নাম দিন"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="আপনার ইমেইল দিন"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="আপনার পাসওয়ার্ড দিন"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1 text-left">{errors.password}</p>}
                        </div>

                        {/* Buttons */}
                        <div className='space-y-4 mt-6'>
                            <Button text="সাইন আপ করুন" extraClass="w-full" />
                            <OutlinedButton
                                text="গুগল দিয়ে সাইন আপ করুন"
                                extraClass="w-full"
                                icon={<FcGoogle className='size-6' />}
                            />
                        </div>

                        {/* Doctor Sign Up Button */}
                        <div className="mt-4">
                            <Link to="/doctorRegister">
                                <OutlinedButton
                                    text="ডাক্তার সাইন আপ করুন"
                                    extraClass="w-full border-[#76a4f1] text-[#1998df] hover:bg-[#e5f3ff]"
                                />
                            </Link>
                        </div>

                        <p className="text-sm text-center mt-4">
                            অ্যাকাউন্ট আছে?{" "}
                            <Link to='/patientLogin'>
                                <span className="text-[#1998df] hover:underline">
                                    লগইন করুন
                                </span>
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Right Side Animation */}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-[#c3e1f1] to-[#76a4f1] p-6">
                    <Lottie animationData={Yoga} />
                </div>
            </div>
        </div>
    );
};

export default PatientRegister;

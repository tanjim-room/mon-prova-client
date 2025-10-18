import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/buttons/Button';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import Yoga from '../../../public/yoga black.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const PatientLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};

        // Email validation
        if (!email.trim()) {
            newErrors.email = "ইমেইল দিন";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "সঠিক ইমেইল ঠিকানা দিন";
        }

        // Password validation
        if (!password.trim()) {
            newErrors.password = "পাসওয়ার্ড দিন";
        } else if (password.length < 6) {
            newErrors.password = "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Simulate successful login
            navigate("/patientDashboard");
        }
    };

    return (
        <div className="min-h-[950px] flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-[900px] grid grid-cols-1 md:grid-cols-2">
                {/* Left Side Patient Login Form */}
                <div className="flex flex-col justify-center px-10 py-12">
                    {/* MonProva Logo */}
                    <div className='relative flex justify-center mb-4'>
                        <Logo />
                    </div>

                    {/* Welcome Text */}
                    <h1 className="text-2xl font-semibold py-2">
                       পেশেন্ট লগইন
                    </h1>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="mt-8 space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="ইমেইল দিন"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="পাসওয়ার্ড দিন"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1 text-left">{errors.password}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <Link to="/resetPassPatient" className="text-[#1998df] hover:underline">
                                পাসওয়ার্ড ভুলে গেছেন?
                            </Link>
                        </div>

                        {/* Login Buttons */}
                        <div className='space-y-4'>
                            <Button text="লগইন করুন" extraClass="w-full" />
                            <OutlinedButton
                                text="গুগল দিয়ে লগইন করুন"
                                extraClass="w-full"
                                icon={<FcGoogle className='size-6' />}
                            />
                        </div>

                        {/* Doctor Login Button */}
                        <div className="mt-4">
                            <Link to="/doctorLogin">
                                <OutlinedButton
                                    text="ডাক্তার লগইন করুন"
                                    extraClass="w-full border-[#76a4f1] text-[#1998df] hover:bg-[#e5f3ff]"
                                />
                            </Link>
                        </div>

                        {/* Register Patient */}
                        <p className="text-sm text-center mt-4">
                            অ্যাকাউন্ট নেই?{" "}
                            <Link to='/patientRegister'>
                                <span className="text-[#1998df] hover:underline">
                                    নতুন অ্যাকাউন্ট খুলুন
                                </span>
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Right Side Animation*/}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-[#c3e1f1] to-[#76a4f1] p-6">
                    <Lottie animationData={Yoga} />
                </div>
            </div>
        </div>
    );
};

export default PatientLogin;

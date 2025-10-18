import Logo from '../../components/Logo';
import Button from '../../components/buttons/Button';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import Doctor from '../../../public/Online Doctor.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const DoctorRegister = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [regNumber, setRegNumber] = useState("");
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

        if (!specialization.trim()) {
            newErrors.specialization = "বিশেষায়িত ক্ষেত্র দিন";
        }

        if (!regNumber.trim()) {
            newErrors.regNumber = "রেজিস্ট্রেশন নম্বর দিন";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Successful registration logic here
            navigate("/doctorDashboard");
        }
    };

    return (
        <div className="min-h-[850px] flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-[900px] grid grid-cols-1 md:grid-cols-2">

                {/* Left Side Doctor Register Form */}
                <div className="flex flex-col justify-center px-10 py-12">
                    <div className='relative flex justify-center mb-4'>
                        <Logo />
                    </div>

                    <h1 className="text-2xl font-semibold py-2">
                        ডাক্তার সাইন আপ
                    </h1>

                    <form onSubmit={handleRegister} className="mt-8 space-y-4">
                        {/* Name */}
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

                        {/* Email */}
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

                        {/* Password */}
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

                        {/* Specialization */}
                        {/* <div>
                            <input
                                type="text"
                                placeholder="বিশেষায়িত ক্ষেত্র (যেমন: সাইকিয়াট্রিস্ট)"
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.specialization ? 'border-red-400' : 'border-gray-300'}`}
                            />
                            {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>}
                        </div> */}

                        {/* Registration Number */}
                        {/* <div>
                            <input
                                type="text"
                                placeholder="রেজিস্ট্রেশন নম্বর দিন"
                                value={regNumber}
                                onChange={(e) => setRegNumber(e.target.value)}
                                className={`rounded-lg py-2 px-4 w-full border-2 ${errors.regNumber ? 'border-red-400' : 'border-gray-300'}`}
                            />
                            {errors.regNumber && <p className="text-red-500 text-sm mt-1">{errors.regNumber}</p>}
                        </div> */}

                        {/* Buttons */}
                        <div className='space-y-4 mt-6'>
                            <Button text="সাইন আপ করুন" extraClass="w-full" />
                            <OutlinedButton
                                text="গুগল দিয়ে সাইন আপ করুন"
                                extraClass="w-full"
                                icon={<FcGoogle className='size-6' />}
                            />
                        </div>

                        {/* Patient Sign Up Button */}
                        <div className="mt-4">
                            <Link to="/patientRegister">
                                <OutlinedButton
                                    text="রোগী সাইন আপ করুন"
                                    extraClass="w-full border-[#76a4f1] text-[#1998df] hover:bg-[#e5f3ff]"
                                />
                            </Link>
                        </div>

                        <p className="text-sm text-center mt-4">
                            অ্যাকাউন্ট আছে?{" "}
                            <Link to='/doctorLogin'>
                                <span className="text-[#1998df] hover:underline">
                                    লগইন করুন
                                </span>
                            </Link>
                        </p>
                    </form>
                </div>

                {/* Right Side Animation */}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-[#c3e1f1] to-[#76a4f1] p-6">
                    <Lottie animationData={Doctor} />
                </div>
            </div>
        </div>
    );
};

export default DoctorRegister;

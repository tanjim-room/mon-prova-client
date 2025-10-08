import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/buttons/Button';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import Yoga from '../../../public/yoga black.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const PatientRegister = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="min-h-[850px] flex items-center justify-center bg-gray-100 rounded-lg">

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-[900px] grid grid-cols-1 md:grid-cols-2">
                {/* Left Side Patient Login Form */}
                <div className="flex flex-col justify-center px-10 py-12">

                    {/* MonProva Logo */}
                    <div className='relative flex justify-center'>
                        <Logo></Logo>
                    </div>

                    <h1 className="text-2xl font-semibold py-4">
                        সাইন আপ করুন
                    </h1>

                    {/*Sign Up Form */}
                    <div className="mt-8 space-y-4">
                        <input
                            type="textl"
                            placeholder="আপনার নাম দিন"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg py-2 px-4 w-full border-2"
                        />

                        <input
                            type="email"
                            placeholder="আপনার ইমেইল দিন"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-lg py-2 px-4 w-full border-2"
                        />

                        <input
                            type="password"
                            placeholder="আপনার পাসওয়ার্ড দিন"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-lg py-2 px-4 w-full border-2"
                        />

                        {/* <div className="flex items-center justify-between text-sm">

                            <a href="#" className="text-[#1998df] hover:underline">
                                পাসওয়ার্ড ভুলে গেছেন?
                            </a>
                        </div> */}

                        {/* Login Button */}
                        <div className='space-y-4'>
                            <Button text="সাইন আপ করুন"></Button>
                            <OutlinedButton text="গুগল দিয়ে সাইন আপ করুন" extraClass="w-full" icon={<FcGoogle className='size-6'></FcGoogle>}></OutlinedButton>
                        </div>

                        <p className="text-sm text-center mt-4">
                            অ্যাকাউন্ট আছে?{" "}
                            <Link to='/patientLogin'>
                                <span  className="text-[#1998df] hover:underline">
                                    লগইন করুন
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Side Animation  */}
                <div className="hidden md:flex items-center justify-center bg-gradient-to-tr from-[#c3e1f1] to-[#76a4f1] p-6">
                    <Lottie
                        animationData={Yoga}
                    ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default PatientRegister;
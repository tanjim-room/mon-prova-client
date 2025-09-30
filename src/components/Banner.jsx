import React from 'react';
import BannerImg from '../assets/Banner.svg';
import Logo from './Logo';
import Headline from './Headline';
import Button from './Button';
import OutlinedButton from './OutlinedButton';
import { NavLink, Link } from 'react-router-dom';


/* Banner of Home Page */
const Banner = () => {
    return (
        <div className='p-4 border-2 border-gray-500 rounded-lg'>


            <div
                className="hero min-h-[800px] rounded-lg"
                style={{
                    backgroundImage:
                        `url(${BannerImg})`,   /* Background Image in Banner */
                }}
            >

                {/* Floating Content in Banner Image */}
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="py-6 px-6">

                        {/* Logo of MonProva */}
                        <Logo></Logo>
                    </div>

                </div>

                {/* Content Below Logo */}
                <div className='text-left pt-20 px-12  md:w-1/2'>

                    {/* Headline in Banner Image */}

                    <Headline></Headline>

                    {/* Sub Title in Banner Image  */}
                    <p className='pt-6 text-xl text-gray-700'>ডিপ্রেশন, উদ্বেগ বা চাপ মোকাবিলায় এখনই খুঁজুন সঠিক সহায়তা। সহজে ডাক্তার বুক করুন, নিজের অগ্রগতি ট্র্যাক করুন, এবং মানসিক সুস্থতার পথে এগিয়ে যান।</p>

                    {/* Button of Start Login Both Patient and Doctor */}
                    <div className='flex gap-8 mt-8'>
                        <Link to='/patientLogin'>
                            <Button text="রোগী হিসেবে প্রবেশ করুন"></Button>
                        </Link>
                        <Link to='/doctorLogin'>
                            <OutlinedButton text="ডাক্তার হিসেবে প্রবেশ করুন"></OutlinedButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
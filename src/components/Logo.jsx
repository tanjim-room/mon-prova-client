import React from 'react';
import MonProvaLogo from '../assets/MonProvaLogo.png';
const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src={MonProvaLogo} className='w-16' alt="" />
            <h3 className='text-5xl font-semibold text-[#1998df]'>মনপ্রভা</h3>
        </div>
    );
};

export default Logo;
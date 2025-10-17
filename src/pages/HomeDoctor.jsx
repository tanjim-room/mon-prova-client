import React from 'react';
import Logo from '../components/Logo';

const HomeDoctor = () => {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden rounded-md shadow-md border">
        <div>
            <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>মনপ্রভায় আপনাকে স্বাগতম</h2>
        </div>
      <div>
        <img src="https://i.ibb.co.com/fR5pBsr/Doctor-amico.png" alt="" />
      </div>
    </div>
  );
};

export default HomeDoctor;

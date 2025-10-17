import React from 'react';
import Logo from '../components/Logo';

const HomePatient = () => {
  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden rounded-md shadow-md border">
      {/* Background image */}
      <img
        src="https://i.ibb.co.com/Lyv14Wz/emma-simpson-m-NGaa-Le-WEp0-unsplash.jpg"
        alt="Mental Health"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* Shadow/overlay layer */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-25"></div>

      {/* Text content */}
      <div className="absolute text-center text-white mt-24">
        <div className='w-full flex justify-center items-center my-8 border bg-black bg-opacity-25 p-4 rounded-md'>
            <Logo></Logo>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-loose">
          আপনার মানসিক স্বাস্থ্যের বিশ্বস্ত সঙ্গী
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          মানসিক স্বাস্থ্য ভালো রাখলে জীবন হয় আরও ভারসাম্যপূর্ণ ও সুখময়। 
          নিজের অনুভূতি, চাপ, ও মানসিক ক্লান্তি বুঝে নেওয়া এবং যত্ন নেওয়া 
          আমাদের দৈনন্দিন জীবনের অপরিহার্য অংশ।
        </p>
      </div>
    </div>
  );
};

export default HomePatient;

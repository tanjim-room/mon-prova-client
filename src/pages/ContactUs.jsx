import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className='bg-[#a4d5ff]'>
      <section className="bg-[#a4d5ff] p-4 min-h-screen pb-8">
        <div>
          <h1 className='text-2xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
            যোগাযোগ করুন
          </h1>
          <p className="font-semibold text-lg text-gray-700 text-center">
            আমরা সাহায্য করার জন্য এখানে আছি — যে কোনও প্রশ্নের জন্য আমাদের কাছে আসুন
          </p>
        </div>

        <div className="mx-auto mt-8  p-8">
          <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">যোগাযোগের বিস্তারিত</h2>
          <p className="text-sm text-center text-gray-500 mb-6">অতীব জরুরি জন্য ২৪/৭ সহায়তা উপলব্ধ</p>

          <div className=" flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center  gap-3">
              <div className="w-20 h-20 bg-indigo-50 rounded flex items-center justify-center text-indigo-600">
                <HiOutlineMail size={30} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">ইমেইল</div>
                <div className="text-sm  font-semibold">support@monprova.com</div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center  gap-3">
              <div className="w-20 h-20 bg-emerald-50 rounded flex items-center justify-center text-emerald-600">
                <IoCallOutline size={30} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">জরুরি সহায়তা</div>
                <div className="text-sm font-semibold">01740790455</div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center  gap-3">
              <div className="w-20 h-20 bg-sky-50 rounded flex items-center justify-center text-sky-600">
                <BsClock size={30} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700">অফিস সময়</div>
                <div className="text-sm font-semibold">Mon-Fri: 9 AM - 7 PM (GMT)</div>
              </div>
            </div>
          </div>
        </div>
         <section className="mt-10 bg-white p-8 rounded-md shadow-md w-1/2 mx-auto">
          <h3 className="text-lg font-semibold mb-6 text-gray-800 text-center">মেসেজ পাঠান</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 text-left">নাম</label>
              <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="আপনার নাম লিখুন" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 text-left">ইমেইল</label>
              <input className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="ইমেইল লিখুন" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 text-left">বার্তা</label>
              <textarea className="w-full border rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="আপনার বার্তা লিখুন" />
            </div>

            <div className="text-center">
              <button className="w-full bg-[#007AF5] text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition">
                পাঠান
              </button>
            </div>
          </div>
        </section>
      </section>

      
    </div>
  );
};

export default ContactUs;

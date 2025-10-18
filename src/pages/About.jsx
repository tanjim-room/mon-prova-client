import React from 'react';

const About = () => {
  return (
    <div className='bg-[#77befc] p-4 min-h-screen'>
      <section className="">
        <div className="">
          <h1 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>আমাদের সম্পর্কে</h1>
          <p className="font-bold text-lg">প্রযুক্তি ও সহমর্মিতার মাধ্যমে মানসিক স্বাস্থ্য সহায়তায় নতুন মাত্রা আনছি</p>
         
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="two-cards">
          <div className="card-panel h-[200px]">
            <h2 className="text-xl font-semibold mb-3">আমাদের মিশন</h2>
            <p>আমরা বিশ্বাস করি প্রত্যেকের জন্য মানসিক সহায়তা সহজলভ্য হওয়া দরকার। আমাদের প্ল্যাটফর্ম ক্লিনিক্যাল অভিজ্ঞতা এবং প্রযুক্তিকে মিলিয়ে সামগ্রিক মানসিক সুস্থতায় সহায়তা করে।</p>
          </div>

          <div className="card-panel h-[200px]">
            <h2 className="text-xl font-semibold mb-3">আমাদের টিম</h2>
            <p>একটি বৈচিত্র্যময় দল — ক্লিনিশিয়ান, ডিজাইনার এবং ইঞ্জিনিয়াররা মিলে মানুষের জন্য প্রাণবন্ত এবং বিশ্বাসযোগ্য সেবা তৈরি করে।</p>
          </div>
        </div>

        
      </main>
    </div>
  );
};

export default About;

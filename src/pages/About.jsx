import React from 'react';

const About = () => {
  return (
    <div>
      <section className="page-hero">
        <div className="hero-inner">
          <h1>আমাদের সম্পর্কে</h1>
          <p className="lead">প্রযুক্তি ও সহমর্মিতার মাধ্যমে মানসিক স্বাস্থ্য সহায়তায় নতুন মাত্রা আনছি</p>
          <a href="/contact" className="btn-gradient">যোগাযোগ করুন</a>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="two-cards">
          <div className="card-panel">
            <h2 className="text-xl font-semibold mb-3">আমাদের মিশন</h2>
            <p>আমরা বিশ্বাস করি প্রত্যেকের জন্য মানসিক সহায়তা সহজলভ্য হওয়া দরকার। আমাদের প্ল্যাটফর্ম ক্লিনিক্যাল অভিজ্ঞতা এবং প্রযুক্তিকে মিলিয়ে সামগ্রিক মানসিক সুস্থতায় সহায়তা করে।</p>
          </div>

          <div className="card-panel">
            <h2 className="text-xl font-semibold mb-3">আমাদের টিম</h2>
            <p>একটি বৈচিত্র্যময় দল — ক্লিনিশিয়ান, ডিজাইনার এবং ইঞ্জিনিয়াররা মিলে মানুষের জন্য প্রাণবন্ত এবং বিশ্বাসযোগ্য সেবা তৈরি করে।</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-8">এই কনটেন্ট ডেমো উদ্দেশ্যে আছে। বাস্তব ব্যবহারে আমরা দলের বায়ো, ভিজ্যুয়াল এবং নিরাপত্তা তথ্য যোগ করব।</p>
      </main>
    </div>
  );
};

export default About;

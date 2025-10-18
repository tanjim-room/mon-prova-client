import React from "react";
import { useParams, Link } from "react-router-dom";

import { IoArrowBackSharp } from "react-icons/io5";

// blog data
const blogData = [
  {
    slug: "reduce-stress",
    title: "মানসিক চাপ কমানোর ১০টি উপায়",
    content: `
    মানসিক চাপ কমানো খুবই গুরুত্বপূর্ণ। এখানে ১০টি প্রায়োগিক উপায় দেওয়া হলো:
    ১. দৈনন্দিন ধ্যান
    ২. পর্যাপ্ত ঘুম
    ৩. ব্যায়াম
    ৪. প্রিয় কাজ করা
    ৫. বন্ধু ও পরিবার সাথে সময় কাটানো
    ৬. স্বাস্থ্যকর খাবার
    ৭. শ্বাস-প্রশ্বাসের ব্যায়াম
    ৮. ইতিবাচক চিন্তাভাবনা
    ৯. ডিজিটাল ডিটক্স
    ১০. প্রয়োজন হলে থেরাপিস্টের সাথে কথা বলা
    `,
    thumbnail: "https://i.ibb.co.com/pjfhybWm/1690718202674.jpg",
  },
  {
    slug: "understanding-depression",
    title: "ডিপ্রেশন বোঝা",
    content: `
    ডিপ্রেশন একটি সাধারণ মানসিক স্বাস্থ্য সমস্যা। লক্ষণসমূহ:
    - দীর্ঘ সময়ের জন্য দুঃখ বা শূন্যতা অনুভব করা
    - আগ্রহ হারানো
    - ঘুম ও খাওয়া প্যাটার্নে পরিবর্তন
    - ক্লান্তি
    - আত্মমর্যাদা কমে যাওয়া
    সমাধান:
    - বন্ধু বা পরিবারকে খুলে বলা
    - নিয়মিত ব্যায়াম
    - প্রয়োজনে থেরাপিস্ট বা চিকিৎসকের সাহায্য নেওয়া
    `,
    thumbnail: "https://i.ibb.co.com/vxRpRk24/181031-depression-mn-1030.jpg",
  },
  {
    slug: "mindfulness-practice",
    title: "মাইন্ডফুলনেস প্র্যাকটিস",
    content: `
    মাইন্ডফুলনেস মানে সচেতনভাবে বর্তমান মুহূর্তে থাকা।  
    প্রাকটিসের মাধ্যমে আপনি:
    - মানসিক শান্তি পাবেন
    - স্ট্রেস কমবে
    - ফোকাস বাড়বে
    কিছু সহজ স্টেপ:
    ১. ধ্যান
    ২. সচেতন শ্বাস-প্রশ্বাস
    ৩. দৈনন্দিন কাজের প্রতি পূর্ণ মনোযোগ
    `,
    thumbnail: "https://i.ibb.co.com/WN8Lbcfg/b17db71e-03ff-427a-a27e-64aea28c45b016207267438013.jpg",
  },
  {
    slug: "reduce-anxiety",
    title: "অ্যানজাইটি কমানোর ৫টি সহজ উপায়",
    content: `
    উদ্বেগ বা অ্যানজাইটি কমানোর জন্য কিছু কার্যকর উপায়:
    ১. নিয়মিত ব্যায়াম
    ২. পর্যাপ্ত ঘুম
    ৩. ধ্যান ও শিথিলকরণ
    ৪. ইতিবাচক চিন্তাভাবনা
    ৫. বন্ধু ও পরিবারের সাথে খোলামেলা কথা বলা
    `,
    thumbnail: "https://i.ibb.co.com/p6tXR9CB/5e666bf9a9f40c226b0a4de4.webp",
  },
];

const BlogPage = () => {
  const { slug } = useParams();

  
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="bg-[#EFF7FE] p-4">

        <div className="min-h-[850px] p-16 bg-white rounded-md ">
          <p className="text-gray-500 text-lg">কোনো ব্লগ পাওয়া যায়নি।</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#EFF7FE] p-4">

      <div className="min-h-[850px] p-8 bg-white rounded-md mx-auto">
       <div className="my-4">
         <button className="border-2 rounded-md flex justify-center items-center hover:bg-[#E8594A] hover:text-white transition">
          <Link
            to="/patientDashboard/resources"
            className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md "
          >
            <div className='flex gap-4 items-center'>
              <span className="text-xl"><IoArrowBackSharp></IoArrowBackSharp></span>
              <span className='text-center text-lg'>ফিরে যান</span>
            </div>
          </Link>
        </button>
       </div>
        <div className="mb-8 ">
          <img src={blog.thumbnail} alt="" className="h-[400px] w-full object-cover rounded-md" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-[#1998df] text-left">{blog.title}</h1>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-6 text-left">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import  BlogCard from "../../components/cards/BlogCard"
import  VideoCard from "../../components/cards/VideoCard"
import Logo from "../../components/Logo";

// Resources Data
const resources = {
  videos: [
    {
      id: 1,
      title: "উদ্বেগ মোকাবিলা করা",
      description: "দৈনন্দিন উদ্বেগ কার্যকরভাবে মোকাবিলা করার কৌশল।",
      url: "https://www.youtube.com/embed/MvSExWXlJuQ?si=_LZIvtdnqMl3ByTj",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      id: 2,
      title: "ধ্যান ও মানসিক শান্তি",
      description: "ফোকাস এবং মানসিক শান্তি উন্নত করার জন্য গাইডেড ধ্যান।",
      url: "https://www.youtube.com/embed/Hs-HL-Lp0i0?si=iKahzDnk5fqhLoXw",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      id: 3,
      title: "ঘুম এবং মানসিক স্বাস্থ্য",
      description: "ভালো ঘুম মানসিক শান্তি ও স্থিতিশীলতার জন্য গুরুত্বপূর্ণ।",
      url: "https://www.youtube.com/embed/mwFlFYz9cvY?si=An5tlmkl5nxtryvs",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg",
    },
    {
      id: 4,
      title: "স্ট্রেস রিলিফ ব্যায়াম",
      description: "দৈনন্দিন ব্যায়ামের মাধ্যমে স্ট্রেস কমানো।",
      url: "https://www.youtube.com/embed/jrpB5kxKYbg?si=J6Qvo5m4QDgdOCfK",
      thumbnail: "https://www.youtube.com/embed/jrpB5kxKYbg?si=J6Qvo5m4QDgdOCfK",
    },
  ],
  blogs: [
    {
      id: 1,
      title: "মানসিক চাপ কমানোর ১০টি উপায়",
      description: "প্রায়োগিক টিপস যা মানসিক সুস্থতা উন্নত করে।",
      slug: "reduce-stress", 
      thumbnail: "https://i.ibb.co.com/pjfhybWm/1690718202674.jpg",
    },
    {
      id: 2,
      title: "ডিপ্রেশন বোঝা",
      description: "ডিপ্রেশন চেনা এবং মোকাবেলার একটি বিস্তারিত গাইড।",
      slug: "understanding-depression",
      thumbnail: "https://i.ibb.co.com/vxRpRk24/181031-depression-mn-1030.jpg",
    },
    {
      id: 3,
      title: "মাইন্ডফুলনেস প্র্যাকটিস",
      description: "মানসিক শান্তি ও সচেতনতা বাড়ানোর জন্য মাইন্ডফুলনেস।",
      slug: "mindfulness-practice",
      thumbnail: "https://i.ibb.co.com/WN8Lbcfg/b17db71e-03ff-427a-a27e-64aea28c45b016207267438013.jpg",
    },
    {
      id: 4,
      title: "অ্যানজাইটি কমানোর ৫টি সহজ উপায়",
      description: "দৈনন্দিন জীবনে উদ্বেগ কমানোর কার্যকর পদ্ধতি।",
      slug: "reduce-anxiety",
      thumbnail: "https://i.ibb.co.com/p6tXR9CB/5e666bf9a9f40c226b0a4de4.webp",
    },
  ],
};

const Resources = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const renderResources = () => {
    const list = resources[activeTab];
    if (list.length === 0)
      return <p className="text-gray-500">কোনো {activeTab === "videos" ? "ভিডিও" : "ব্লগ"} পাওয়া যায়নি।</p>;

     return list.map((item) => (
      activeTab === "videos" ? (
        <div>
            <Link
          key={item.id}
          to={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
         <div className="space-y-4">
             <VideoCard item={item}></VideoCard>
         </div>
        </Link>
        </div>
      ) : (
        
            <div className="space-y-4">
                <Link
          key={item.id}
          to={`/blog/${item.slug}`}
          className="space-y-4"
        >
          <BlogCard item={item} className="mb-4"></BlogCard>
        </Link>
            </div>
   
      )
    ));

   
  };

  return (
    <div className="bg-[#EFF7FE] p-4">
  

      <div className="min-h-[850px] p-8 bg-white rounded-lg">
        {/* <div className='w-full flex justify-center items-center my-8'>
            <Logo></Logo>
        </div> */}
          <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
            রিসোর্স সমুহ
          </h2>
        {/* Video Blog Tab */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "videos"
                ? "bg-[#007AF5] text-white"
                : "bg-white text-[#007AF5] border border-[#007AF5]"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            ভিডিও
          </button>
          <button
            className={`px-8 py-2 rounded-lg font-semibold ${
              activeTab === "blogs"
                ? "bg-[#007AF5] text-white"
                : "border bg-white text-[#007AF5]  border-[#007AF5]"
            }`}
            onClick={() => setActiveTab("blogs")}
          >
            ব্লগ
          </button>
        </div>

        {/* Resource List */}
        <div className="space-y-4">{renderResources()}</div>
      </div>
    </div>
  );
};

export default Resources;

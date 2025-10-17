import React from 'react';
import Button from '../buttons/Button';
import { BiDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
const BlogCard = ({item}) => {
    const {title, description, slug, thumbnail} = item
    return (
        <div className="flex justify-between  bg-[#EFF7FE] p-8 rounded-md gap-8 border">
            <div className="w-1/2 border">
                <img src={thumbnail} alt="" className="rounded-md h-[300px] w-full object-cover" />
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-8">
                <div className="text-center">
                <h2 className="text-2xl font-semibold mt-4">{title}</h2>
                <p className="text-md mt-4">{description}</p>
                </div>
                <div className="">
                   <button className="w-full border-2 rounded-md flex justify-center items-center text-[#007AF5] hover:bg-[#E8594A] hover:text-white transition">
                        <Link
                          to={`/patientDashboard/blog/${slug}`}
                          className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md "
                        >
                          <div className='flex gap-4 items-center'>

                             <span className="text-xl"><BiDetail></BiDetail></span>
                            <span className='text-center text-lg'>বিস্তারিত জানুন</span>
                          </div>
                        </Link>
                      </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
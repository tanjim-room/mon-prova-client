import React from 'react';
import Button from '../buttons/Button';
import { Link } from 'react-router-dom';
import { BiDetail } from "react-icons/bi";
const VideoCard = ({item}) => {
     const {title, description, slug, thumbnail, url} = item
    return (
        <div className="flex justify-between gap-8  p-8 rounded-md bg-[#EFF7FE] border">
            <div className="border">
            <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="rounded-md"></iframe>
               
            </div>
            <div className="w-full flex flex-col justify-center gap-8">
                <div className="text-center">
                <h2 className="text-2xl font-semibold mt-4">{title}</h2>
                <p className="text-md mt-4">{description}</p>
                </div>
                <div className="">
                   <button className="w-full border-2 rounded-md flex justify-center items-center text-[#007AF5] hover:bg-[#E8594A] hover:text-white transition">
                        <Link
                          to={``}
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

export default VideoCard;


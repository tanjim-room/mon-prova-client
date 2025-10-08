import React from 'react';
import Button from '../buttons/Button';
const BlogCard = ({item}) => {
    const {title, description, slug, thumbnail} = item
    return (
        <div className="flex justify-between gap-8 bg-white p-8 rounded-lg">
            <div className="w-1/2">
                <img src={thumbnail} alt="" className="rounded-lg h-[300px] w-full object-cover" />
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-8">
                <div className="text-center">
                <h2 className="text-2xl font-semibold mt-4">{title}</h2>
                <p className="text-md mt-4">{description}</p>
                </div>
                <div className="">
                    <Button text="বিস্তারিত দেখুন"></Button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
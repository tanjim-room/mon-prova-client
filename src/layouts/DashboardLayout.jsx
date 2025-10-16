import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
    FaClipboardList,
    FaCalendarAlt,
    FaUserMd,
    FaFilePrescription,
    FaBookOpen,
    FaGamepad,
    FaHandsHelping,
    FaUser,
} from "react-icons/fa";

const menuItems = [
    { title: "অ্যাসেসমেন্ট", link: "/patientDashboard/assessment", icon: <FaClipboardList /> },
    { title: "অ্যাপয়েন্টমেন্ট", link: "/patientDashboard/appointment", icon: <FaCalendarAlt /> },
    { title: "ডাক্তার", link: "/doctors", icon: <FaUserMd /> },
    { title: "প্রেসক্রিপশন", link: "/prescription", icon: <FaFilePrescription /> },
    { title: "রিসোর্স", link: "/resources", icon: <FaBookOpen /> },
    { title: "গেমস", link: "/games", icon: <FaGamepad /> },
    { title: "সাহায্য", link: "/patientHelp", icon: <FaHandsHelping /> },
    { title: "প্রোফাইল", link: "/patientProfile", icon: <FaUser /> },
];

const DashboardLayout = () => {
    const initialProfile = JSON.parse(localStorage.getItem("profile")) || {
        fullName: 'রাকিব হোসেন',
        age: '২৩',
        gender: 'পুরুষ',
        phone: '০১৭১২৩৪৫৬৭৮',
        email: 'tanjim@gmail.com',
        bloodGroup: 'A+',
        address: 'নোয়াখালী, বাংলাদেশ',
        emergencyContact: '০১৮৭৬৫৪৩২১০',
        profession: 'সফটওয়্যার ইঞ্জিনিয়ার',
        profilePicture: 'https://i.ibb.co.com/s0XshfX/Untitled-design.png'
    };
    const [profile, setProfile] = useState(initialProfile);
    const [isEditable, setIsEditable] = useState(false);
    const { fullName } = profile;




    useEffect(() => {
        // Fetching profile data from localStorage when component mounts
        const savedProfile = JSON.parse(localStorage.getItem("profile"));
        if (savedProfile) {
            setProfile(savedProfile);
        }
    }, []);

    return (
        <div className="grid grid-cols-6 min-h-screen">
            {/* Left Menu */}

            <aside className="col-span-1 bg-white shadow-lg p-6">
                <div className="mb-12 bg-[#EFF7FE] rounded-md py-4 px-4">
                    <h2 className="text-xl font-bold text-[#E8594A] font-nato text-left">{fullName}</h2>
                    <p className="text-left text-md">রোগীর ড্যাশবোর্ড</p>
                </div>
                <ul className="space-y-8 font-nato ">
                    {menuItems.map((item, index) => (
                        <li key={index} className="border rounded-md">
                            <button className="w-full">
                                <Link
                                    to={item.link}
                                    className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md hover:bg-[#E8594A] hover:text-white transition"
                                >
                                    <span className="text-xl text-">{item.icon}</span>
                                    <span>{item.title}</span>
                                </Link>
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Right Content */}
            <main className="col-span-5 p-8 bg-[#EFF7FE] backdrop-blur-sm">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;

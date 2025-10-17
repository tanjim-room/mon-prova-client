import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaClipboardList,
  FaCalendarAlt,
  FaUserMd,
  FaFilePrescription,
  FaBookOpen,
  FaGamepad,
  FaHandsHelping,
  FaUser,
  FaHome,
} from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const menuItems = [
  { title: "হোম", link: "/patientDashboard", icon: <FaHome /> },
  { title: "অ্যাসেসমেন্ট", link: "/patientDashboard/assessment", icon: <FaClipboardList /> },
  { title: "অ্যাপয়েন্টমেন্ট", link: "/patientDashboard/appointment", icon: <FaCalendarAlt /> },
  { title: "ডাক্তার", link: "/patientDashboard/doctors", icon: <FaUserMd /> },
  { title: "প্রেসক্রিপশন", link: "/patientDashboard/prescription", icon: <FaFilePrescription /> },
  { title: "রিসোর্স", link: "/patientDashboard/resources", icon: <FaBookOpen /> },
  { title: "গেমস", link: "/patientDashboard/games", icon: <FaGamepad /> },
  { title: "সাহায্য", link: "/patientDashboard/patientHelp", icon: <FaHandsHelping /> },
  { title: "প্রোফাইল", link: "/patientDashboard/patientProfile", icon: <FaUser /> },
  { title: "লগ আউট", link: "/", icon: <RiLogoutCircleRLine /> },
];

const DashboardLayout = () => {
  const initialProfile = JSON.parse(localStorage.getItem("profile")) || {
    fullName: "রাকিব হোসেন",
    
    age: "২৩",
    gender: "পুরুষ",
    phone: "০১৭১২৩৪৫৬৭৮",
    email: "tanjim@gmail.com",
    bloodGroup: "A+",
    address: "নোয়াখালী, বাংলাদেশ",
    emergencyContact: "০১৮৭৬৫৪৩২১০",
    profession: "সফটওয়্যার ইঞ্জিনিয়ার",
    profilePicture: "https://i.ibb.co.com/s0XshfX/Untitled-design.png",
  };

  const [profile, setProfile] = useState(initialProfile);
  const { fullName } = profile;

  const location = useLocation(); // 🔑 hook to detect current path

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  return (
    <div className="grid grid-cols-6">
      {/* Sidebar */}
      <aside className="col-span-1 bg-white shadow-lg p-6">
        <div className="mb-12 bg-[#EFF7FE] rounded-md py-4 px-4">
          <h2 className="text-xl font-bold text-[#E8594A] font-nato text-left">{fullName}</h2>
          <p className="text-left text-md">রোগীর ড্যাশবোর্ড</p>
        </div>

        <ul className="space-y-4 font-nato">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.link; // check if this menu is active
            return (
              <li key={index} className="border rounded-md">
                <Link
                  to={item.link}
                  className={`flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md transition ${
                    isActive
                      ? "bg-[#E8594A] text-white"
                      : "hover:bg-[#E8594A] hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="col-span-5 p-8 bg-[#EFF7FE] backdrop-blur-sm">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

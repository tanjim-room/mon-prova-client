import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaHandsHelping,
  FaUser,
  FaClock,
} from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const doctorMenuItems = [
  { title: "হোম", link: "/doctorDashboard", icon: <FaHome /> },
  { title: "অ্যাপয়েন্টমেন্ট", link: "/doctorDashboard/appointmentDoctor", icon: <FaCalendarAlt /> },
  { title: "শিডিউল", link: "/doctorDashboard/schedule", icon: <FaClock /> },
  { title: "ইনকাম", link: "/doctorDashboard/income", icon: <FaMoneyBillWave /> },
  { title: "সাহায্য", link: "/doctorDashboard/doctorHelp", icon: <FaHandsHelping /> },
  { title: "প্রোফাইল", link: "/doctorDashboard/doctorProfile", icon: <FaUser /> },
  { title: "লগ আউট", link: "/", icon: <RiLogoutCircleRLine /> },
];

const DashboardLayoutDoctor = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const doctorProfile = JSON.parse(localStorage.getItem("doctorProfile")) || {
    fullName: "ডা. মাহমুদ হাসান",
    specialization: "মনোরোগ বিশেষজ্ঞ",
    phone: "০১৭১২৩৪৫৬৭৮",
    email: "doctor@gmail.com",
    chamber: "নোয়াখালী জেনারেল হাসপাতাল",
    profilePicture: "https://i.ibb.co.com/s0XshfX/Untitled-design.png",
  };

  const { fullName, profilePicture } = doctorProfile;

  const handleLogout = () => {
    localStorage.removeItem("doctorProfile");
    navigate("/"); // redirect to login page
  };

  return (
    <div className="grid grid-cols-6 min-h-screen">
      {/* Sidebar */}
      <aside className="col-span-1 bg-white shadow-lg p-6 flex flex-col justify-between">
        {/* Profile Section */}
        <div>
          <div className="mb-12 bg-[#EFF7FE] rounded-md py-4 px-4 text-center">
            <img
              src={profilePicture}
              alt="Doctor"
              className="w-20 h-20 mx-auto rounded-full mb-3"
            />
            <h2 className="text-xl font-bold text-[#E8594A] font-nato">{fullName}</h2>
            <p className="text-md">ডাক্তারের ড্যাশবোর্ড</p>
          </div>

          {/* Menu */}
          <ul className="space-y-6 font-nato">
            {doctorMenuItems.map((item, index) => {
              const isActive = location.pathname === item.link;
              // Handle logout separately
              if (item.title === "লগ আউট") {
                return (
                  <li key={index} className="border rounded-md">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-4 px-4 py-3 text-xl font-semibold rounded-md w-full bg-[#E8594A] text-white hover:bg-red-600 transition"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.title}</span>
                    </button>
                  </li>
                );
              }

              return (
                <li key={index} className="border rounded-md">
                  <Link
                    to={item.link}
                    className={`flex items-center gap-4 px-4 py-3 text-xl font-semibold rounded-md transition ${
                      isActive ? "bg-[#E8594A] text-white" : "hover:bg-[#E8594A] hover:text-white"
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-span-5 p-8 bg-[#EFF7FE] backdrop-blur-sm">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayoutDoctor;

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

  const doctorProfile =
    JSON.parse(localStorage.getItem("doctorProfile")) || {
      fullName: "ডা. মাহমুদ হাসান",
      specialization: "মনোরোগ বিশেষজ্ঞ",
      phone: "০১৭১২৩৪৫৬৭৮",
      email: "doctor@gmail.com",
      chamber: "নোয়াখালী জেনারেল হাসপাতাল",
      profilePicture: "https://i.ibb.co.com/s0XshfX/Untitled-design.png",
    };

  const { fullName } = doctorProfile;

  const handleLogout = () => {
    localStorage.removeItem("doctorProfile");
    navigate("/");
  };

  return (
    <div className="h-screen flex font-nato">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col justify-between overflow-y-auto">
        {/* Profile Section */}
        <div>
          <div className="mb-12 bg-[#EFF7FE] rounded-md py-4 px-4 text-center border border-blue-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#E8594A]">{fullName}</h2>
            <p className="text-md text-gray-700">ডাক্তারের ড্যাশবোর্ড</p>
          </div>

          {/* Menu List */}
          <ul className="space-y-6">
            {doctorMenuItems.map((item, index) => {
              const isActive =
                item.title !== "লগ আউট" && location.pathname === item.link;

              if (item.title === "লগ আউট") {
                return (
                  <li key={index} className="border rounded-md">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-4 px-4 py-3 text-xl font-semibold rounded-md w-full text-gray-900 hover:bg-[#E8594A] hover:text-white transition"
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
                      isActive
                        ? "bg-[#E8594A] text-white"
                        : "hover:bg-[#E8594A] hover:text-white"
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

        {/* Footer section */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>© Mon Prova 2025</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8 bg-[#EFF7FE] backdrop-blur-sm overflow-y-auto h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayoutDoctor;

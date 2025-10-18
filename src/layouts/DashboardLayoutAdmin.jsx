import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  FaUserInjured, 
  FaUserMd, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaBookOpen, 
  FaUpload, 
  FaHandsHelping, 
  FaMoneyCheckAlt, 
  FaSignOutAlt 
} from "react-icons/fa";

const adminMenuItems = [
  { title: "রোগীর তথ্য", link: "/adminDashboard/patientInfo", icon: <FaUserInjured /> },
  { title: "ডাক্তারের তথ্য", link: "/adminDashboard/doctorInfo", icon: <FaUserMd /> },
  { title: "অ্যাপয়েন্টমেন্ট তথ্য", link: "/adminDashboard/appointmentInfo", icon: <FaCalendarAlt /> },
  { title: "ভেরিফাই রিকুয়েস্ট", link: "/adminDashboard/verification", icon: <FaCheckCircle /> },
  { title: "রিসোর্স", link: "/adminDashboard/resources", icon: <FaBookOpen /> },
  { title: "রিসোর্স আপলোড", link: "/adminDashboard/uploadResource", icon: <FaUpload /> },
  { title: "হেল্প সেকশন", link: "/adminDashboard/help", icon: <FaHandsHelping /> },
  { title: "পেআউট", link: "/adminDashboard/payout", icon: <FaMoneyCheckAlt /> },
  { title: "লগ আউট", link: "/", icon: <FaSignOutAlt /> },
];

const DashboardLayoutAdmin = () => {
  const location = useLocation();
  const adminName = "অ্যাডমিন";

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-1/5 bg-white shadow-lg p-6 overflow-y-auto">
        <div className="mb-12 bg-[#EFF7FE] rounded-md py-4 px-4">
          <h2 className="text-xl font-bold text-[#E8594A] font-nato text-left">
            {adminName}
          </h2>
          <p className="text-left text-md">অ্যাডমিন ড্যাশবোর্ড</p>
        </div>

        <ul className="space-y-4 font-nato">
          {adminMenuItems.map((item, index) => {
            const isActive = location.pathname === item.link;
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
                  <span className="text-lg">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="ml-[20%] flex-1 p-8 bg-[#EFF7FE] overflow-y-auto h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayoutAdmin;

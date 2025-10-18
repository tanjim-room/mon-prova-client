import React from "react";

const menuItems = [
  { title: "অ্যাসেসমেন্ট", link: "/assessment" },
  { title: "অ্যাপয়েন্টমেন্ট", link: "/appointment" },
  { title: "ডাক্তার", link: "/doctors" },
  { title: "প্রেসক্রিপশন", link: "/prescription" },
  { title: "রিসোর্স", link: "/resources" },
  { title: "গেমস", link: "/games" },
  { title: "সাহায্য", link: "/patientHelp" },
  { title: "প্রোফাইল", link: "/patientProfile" },
];

const features = [
  {
    id: 1,
    title: "অ্যাসেসমেন্ট",
    icon: "https://i.ibb.co.com/7N1zxqWg/checklist.png",
    description: "মানসিক অবস্থার অ্যাসেসমেন্ট নিন",
    link: "/assessment",
    color: "#76a4f1",
  },
  {
    id: 2,
    title: "অ্যাপয়েন্টমেন্ট",
    icon: "https://i.ibb.co.com/21N7RwmH/appointment.png",
    description: "আপনার অ্যাপয়েন্টমেন্টগুলো দেখুন",
    link: "/appointment",
    color: "#1998df",
  },
  {
    id: 3,
    title: "ডাক্তার",
    icon: "https://i.ibb.co.com/F4qCrYps/doctor-visit.png",
    description: "ডাক্তার খুঁজুন এবং অ্যাপয়েন্টমেন্ট নিন",
    link: "/doctors",
    color: "#76a4f1",
  },
  {
    id: 4,
    title: "প্রেসক্রিপশন",
    icon: "https://i.ibb.co.com/mFCH5x9h/mobile.png",
    description: "প্রেসক্রিপশন দেখুন",
    link: "/prescription",
    color: "#1998df",
  },
];

const PatientDashboard = () => {
  return (
    <div className="grid grid-cols-6 min-h-screen bg-base-200">
      {/* Left Side Menu */}
      <aside className="col-span-1 bg-base-100 shadow-lg p-6 bg-[#EFF7FE]">
        <h2 className="text-2xl font-bold mb-6 text-primary">মেনু</h2>
        <ul className="space-y-2"> 
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block px-4 py-2 font-bold text-lg rounded-lg hover:bg-primary hover:text-white hover:bg-[#E8594A] transition text-left"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Side Content  */}
      <main className="col-span-5 p-8">
        <h2 className="text-3xl font-bold mb-8 text-primary">
          মানসিক স্বাস্থ্য রিসোর্স
        </h2>

       
      </main>
    </div>
  );
};

export default PatientDashboard;

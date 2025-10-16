import React from "react";

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
  {
    id: 5,
    title: "রিসোর্স",
    icon: "https://i.ibb.co.com/Hpp6RZJJ/knowledge.png",
    description: "সহায়ক রিসোর্সগুলো দেখুন",
    link: "/resources",
    color: "#76a4f1",
  },
  {
    id: 6,
    title: "গেমস",
    icon: "https://i.ibb.co.com/kCjCFmR/joystick.png",
    description: "মানসিক স্বাস্থ্যের গেমস খেলুন",
    link: "/games",
    color: "#1998df",
  },
  {
    id: 7,
    title: "সাহায্য",
    icon: "https://i.ibb.co.com/Xfcn9h0V/help.png",
    description: "অভিজ্ঞদের সাহায্য নিন",
    link: "/patientHelp",
    color: "#76a4f1",
  },
  {
    id: 8,
    title: "প্রোফাইল",
    icon: "https://i.ibb.co.com/qMDvPx2X/user.png",
    description: "আপনার ব্যক্তিগত তথ্য ম্যানেজ করুন",
    link: "/patientProfile",
    color: "#1998df",
  },
];

const FeatureCards = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        মানসিক স্বাস্থ্য সেবা
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((item) => (
          <a
            href={item.link}
            key={item.id}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300 rounded-xl"
            style={{ borderTop: `4px solid ${item.color}` }}
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-base-200">
                <img src={item.icon} alt={item.title} className="w-12 h-12" />
              </div>
              <h3 className="card-title text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

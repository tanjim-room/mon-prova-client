import React, { useEffect, useState } from "react";

const DoctorInfo = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Dummy doctor data — replace with API call later
    const dummyDoctors = [
      {
        id: "D001",
        fullName: "ডাঃ রহমান আহমেদ",
        designation: "সিনিয়র সাইকিয়াট্রিস্ট",
        regNo: "REG12345",
        specialization: "মনোরোগ বিশেষজ্ঞ",
        institute: "বাংলাদেশ মেডিকেল কলেজ",
        phone: "০১৭১২৩৪৫৬৭৮",
        email: "dr.rahman@example.com",
        consultationFee: 1500, // Added
      },
      {
        id: "D002",
        fullName: "ডাঃ সাবরিনা হোসেন",
        designation: "কনসালট্যান্ট সাইকোলজিস্ট",
        regNo: "REG67890",
        specialization: "ক্লিনিকাল সাইকোলজিস্ট",
        institute: "নোয়াখালী মেডিকেল কলেজ",
        phone: "০১৮৭৬৫৪৩২১০",
        email: "dr.sabrina@example.com",
        consultationFee: 1200,
      },
      {
        id: "D003",
        fullName: "ডাঃ জাবের ইসলাম",
        designation: "অ্যাসোসিয়েট সাইকিয়াট্রিস্ট",
        regNo: "REG54321",
        specialization: "সাইকিয়াট্রিস্ট",
        institute: "চট্টগ্রাম মেডিকেল কলেজ",
        phone: "০১৯৯৯৯৯৯৯৯",
        email: "dr.jaber@example.com",
        consultationFee: 1000,
      },
    ];
    setDoctors(dummyDoctors);
  }, []);

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE]">
          ডাক্তারদের তথ্য
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#007AF5] text-white">
              <tr>
                <th className="px-4 py-2">আইডি</th>
                <th className="px-4 py-2">নাম</th>
                <th className="px-4 py-2">পদবি</th>
                <th className="px-4 py-2">BMDC</th>
                <th className="px-4 py-2">বিশেষায়ন</th>
                <th className="px-4 py-2">ইনস্টিটিউট</th>
                <th className="px-4 py-2">ফোন</th>
                <th className="px-4 py-2">ইমেইল</th>
                <th className="px-4 py-2">পরামর্শ ফি</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr
                  key={doctor.id}
                  className="even:bg-[#f7f7f7] hover:bg-[#f0f0f0] transition"
                >
                  <td className="px-4 py-2">{doctor.id}</td>
                  <td className="px-4 py-2">{doctor.fullName}</td>
                  <td className="px-4 py-2">{doctor.designation}</td>
                  <td className="px-4 py-2">{doctor.regNo}</td>
                  <td className="px-4 py-2">{doctor.specialization}</td>
                  <td className="px-4 py-2">{doctor.institute}</td>
                  <td className="px-4 py-2">{doctor.phone}</td>
                  <td className="px-4 py-2">{doctor.email}</td>
                  <td className="px-4 py-2">{doctor.consultationFee}৳</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;

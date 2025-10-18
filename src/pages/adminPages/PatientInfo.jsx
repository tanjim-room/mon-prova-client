import React, { useEffect, useState } from "react";

const PatientInfo = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        id: "P001",
        name: "রাকিব হোসেন",
        age: 23,
        gender: "পুরুষ",
        phone: "০১৭১২৩৪৫৬৭৮",
        email: "rakib@example.com",
        address: "নোয়াখালী, বাংলাদেশ",
        bloodGroup: "A+",
        profession: "সফটওয়্যার ইঞ্জিনিয়ার",
      },
      {
        id: "P002",
        name: "সাবরিনা আক্তার",
        age: 26,
        gender: "মহিলা",
        phone: "০১৮৭৬৫৪৩২১০",
        email: "sabrina@example.com",
        address: "ঢাকা, বাংলাদেশ",
        bloodGroup: "B+",
        profession: "শিক্ষিকা",
      },
    ];
    setPatients(dummyData);
  }, []);

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE]">
          রোগীদের তথ্য
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#007AF5] text-white">
              <tr>
                <th className="px-4 py-2">আইডি</th>
                <th className="px-4 py-2">নাম</th>
                <th className="px-4 py-2">বয়স</th>
                <th className="px-4 py-2">লিঙ্গ</th>
                <th className="px-4 py-2">ফোন</th>
                <th className="px-4 py-2">ইমেইল</th>
                <th className="px-4 py-2">ঠিকানা</th>
                <th className="px-4 py-2">রক্তের গ্রুপ</th>
                <th className="px-4 py-2">পেশা</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{patient.id}</td>
                  <td className="px-4 py-2">{patient.name}</td>
                  <td className="px-4 py-2">{patient.age}</td>
                  <td className="px-4 py-2">{patient.gender}</td>
                  <td className="px-4 py-2">{patient.phone}</td>
                  <td className="px-4 py-2">{patient.email}</td>
                  <td className="px-4 py-2">{patient.address}</td>
                  <td className="px-4 py-2">{patient.bloodGroup}</td>
                  <td className="px-4 py-2">{patient.profession}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;

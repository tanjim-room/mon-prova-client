import React, { useEffect, useState } from "react";

const AppointmentInfo = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Dummy appointment data
    const dummyAppointments = [
      {
        id: "A001",
        patientName: "রাকিব হোসেন",
        doctorName: "ডাঃ রহমান আহমেদ",
        date: "2025-10-20",
        time: "10:00 AM",
        status: "Pending",
        fee: "1500",
        medium: "online", 
      },
      {
        id: "A002",
        patientName: "সাবিনা আক্তার",
        doctorName: "ডাঃ সাবরিনা হোসেন",
        date: "2025-10-21",
        time: "11:30 AM",
        status: "Pending",
        fee: "1200",
        medium: "offline",
      },
      {
        id: "A003",
        patientName: "জাবের ইসলাম",
        doctorName: "ডাঃ জাবের ইসলাম",
        date: "2025-10-22",
        time: "02:00 PM",
        status: "Completed",
        fee: "800",
        medium: "online",
      },
    ];

    setAppointments(dummyAppointments);
  }, []);

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE]">
          অ্যাপয়েন্টমেন্ট তথ্য
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#007AF5] text-white">
              <tr>
                <th className="px-4 py-2">আইডি</th>
                <th className="px-4 py-2">রোগীর নাম</th>
                <th className="px-4 py-2">ডাক্তারের নাম</th>
                <th className="px-4 py-2">তারিখ</th>
                <th className="px-4 py-2">সময়</th>
                <th className="px-4 py-2">স্ট্যাটাস</th>
                <th className="px-4 py-2">মাধ্যম</th> 
                <th className="px-4 py-2">ফি</th>
                
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr
                  key={appt.id}
                  className="even:bg-[#f7f7f7] hover:bg-[#f0f0f0] transition"
                >
                  <td className="px-4 py-2">{appt.id}</td>
                  <td className="px-4 py-2">{appt.patientName}</td>
                  <td className="px-4 py-2">{appt.doctorName}</td>
                  <td className="px-4 py-2">{appt.date}</td>
                  <td className="px-4 py-2">{appt.time}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      appt.status === "Pending"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {appt.status}
                  </td>
                  <td className="px-4 py-2">{appt.medium}</td>
                  <td className="px-4 py-2">{appt.fee}৳</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfo;

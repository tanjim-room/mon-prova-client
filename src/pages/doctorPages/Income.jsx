import React, { useEffect, useState } from "react";

import NavBarDoctor from "../../components/NavBarDoctor";

const Income = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    // 🧑‍⚕️ Load doctor info and appointments from localStorage
    const loggedInDoctor = JSON.parse(localStorage.getItem("loggedInUser"));
    setDoctor(loggedInDoctor);

    const allAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");

    if (loggedInDoctor) {
      const myAppointments = allAppointments.filter(
        (a) => a.doctorName === loggedInDoctor.fullName && a.status === "completed"
      );
      setAppointments(myAppointments);

      const income = myAppointments.reduce((sum, a) => sum + (a.consultationFee || 0), 0);
      setTotalIncome(income);
    } else {
      // if no doctor found, still try to show empty state
      setAppointments([]);
      setTotalIncome(0);
    }
  }, []);

  return (
    <div>
      <NavBarDoctor></NavBarDoctor>
      <div className="min-h-[850px] bg-[#E1ECFF] rounded-lg mt-16 p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          💰 আয় সংক্রান্ত তথ্য
        </h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card bg-white shadow-md p-6 rounded-xl text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700">মোট আয়</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">৳ {totalIncome}</p>
          </div>

          <div className="card bg-white shadow-md p-6 rounded-xl text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700">সম্পন্ন অ্যাপয়েন্টমেন্ট</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {appointments.length}
            </p>
          </div>

          <div className="card bg-white shadow-md p-6 rounded-xl text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700">মোট রোগী</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">
              {new Set(appointments.map((a) => a.name)).size || 0}
            </p>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
          <table className="table w-full">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th>তারিখ</th>
                <th>রোগীর নাম</th>
                <th>মাধ্যম</th>
                <th>সময়</th>
                <th>ফি (৳)</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-600">
                    এখনো কোনো সম্পন্ন অ্যাপয়েন্টমেন্ট পাওয়া যায়নি।
                  </td>
                </tr>
              ) : (
                appointments.map((app, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td>{app.date}</td>
                    <td>{app.name}</td>
                    <td>{app.mode}</td>
                    <td>{app.slot}</td>
                    <td>৳ {app.consultationFee || 0}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Income;

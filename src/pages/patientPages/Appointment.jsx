import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import AppointmentCard from "../../components/cards/AppointmentCard";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("upcoming"); // "upcoming" or "completed"

  const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");

  // Filter based on status instead of date
  const upcoming = appointments.filter(a => a.status === "upcoming");
  const completed = appointments.filter(a => a.status === "completed");

  const renderAppointments = () => {
    const list = activeTab === "upcoming" ? upcoming : completed;
    if (list.length === 0) {
      return <p className="text-gray-500">কোনো অ্যাপয়েন্টমেন্ট নেই</p>;
    }
    return list.map((appointment, idx) => (
      <AppointmentCard key={idx} appointment={appointment} />
    ));
  };

  return (
    <div className="min-h-screen bg-[#EFF7FE] p-4 rounded-md">
      
      <div className="bg-white rounded-md m-0 p-4">
        {/* Tabs */}
        <div className="flex gap-8 mb-2 p-8">
          <button
            className={`m-0 px-4 py-2 rounded-md font-semibold ${
              activeTab === "upcoming"
                ? "bg-[#007AF5] text-white"
                : "bg-white text-[#007AF5] border border-[#007AF5]"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
           আপকামিং অ্যাপয়েন্টমেন্ট
          </button>
          <button
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === "completed"
                ? "bg-[#007AF5] text-white"
                : "bg-white text-[#007AF5] border border-[#007AF5]"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            সম্পন্ন অ্যাপয়েন্টমেন্ট
          </button>
        </div>

        {/* Appointment List */}
        <div className="space-y-4">{renderAppointments()}</div>
      </div>
    </div>
  );
};

export default Appointment;

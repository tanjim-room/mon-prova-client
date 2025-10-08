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
    <div>
      <NavBar />

      <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "upcoming"
                ? "bg-[#1998df] text-white"
                : "bg-white text-[#1998df] border border-[#1998df]"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
           আসছে
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === "completed"
                ? "bg-[#76a4f1] text-white"
                : "bg-white text-[#76a4f1] border border-[#76a4f1]"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            সম্পন্ন
          </button>
        </div>

        {/* Appointment List */}
        <div className="space-y-4">{renderAppointments()}</div>
      </div>
    </div>
  );
};

export default Appointment;

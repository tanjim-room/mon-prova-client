import React, { useState, useEffect } from "react";
import { format, addDays } from "date-fns";
import Swal from "sweetalert2";

const Schedule = () => {
  const next7Days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  const generateSlots = (startHour, endHour) => {
    const slots = [];
    let start = new Date();
    start.setHours(startHour, 0, 0, 0);
    const end = new Date();
    end.setHours(endHour, 0, 0, 0);

    while (start < end) {
      const next = new Date(start.getTime() + 30 * 60000);
      slots.push(`${start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${next.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
      start = next;
    }
    return slots;
  };

  const [mode, setMode] = useState("অনলাইন");
  // selectedSlots will be { "Monday-অনলাইন": ["09:00 - 09:30", ...], ... }
  const [selectedSlots, setSelectedSlots] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("doctor_weekly_schedule");
    if (saved) setSelectedSlots(JSON.parse(saved));
  }, []);

  const getTimeSlots = () => generateSlots(9, 21);

  const toggleSlot = (dayName, slot) => {
    const key = `${dayName}-${mode}`;
    const daySlots = selectedSlots[key] || [];
    setSelectedSlots((prev) => ({
      ...prev,
      [key]: daySlots.includes(slot)
        ? daySlots.filter((s) => s !== slot)
        : [...daySlots, slot],
    }));
  };

  const handleSave = () => {
    Swal.fire({
      title: "আপনি কি সত্যিই সময়সূচি সংরক্ষণ করতে চান?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "হ্যাঁ, সংরক্ষণ করুন",
      cancelButtonText: "বাতিল করুন",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("doctor_weekly_schedule", JSON.stringify(selectedSlots));
        Swal.fire("সময়সূচি সফলভাবে সংরক্ষণ করা হয়েছে!", "", "success");
      }
    });
  };

  return (
    <div className="bg-[#EFF7FE] p-4">
      <div className="bg-white rounded-md p-8 shadow-lg">
        <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
           আপনার সাপ্তাহিক সময়সূচি
          </h2>
        

        {/* Mode Selector */}
        <div className="flex justify-center mb-6">
          <select
            className="select select-bordered w-52"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option>অনলাইন</option>
            <option>অফলাইন</option>
          </select>
        </div>

        {/* 7 Days Schedule */}
        <div className="space-y-8">
          {next7Days.map((day) => {
            const dayName = format(day, "EEEE"); // Monday, Tuesday, ...
            const key = `${dayName}-${mode}`;
            const timeSlots = getTimeSlots();

            return (
              <div key={dayName} className="border border-base-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">{dayName}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedSlots[key]?.includes(slot);
                    const btnClass = isSelected ? "btn bg-[#007AF5] text-white text-xs" : "btn btn-outline text-xs";

                    return (
                      <button key={slot} className={btnClass} onClick={() => toggleSlot(dayName, slot)}>
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button onClick={handleSave} className="btn bg-[#007AF5] px-10 text-lg text-white">
            সময়সূচি সংরক্ষণ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

import React, { useState, useEffect } from "react";
import { format, addDays, setHours, setMinutes } from "date-fns";
import NavBarDoctor from "../../components/NavBarDoctor";

const Schedule = () => {
  // Generate the next 7 days
  const next7Days = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  // 🔸 Generate slots for Online (9AM–9PM)
  const generateOnlineSlots = () => {
    const slots = [];
    let start = setHours(setMinutes(new Date(), 0), 9);
    const end = setHours(setMinutes(new Date(), 0), 21);
    while (start < end) {
      const next = new Date(start.getTime() + 30 * 60000);
      const timeStr = `${format(start, "hh:mm a")} - ${format(next, "hh:mm a")}`;
      slots.push(timeStr);
      start = next;
    }
    return slots;
  };

  // 🔸 Generate slots for Offline (10AM–5PM)
  const generateOfflineSlots = () => {
    const slots = [];
    let start = setHours(setMinutes(new Date(), 0), 9);
    const end = setHours(setMinutes(new Date(), 0), 21);
    while (start < end) {
      const next = new Date(start.getTime() + 30 * 60000);
      const timeStr = `${format(start, "hh:mm a")} - ${format(next, "hh:mm a")}`;
      slots.push(timeStr);
      start = next;
    }
    return slots;
  };

  // Track selected mode (Online/Physical)
  const [mode, setMode] = useState("অনলাইন");

  // Selected slots
  const [selectedSlots, setSelectedSlots] = useState({});

  // Booked slots
  const [bookedSlots, setBookedSlots] = useState({});

  // Load data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("doctor_schedule");
    if (saved) {
      setSelectedSlots(JSON.parse(saved));
    }

    // Example booked slots (API call in real project)
    const demoBooked = {
      [format(new Date(), "yyyy-MM-dd")]: ["10:00 AM - 10:30 AM"],
    };
    setBookedSlots(demoBooked);
  }, []);

  // Get time slots based on mode
  const getTimeSlots = () => {
    return mode === "অনলাইন" ? generateOnlineSlots() : generateOfflineSlots();
  };

  // Toggle slot
  const toggleSlot = (dateStr, slot) => {
    // Prevent if booked
    if (bookedSlots[dateStr]?.includes(slot)) {
      alert("❌ এই সময়টি ইতিমধ্যে বুক করা হয়েছে!");
      return;
    }

    setSelectedSlots((prev) => {
      const daySlots = prev[`${mode}-${dateStr}`] || [];
      if (daySlots.includes(slot)) {
        // remove
        return {
          ...prev,
          [`${mode}-${dateStr}`]: daySlots.filter((s) => s !== slot),
        };
      } else {
        // add
        return {
          ...prev,
          [`${mode}-${dateStr}`]: [...daySlots, slot],
        };
      }
    });
  };

  // Save schedule
  const handleSave = () => {
    localStorage.setItem("doctor_schedule", JSON.stringify(selectedSlots));
    alert("✅ সময়সূচি সফলভাবে সংরক্ষণ ও আপডেট করা হয়েছে!");
  };

  return (
    <div className="bg-[#E1ECFF] min-h-screen">
      <NavBarDoctor />
      <div className="max-w-6xl mx-auto p-6 mt-16 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          আপনার সাপ্তাহিক সময়সূচি
        </h2>

        {/* Mode Selector */}
        <div className="flex justify-center mb-6">
          <div className="form-control w-52">
            <label className="label">
              <span className="label-text font-semibold">মাধ্যম:</span>
            </label>
            <select
              className="select select-bordered"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option>অনলাইন</option>
              <option>অফলাইন</option>
            </select>
          </div>
        </div>

        {/* 7 Days Schedule */}
        <div className="space-y-8">
          {next7Days.map((day) => {
            const dateStr = format(day, "yyyy-MM-dd");
            const dayName = format(day, "EEEE");
            const timeSlots = getTimeSlots();
            const key = `${mode}-${dateStr}`;

            return (
              <div key={dateStr} className="border border-base-300 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">
                  📅 {dayName} ({dateStr})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedSlots[key]?.includes(slot);
                    const isBooked = bookedSlots[dateStr]?.includes(slot);

                    let btnClass = "btn text-xs";
                    if (isBooked) btnClass += " btn-error text-white";
                    else if (isSelected) btnClass += " btn-success text-white";
                    else btnClass += " btn-outline";

                    return (
                      <button
                        key={slot}
                        className={btnClass}
                        onClick={() => toggleSlot(dateStr, slot)}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Save Button */}
        <div className="mt-10 text-center">
          <button onClick={handleSave} className="btn btn-success px-10 text-lg">
            সময়সূচি সংরক্ষণ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

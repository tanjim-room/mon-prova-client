import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
// import doctors from "../../../public/doctorInfo.json"; // paste your JSON here

const AppointmentForm = () => {
    
        const { register, handleSubmit, reset } = useForm();
         const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // ✅ Manual English→Bangla weekday map (exact match with JSON)
  const dayMap = {
    Sunday: "রবিবার",
    Monday: "সোমবার",
    Tuesday: "মঙ্গলবার",
    Wednesday: "বুধবার",
    Thursday: "বৃহস্পতিবার",
    Friday: "শুক্রবার",
    Saturday: "শনিবার",
  };

  // 🩵 Handle form submit
  const onSubmit = (data) => {
    alert(
      `✅ অ্যাপয়েন্টমেন্ট বুক হয়েছে!\nডাক্তার: ${selectedDoctor?.fullName}\nতারিখ: ${dayjs(selectedDate).format(
        "DD/MM/YYYY"
      )}\nসেশন: ${data.slot}\nমোড: ${selectedType}`
    );
    reset();
    setSelectedType("");
    setSelectedDate(null);
    setAvailableSlots([]);
    setSelectedDoctor(null);
  };

  // 🗓 Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);

    if (!selectedType) {
      alert("দয়া করে আগে অনলাইন বা অফলাইন নির্বাচন করুন!");
      return;
    }

    const englishDay = dayjs(date).format("dddd");
    const banglaDay = dayMap[englishDay]; // ✅ Convert to Bangla name like in your JSON

    // Filter doctors by selectedType and matching day
    const filteredDoctors = doctors
      .map((doc) => {
        const slots =
          selectedType === "অনলাইন"
            ? doc.availabilitySchedule.onlineSlots
            : doc.availabilitySchedule.offlineSlots;
        const match = slots.filter((slot) => slot.day === banglaDay);
        return { ...doc, slots: match };
      })
      .filter((doc) => doc.slots.length > 0 && doc.medium.includes(selectedType));

    setAvailableSlots(filteredDoctors);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        🩺 অ্যাপয়েন্টমেন্ট বুকিং ফর্ম
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Patient Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <input {...register("name", { required: true })} placeholder="নাম" className="input input-bordered w-full" />
          <input {...register("mobile", { required: true })} placeholder="মোবাইল নম্বর" className="input input-bordered w-full" />
          <input {...register("email")} placeholder="ইমেইল" className="input input-bordered w-full" />
          <input {...register("age")} placeholder="বয়স" type="number" className="input input-bordered w-full" />
          <select {...register("gender")} className="select select-bordered w-full">
            <option value="">লিঙ্গ নির্বাচন করুন</option>
            <option>পুরুষ</option>
            <option>নারী</option>
            <option>অন্যান্য</option>
          </select>
          <select {...register("bloodGroup")} className="select select-bordered w-full">
            <option value="">রক্তের গ্রুপ</option>
            <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
            <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
          </select>
          <input {...register("profession")} placeholder="পেশা" className="input input-bordered w-full" />
          <input {...register("institute")} placeholder="প্রতিষ্ঠান" className="input input-bordered w-full" />
        </div>

        <textarea {...register("problem", { required: true })} placeholder="আপনার সমস্যা সংক্ষেপে লিখুন" className="textarea textarea-bordered w-full"></textarea>

        {/* Select Online/Offline */}
        <div className="flex gap-4 items-center">
          <label className="font-semibold">কনসালটেশনের ধরন:</label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSelectedType("অফলাইন")}
              className={`btn ${selectedType === "অফলাইন" ? "btn-primary" : "btn-outline"}`}
            >
              🏥 অফলাইন
            </button>
            <button
              type="button"
              onClick={() => setSelectedType("অনলাইন")}
              className={`btn ${selectedType === "অনলাইন" ? "btn-primary" : "btn-outline"}`}
            >
              💻 অনলাইন
            </button>
          </div>
        </div>

        {/* Date Picker */}
        <div>
          <label className="font-semibold block mb-1">তারিখ নির্বাচন করুন:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="input input-bordered w-full"
            placeholderText="তারিখ নির্বাচন করুন"
          />
        </div>

        {/* Doctor & Slots */}
        {availableSlots.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">উপলব্ধ ডাক্তার ও সময়:</h3>
            {availableSlots.map((doc) => (
              <div key={doc.doctorID} className="border rounded-lg p-3 mb-3">
                <div className="flex items-center gap-3">
                  <img src={doc.image} alt={doc.fullName} className="w-14 h-14 rounded-full" />
                  <div>
                    <p className="font-bold">{doc.fullName}</p>
                    <p className="text-sm text-gray-500">{doc.designation}</p>
                    <p className="text-sm text-gray-600">ফি: {doc.consultationFee} টাকা</p>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  {doc.slots.map((slot, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        {...register("slot", { required: true })}
                        value={`${doc.fullName} (${slot.day} - ${slot.time})`}
                        onChange={() => setSelectedDoctor(doc)}
                        className="radio radio-primary"
                      />
                      <span className="text-sm">{slot.day} | {slot.time}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          selectedDate &&
          <p className="text-center text-gray-500 mt-4">❌ এই তারিখে কোনো ডাক্তার উপলব্ধ নেই</p>
        )}

        {/* Submit */}
        <button type="submit" className="btn bg-blue-600 text-white w-full hover:bg-blue-700">
          অ্যাপয়েন্টমেন্ট বুক করুন
        </button>
      </form>
    </div>
  );
    };

    export default AppointmentForm;
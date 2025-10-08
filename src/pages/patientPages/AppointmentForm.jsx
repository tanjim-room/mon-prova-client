import NavBar from '../../components/NavBar';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import Button from '../../components/buttons/Button';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from "sweetalert2";





const AppointmentForm = () => {
    const { doctors, slots } = useLoaderData();
    const { doctorID } = useParams();
    const doctor = slots.find(d => d.doctorID === doctorID);



    const doctorDetails = doctors.find(docdt => docdt.doctorID == doctorID)

    const { consultationFee, fullName, specialization} = doctorDetails

    const [selectedMode, setSelectedMode] = useState("online");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedStartTime, setSelectedStartTime] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    if (!doctor) return <p>Doctor not found!</p>;

    // Get day name from selected date
    const dayName = dayjs(selectedDate).format("dddd");

    // Filter available slots for selected day and mode
    const availableSlots = doctor.timeSlots[dayName]?.filter(
        slot => slot.mode === selectedMode && !slot.isBooked
    ) || [];

    const onSubmit = (data) => {
        if (!selectedStartTime) {
            Swal.fire({
                title: 'সতর্কতা!',
                text: 'অনুগ্রহ করে একটি সময়ের স্লট নির্বাচন করুন।',
                icon: 'warning',
                confirmButtonText: 'ঠিক আছে'
            });
            return;
        }

        const appointmentData = {
            ...data,
            doctorID: doctorDetails.doctorID,
            doctorName: fullName,
            mode: selectedMode,
            date: selectedDate.toISOString().split("T")[0],
            slot: selectedStartTime,
            status: "upcoming",
            speciality: specialization,
            consultationFee,
            img: doctorDetails.image
        };

        // Payment popup
        Swal.fire({
            title: "পেমেন্ট",
            text: `${consultationFee} টাকা প্রদান করুন`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "পেমেন্ট সম্পন্ন",
            cancelButtonText: "বাতিল করুন",
        }).then((result) => {
            if (result.isConfirmed) {
                // Save appointment (local)
                const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
                existing.push(appointmentData);
                localStorage.setItem("appointments", JSON.stringify(existing));

                Swal.fire({
                    title: "অ্যাপয়েন্টমেন্ট সফল!",
                    text: "আপনার অ্যাপয়েন্টমেন্ট বুক করা হয়েছে।",
                    icon: "success",
                    confirmButtonText: "ঠিক আছে"
                });
            }
        });
    };


    return (
        <div>
            <NavBar />

            <div className="min-h-[850px] p-16 bg-[#E1ECFF] rounded-lg mt-16">
                <h2 className="text-2xl font-bold mb-4">{doctorDetails.fullName} এর অ্যাপয়েন্টমেন্ট বুক করুন</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Patient Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-semibold">নাম</label>
                            <input {...register("name", { required: true })} className="w-full p-2 border rounded" placeholder="নাম লিখুন" />
                            {errors.name && <span className="text-red-500">নাম আবশ্যক</span>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">মোবাইল</label>
                            <input {...register("mobile", { required: true })} className="w-full p-2 border rounded" placeholder="মোবাইল নাম্বার" />
                            {errors.mobile && <span className="text-red-500">মোবাইল আবশ্যক</span>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">ইমেইল</label>
                            <input {...register("email", { required: true })} className="w-full p-2 border rounded" placeholder="ইমেইল লিখুন" />
                            {errors.email && <span className="text-red-500">ইমেইল আবশ্যক</span>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">বয়স</label>
                            <input type="number" {...register("age", { required: true })} className="w-full p-2 border rounded" placeholder="বয়স লিখুন" />
                            {errors.age && <span className="text-red-500">বয়স আবশ্যক</span>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">লিঙ্গ</label>
                            <select {...register("gender", { required: true })} className="w-full p-2 border rounded">
                                <option value="">লিঙ্গ নির্বাচন করুন</option>
                                <option value="male">পুরুষ</option>
                                <option value="female">মহিলা</option>
                                <option value="other">অন্যান্য</option>
                            </select>
                            {errors.gender && <span className="text-red-500">লিঙ্গ আবশ্যক</span>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">রক্তের গ্রুপ</label>
                            <select {...register("bloodGroup", { required: true })} className="w-full p-2 border rounded">
                                <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                            {errors.bloodGroup && <span className="text-red-500">রক্তের গ্রুপ আবশ্যক</span>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">পেশা</label>
                            <input {...register("profession", { required: true })} className="w-full p-2 border rounded" placeholder="পেশা লিখুন" />
                            {errors.profession && <span className="text-red-500">পেশা আবশ্যক</span>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">প্রতিষ্ঠান</label>
                            <input {...register("institute", { required: true })} className="w-full p-2 border rounded" placeholder="প্রতিষ্ঠান লিখুন" />
                            {errors.institute && <span className="text-red-500">প্রতিষ্ঠান আবশ্যক</span>}
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-1 font-semibold">সমস্যা/রোগের বিবরণ</label>
                            <textarea {...register("problem", { required: true })} className="w-full p-2 border rounded" rows={4} placeholder="আপনার সমস্যা লিখুন" />
                            {errors.problem && <span className="text-red-500">সমস্যা/রোগের বিবরণ আবশ্যক</span>}
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        {/* Mode Selection */}
                        <div className="mb-4">
                            <label className="mr-4 font-semibold">মাধ্যম:</label>
                            <select
                                value={selectedMode}
                                onChange={e => setSelectedMode(e.target.value)}
                                className="p-2 border rounded"
                            >
                                <option value="online">অনলাইন</option>
                                <option value="offline">অফলাইন</option>
                            </select>
                        </div>

                        {/* Date Picker */}
                        <div className="mb-4">
                            <label className="mr-4 font-semibold">তারিখ নির্বাচন করুন:</label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                className="p-2 border rounded"
                            />
                        </div>
                    </div>

                    {/* Available Time Slots */}
                    <div>
                        <h3 className="font-semibold mb-2">উপলব্ধ সময়ের স্লট ({dayName}):</h3>
                        {availableSlots.length === 0 ? (
                            <p className="text-gray-500">কোনও স্লট উপলব্ধ নেই</p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                                {availableSlots.map(slot => (
                                    <button
                                        type="button"
                                        key={slot.slotID}
                                        className={`p-2 rounded ${selectedStartTime === slot.startTime ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                        onClick={() => setSelectedStartTime(slot.startTime)}
                                    >
                                        {slot.startTime} - {slot.endTime}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Button type="submit" text="অ্যাপয়েন্টমেন্ট বুক করুন"></Button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;

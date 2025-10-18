import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Button from '../../components/buttons/Button';
import { div } from 'framer-motion/client';

const PatientProfile = () => {
    // Profile data
    const initialProfile = JSON.parse(localStorage.getItem("profile")) || {
        fullName: 'রাকিব হোসেন',
        age: '২৩',
        gender: 'পুরুষ',
        phone: '০১৭১২৩৪৫৬৭৮',
        email: 'tanjim@gmail.com',
        bloodGroup: 'A+',
        address: 'নোয়াখালী, বাংলাদেশ',
        emergencyContact: '০১৮৭৬৫৪৩২১০',
        profession: 'সফটওয়্যার ইঞ্জিনিয়ার',
        profilePicture: 'https://i.ibb.co.com/s0XshfX/Untitled-design.png'
    };

    const [profile, setProfile] = useState(initialProfile);
    const [isEditable, setIsEditable] = useState(false);

    useEffect(() => {
        
        const savedProfile = JSON.parse(localStorage.getItem("profile"));
        if (savedProfile) {
            setProfile(savedProfile);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfile({
            ...profile,
            profilePicture: URL.createObjectURL(file)
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem("profile", JSON.stringify(profile)); 
        setIsEditable(false);
    };

    return (
        <div className="bg-[#EFF7FE] p-4">

            <div className="min-h-[850px] p-8 bg-white rounded-md">
                <div>
                     <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
                            রোগীর প্রোফাইল
                        </h2>
                    <div className="mx-auto my-10 p-8 bg-white shadow-lg rounded-md border">
                       
                        <div className="flex justify-center mb-6">
                            <div className="avatar">
                                <div className="w-32 h-32 rounded-full border-2">
                                    <img
                                        src={profile.profilePicture || "https://via.placeholder.com/150"}
                                        alt="Profile"
                                    />
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSave} className=''>
                            {/* Profile Picture Upload */}
                            <div className="mt-6 mb-4 flex justify-center">
                                <div>
                                    <label className="block mb-2 text-sm font-semibold">প্রোফাইল ছবি দিন</label>
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        disabled={!isEditable}
                                        className="file-input file-input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* Form Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">পূর্ণ নাম</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={profile.fullName}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        disabled={!isEditable} 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">বয়স</label>
                                    <input
                                        type="text"
                                        name="age"
                                        value={profile.age}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        disabled={!isEditable} 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">জেন্ডার</label>
                                    <select
                                        name="gender"
                                        value={profile.gender}
                                        onChange={handleInputChange}
                                        className="select select-bordered w-full"
                                        disabled={!isEditable} 
                                    >
                                        <option value="">জেন্ডার নির্বাচন করুন</option>
                                        <option value="Male">পুরুষ</option>
                                        <option value="Female">মহিলা</option>
                                        <option value="Other">অন্যান্য</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">মোবাইল</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={profile.phone}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        disabled={!isEditable} 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">ইমেইল</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        disabled={!isEditable} 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">রক্তের গ্রুপ</label>
                                    <select
                                        name="bloodGroup"
                                        value={profile.bloodGroup}
                                        onChange={handleInputChange}
                                        className="select select-bordered w-full"
                                        disabled={!isEditable} 
                                    >
                                        <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                                        <option value="A+">A+</option>
                                        <option value="B+">B+</option>
                                        <option value="O+">O+</option>
                                        <option value="AB+">AB+</option>
                                        <option value="A-">A-</option>
                                        <option value="B-">B-</option>
                                        <option value="O-">O-</option>
                                        <option value="AB-">AB-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">ঠিকানা</label>
                                    <textarea
                                        name="address"
                                        value={profile.address}
                                        onChange={handleInputChange}
                                        className="textarea textarea-bordered w-full"
                                        disabled={!isEditable} 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">জরুরি যোগাযোগ</label>
                                    <input
                                        type="text"
                                        name="emergencyContact"
                                        value={profile.emergencyContact}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        disabled={!isEditable} 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-semibold text-left">পেশা</label>
                                    <input
                                        type="text"
                                        name="profession"
                                        value={profile.profession}
                                        onChange={handleInputChange}
                                        className="input input-bordered w-full"
                                        disabled={!isEditable} 
                                    />
                                </div>
                            </div>

                            {/* Buttons for Profile Save & Edit*/}
                            <div className="mt-6 text-center space-y-4">
                                {isEditable ? (
                                    <Button type="submit" text="প্রোফাইল সংরক্ষণ করুন" />
                                ) : (
                                    <div onClick={() => setIsEditable(true)} type="button">
                                        <Button

                                            text="এডিট প্রোফাইল"
                                        
                                        />
                                    </div>

                                )}
                                {isEditable && (
                                    <Button
                                        type="button"
                                        text="ক্যানসেল"
                                        onClick={() => setIsEditable(false)} 
                                        className="mt-2"
                                    />
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;

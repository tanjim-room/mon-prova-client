import React, { useEffect, useState, useMemo } from 'react';
import NavBar from '../../components/NavBar';
import DoctorCard from '../../components/cards/DoctorCard';
import { IoSearch } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
const DoctorList = () => {
  const [doctors, setDoctors] = useState([])
  const doctors_data =  [
    {
      "doctorID": "1",
      "fullName": "ডাঃ রহমান আহমেদ",
      "designation": "সিনিয়র সাইকিয়াট্রিস্ট",
      "regNo": "REG12345",
      "institute": "বাংলাদেশ মেডিকেল কলেজ",
      "specialization": "সাইকিয়াট্রিস্ট",
      "degrees": ["MBBS", "FCPS (Psychiatry)", "MD"],
      "yearsOfExperience": 12,
      "consultationFee": 1500,
      "expertise": ["ডিপ্রেশন", "বাইপোলার ডিসঅর্ডার", "সিজোফ্রেনিয়া"],
      "image": "https://i.ibb.co.com/SXbNVQ9X/1699342973.jpg",
      "medium" : "অফলাইন-অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
          { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        
        ],
        "onlineSlots": [
          { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ রহমান আহমেদ একজন অভিজ্ঞ সিনিয়র সাইকিয়াট্রিস্ট, যিনি গত ১২ বছর ধরে মানসিক স্বাস্থ্যের সেবা প্রদান করছেন।"
    },
    {
      "doctorID": "2",
      "fullName": "ডাঃ সামিউল করিম",
      "designation": "সাইকিয়াট্রি স্পেশালিস্ট",
      "regNo": "REG12346",
      "institute": "ঢাকা মেডিকেল কলেজ",
      "specialization": "সাইকিয়াট্রিস্ট",
      "degrees": ["MBBS", "MD (Psychiatry)"],
      "yearsOfExperience": 9,
      "consultationFee": 1200,
      "expertise": ["নেশা চিকিৎসা", "ঘুমের ব্যাধি", "উদ্বেগজনিত সমস্যা"],
      "image": "https://i.ibb.co.com/TxnJZRXR/1742010556.jpg",
      "medium" : "অফলাইন-অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
          { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
          { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ সামিউল করিম নেশা ও ঘুমজনিত সমস্যা সমাধানে বিশেষজ্ঞ।"
    },
    {
      "doctorID": "3",
      "fullName": "ডাঃ সায়েমা ইসলাম",
      "designation": "সিনিয়র সাইকিয়াট্রিস্ট",
      "regNo": "REG12347",
      "institute": "চট্টগ্রাম মেডিকেল কলেজ",
      "specialization": "সাইকিয়াট্রিস্ট",
      "degrees": ["MBBS", "FCPS (Psychiatry)"],
      "yearsOfExperience": 15,
      "consultationFee": 1800,
      "expertise": ["সিজোফ্রেনিয়া", "বাইপোলার", "সাইকোসিস"],
      "image": "https://i.ibb.co.com/zVcdq9PG/1704193051.jpg",
      "medium" : "অফলাইন-অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
           { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
          { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ সায়েমা ইসলাম জটিল মানসিক ব্যাধি নিয়ে কাজ করেন এবং রোগীর মানসিক সুস্থতার জন্য পদ্ধতিগত থেরাপি প্রদান করেন।"
    },
    {
      "doctorID": "4",
      "fullName": "ডাঃ মাহমুদুল হাসান",
      "designation": "সাইকিয়াট্রি স্পেশালিস্ট",
      "regNo": "REG12348",
      "institute": "রাজশাহী মেডিকেল কলেজ",
      "specialization": "সাইকিয়াট্রিস্ট",
      "degrees": ["MBBS", "MD (Psychiatry)"],
      "yearsOfExperience": 7,
      "consultationFee": 1000,
      "expertise": ["উদ্বেগ", "আত্মহত্যা প্রতিরোধ", "ট্রমা ম্যানেজমেন্ট"],
      "image": "https://i.ibb.co.com/VYK9cGXz/1744429208.jpg",
      "medium" : "অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
            { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
         { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ মাহমুদুল হাসান আত্মহত্যা প্রতিরোধ এবং ট্রমা সম্পর্কিত মানসিক সমস্যায় বিশেষজ্ঞ।"
    },
    {
      "doctorID": "5",
      "fullName": "ডাঃ ফারহানা চৌধুরী",
      "designation": "সিনিয়র সাইকিয়াট্রিস্ট",
      "regNo": "REG12349",
      "institute": "খুলনা মেডিকেল কলেজ",
      "specialization": "সাইকিয়াট্রিস্ট",
      "degrees": ["MBBS", "FCPS (Psychiatry)"],
      "yearsOfExperience": 11,
      "consultationFee": 1600,
      "expertise": ["ডিপ্রেশন", "PTSD"],
      "image": "https://i.ibb.co.com/9HdD4wYy/1742008154.jpg",
      "medium" : "অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
         { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
           { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ ফারহানা চৌধুরী PTSD এবং ডিপ্রেশনের চিকিৎসায় অভিজ্ঞ।"
    },

    {
      "doctorID": "6",
      "fullName": "ডাঃ লাইলা হোসেন",
      "designation": "জ্যেষ্ঠ সাইকোলজিস্ট",
      "regNo": "REG67890",
      "institute": "ঢাকা বিশ্ববিদ্যালয়",
      "specialization": "সাইকোলজিস্ট",
      "degrees": ["BSc (Psychology)", "MSc (Clinical Psychology)", "PhD"],
      "yearsOfExperience": 10,
      "consultationFee": 1000,
      "expertise": ["CBT", "পারিবারিক কাউন্সেলিং", "শিশু ও কিশোর থেরাপি"],
      "image": "https://i.ibb.co.com/qFMshLZB/1702628894.jpg",
      "medium" : "অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
         { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
           { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ লাইলা হোসেন CBT, পারিবারিক কাউন্সেলিং এবং শিশু থেরাপিতে অভিজ্ঞ।"
    },
    {
      "doctorID": "7",
      "fullName": "ডাঃ সাদিয়া রহমান",
      "designation": "সাইকোলজিস্ট",
      "regNo": "REG67891",
      "institute": "চট্টগ্রাম বিশ্ববিদ্যালয়",
      "specialization": "সাইকোলজিস্ট",
      "degrees": ["MSc (Psychology)", "MPhil"],
      "yearsOfExperience": 8,
      "consultationFee": 900,
      "expertise": ["বিহেভিয়ার থেরাপি", "স্ট্রেস ম্যানেজমেন্ট"],
      "image": "https://i.ibb.co.com/pjJ3vjr1/1702628703.png",
      "medium" : "অফলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
        { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
          { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ সাদিয়া রহমান স্ট্রেস ম্যানেজমেন্ট এবং বিহেভিয়ার থেরাপিতে অভিজ্ঞ।"
    },
    {
      "doctorID": "8",
      "fullName": "ডাঃ তাহমিনা আক্তার",
      "designation": "সিনিয়র সাইকোলজিস্ট",
      "regNo": "REG67892",
      "institute": "রাজশাহী বিশ্ববিদ্যালয়",
      "specialization": "সাইকোলজিস্ট",
      "degrees": ["BSc", "MSc", "PhD"],
      "yearsOfExperience": 14,
      "consultationFee": 1400,
      "expertise": ["কগনিটিভ থেরাপি", "ট্রমা কাউন্সেলিং"],
      "image": "https://i.ibb.co.com/SXYGzYdk/1702272381.jpg",
      "medium" : "অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
          { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
            { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ তাহমিনা আক্তার কগনিটিভ থেরাপি এবং ট্রমা কাউন্সেলিংয়ে অভিজ্ঞ।"
    },
    {
      "doctorID": "9",
      "fullName": "ডাঃ রুবাইয়া ইয়াসমিন",
      "designation": "জ্যেষ্ঠ সাইকোলজিস্ট",
      "regNo": "REG67893",
      "institute": "খুলনা বিশ্ববিদ্যালয়",
      "specialization": "সাইকোলজিস্ট",
      "degrees": ["MSc", "MPhil"],
      "yearsOfExperience": 6,
      "consultationFee": 800,
      "expertise": ["শিশু কাউন্সেলিং", "পারিবারিক সমস্যা"],
      "image": "https://i.ibb.co.com/20p6mSzW/1699344781.png",
      "medium" : "অফলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
           { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ],
        "onlineSlots": [
           { "day1": "রবিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day2": "সোমবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day3": "মঙ্গলবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day4": "বুধবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]},
          { "day5": "বৃহস্পতিবার", "time": ["১০:০০ AM - ১০:৩০ AM", "১০:৩০ AM - ১১:০০ AM", "১২:৩০ PM - ০১:০০ PM", "০৪:৩০ PM - ০৫:০০ PM"]}
        ]
      },
      "shortBio": "ডাঃ রুবাইয়া ইয়াসমিন শিশু ও পারিবারিক কাউন্সেলিংয়ে অভিজ্ঞ।"
    },
    {
      "doctorID": "10",
      "fullName": "ডাঃ ফারহানা সুলতানা",
      "designation": "সাইকোলজিস্ট",
      "regNo": "REG67894",
      "institute": "ঢাকা বিশ্ববিদ্যালয়",
      "specialization": "সাইকোলজিস্ট",
      "degrees": ["BSc", "MSc", "PhD"],
      "yearsOfExperience": 9,
      "consultationFee": 950,
      "expertise": ["স্ট্রেস ম্যানেজমেন্ট", "কগনিটিভ থেরাপি"],
      "image": "https://i.ibb.co.com/4nr6NWbq/1700575367.jpg",
      "medium" : "অফলাইন-অনলাইন",
      "availabilitySchedule": {
        "offlineSlots": [
          { "day": "মঙ্গলবার", "time": "৯:০০ AM - ৯:৩০ AM" },
          { "day": "মঙ্গলবার", "time": "৯:৩০ AM - ১০:০০ AM" }
        ],
        "onlineSlots": [
          { "day": "বৃহস্পতিবার", "time": "৩:০০ PM - ৩:৩০ PM" },
          { "day": "বৃহস্পতিবার", "time": "৩:৩০ PM - ৪:০০ PM" }
        ]
      },
      "shortBio": "ডাঃ ফারহানা সুলতানা স্ট্রেস ম্যানেজমেন্ট এবং কগনিটিভ থেরাপিতে অভিজ্ঞ।"
    }
  ]


  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch("doctorInfo.json")
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(() => setDoctors([]));
  }, []);

  const dataSource = doctors && doctors.length ? doctors : doctors_data;

  const filteredDoctors = useMemo(() => {
    if (!query) return dataSource;
    const q = query.trim().toLowerCase();
    return dataSource.filter(d => {
      const name = (d.fullName || '').toLowerCase();
      const desig = (d.designation || '').toLowerCase();
      const inst = (d.institute || '').toLowerCase();
      const expertise = (d.expertise || []).join(' ').toLowerCase();
      const degree = (d.degrees || []).join(' ').toLowerCase();
      return name.includes(q) || desig.includes(q) || inst.includes(q) || expertise.includes(q) || degree.includes(q);
    });
  }, [query, dataSource]);

  return (
    <div>

      <div className="min-h-[850px] p-4 bg-[#EFF7FE] rounded-md">

        <div className='bg-white p-6 border rounded-md'>
          <div className=' gap-4 mb-6'>
            <div>
              <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>ডাক্তারদের তালিকা</h2>
            </div>

            <div className='flex items-center gap-2 w-full'>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') e.preventDefault(); }}
                placeholder='নাম, বিশেষত্ব, ইনস্টিটিউট অনুসন্ধান করুন...'
                className='w-full border rounded-md px-3 py-2 text-sm'
                aria-label='search-doctor'
              />
              <button onClick={() => {}} className='px-6 py-2 bg-[#007AF5] text-white rounded-md text-sm'>
                <div className='flex justify-center gap-2 items-center'>
                  <span  className='text-lg'><IoSearch></IoSearch></span>
                  <span>খুঁজুন</span> 
                  
                  </div>
                  </button>
              <button onClick={() => setQuery('')} className='px-6 py-2 bg-[#E8594A] text-white rounded-md text-sm'>
                 <div className='flex justify-center gap-2 items-center'>
                  <span className='text-lg'><MdDeleteForever></MdDeleteForever></span>
                  <span>মুছুন</span> 
                  
                  </div>
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {
              filteredDoctors.map((doctor) => <DoctorCard key={doctor.doctorID} doctor={doctor} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
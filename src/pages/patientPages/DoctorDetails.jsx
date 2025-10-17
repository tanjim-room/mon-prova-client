import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { IoArrowBackSharp } from "react-icons/io5";

const DoctorDetails = () => {

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

    const { doctorID } = useParams();
   
    const detail = doctors_data.find(item => item.doctorID == doctorID);
    const { doctorId, fullName, specialization, designation, degrees, consultationFee, image, expertise, institute, regNo, yearsOfExperience, shortBio, medium } = detail;


    return (
        <div className='bg-[#EFF7FE] p-4'>
           
            <div className="min-h-[850px] p-8 bg-white rounded-md">

                {/* <div className="card card-side bg-base-100 shadow-sm gap-12">
                    <figure>
                        <img
                            src={image}
                            className='w-96 h-full object-cover'
                            alt="Doctor" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{fullName}</h2>
                        <div className='mt-0 text-start'>
                            <p className="text-xl  mt-0 mb-0 font-bold text-start text-gray-700">{specialization} </p>
                            {
                                degrees.map((degree, idx) => <span key={idx} className='text-[#1998df] text-start'>{degree}, </span>)
                            }
                            <p className='text-start text-sm mt-0 text-gray-700'>BMDC Registration No: {regNo}</p>
                        </div>


                        <div className='text-start'>
                            <p className='text-start text-xl mt-4 text-gray-700 font-bold'>কর্মক্ষেত্র</p>
                            <span>{designation}</span>
                            <p className='font-semibold'>{institute}</p>
                        </div>

                        <div className='text-start'>
                            <p className='text-start text-xl mt-4 text-gray-700 font-bold'>অভিজ্ঞতা</p>
                            <span className=''>{yearsOfExperience} বছর</span>

                        </div>


                        <div className='text-start'>
                            <p className='text-start text-xl mt-4 text-gray-700 font-bold'>দক্ষতাসমূহ</p>
                            {
                                expertise.map((ex, idx) => <span key={idx} className='text-sm'>{ex}, </span>)
                            }
                        </div>



                        <div className='text-start'>
                            <p className='text-start text-xl mt-4 text-gray-700 font-bold'>সংক্ষিপ্ত পরিচয়</p>
                            <span className='text-sm '>{shortBio}</span>

                        </div>

                        <div className='text-start'>
                            <p className='text-start text-xl mt-4 text-gray-700 font-bold'>রোগী দেখার মাধ্যম</p>
                            <span className='text-sm'>{medium}</span>

                        </div>

                        <div className='text-start'>
                            <p className='text-start text-xl mt-4 text-gray-700 font-bold'>পরামর্শ ফি</p>
                            <span className=''>{consultationFee} টাকা</span>

                        </div>


                        <div className="mt-4">
                            <Link to={`/appointmentForm/${doctorID}`}>
                                <Button text="অ্যাপয়েন্টমেন্ট নিন"></Button>
                            </Link>
                        </div>
                    </div>
                </div> */}
                <div className='w-full text-left border p-8 rounded-md'>
                     <div className='my-4'>
                        <button className="border-2 rounded-md flex justify-center items-center hover:bg-[#E8594A] hover:text-white transition">
                                          <Link
                                            to="/patientDashboard/doctors"
                                            className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md "
                                          >
                                            <div className='flex gap-4 items-center'>
                                              <span className="text-xl"><IoArrowBackSharp></IoArrowBackSharp></span>
                                              <span className='text-center text-lg'>ফিরে যান</span>
                                            </div>
                                          </Link>
                                        </button>
                     </div>
                            <h2 className='text-xl px-4 py-2 text-gray-800 mb-6 font-bold text-center rounded-md bg-[#EFF7FE] border'>{fullName} এর তথ্যসমূহ</h2>
                            <div className='my-4'>
                               
                                <div className='flex gap-6 items-center border rounded-md p-4 mx-6'>
                                    <div>
                                        <img src={image} alt="" className='w-36 h-36 object-cover rounded-full border' />
                                    </div>
                                    <div className='space-y-1'>
                                        <h2 className="card-title text-xl">{fullName}</h2>
                                        <p className="text-lg  mt-0 mb-0 font-bold text-start text-gray-700">{specialization} </p>

                                        <div className='mt-0 text-start'>

                                            {
                                                degrees.map((degree, idx) => <span key={idx} className='text-[#1998df] text-start'>{degree}, </span>)
                                            }


                                        </div>
                                        <div className='mt-2'>
                                            <p className='text-start m text-base  text-gray-700 font-semibold'>BMDC Reg. No: <span className='bg-[#007AF5] px-2 py-1 text-white rounded-md text-sm font-semibold'>{regNo}</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">




                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>কর্মক্ষেত্র</p>
                                        <div  className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                            <span>{designation}</span>
                                        <p className='font-semibold'>{institute}</p>
                                        </div>
                                    </div>

                                    


                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>দক্ষতাসমূহ</p>
                                        <div className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                            {
                                            expertise.map((ex, idx) => <span key={idx} className='text-sm font-semibold'>{ex}, </span>)
                                        }
                                        </div>
                                    </div>
                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>অভিজ্ঞতা</p>
                                        <div className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                            <span className='font-semibold'>{yearsOfExperience} বছর</span>
                                        </div>

                                    </div>



                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>সংক্ষিপ্ত পরিচয়</p>
                                       <div className='bg-[#EFF7FE] rounded-md px-2 py-2 border'>
                                         <p className='font-normal '>{shortBio}</p>
                                       </div>
                                        

                                    </div>

                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>রোগী দেখার মাধ্যম</p>
                                        <div className='bg-[#01975d] inline-block rounded-md px-2 py-2 border'>
                                            <p className='text-sm text-white font-semibold '>{medium}</p>
                                        </div>

                                    </div>

                                    <div className='text-start'>
                                        <p className='text-start text-xl mt-4 text font-bold text-[#007AF5] py-1'>পরামর্শ ফি</p>
                                        <span className='bg-[#E8594A] rounded-md inline-block px-2 py-1 text-white'>{consultationFee} টাকা</span>

                                    </div>



                                </div>
                                <div className="mt-4 mx-6">
                            <Link to={`/patientDashboard/appointmentForm/${doctorID}`}>
                                <Button text="অ্যাপয়েন্টমেন্ট নিন"></Button>
                            </Link>
                        </div>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
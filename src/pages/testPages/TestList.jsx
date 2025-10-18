import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import testsData from "../../../public/assessments.json";

const TestList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4 rounded-md">
      <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border">
        মনপ্রভা মানসিক স্বাস্থ্য মূল্যায়ন
      </h2>

      {/* Back Button */}
      <div className="mb-4">
        <button className="border-2 rounded-md flex justify-center items-center hover:bg-[#E8594A] hover:text-white transition">
          <Link
            to="/patientDashboard"
            className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md"
          >
            <div className="flex gap-4 items-center">
              <span className="text-xl">
                <IoArrowBackSharp />
              </span>
              <span className="text-center text-lg">পিছনে যান</span>
            </div>
          </Link>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testsData.map((test) => (
          <div
            key={test.id}
            onClick={() => navigate(`/patientDashboard/assessment/${test.id}`)}
            className="cursor-pointer bg-[#EFF7FE] p-8 rounded-md shadow hover:shadow-lg transition flex flex-col items-center border space-y-2"
          >
            <img src={test.icon} alt={test.shortTitle} className="h-24 w-24 mb-4" />
            <h2 className="text-xl font-bold text-[#007AF5] mb-2">
              {test.title}
            </h2>
            <p className="text-md font-semibold">({test.shortTitle})</p>
            <p className="text-gray-600 text-center w-3/4">{test.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestList;

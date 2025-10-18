import React, { useState } from "react";
import Swal from "sweetalert2";

const AdminHelp = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: "রিমা আক্তার",
      question: "আমি রাতে ঘুমাতে পারি না, কী করা উচিত?",
      status: "Pending",
      reason: "",
    },
    {
      id: 2,
      name: "তানভীর হাসান",
      question: "ডিপ্রেশন কিভাবে বুঝবো আমি আক্রান্ত?",
      status: "Pending",
      reason: "",
    },
    {
      id: 3,
      name: "নাসরিন বেগম",
      question: "ধ্যান কি সত্যিই মানসিক চাপ কমায়?",
      status: "Approved",
      reason: "",
    },
  ]);

  // ✅ Approve Question
  const handleApprove = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, status: "Approved", reason: "" } : q
      )
    );
    Swal.fire("✅ অনুমোদিত!", "প্রশ্নটি সফলভাবে অনুমোদিত হয়েছে।", "success");
  };

  // ❌ Decline Question with reason
  const handleDecline = (id) => {
    Swal.fire({
      title: "বাতিলের কারণ লিখুন",
      input: "textarea",
      inputPlaceholder: "কারণ উল্লেখ করুন...",
      inputAttributes: {
        "aria-label": "Reason for decline",
      },
      showCancelButton: true,
      confirmButtonText: "বাতিল করুন",
      cancelButtonText: "ফিরে যান",
      preConfirm: (reason) => {
        if (!reason.trim()) {
          Swal.showValidationMessage("অনুগ্রহ করে কারণ লিখুন!");
        }
        return reason;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setQuestions((prev) =>
          prev.map((q) =>
            q.id === id ? { ...q, status: "Declined", reason: result.value } : q
          )
        );
        Swal.fire(
          "❌ বাতিল হয়েছে!",
          "প্রশ্নটি বাতিল করা হয়েছে।",
          "info"
        );
      }
    });
  };

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm border border-gray-200">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border">
          রোগীদের প্রশ্ন
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#007AF5] text-white">
              <tr>
                <th className="px-4 py-2">আইডি</th>
                <th className="px-4 py-2">নাম</th>
                <th className="px-4 py-2">প্রশ্ন</th>
                <th className="px-4 py-2">অবস্থা</th>
                <th className="px-4 py-2 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr
                  key={q.id}
                  className="even:bg-[#f8f8f8] hover:bg-[#f0f0f0] transition"
                >
                  <td className="px-4 py-2">{q.id}</td>
                  <td className="px-4 py-2 font-medium">{q.name}</td>
                  <td className="px-4 py-2 text-gray-700">{q.question}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      q.status === "Approved"
                        ? "text-green-600"
                        : q.status === "Declined"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {q.status}
                    {q.reason && (
                      <div className="text-xs text-gray-500 mt-1">
                        কারণ: {q.reason}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {q.status === "Pending" ? (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleApprove(q.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          অনুমোদন
                        </button>
                        <button
                          onClick={() => handleDecline(q.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          বাতিল
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400">সম্পন্ন</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHelp;

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const VerifyRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // verification requests data
    const dummyRequests = [
      {
        id: "VR001",
        name: "ডাঃ রহমান আহমেদ",
        role: "Doctor",
        email: "dr.rahman@example.com",
        status: "Pending",
      },
      {
        id: "VR002",
        name: "সাবিনা আক্তার ইরা",
        role: "Patient",
        email: "sabina@example.com",
        status: "Pending",
      },
      {
        id: "VR003",
        name: "ডাঃ সুমি হাসান",
        role: "Doctor",
        email: "dr.sumi@example.com",
        status: "Pending",
      },
    ];

    // Only doctors are shown
    setRequests(dummyRequests);
  }, []);

  const handleApprove = (id) => {
    Swal.fire({
      title: "অনুমোদন নিশ্চিত?",
      text: "আপনি কি এই ডাক্তারকে অনুমোদন করতে চান?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "হ্যাঁ, অনুমোদন করুন",
      cancelButtonText: "বাতিল",
    }).then((result) => {
      if (result.isConfirmed) {
        setRequests((prev) =>
          prev.map((req) =>
            req.id === id ? { ...req, status: "Approved" } : req
          )
        );
        Swal.fire("অনুমোদিত!", "ডাক্তার সফলভাবে অনুমোদিত হয়েছে।", "success");
      }
    });
  };

  const handleDecline = (id) => {
    Swal.fire({
      title: "বাতিল করার কারণ লিখুন",
      input: "text",
      inputPlaceholder: "কারণ লিখুন...",
      showCancelButton: true,
      confirmButtonText: "বাতিল করুন",
      cancelButtonText: "ফিরে যান",
      inputValidator: (value) => {
        if (!value) return "কারণ দিতে হবে!";
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setRequests((prev) =>
          prev.map((req) =>
            req.id === id
              ? { ...req, status: "Declined", reason: result.value }
              : req
          )
        );
        Swal.fire("বাতিল!", "ডাক্তারের আবেদন বাতিল করা হয়েছে।", "error");
      }
    });
  };

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE]">
          ডাক্তারের ভেরিফিকেশন রিকোয়েস্টসমূহ
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#007AF5] text-white">
              <tr>
                <th className="px-4 py-2">নাম</th>
                <th className="px-4 py-2">ইমেইল</th>
                <th className="px-4 py-2">স্ট্যাটাস</th>
                <th className="px-4 py-2 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr
                  key={req.id}
                  className="even:bg-[#f7f7f7] hover:bg-[#f0f0f0] transition"
                >
                  <td className="px-4 py-2">{req.name}</td>
                  <td className="px-4 py-2">{req.email}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      req.status === "Pending"
                        ? "text-yellow-600"
                        : req.status === "Approved"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {req.status}
                    {req.reason && (
                      <div className="text-xs text-gray-500">
                        কারণ: {req.reason}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {req.status === "Pending" ? (
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => handleApprove(req.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          অনুমোদন
                        </button>
                        <button
                          onClick={() => handleDecline(req.id)}
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
              {requests.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    কোনো ডাক্তার ভেরিফিকেশন রিকোয়েস্ট নেই
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerifyRequest;

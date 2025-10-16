import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Load all prescriptions directly (no login check)
    const allPrescriptions = JSON.parse(localStorage.getItem("prescriptions") || "[]");
    setPrescriptions(allPrescriptions);
  }, []);

  return (
    <div>
      <NavBar />

      <div className="min-h-[850px] bg-[#E1ECFF] rounded-lg mt-16 p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          সব প্রেসক্রিপশন
        </h2>

        {prescriptions.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            এখনো কোনো প্রেসক্রিপশন পাওয়া যায়নি।
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {prescriptions.map((pres, index) => (
              <div
                key={index}
                className="card bg-white shadow-md p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="card-body text-left">
                  <h3 className="card-title text-xl font-semibold text-gray-800 mb-2">
                    ডাক্তারঃ {pres.doctorName || "N/A"}
                  </h3>
                  <p><strong>রোগীঃ</strong> {pres.patientName || "N/A"}</p>
                  <p><strong>মাধ্যমঃ</strong> {pres.mode}</p>
                  <p><strong>তারিখঃ</strong> {pres.date}</p>
                  <p><strong>সময়ঃ</strong> {pres.slot}</p>
                  <p><strong>লিখার সময়ঃ</strong> {new Date(pres.createdAt).toLocaleString()}</p>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2 text-gray-700">📋 প্রেসক্রিপশন:</h4>
                    <div className="bg-gray-100 p-3 rounded-lg text-gray-800 whitespace-pre-wrap">
                      {pres.prescription}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Prescription;

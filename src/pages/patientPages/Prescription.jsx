import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import Logo from "../../components/Logo";
const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Load all prescriptions directly (no login check)
    const allPrescriptions = JSON.parse(localStorage.getItem("prescriptions") || "[]");
    setPrescriptions(allPrescriptions);
  }, []);

  return (
    <div className="bg-[#EFF7FE] p-4">

      <div className="min-h-[850px] bg-white rounded-md p-8">
        <div>
          {/* <div className='w-full flex justify-center items-center my-8'>
            <Logo></Logo>
        </div> */}
          <h2 className='text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border'>
            আপনার প্রেসক্রিপশন সমুহ
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
                    {/* <p><strong>মাধ্যমঃ</strong> {pres.mode}</p> */}
                    <p><strong>তারিখঃ</strong> {pres.date}</p>
                    {/* <p><strong>সময়ঃ</strong> {pres.slot}</p>
                  <p><strong>লিখার সময়ঃ</strong> {new Date(pres.createdAt).toLocaleString()}</p> */}

                    <div className="mt-4">
                      <button className="w-full border-2 rounded-md flex justify-center items-center text-[#007AF5] hover:bg-[#E8594A] hover:text-white transition">
                        <Link
                          to={``}
                          className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md "
                        >
                          <div className='flex gap-4 items-center'>

                            <span className="text-xl"><IoMdDownload></IoMdDownload></span>
                            <span className='text-center text-lg'>প্রেসক্রিপশন ডাউনলোড করুন</span>
                          </div>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prescription;

import React, { useState, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CreatePrescription = () => {
  const { aID } = useParams();
  const navigate = useNavigate();

  const [prescription, setPrescription] = useState({
    diagnosis: "",
    advice: "",
    medicines: [{ name: "", dose: "", duration: "" }],
  });

  // ✅ Load existing prescription by appointment ID
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("prescriptions") || "[]");
    const found = existing.find((p) => p.appointmentID === aID);
    if (found) {
      setPrescription({
        diagnosis: found.diagnosis || "",
        advice: found.advice || "",
        medicines:
          found.medicines && found.medicines.length > 0
            ? found.medicines
            : [{ name: "", dose: "", duration: "" }],
      });
    }
  }, [aID]);

  const handleMedicineChange = (index, field, value) => {
    const updated = [...prescription.medicines];
    updated[index][field] = value;
    setPrescription({ ...prescription, medicines: updated });
  };

  const addMedicine = () => {
    setPrescription({
      ...prescription,
      medicines: [...prescription.medicines, { name: "", dose: "", duration: "" }],
    });
  };

  const removeMedicine = (index) => {
    const updated = prescription.medicines.filter((_, i) => i !== index);
    setPrescription({ ...prescription, medicines: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("prescriptions") || "[]");
    const newPrescription = {
      appointmentID: aID,
      ...prescription,
      date: new Date().toLocaleDateString(),
    };

    // ✅ Replace existing prescription for this appointment ID if exists
    const filtered = existing.filter((p) => p.appointmentID !== aID);
    localStorage.setItem("prescriptions", JSON.stringify([...filtered, newPrescription]));

    Swal.fire("সফল!", "প্রেসক্রিপশন সফলভাবে সংরক্ষিত হয়েছে।", "success");
    navigate(`/doctorDashboard/appointmentDetailsDoctor/${aID}`);
  };

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="mx-auto bg-white rounded-md shadow-md p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="border-2 rounded-md flex justify-center items-center hover:bg-[#E8594A] hover:text-white transition">
            <Link
              to={`/doctorDashboard/appointmentDetailsDoctor/${aID}`}
              className="flex items-center gap-6 px-4 py-2 font-semibold text-xl rounded-md"
            >
              <IoArrowBackSharp className="text-xl" />
              <span className="text-center text-lg">পিছনে যান</span>
            </Link>
          </button>
        </div>

        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE] border">
          প্রেসক্রিপশন তৈরি
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Diagnosis */}
          <div>
            <label className="block font-semibold mb-2">রোগ নির্ণয়</label>
            <textarea
              value={prescription.diagnosis}
              onChange={(e) =>
                setPrescription({ ...prescription, diagnosis: e.target.value })
              }
              placeholder="রোগ নির্ণয়ের বিবরণ লিখুন..."
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#007AF5]"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Medicines */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block font-semibold">ঔষধের তালিকা</label>
              <button
                type="button"
                onClick={addMedicine}
                className="text-[#007AF5] font-semibold hover:underline"
              >
                + আরেকটি ঔষধ যোগ করুন
              </button>
            </div>

            {/* Added column labels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2 font-semibold text-gray-700 text-sm">
              <span>ঔষধের নাম</span>
              <span>ডোজ</span>
              <span>সময়কাল</span>
            </div>

            {prescription.medicines.map((med, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="ঔষধের নাম"
                  value={med.name}
                  onChange={(e) => handleMedicineChange(index, "name", e.target.value)}
                  className="border rounded-md p-2 focus:ring-2 focus:ring-[#007AF5]"
                />
                <input
                  type="text"
                  placeholder="ডোজ (যেমন: 1+0+1)"
                  value={med.dose}
                  onChange={(e) => handleMedicineChange(index, "dose", e.target.value)}
                  className="border rounded-md p-2 focus:ring-2 focus:ring-[#007AF5]"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="সময়কাল (যেমন: ৫ দিন)"
                    value={med.duration}
                    onChange={(e) =>
                      handleMedicineChange(index, "duration", e.target.value)
                    }
                    className="border rounded-md p-2 flex-1 focus:ring-2 focus:ring-[#007AF5]"
                  />
                  <button
                    type="button"
                    onClick={() => removeMedicine(index)}
                    className="text-red-500 font-bold px-3"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Advice */}
          <div>
            <label className="block font-semibold mb-2">পরামর্শ</label>
            <textarea
              value={prescription.advice}
              onChange={(e) =>
                setPrescription({ ...prescription, advice: e.target.value })
              }
              placeholder="রোগীকে প্রদত্ত পরামর্শ..."
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#007AF5]"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full bg-[#007AF5] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition"
            >
              প্রেসক্রিপশন সংরক্ষণ করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePrescription;

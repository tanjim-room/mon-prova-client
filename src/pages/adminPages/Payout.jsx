import React, { useState } from "react";

const Payout = () => {
  const [payouts, setPayouts] = useState([]);
  const [form, setForm] = useState({
    doctorId: "",
    doctorName: "",
    amount: "",
    method: "Bkash",
    accountNumber: "",
    transactionId: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayouts([...payouts, form]);
    setForm({
      doctorId: "",
      doctorName: "",
      amount: "",
      method: "Bkash",
      accountNumber: "",
      transactionId: "",
      note: "",
    });
  };

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE]">
          পেআউট সংক্রান্ত তথ্য
        </h2>

        {/* Payout Form */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              ডাক্তার আইডি
            </label>
            <input
              type="text"
              name="doctorId"
              value={form.doctorId}
              onChange={handleChange}
              placeholder="যেমন: D001"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              ডাক্তার নাম
            </label>
            <input
              type="text"
              name="doctorName"
              value={form.doctorName}
              onChange={handleChange}
              placeholder="যেমন: ডাঃ রহমান আহমেদ"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              অর্থের পরিমাণ (টাকা)
            </label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="যেমন: ৫০০০"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              প্রদানের মাধ্যম নির্বাচন করুন
            </label>
            <select
              name="method"
              value={form.method}
              onChange={handleChange}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="Bkash">Bkash</option>
              <option value="Nagad">Nagad</option>
              <option value="Rocket">Rocket</option>
              <option value="Bank">Bank Transfer</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              একাউন্ট / নাম্বার
            </label>
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              placeholder="যেমন: 017XXXXXXXX"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              ট্রানজেকশন আইডি
            </label>
            <input
              type="text"
              name="transactionId"
              value={form.transactionId}
              onChange={handleChange}
              placeholder="যেমন: TXN123456789"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              নোট (ঐচ্ছিক)
            </label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="যদি কিছু উল্লেখ করতে চান"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              rows="2"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#007AF5] hover:bg-[#ff3d2f] text-white font-semibold px-6 py-2 rounded-md transition"
            >
              পেমেন্ট যুক্ত করুন
            </button>
          </div>
        </form>

        {/* Payout Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#007AF5] text-white">
              <tr>
                <th className="px-4 py-2">ডাক্তার আইডি</th>
                <th className="px-4 py-2">নাম</th>
                <th className="px-4 py-2">পরিমাণ</th>
                <th className="px-4 py-2">মাধ্যম</th>
                <th className="px-4 py-2">একাউন্ট / নাম্বার</th>
                <th className="px-4 py-2">ট্রানজেকশন আইডি</th>
                <th className="px-4 py-2">নোট</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((p, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{p.doctorId}</td>
                  <td className="px-4 py-2">{p.doctorName}</td>
                  <td className="px-4 py-2">{p.amount}৳</td>
                  <td className="px-4 py-2">{p.method}</td>
                  <td className="px-4 py-2">{p.accountNumber}</td>
                  <td className="px-4 py-2">{p.transactionId}</td>
                  <td className="px-4 py-2">{p.note || "-"}</td>
                </tr>
              ))}
              {payouts.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center text-gray-500 py-4"
                  >
                    এখনও কোনো পেমেন্ট রেকর্ড নেই
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

export default Payout;

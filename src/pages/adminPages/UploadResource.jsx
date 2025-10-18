import React, { useState } from "react";
import Swal from "sweetalert2";

const UploadResource = () => {
  const [type, setType] = useState("Video");
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    thumbnail: "",
    url: "",
    description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload (for thumbnail)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, thumbnail: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      Swal.fire("⚠️ ত্রুটি!", "শিরোনাম লিখুন!", "error");
      return;
    }

    if (type === "Video" && !formData.url.trim()) {
      Swal.fire("⚠️ ত্রুটি!", "ভিডিও URL দিন!", "error");
      return;
    }

    if (type === "Blog" && !formData.description.trim()) {
      Swal.fire("⚠️ ত্রুটি!", "ব্লগের বর্ণনা দিন!", "error");
      return;
    }

    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: `${type} রিসোর্স আপলোড হবে।`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "হ্যাঁ, আপলোড করুন",
      cancelButtonText: "বাতিল",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("✅ Uploaded Resource:", { type, ...formData });
        Swal.fire("✅ সফল!", "রিসোর্স সফলভাবে আপলোড হয়েছে।", "success");
        setFormData({
          title: "",
          subtitle: "",
          thumbnail: "",
          url: "",
          description: "",
        });
      }
    });
  };

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE]">
        রিসোর্স আপলোড করুন
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          {/* Resource Type */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              রিসোর্সের ধরন
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-[#007AF5]"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Video">ভিডিও</option>
              <option value="Blog">ব্লগ</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              শিরোনাম
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="রিসোর্সের শিরোনাম লিখুন"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              উপশিরোনাম
            </label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="উপশিরোনাম লিখুন"
            />
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              থাম্বনেইল আপলোড করুন
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            {formData.thumbnail && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2"></p>
                <img
                  src={formData.thumbnail}
                  alt="Thumbnail Preview"
                  className="w-40 h-28 object-cover rounded-md shadow-sm"
                />
              </div>
            )}
          </div>

          {/* Conditional Fields */}
          {type === "Video" ? (
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                ভিডিও URL
              </label>
              <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="ভিডিও URL দিন (যেমন: YouTube লিঙ্ক)"
              />
            </div>
          ) : (
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                ব্লগের বর্ণনা
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md h-32"
                placeholder="ব্লগের বিস্তারিত বর্ণনা লিখুন..."
              ></textarea>
            </div>
          )}

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#007AF5] hover:bg-[#005FCC] text-white px-6 py-2 rounded-md font-semibold shadow-sm"
            >
              আপলোড করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadResource;

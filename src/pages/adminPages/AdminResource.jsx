import React, { useState } from "react";
import Swal from "sweetalert2";

const AdminResource = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      type: "Video",
      title: "উদ্বেগ মোকাবিলা করা",
      subtitle: "উদ্বেগ মোকাবিলার সহজ কৌশল",
      thumbnail: "https://img.youtube.com/vi/MvSExWXlJuQ/0.jpg",
      url: "https://www.youtube.com/embed/MvSExWXlJuQ",
    },
    {
      id: 2,
      type: "Blog",
      title: "মানসিক চাপ কমানোর ১০টি উপায়",
      subtitle: "মানসিক প্রশান্তির কার্যকর টিপস",
      description: "প্রায়োগিক টিপস যা মানসিক সুস্থতা উন্নত করে।",
      thumbnail: "https://i.ibb.co.com/pjfhybWm/1690718202674.jpg",
    },
  ]);

  // ✏️ Edit Resource
  const handleEdit = (id) => {
    const resource = resources.find((r) => r.id === id);
    let htmlFields = "";

    if (resource.type === "Video") {
      htmlFields = `
        <input id="swal-title" class="swal2-input" placeholder="শিরোনাম" value="${resource.title}">
        <input id="swal-subtitle" class="swal2-input" placeholder="উপশিরোনাম" value="${resource.subtitle || ""}">
        <input id="swal-url" class="swal2-input" placeholder="ভিডিও URL" value="${resource.url || ""}">
        <input type="file" id="swal-thumbnail" accept="image/*" class="swal2-file">
        <small>বর্তমান থাম্বনেইল:</small><br>
        <img src="${resource.thumbnail}" alt="thumbnail" style="width:80px; border-radius:6px; margin-top:5px;">
      `;
    } else {
      htmlFields = `
        <input id="swal-title" class="swal2-input" placeholder="শিরোনাম" value="${resource.title}">
        <input id="swal-subtitle" class="swal2-input" placeholder="উপশিরোনাম" value="${resource.subtitle || ""}">
        <textarea id="swal-description" class="swal2-textarea" placeholder="বর্ণনা">${resource.description || ""}</textarea>
        <input type="file" id="swal-thumbnail" accept="image/*" class="swal2-file">
        <small>বর্তমান থাম্বনেইল:</small><br>
        <img src="${resource.thumbnail}" alt="thumbnail" style="width:80px; border-radius:6px; margin-top:5px;">
      `;
    }

    Swal.fire({
      title: `${resource.type} সম্পাদনা করুন`,
      html: htmlFields,
      showCancelButton: true,
      confirmButtonText: "আপডেট করুন",
      cancelButtonText: "বাতিল",
      width: 600,
      preConfirm: () => {
        const title = document.getElementById("swal-title").value.trim();
        const subtitle = document.getElementById("swal-subtitle").value.trim();
        const fileInput = document.getElementById("swal-thumbnail");
        let file = fileInput.files[0];

        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            const thumbnail = file ? reader.result : resource.thumbnail;

            if (resource.type === "Video") {
              const url = document.getElementById("swal-url").value.trim();
              if (!title || !url)
                Swal.showValidationMessage("শিরোনাম ও URL পূরণ করুন!");
              resolve({ title, subtitle, thumbnail, url });
            } else {
              const description =
                document.getElementById("swal-description").value.trim();
              if (!title || !description)
                Swal.showValidationMessage("শিরোনাম ও বর্ণনা পূরণ করুন!");
              resolve({ title, subtitle, thumbnail, description });
            }
          };
          if (file) reader.readAsDataURL(file);
          else reader.onload();
        });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setResources((prev) =>
          prev.map((res) =>
            res.id === id ? { ...res, ...result.value } : res
          )
        );
        Swal.fire("✅ আপডেট হয়েছে!", "রিসোর্স সফলভাবে আপডেট হয়েছে।", "success");
      }
    });
  };

  // ❌ Delete Resource
  const handleDelete = (id) => {
    const resource = resources.find((r) => r.id === id);
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: `"${resource.title}" মুছে ফেলা হবে!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন",
      cancelButtonText: "বাতিল",
    }).then((result) => {
      if (result.isConfirmed) {
        setResources(resources.filter((r) => r.id !== id));
        Swal.fire("মুছে ফেলা হয়েছে!", "রিসোর্স সফলভাবে মুছে ফেলা হয়েছে।", "success");
      }
    });
  };

  return (
    <div className="bg-[#EFF7FE] p-4 min-h-screen">
      <div className="bg-white rounded-md p-8 shadow-sm">
        <h2 className="text-xl text-gray-800 p-4 mb-8 font-bold text-center rounded-md bg-[#EFF7FE]">
          রিসোর্স ম্যানেজমেন্ট
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#007AF5] text-white">
              <tr>
                <th className="px-4 py-2">আইডি</th>
                <th className="px-4 py-2">ধরন</th>
                <th className="px-4 py-2">শিরোনাম</th>
                <th className="px-4 py-2">উপশিরোনাম</th>
                <th className="px-4 py-2">থাম্বনেইল</th>
                <th className="px-4 py-2">বর্ণনা / URL</th>
                <th className="px-4 py-2 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((res) => (
                <tr
                  key={res.id}
                  className="even:bg-[#f8f8f8] hover:bg-[#f0f0f0] transition"
                >
                  <td className="px-4 py-2">{res.id}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      res.type === "Video" ? "text-blue-600" : "text-green-600"
                    }`}
                  >
                    {res.type}
                  </td>
                  <td className="px-4 py-2 font-medium">{res.title}</td>
                  <td className="px-4 py-2">{res.subtitle}</td>
                  <td className="px-4 py-2">
                    <img
                      src={res.thumbnail}
                      alt="thumbnail"
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-700 max-w-[200px] truncate">
                    {res.type === "Video" ? res.url : res.description}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleEdit(res.id)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        সম্পাদনা
                      </button>
                      <button
                        onClick={() => handleDelete(res.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        মুছুন
                      </button>
                    </div>
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

export default AdminResource;

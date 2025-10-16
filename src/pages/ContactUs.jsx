import React from 'react';

const ContactUs = () => {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">যোগাযোগ করুন</h1>

      <p className="mb-4">আপনার প্রশ্ন, প্রতিক্রিয়া বা সহায়তার জন্য অনুগ্রহ করে নিচের ফর্ম বা ইমেইল ব্যবহার করুন। আমরা দ্রুত আপনার সাথে যোগাযোগ করব।</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">নাম</label>
          <input className="w-full border rounded px-3 py-2" placeholder="আপনার নাম লিখুন" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">ইমেইল</label>
          <input className="w-full border rounded px-3 py-2" placeholder="ইমেইল লিখুন" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">বার্তা</label>
          <textarea className="w-full border rounded px-3 py-2 h-32" placeholder="আপনার বার্তা লিখুন" />
        </div>

        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">পাঠান</button>
        </div>
      </div>

      <section className="mt-8 text-sm text-gray-600">
        <p>ইমেইল: support@monprova.example</p>
        <p>ফোন: +880 1X-XXXX-XXXX</p>
      </section>
    </main>
  );
};

export default ContactUs;

import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <section className="page-hero">
        <div className="hero-inner">
          <h1>যোগাযোগ করুন</h1>
          <p className="lead">আমরা সাহায্য করার জন্য এখানে আছি — যে কোনও প্রশ্নের জন্য আমাদের কাছে আসুন</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto py-12 px-6">
        <div className="card-panel mx-auto" style={{maxWidth: 520}}>
          <h2 className="text-xl font-semibold mb-2 text-center">যোগাযোগের বিস্তারিত</h2>
          <p className="text-sm text-center text-gray-600 mb-4">অতীব জরুরি জন্য ২৪/৭ সহায়তা উপলব্ধ</p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded flex items-center justify-center">✉️</div>
              <div>
                <div className="text-sm font-medium">ইমেইল</div>
                <div className="text-sm text-blue-600">support@monprova.example</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-50 rounded flex items-center justify-center">📞</div>
              <div>
                <div className="text-sm font-medium">জরুরি সহায়তা</div>
                <div className="text-sm">01740790455</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sky-50 rounded flex items-center justify-center">🕒</div>
              <div>
                <div className="text-sm font-medium">অফিস সময়</div>
                <div className="text-sm">Mon-Fri: 9 AM - 7 PM (GMT)</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <h3 className="text-lg font-semibold mb-3">মেসেজ পাঠান</h3>
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
              <button className="btn-gradient">পাঠান</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;

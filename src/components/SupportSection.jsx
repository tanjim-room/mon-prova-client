import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
};

const SupportCard = ({ title, role, desc, cta, index = 0 }) => (
  <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="bg-black/35 text-white/95 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
    <div className="font-semibold text-lg">{title}</div>
    <div className="text-sm text-white/80">{role}</div>
    <div className="mt-2 text-sm text-white/75">{desc}</div>
    {cta && <div className="mt-3"><Link to={cta.link} className="text-sm text-blue-200">{cta.label}</Link></div>}
  </motion.div>
);

const SupportSection = () => {
  const items = [
    { title: 'সাহায্য সেবা', role: 'রোগী - দ্রুত সহায়তা', desc: 'আপনি যদি অবসাদ বা উদ্বেগ অনুভব করেন, দ্রুত সহায়তা পেতে এখানে ক্লিক করুন।', cta: { link: '/patientHelp', label: 'সহায়তা দেখুন' } },
    { title: 'ডাক্তার সহায়তা', role: 'ডাক্তার - রোগী পরিচালনা', desc: 'ডক্টরদের জন্য সরঞ্জাম এবং গাইডলাইন রয়েছে। রোগী তালিকা ও অ্যাপয়েন্টমেন্ট দেখুন।', cta: { link: '/doctorHelp', label: 'ডক্টর হেল্প' } },
    { title: 'তত্বাবধান ও রিসোর্স', role: 'রিসোর্স - শিক্ষা', desc: 'মানসিক স্বাস্থ্যের উপর আর্টিকেল ও গাইড — শিক্ষিত হতে এবং শেয়ার করতে পারেন।', cta: { link: '/resources', label: 'রিসোর্স দেখুন' } },
  ];

  return (
    <section className="w-full bg-transparent py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <SupportCard key={i} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

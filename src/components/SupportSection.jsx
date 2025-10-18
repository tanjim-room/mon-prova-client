import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
};

const SupportCard = ({ title, role, desc, cta, index = 0 }) => {
  const accents = ['border-blue-400', 'border-emerald-400', 'border-indigo-400'];
  const accent = accents[index % accents.length];

  return (
    
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white/95`}
    >
      <div></div>
      <div className="font-semibold text-xl text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{role}</div>
      <div className="mt-2 text-md text-gray-700">{desc}</div>
      {cta && (
        <div className="mt-3">
          <Link to={cta.link} className="text-lg text-blue-600 hover:underline">
            {cta.label}
          </Link>
        </div>
      )}
    </motion.div>
    
  );
};

const SupportSection = () => {
  const items = [
    { title: 'আমাদের সম্পর্কে', role: '', desc: 'আমাদের সম্পর্কে  বিস্তারিত জানুন', cta: { link: '/about', label: 'জানুন' } },
    { title: 'যোগাযোগ', role: '', desc: 'যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন', cta: { link: '/contact', label: 'যোগাযোগ করুন' } },
    
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#eef8ff] to-[#dff5ff] py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((s, i) => (
            <SupportCard key={i} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

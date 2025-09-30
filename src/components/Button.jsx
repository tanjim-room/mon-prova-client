import { motion } from "framer-motion";

function Button({ text }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="w-full relative px-8 py-3 font-semibold text-white bg-gradient-to-r from-[#1998df] to-[#76a4f1] rounded-lg shadow-lg transition-all duration-100"
    >
      <span className="relative z-10">{text}</span>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 blur-lg transition duration-100 group-hover:opacity-50"></span>
    </motion.button>
  );
}

export default Button;

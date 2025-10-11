import { motion } from "framer-motion";

const OutlinedButton = ({ text, extraClass, icon }) =>{
  return (
    <motion.button
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.975 }}
      className={`relative px-8 py-3 font-semibold text-[#1998df] border-2 border-[#1998df] rounded-lg shadow-md bg-transparent transition-all duration-100 hover:text-white hover:bg-gradient-to-r hover:from-[#1998df] hover:to-[#76a4f1] hover:border-none ${extraClass}`}  >
      <span className="relative z-10 flex items-center justify-center gap-2">{icon} {text}</span >

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 blur-lg transition duration-100 group-hover:opacity-50"></span>
    </motion.button>
  );
}

export default OutlinedButton;

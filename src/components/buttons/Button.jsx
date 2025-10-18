import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    
    <motion.button
      whileHover={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.975 }}
      className="w-full relative px-8 py-3 font-semibold text-white bg-[#007AF5] rounded-lg shadow-lg transition-all duration-100"
    >
      <span className="relative z-10">{text}</span>

      {/* Glow effect */}
      <span className="absolute inset-0 rounded-lg bg-[#007AF5] opacity-0 blur-lg transition duration-100 group-hover:opacity-100"></span>
    </motion.button>
   
  );
}

export default Button;

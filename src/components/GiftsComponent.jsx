import { motion } from "framer-motion";
import { FaGift, FaGifts } from "react-icons/fa";

const GiftsComponent = ({ confetti }) => {
  return (
    <motion.div
      className="flex justify-center space-x-4 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={confetti}
      >
        <FaGifts className="text-4xl md:text-5xl text-pink-500 animate-bounce cursor-pointer hover:text-pink-400 transition duration-300" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={confetti}
      >
        <FaGift className="text-4xl md:text-5xl text-yellow-300 animate-bounce cursor-pointer hover:text-yellow-200 transition duration-300" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={confetti}
      >
        <FaGifts className="text-4xl md:text-5xl text-green-400 animate-bounce cursor-pointer hover:text-green-300 transition duration-300" />
      </motion.div>
    </motion.div>
  );
};

export default GiftsComponent;

import { motion } from "framer-motion";
import { useState } from "react";
import ConfettiComponent from "./components/ConfettiComponent";
import HeaderSection from "./components/HeaderSection";
import FormSection from "./components/FormSection";
import GiftsComponent from "./components/GiftsComponent";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-500 px-5 py-10">
      <ConfettiComponent show={showConfetti} />

      <motion.div
        className="text-center overflow-hidden bg-white bg-opacity-10 rounded-xl shadow-2xl p-8 backdrop-blur-sm max-w-6xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <HeaderSection confetti={handleConfetti} />
        <FormSection />
        <GiftsComponent confetti={handleConfetti} />
      </motion.div>
    </div>
  );
}

export default App;

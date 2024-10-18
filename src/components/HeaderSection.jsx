import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";

const HeaderSection = ({ confetti }) => {
  return (
    <header>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 mb-6">
        <motion.div
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1.5 }}
          onAnimationComplete={() => {
            document.querySelector(".cake1").animate(
              [
                { transform: "scale(1)", offset: 0 },
                { transform: "scale(1.2)", offset: 0.5 },
                { transform: "scale(1)", offset: 1 },
              ],
              {
                duration: 1000,
                iterations: Infinity,
              }
            );
          }}
          onClick={confetti}
          className="cursor-pointer cake1"
        >
          <FaBirthdayCake className="text-yellow-400 text-6xl md:text-8xl drop-shadow-lg hover:text-yellow-300 transition-colors duration-300" />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          🎉 <br />
          ¡Felicita fácilmente sin pensar en detalles!
          <br /> 🎉
        </motion.h1>

        <motion.div
          initial={{ rotate: 180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1.5 }}
          onAnimationComplete={() => {
            document.querySelector(".cake2").animate(
              [
                { transform: "scale(1)", offset: 0 },
                { transform: "scale(1.2)", offset: 0.5 },
                { transform: "scale(1)", offset: 1 },
              ],
              {
                duration: 1000,
                delay: 1.5,
                iterations: Infinity,
              }
            );
          }}
          onClick={confetti}
          className="cursor-pointer cake2"
        >
          <FaBirthdayCake className="text-yellow-400 text-6xl md:text-8xl drop-shadow-lg hover:text-yellow-300 transition-colors duration-300" />
        </motion.div>
      </div>

      <motion.p
        className="text-xl md:text-2xl font-bold text-white mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Crea un bonito recuerdo para tus seres queridos en segundos
      </motion.p>
    </header>
  );
};

export default HeaderSection;

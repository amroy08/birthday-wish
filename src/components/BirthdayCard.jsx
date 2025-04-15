import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";
import FloatingEmojis from "./FloatingEmojis";

const BirthdayCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      <FloatingEmojis />

      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 bg-gradient-to-br from-purple-700 via-pink-600 to-blue-500 px-6 py-8 sm:px-8 sm:py-10 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(255,255,255,0.15)] w-full max-w-[90%] sm:max-w-lg mx-auto text-center border border-white/10 backdrop-blur-md"
      >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-script text-white drop-shadow-md mb-4 sm:mb-6 leading-tight">
  🎉 Happy Birthday Sharviii
 
</h1>

        <p className="text-base sm:text-lg font-light leading-relaxed text-white/90">
          Wishing you a magical day filled with love, laughter, and all your
          favorite things. You deserve all the joy in the world ❤️
        </p>

        {!isMobile && (
          <div className="mt-6 sm:mt-8">
            <button
              onClick={triggerConfetti}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold px-5 py-3 text-sm sm:text-base rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              🎁 Send Your Wishes!
            </button>
          </div>
        )}
      </motion.div>

      {isMobile && (
        <div className="fixed bottom-4 left-0 right-0 px-4 z-20">
          <button
            onClick={triggerConfetti}
            className="w-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-bold py-4 rounded-full shadow-xl hover:scale-105 transition duration-300"
          >
            🎉 Tap for Surprise!
          </button>
        </div>
      )}
    </>
  );
};

export default BirthdayCard;

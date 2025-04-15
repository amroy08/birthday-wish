import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const GiftBox = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="flex justify-center mt-8 relative z-10">
      {!opened ? (
        <motion.img
          src="/gift-box.jpg"
          alt="Gift Box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
          className="w-24 cursor-pointer transition-transform duration-300"
        />
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 360] }}
          transition={{ duration: 1 }}
          className="text-white text-xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 px-6 py-3 rounded-full shadow-xl"
        >
          🎉 Surprise! You’re awesome! 🎂
        </motion.div>
      )}
    </div>
  );
};

export default GiftBox;

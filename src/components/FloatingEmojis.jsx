import { motion } from "framer-motion";

const emojis = ["🎈", "🎁", "🎉", "🎂", "💖"];

const FloatingEmojis = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {emojis.map((emoji, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", x: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
          }}
          className="absolute text-3xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
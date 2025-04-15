import { motion } from "framer-motion";

const Confetti = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 opacity-60"
    />
  );
};

export default Confetti;

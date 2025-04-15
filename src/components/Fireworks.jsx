import Lottie from "lottie-react";
import fireworks from "../assets/fireworks.json";

const Fireworks = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Lottie animationData={fireworks} loop autoplay />
    </div>
  );
};

export default Fireworks;

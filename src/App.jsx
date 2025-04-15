import BirthdayCard from './components/BirthdayCard';
import Sparkles from './components/Sparkles';
import Fireworks from './components/Fireworks';
import HeartParticles from './components/HeartParticles'; 

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
      <HeartParticles />
      <Sparkles />
      <Fireworks />
      <BirthdayCard />
    </div>
  );
};

export default App;

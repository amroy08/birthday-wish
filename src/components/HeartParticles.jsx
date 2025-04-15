const HeartParticles = () => {
    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-pink-400 rounded-full animate-float animate-delay-${i % 5} blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  export default HeartParticles;
  
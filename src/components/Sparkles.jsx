const Sparkles = () => {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-pulse absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 blur-sm opacity-70"></div>
        <div className="animate-ping absolute w-1.5 h-1.5 bg-yellow-300 rounded-full top-2/3 left-2/4 blur-sm opacity-80"></div>
        <div className="animate-pulse absolute w-1 h-1 bg-pink-400 rounded-full top-1/5 left-2/5 blur-md opacity-60"></div>
        <div className="animate-ping absolute w-2 h-2 bg-blue-400 rounded-full top-3/4 left-1/4 blur-sm opacity-80"></div>
      </div>
    );
  };
  
  export default Sparkles;
  
  
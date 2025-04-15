import { useEffect, useState } from "react";

const Typewriter = ({ text = '', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText(''); // Reset before starting
    const timer = setInterval(() => {
      setDisplayedText((prev) => {
        const nextChar = text.charAt(index);
        index++;
        if (index >= text.length) clearInterval(timer);
        return prev + nextChar;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;

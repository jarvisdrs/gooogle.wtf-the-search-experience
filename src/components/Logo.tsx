import { useState } from "react";

const Logo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const letters = [
    { char: "G", colorClass: "logo-blue" },
    { char: "o", colorClass: "logo-red" },
    { char: "o", colorClass: "logo-yellow" },
    { char: "o", colorClass: "logo-blue" },
    { char: "g", colorClass: "logo-green" },
    { char: "l", colorClass: "logo-blue" },
    { char: "e", colorClass: "logo-red" },
  ];

  return (
    <h1 className="select-none">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`logo-letter ${letter.colorClass} ${
            hoveredIndex === index ? "animate-logo-bounce" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ cursor: "default" }}
        >
          {letter.char}
        </span>
      ))}
    </h1>
  );
};

export default Logo;

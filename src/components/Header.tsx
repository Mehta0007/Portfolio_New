"use client";

import { useEffect, useState } from "react";

const rotatingWords = ["Mehta", "Developer", "Full-Stack", "Problem-Solver", "Human"];

export default function Header() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const currentWord = rotatingWords[wordIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((i) => {
        if (direction === "forward") {
          if (i === currentWord.length) {
            setDirection("backward");
            return i - 1;
          }
          return i + 1;
        } else {
          if (i === 0) {
            setDirection("forward");
            setWordIndex((w) => (w + 1) % rotatingWords.length);
            return 0;
          }
          return i - 1;
        }
      });
    }, 220);

    return () => clearInterval(interval);
  }, [currentWord, direction]);

  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="font-mono text-xl font-semibold">
        Ankit{" "}
        <span className="text-black">
          {currentWord.slice(0, charIndex)}
        </span>
        <span className="animate-pulse">_</span>
      </h1>

      <nav className="flex gap-4 text-sm">
        <a
          href="https://github.com/Mehta0007"
          target="_blank"
          className="hover:opacity-70 transition-opacity"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ankit-mehta-7340b034a/"
          target="_blank"
          className="hover:opacity-70 transition-opacity"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}

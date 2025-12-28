"use client";

import { useState } from "react";
import { programmingAdvice } from "@/app/data/programmingAdvice";
import RetroButton from "./ButtonHoverAnimation";


export default function LifeAdviceDice() {
  const [advice, setAdvice] = useState<string | null>(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);

    setTimeout(() => {
      const random = Math.floor(Math.random() * programmingAdvice.length);
      setAdvice(programmingAdvice[random]);
      setRolling(false);
    }, 500);
  };

  return (
    <div className="space-y-2">
     
      <RetroButton  onClick={rollDice}>
        roll advice!!

      </RetroButton>

      <div
        className={`inline-block text-2xl p-2 transition-transform ${
          rolling ? "rotate-360" : "rotate-0" 
        }`}
      >
        🎲
      </div>

      {advice && (
        <p className="italic text-sm text-gray-700">
          {advice}
        </p>
      )}
    </div>
  );
}

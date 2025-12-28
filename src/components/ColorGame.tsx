"use client";

import { useState } from "react";
import RetroButton from "./ButtonHoverAnimation";

export default function ColorGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [color, setColor] = useState<string | null>(null);

  return (
    <section className="space-y-3">
      {!gameStarted && (
    
        <RetroButton onClick={() => setGameStarted(true)} >

            Play game???
        </RetroButton>
      )}

      {gameStarted && color === null && (
        <div className="space-y-2">
          <h4 className="font-medium">Pick a color</h4>

          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            className="h-10 w-20"
          />
        </div>
      )}

      {color && (
        <div className="space-y-2">
          <p>Great... now it's ruined!</p>

        
          <RetroButton   onClick={() => {
              setColor(null);
              setGameStarted(false);
            }} >

            Reset
          </RetroButton>
        </div>
      )}

      {color && <style>{`body { background: ${color}; }`}</style>}
    </section>
  );
}

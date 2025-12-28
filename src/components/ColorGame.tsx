"use client";

import { useState } from "react";

export default function ColorGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [color, setColor] = useState<string | null>(null);

  return (
    <section className="space-y-3">
      {!gameStarted && (
        <button
          onClick={() => setGameStarted(true)}
          className="border px-3 py-1 rounded"
        >
          Play game???
        </button>
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

          <button
            onClick={() => {
              setColor(null);
              setGameStarted(false);
            }}
            className="border px-3 py-1 rounded"
          >
            Reset
          </button>
        </div>
      )}

      {color && (
        <style>{`body { background: ${color}; }`}</style>
      )}
    </section>
  );
}

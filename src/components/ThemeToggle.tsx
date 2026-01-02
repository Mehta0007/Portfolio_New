"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return stored === "dark" || (!stored && prefers);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    
  }, [dark]);

  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <>
<a href="https://medium.com/@ankitmmehta08"

className="  px-3 py-1 text-sm underline"
>Medium</a>
<a href="https://dev.to/mehta0007"

className="  px-3 py-1 text-sm underline"
>Dev.to</a>
   <button
  onClick={toggle}
  className="border rounded-full px-3 py-1 text-sm transition hover:-translate-y-[2px]"
>
  {dark ? "☀️" : "🌙"}
</button>
  </>
  );
}

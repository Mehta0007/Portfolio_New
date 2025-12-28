"use client";

import { useEffect, useState } from "react";

type AgeState = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
};

export default function Age() {
  const [age, setAge] = useState<AgeState>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  // ❗ change this to your real DOB
  const birthDate = new Date("2005-02-18T00:00:00Z");

  useEffect(() => {
let frame: number;

    const updateAge = () => {
      const now = new Date();

      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      let hours = now.getHours() - birthDate.getHours();
      let minutes = now.getMinutes() - birthDate.getMinutes();
      let seconds = now.getSeconds() - birthDate.getSeconds();
      let  milliseconds = now.getMilliseconds() - birthDate.getMilliseconds();


      // Fix negative month/day cases

        if (milliseconds < 0) {
            seconds -= 1;
            milliseconds += 1000
        }

        if (seconds < 0) {
            minutes -= 1;
            seconds += 60
        }

        if (minutes < 0) {
            hours -= 1;
            minutes += 60
        }


if (hours < 0) {
 days -= 1;
 hours += 24;
}

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += prevMonth;
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }


      setAge({ years, months, days, hours, minutes, seconds, milliseconds });

      frame = requestAnimationFrame(updateAge)
    };

    updateAge();



    return () => cancelAnimationFrame(frame);
  }, []);




  return (
    <p className=" text-black text-sm">
      been here for{" "}
      <AnimatedNumber value={age.years} /> years •{" "}
      <AnimatedNumber value={age.months} /> months •{" "}
      <AnimatedNumber value={age.days} /> days •{' '}
      <AnimatedNumber value={age.hours} /> hours •{" "}
      <AnimatedNumber value={age.minutes} /> minutes •{" "}
      <AnimatedNumber value={age.seconds} /> seconds •{" "}
      <AnimatedNumber value={age.milliseconds} /> ms
    </p>
  );

  function AnimatedNumber({ value, pad = 0, }: { value: number;
    pad?: number;
   }) {
    const safe = Number.isFinite(value) ? value : 0
  const [display, setDisplay] = useState(safe);

  useEffect(() => {
    let frame: number;
    const duration = 150; // ms
    const start = performance.now();
    const initial = display;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const current = initial + (value - initial) * progress;
      setDisplay(Number.isFinite(current) ? current : 0);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);
   
    const rounded = Math.round(display)  

  return (
     <span>
      {pad > 0 ? String(rounded).padStart(pad, "0") : rounded}
    </span>
  )
}






}

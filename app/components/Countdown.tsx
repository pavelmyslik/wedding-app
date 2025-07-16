"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-09-13T13:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-12 mt-12">
      <h2 className="text-4xl font-serif font-semibold text-[#D4B083] mb-2">Do svatby zbývá:</h2>
      <div className="w-16 h-0.5 bg-[#D4B083] mx-auto mb-6 rounded"></div>
      <div className="flex justify-center gap-12 text-xl md:text-2xl font-serif text-[#222]">
        <div className="flex flex-col gap-2 text-center">
          <div className="text-6xl font-bold">{timeLeft.days}</div>
          <div>dní</div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <div className="text-6xl font-bold">{timeLeft.hours}</div>
          <div>hodin</div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <div className="text-6xl font-bold">{timeLeft.minutes}</div>
          <div>minut</div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <div className="text-6xl font-bold">{timeLeft.seconds}</div>
          <div>sekund</div>
        </div>
      </div>
    </div>
  );
}

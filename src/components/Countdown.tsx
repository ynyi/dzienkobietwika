import { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-09-30T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full min-h-[400px] p-8 bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl shadow-sm border border-rose-200">
      <h2 className="text-2xl md:text-3xl font-serif text-rose-900 mb-8 text-center">
        Urodziny Wikusi
      </h2>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
        <TimeUnit value={timeLeft.days} label="Dni" />
        <TimeUnit value={timeLeft.hours} label="Godzin" />
        <TimeUnit value={timeLeft.minutes} label="Minut" />
        <TimeUnit value={timeLeft.seconds} label="Sekund" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white">
      <span className="text-4xl font-bold text-rose-600 font-mono">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-wider text-rose-400 mt-2 font-semibold">
        {label}
      </span>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
};

export default function CountdownTimer() {
  const TARGET_DATE = new Date("2025-12-01T23:59:59+05:30");

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const distance = TARGET_DATE.getTime() - now;

      if (distance <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Clear interval if expired
      if (newTimeLeft.isExpired) {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, [TARGET_DATE]);

  // Expired state
  if (timeLeft.isExpired) {
    return (
      <div className="inline-flex flex-col gap-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-400/60 bg-red-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-red-200">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
          <span>Enrollments are now closed</span>
        </div>
        <span className="text-[10px] text-gray-500 pl-4">
          Check back for future batches.
        </span>
      </div>
    );
  }

  // Active countdown
  const timeUnits: Array<{ value: number; label: string }> = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  const padValue = (value: number, padDays: boolean = false): string => {
    // Days don't need padding, but hours/minutes/seconds do
    return padDays ? String(value) : String(value).padStart(2, "0");
  };

  return (
    <div className="inline-flex flex-col gap-2 rounded-2xl border border-violet-500/40 bg-slate-900/60 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur-sm">
      <span className="text-[11px] font-medium uppercase tracking-wide text-violet-300">
        Enrollments close in
      </span>
      <div className="flex items-center gap-2 sm:gap-3">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center rounded-xl bg-slate-950/80 px-2 py-1.5 sm:px-3 sm:py-2 min-w-[44px] sm:min-w-[52px]"
          >
            <span className="tabular-nums text-sm sm:text-base font-semibold text-white">
              {padValue(unit.value, index === 0)}
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-400">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";

interface Props {
  targetId: string;
  roomOnlyLabel: string;
  withMealsLabel: string;
}

/**
 * Switches the Rooms section between room-only and with-breakfast prices by setting
 * `data-plan` on the section. Both prices are already in the HTML; CSS shows one.
 */
export function RateToggle({ targetId, roomOnlyLabel, withMealsLabel }: Props) {
  const [plan, setPlan] = useState<"roomOnly" | "withMeals">("roomOnly");
  const choose = (value: typeof plan) => {
    setPlan(value);
    document.getElementById(targetId)?.setAttribute("data-plan", value);
  };
  const options = [
    ["roomOnly", roomOnlyLabel],
    ["withMeals", withMealsLabel],
  ] as const;
  return (
    <div role="group" aria-label="Rate type" className="inline-flex rounded-full bg-forest-night/5 p-1 ring-1 ring-forest-night/10">
      {options.map(([value, label]) => (
        <button
          key={value}
          type="button"
          aria-pressed={plan === value}
          onClick={() => choose(value)}
          className={`h-11 rounded-full px-5 text-sm font-medium transition-colors sm:px-7 ${
            plan === value ? "bg-leaf text-parchment shadow" : "text-forest-night hover:text-leaf"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}



"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function RetroButton({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        `
        text-blue-700
        px-3 py-1
        rounded
        font-medium
        border border-zinc-800
        bg-[#f8f5f2]

        shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]
        transition-all duration-200

        hover:shadow-[0_0_0_0_rgba(0,0,0,0.8)]
        hover:translate-x-[2px]
        hover:translate-y-[2px]

        disabled:hover:translate-x-0
        disabled:hover:translate-y-0
        disabled:hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]
        disabled:opacity-60
        `,
        className
      )}
    >
      {children}
    </button>
  );
}

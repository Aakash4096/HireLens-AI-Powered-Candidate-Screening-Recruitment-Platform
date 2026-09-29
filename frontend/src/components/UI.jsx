import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Card Component ---
export const Card = ({ children, className, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn(
      "bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-orange-500/10 transition-shadow duration-300",
      className,
    )}
    {...props}
  >
    {children}
  </motion.div>
);

// --- Button Component ---
export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-bold transition-all duration-300 transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 border border-orange-400/20",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-orange-500/50",
    outline:
      "bg-transparent border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// --- Input Component ---
export const Input = ({ label, className, ...props }) => (
  <div className="flex flex-col gap-2 w-full">
    {label && (
      <label className="text-xs text-slate-400 font-bold ml-1 uppercase tracking-wider">
        {label}
      </label>
    )}

    <input
      className={cn(
        "bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-600",
        className,
      )}
      {...props}
    />
  </div>
);

// --- TextArea Component ---
export const TextArea = ({ label, className, ...props }) => (
  <div className="flex flex-col gap-2 w-full">
    {label && (
      <label className="text-xs text-slate-400 font-bold ml-1 uppercase tracking-wider">
        {label}
      </label>
    )}

    <textarea
      className={cn(
        "bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-600 min-h-[120px]",
        className,
      )}
      {...props}
    />
  </div>
);

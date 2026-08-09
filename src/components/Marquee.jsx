import { motion, useReducedMotion } from "motion/react";
import { marqueeItems } from "../data/content";

export default function Marquee() {
  const reduce = useReducedMotion();
  const run = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line bg-panel py-2"
    >
      <motion.div
        className="flex w-max"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 28,
          ease: "linear",
        }}
      >
        {[...run, ...run].map((item, i) => (
          <span
            key={i}
            className="font-mono mx-5 whitespace-nowrap text-[0.62rem] uppercase tracking-[0.08em] text-gold"
          >
            {item} <span className="opacity-40">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

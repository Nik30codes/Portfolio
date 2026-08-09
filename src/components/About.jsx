import { motion, useReducedMotion } from "motion/react";
import { profile } from "../data/content";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="label">About</span>
          <p className="font-display mt-5 text-2xl leading-[1.4] text-fg md:text-[1.75rem]">
            {profile.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

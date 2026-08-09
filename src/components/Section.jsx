import { motion, useReducedMotion } from "motion/react";

export default function Section({ id, index, title, children, tight = false }) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={tight ? "py-14" : "py-20 md:py-28"}>
      <div className="mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-10 flex items-baseline gap-4 border-t border-line pt-6">
            <span className="label mt-4 shrink-0">{index}</span>
            <h2 className="font-display mt-3 text-4xl leading-none tracking-tight text-fg md:text-5xl">
              {title}
            </h2>
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

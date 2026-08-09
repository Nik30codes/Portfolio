import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { modelResults } from "../data/content";

export default function ModelComparison() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(modelResults.models.length - 1);
  const max = 100;
  const model = modelResults.models[active];

  return (
    <div className="mt-8 rounded-xl border border-line bg-bg/60 p-6">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="label">Test accuracy by architecture</h4>
        <span className="font-mono text-[0.6rem] text-muted">
          {modelResults.classes.length} classes
        </span>
      </div>

      <div className="space-y-4">
        {modelResults.models.map((m, i) => {
          const isActive = i === active;
          return (
            <button
              key={m.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className="block w-full text-left"
            >
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <span
                  className={`font-mono text-[0.62rem] transition ${
                    isActive ? "text-accent" : "text-muted"
                  }`}
                >
                  {m.name}
                </span>
                <span
                  className={`font-display text-lg leading-none transition ${
                    isActive ? "text-fg" : "text-muted"
                  }`}
                >
                  {m.accuracy}%
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-surface">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: isActive ? "var(--accent)" : "var(--muted)",
                  }}
                  initial={reduce ? false : { width: 0 }}
                  whileInView={{ width: `${(m.accuracy / max) * 100}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.9,
                    delay: reduce ? 0 : i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 border-t border-line pt-4">
        <p className="font-mono mb-1 text-[0.6rem] uppercase tracking-[0.08em] text-accent">
          {model.name}
        </p>
        <p className="text-sm leading-relaxed text-muted">{model.note}</p>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted">
        {modelResults.caveat}
      </p>
    </div>
  );
}

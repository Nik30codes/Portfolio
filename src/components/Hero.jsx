import { motion, useReducedMotion } from "motion/react";
import HeroCanvas from "./HeroCanvas";
import portrait from "../assets/images/portrait.png";
import { profile, metrics } from "../data/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="top" className="relative overflow-hidden">
      <HeroCanvas />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-panel md:w-[8%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-panel md:w-[8%]"
      />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-16 md:py-28">
        <div>
          <motion.p {...rise(0)} className="label mb-5">
            {profile.role}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="font-display text-[3.25rem] leading-[0.85] tracking-tight text-fg sm:text-7xl lg:text-8xl"
          >
            NIKUNJ
            <br />
            <span className="text-accent">BHALLA</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-md text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white transition hover:bg-fg hover:text-bg"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-fg transition hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Portrait now sits in a defined frame instead of floating as a
            cutout, so the soft mask edge never meets the background. */}
        <motion.div {...rise(0.12)} className="relative mx-auto w-full max-w-[300px]">
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-full w-full rounded-[1.75rem] border border-accent/45"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-surface">
            <span
              aria-hidden="true"
              className="font-display pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 select-none text-[16rem] leading-none text-accent/18"
            >
              {profile.initial}
            </span>
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width="600"
              height="750"
              className="relative h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-line bg-surface">
        <dl className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-y-7 px-10 py-8 md:grid-cols-4 md:px-16">
          {metrics.map((m) => (
            <div key={m.label}>
              <dt className="label mb-1">{m.label}</dt>
              <dd className="font-display text-3xl leading-none text-fg">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

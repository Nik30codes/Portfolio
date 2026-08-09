import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="space-y-11">
        {experience.map((job) => (
          <article key={job.role + job.org} className="border-l-2 border-accent/70 pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl leading-tight text-fg">
                {job.role}
              </h3>
              <span className="font-mono text-[0.62rem] text-muted">{job.period}</span>
            </div>

            <p className="label mt-1">{job.org}</p>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-5 text-[15px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                >
                  {b}
                </li>
              ))}
            </ul>

            {job.project && (
              <a
                href={job.project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-xl border border-line bg-surface/50 p-5 transition hover:border-accent/50"
              >
                <span className="label">Project built in this role</span>
                <h4 className="font-display mt-2 text-lg leading-tight text-fg">
                  {job.project.name}{" "}
                  <span className="text-accent">&#8599;</span>
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {job.project.blurb}
                </p>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

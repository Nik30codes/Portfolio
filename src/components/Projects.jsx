import Section from "./Section";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="work" index="01" title="Selected work">
      <div className="space-y-14">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-line bg-surface/45 p-7 transition hover:border-accent/50 md:p-9"
          >
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <span className="label">{p.kind}</span>
                <h3 className="font-display mt-2 text-2xl leading-tight text-fg md:text-3xl">
                  {p.title}
                </h3>
              </div>
              <span className="font-mono text-[0.62rem] text-muted">{p.period}</span>
            </div>

            <dl className="space-y-4 text-[15px] leading-relaxed text-muted">
              <div>
                <dt className="label mb-1">Problem</dt>
                <dd>{p.problem}</dd>
              </div>
              <div>
                <dt className="label mb-1">Approach</dt>
                <dd>{p.approach}</dd>
              </div>
              <div>
                <dt className="label mb-1">Result</dt>
                <dd className="text-fg">{p.result}</dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="font-mono rounded-full border border-line px-3 py-1 text-[0.6rem] text-fg/75"
                >
                  {s}
                </li>
              ))}
            </ul>

            {p.note && (
              <p className="font-mono mt-5 text-[0.62rem] text-accent">{p.note}</p>
            )}


            {p.links.length > 0 && (
              <div className="mt-5 flex gap-5">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-accent underline-offset-4 hover:underline"
                  >
                    {l.text} &#8599;
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

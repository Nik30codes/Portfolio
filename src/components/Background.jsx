import Section from "./Section";
import { education, certifications, languages, interests } from "../data/content";

export default function Background() {
  return (
    <Section id="background" index="04" title="Background">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="label mb-5">Education</h3>
          <div className="space-y-7">
            {education.map((e) => (
              <div key={e.qualification}>
                <h4 className="font-display text-xl leading-tight text-fg">
                  {e.qualification}
                </h4>
                <p className="mt-1 text-sm text-muted">{e.place}</p>
                <p className="font-mono mt-1 text-[0.62rem] text-muted">
                  {e.period} &middot; {e.detail}
                </p>
              </div>
            ))}
          </div>

          <h3 className="label mb-4 mt-11">Languages</h3>
          <ul className="space-y-2">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex max-w-xs justify-between border-b border-line pb-2 text-sm"
              >
                <span className="text-fg">{l.name}</span>
                <span className="font-mono text-[0.62rem] text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label mb-5">Certifications &amp; coursework</h3>
          <div className="space-y-7">
            {certifications.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-xl leading-tight text-fg">
                  {c.title}
                </h4>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                {c.period && (
                  <p className="font-mono mt-1 text-[0.62rem] text-muted">{c.period}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono mt-2 inline-block text-[0.62rem] uppercase tracking-[0.08em] text-accent underline-offset-4 hover:underline"
                  >
                    {c.hrefLabel || "View certificate"} &#8599;
                  </a>
                )}
              </div>
            ))}
          </div>

          <h3 className="label mb-4 mt-11">Interests</h3>
          <ul className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm text-fg transition hover:border-accent hover:text-accent"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

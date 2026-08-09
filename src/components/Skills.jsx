import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" index="03" title="Technical skills">
      <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="label mb-3">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-surface/60 px-3 py-1.5 text-sm text-fg transition hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

import Section from "./Section";
import { profile } from "../data/content";

// Phone number intentionally excluded.
const channels = [
  { text: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { text: "LinkedIn", value: "in/nikunjbhalla", href: profile.links.linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Get in touch">
      <p className="mb-9 max-w-xl text-[15px] leading-relaxed text-muted">
        Seeking an AI/ML Engineer Internship for Winter 2026–27.
        Based in {profile.location}, studying Information Technology at Manipal University Jaipur.
      </p>

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {channels.map((c) => (
          <li key={c.text}>
            <a
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex h-full flex-col justify-between gap-2 bg-bg p-6 transition hover:bg-surface"
            >
              <span className="label">{c.text}</span>
              <span className="font-display break-all text-lg text-fg">
                {c.value} <span className="text-accent">&#8599;</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-7">
        <p className="font-mono text-[0.62rem] text-muted">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </Section>
  );
}

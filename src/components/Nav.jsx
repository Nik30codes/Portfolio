import { profile } from "../data/content";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", text: "Work" },
  { href: "#experience", text: "Experience" },
  { href: "#skills", text: "Skills" },
  { href: "#background", text: "Background" },
  { href: "#contact", text: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3"
      >
        <a href="#top" className="font-display text-xl tracking-tight text-fg">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-muted transition hover:text-accent"
              >
                {l.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-fg px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-bg transition hover:bg-accent"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

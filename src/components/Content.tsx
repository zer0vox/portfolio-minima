import { ArrowUpRight } from "lucide-react";
import Section, { Chips } from "./Section";
import {
  profile,
  projects,
  experience,
  skills,
  writing,
  education,
} from "../data";

function EntryTitle({ title, at }: { title: string; at?: string }) {
  return (
    <h3 className="text-base md:text-lg font-semibold leading-snug text-fg">
      {title}
      {at && <span className="font-normal text-muted"> — {at}</span>}
    </h3>
  );
}

function OutLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 mt-3 font-mono text-sm text-accent hover:underline underline-offset-4"
    >
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}

export default function Content() {
  return (
    <main className="max-w-screen-lg mx-auto px-5 sm:px-6 pb-8">
      {/* About */}
      <Section id="about" label="About">
        <p className="text-lg md:text-xl leading-relaxed text-fg/90 max-w-2xl">
          {profile.about}
        </p>
        <p className="mt-6 font-mono text-sm text-muted">{profile.role}</p>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Projects">
        <div className="space-y-10">
          {projects.map((p) => (
            <article key={p.title}>
              <EntryTitle title={p.title} at={p.at} />
              <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-accent text-muted">
                {p.points.map((pt, i) => (
                  <li key={i} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
              <Chips items={p.stack} />
              {p.link && <OutLink href={p.link.href} label={p.link.label} />}
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Experience">
        <div className="space-y-10">
          {experience.map((e) => (
            <article key={e.title + e.at}>
              <EntryTitle title={e.title} at={e.at} />
              <p className="mt-1 font-mono text-xs text-muted">
                {e.when} · {e.where}
              </p>
              <ul className="mt-3 space-y-1.5 pl-5 list-disc marker:text-accent text-muted">
                {e.points.map((pt, i) => (
                  <li key={i} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Skills">
        <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-[120px_1fr]">
          {skills.map((s) => (
            <div key={s.label} className="contents">
              <dt className="font-semibold text-fg">{s.label}</dt>
              <dd className="text-muted mb-2 sm:mb-0">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Writing */}
      <Section id="writing" label="Writing">
        <div className="space-y-8">
          {writing.map((w) => (
            <article key={w.title}>
              <EntryTitle title={w.title} />
              <p className="mt-1 font-mono text-xs text-muted">{w.when}</p>
              <p className="mt-2 text-muted">{w.sub}</p>
              <OutLink href={w.link.href} label={w.link.label} />
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" label="Education">
        <div className="space-y-6">
          {education.map((ed) => (
            <article key={ed.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <EntryTitle title={ed.title} />
                <span className="font-mono text-xs text-muted">{ed.when}</span>
              </div>
              <p className="mt-1 text-muted">{ed.sub}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <p className="text-lg md:text-xl text-fg/90 max-w-xl">
          Have a project in mind or just want to say hi? Reach out.
        </p>
        <ul className="mt-6 space-y-3 font-mono text-sm">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1 text-fg hover:text-accent transition-colors"
            >
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer me"
              className="inline-flex items-center gap-1 text-fg hover:text-accent transition-colors"
            >
              {profile.githubLabel}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </li>
          <li className="text-muted">{profile.location}</li>
        </ul>
      </Section>
    </main>
  );
}

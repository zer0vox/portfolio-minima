import type { ReactNode } from "react";

export default function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-line py-14 md:py-20 grid gap-6 md:grid-cols-[160px_1fr] md:gap-10"
    >
      <h2 className="font-mono text-xs tracking-[0.18em] uppercase text-muted flex items-start gap-2 md:pt-1">
        <span className="text-accent">/</span>
        {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 mt-4 p-0 list-none">
      {items.map((s) => (
        <li
          key={s}
          className="font-mono text-xs px-2.5 py-1.5 rounded border border-line text-muted"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

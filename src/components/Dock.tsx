import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Share2, X } from "lucide-react";

const BASE = 46; // resting tile size (px)
const MAX = 80; // magnified tile size (px)
const RANGE = 140; // pointer influence distance (px)

type Social = {
  label: string;
  href: string;
  bg: string; // tile background (app-icon style)
  glyph: React.ReactNode; // white brand mark
  ring?: boolean; // faint ring for dark tiles
};

const G = { fill: "#fff" } as const;

const socials: Social[] = [
  {
    // greenhueblues.me favicon: the studio's golden-spiral mark.
    label: "ghb studio",
    href: "https://greenhueblues.me",
    bg: "#0d0d0d",
    ring: true,
    glyph: (
      <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
        <path
          d="M5.00 48.69A33.37 33.37 0 0 1 38.37 15.31A20.63 20.63 0 0 1 59.00 35.94A12.75 12.75 0 0 1 46.25 48.69A7.88 7.88 0 0 1 38.37 40.81A4.87 4.87 0 0 1 43.24 35.94"
          fill="none"
          stroke="#a8c7ff"
          strokeWidth={6}
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mipxyz____/",
    bg: "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    glyph: (
      <svg viewBox="0 0 24 24" width="55%" height="55%" aria-hidden="true">
        <path
          {...G}
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sumip2279k",
    bg: "#1877F2",
    glyph: (
      <svg viewBox="0 0 24 24" width="56%" height="56%" aria-hidden="true">
        <path
          {...G}
          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/zer0vox",
    bg: "#181717",
    ring: true,
    glyph: (
      <svg viewBox="0 0 24 24" width="56%" height="56%" aria-hidden="true">
        <path
          {...G}
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumip-chaudhary/",
    bg: "#0A66C2",
    glyph: (
      <svg viewBox="0 0 24 24" width="56%" height="56%" aria-hidden="true">
        <path
          {...G}
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
];

function DockItem({
  item,
  mouseY,
  active,
  delay,
  onNavigate,
}: {
  item: Social;
  mouseY: MotionValue<number>;
  active: boolean;
  delay: number;
  onNavigate: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Distance from pointer to this tile's vertical center.
  const distance = useTransform(mouseY, (y) => {
    const b = ref.current?.getBoundingClientRect();
    if (!b) return RANGE + 1;
    return y - (b.y + b.height / 2);
  });
  const sizeTarget = useTransform(distance, [-RANGE, 0, RANGE], [BASE, MAX, BASE]);
  const size = useSpring(sizeTarget, { mass: 0.1, stiffness: 170, damping: 14 });

  const disabled = item.href === "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.3 }}
      transition={{ delay, type: "spring", stiffness: 380, damping: 24 }}
      style={{ width: size, height: size }}
      className="group relative flex-none"
    >
      <a
        ref={ref}
        href={item.href}
        {...(disabled
          ? { "aria-disabled": true, tabIndex: active ? 0 : -1 }
          : { target: "_blank", rel: "noreferrer me" })}
        aria-label={item.label}
        onClick={(e) => {
          if (disabled) e.preventDefault();
          onNavigate();
        }}
        className="grid h-full w-full place-items-center overflow-hidden rounded-[26%] shadow-lg transition-shadow hover:shadow-xl"
        style={{
          background: item.bg,
          boxShadow: item.ring ? "0 0 0 1px rgba(255,255,255,0.14) inset" : undefined,
        }}
      >
        {item.glyph}
      </a>
      {/* Tooltip to the left */}
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-fg opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
        {item.label}
      </span>
    </motion.div>
  );
}

export default function Dock() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const mouseY = useMotionValue(Infinity);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed z-40 flex flex-col-reverse items-end gap-3"
      style={{
        right: "max(1.5rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))",
      }}
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
    >
      {/* Toggle FAB */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close social links" : "Open social links"}
        className="relative grid h-12 w-12 flex-none place-items-center rounded-full bg-accent text-black shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <Share2
          className={`absolute h-5 w-5 transition-all duration-300 ${
            open ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
          strokeWidth={2.25}
        />
        <X
          className={`absolute h-5 w-5 transition-all duration-300 ${
            open ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
          }`}
          strokeWidth={2.25}
        />
      </button>

      <AnimatePresence>
        {open &&
          socials.map((s, i) => (
            <DockItem
              key={s.label}
              item={s}
              mouseY={mouseY}
              active={open}
              delay={i * 0.05}
              onNavigate={() => setOpen(false)}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}

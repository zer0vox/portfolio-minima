import HalftoneWordmarkFooter, { type FooterColumn } from "./HalftoneFooter";
import { useTheme } from "../theme";
import { profile } from "../data";

const columns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Writing", href: "#writing" },
      { label: "Education", href: "#education" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: profile.email, href: `mailto:${profile.email}` },
      { label: profile.githubLabel, href: profile.github },
    ],
  },
];

const FONT = '"PP Neue Montreal", "Inter Tight", Arial, system-ui, sans-serif';
const MONO = '"PP Neue Montreal", ui-monospace, Menlo, Consolas, monospace';

export default function SiteFooter() {
  const { isDark } = useTheme();

  const palette = isDark
    ? { background: "#0a0a0a", ink: "#f6f6f3", warm: "#c3e41d" }
    : { background: "#f4f4f1", ink: "#141414", warm: "#8aab00" };

  return (
    <HalftoneWordmarkFooter
      wordmark="SUMIP"
      label="Sumip Chaudhary"
      meta={`© ${new Date().getFullYear()} · ${profile.location}`}
      columns={columns}
      palette={palette}
      fontFamily={FONT}
      fontWeight={800}
      monoFamily={MONO}
      dotGap={6}
      crop={0.28}
      grain={0.5}
      height="clamp(420px, 54vh, 580px)"
    />
  );
}

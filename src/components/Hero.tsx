import { ChevronDown } from "lucide-react";
import BlurText from "./BlurText";
import { profile } from "../data";

const ACCENT = "#C3E41D";
const nameClass =
  "font-bold text-[64px] sm:text-[120px] md:text-[170px] lg:text-[210px] leading-[0.8] tracking-tighter uppercase justify-center whitespace-nowrap";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col">
      {/* Centered name */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="text-center">
          <BlurText
            text={profile.firstName}
            delay={100}
            animateBy="letters"
            direction="top"
            className={nameClass}
            style={{ color: ACCENT, fontFamily: "var(--font-display)", fontWeight: 800 }}
          />
          <BlurText
            text={profile.lastName}
            delay={100}
            animateBy="letters"
            direction="top"
            className={nameClass}
            style={{ color: ACCENT, fontFamily: "var(--font-display)", fontWeight: 800 }}
          />
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
        <div className="flex justify-center">
          <BlurText
            text={profile.tagline}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center text-muted"
            style={{ fontFamily: "var(--font-sans)" }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-fg transition-colors duration-300"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce" />
      </a>
    </section>
  );
}

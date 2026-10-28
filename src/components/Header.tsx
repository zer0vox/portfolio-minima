import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "../theme";
import { menuItems, profile } from "../data";
import SignatureMark from "./SignatureMark";

const ACCENT = "#C3E41D";

export default function Header() {
  const { isDark, toggle } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Collapse into a floating "island" once past the hero.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 64));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = menuItems.map((m) => m.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "px-4 pt-3 pointer-events-none" : "px-5 py-5 sm:px-6 sm:py-6"
      }`}
    >
      <nav
        className={`flex items-center w-full mx-auto justify-between gap-3 pointer-events-auto rounded-full border transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-[320px] sm:max-w-[360px] border-line px-4 py-2 shadow-xl backdrop-blur-xl"
            : "max-w-screen-2xl border-transparent px-0 py-0"
        }`}
        style={
          scrolled
            ? { backgroundColor: "color-mix(in srgb, var(--bg) 72%, transparent)" }
            : undefined
        }
      >
        {/* Menu button + dropdown */}
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            className="p-2 transition-colors duration-300 z-50 text-muted hover:text-fg"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            {isMenuOpen ? (
              <X
                className={`transition-all duration-500 ${scrolled ? "w-6 h-6" : "w-7 h-7 sm:w-8 sm:h-8"}`}
                strokeWidth={2}
              />
            ) : (
              <Menu
                className={`transition-all duration-500 ${scrolled ? "w-6 h-6" : "w-7 h-7 sm:w-8 sm:h-8"}`}
                strokeWidth={2}
              />
            )}
          </button>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-full left-0 w-[210px] md:w-[240px] shadow-2xl mt-2 ml-2 p-4 rounded-lg z-[100] bg-bg border border-line"
            >
              {menuItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 cursor-pointer transition-colors duration-300"
                    style={{ color: isActive ? ACCENT : "var(--fg)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = isActive ? ACCENT : "var(--fg)")
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Signature */}
        <a
          href="#top"
          className="block text-accent hover:opacity-80 transition-opacity select-none"
          aria-label={`${profile.firstName} ${profile.lastName} — home`}
        >
          <SignatureMark
            className={`w-auto transition-all duration-500 ${scrolled ? "h-7" : "h-9 sm:h-10"}`}
          />
        </a>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggle}
          className={`relative w-16 h-8 rounded-full hover:opacity-80 transition-all duration-500 origin-right ${scrolled ? "scale-[0.82]" : ""}`}
          style={{ backgroundColor: isDark ? "hsl(0 0% 15%)" : "hsl(0 0% 85%)" }}
          aria-label="Toggle colour theme"
          aria-pressed={isDark}
        >
          <span
            className="absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300"
            style={{
              backgroundColor: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
              transform: isDark ? "translateX(2rem)" : "translateX(0)",
            }}
          />
        </button>
      </nav>
    </header>
  );
}

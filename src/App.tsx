import { ThemeProvider } from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Dock from "./components/Dock";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <ThemeProvider>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-3 focus:py-2 focus:rounded focus:bg-fg focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <Hero />
      <Content />
      <SiteFooter />
      <Dock />
    </ThemeProvider>
  );
}

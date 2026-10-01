import { Hero } from "../components/Hero";
import { ShellPreview } from "../components/ShellPreview";
import { Themes } from "../components/Themes";
import { Components } from "../components/Components";
import { Footer } from "../components/Footer";
import type { ThemeId } from "../themes";
import { TERMUL_GALLERY_HREF } from "../urls";

type Props = {
  theme: ThemeId;
  onThemeChange: (id: ThemeId) => void;
};

export function HomePage({ theme, onThemeChange }: Props) {
  return (
    <>
      <Hero />
      <section className="shell-stage" aria-label="Product preview">
        <div className="shell-invite">
          <span>template · agent shell</span>
          <a href={TERMUL_GALLERY_HREF}>Preview template</a>
        </div>
        <ShellPreview theme={theme} />
      </section>
      <Themes active={theme} onChange={onThemeChange} />
      <Components />
      <Footer />
    </>
  );
}

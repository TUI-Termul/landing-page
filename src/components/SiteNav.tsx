import { Link, NavLink } from "react-router-dom";
import { themes, type ThemeId } from "../themes";

type Props = {
  theme: ThemeId;
  onThemeChange: (id: ThemeId) => void;
};

export function SiteNav({ theme, onThemeChange }: Props) {
  return (
    <header className="site-bar">
      <Link to="/" className="site-brand">
        Termul
      </Link>
      <nav className="site-nav" aria-label="Primary">
        <NavLink to="/" end>
          home
        </NavLink>
        <NavLink to="/components">components</NavLink>
        <a href="https://github.com/TUI-Termul/docs">docs</a>
        <a href="https://github.com/TUI-Termul/termul">github</a>
      </nav>
      <label className="theme-pick">
        <span className="sr-only">Theme</span>
        <select
          value={theme}
          onChange={(e) => onThemeChange(e.target.value as ThemeId)}
          aria-label="Theme"
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </label>
    </header>
  );
}

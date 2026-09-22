import { Link } from "react-router-dom";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="brand reveal" style={{ animationDelay: "40ms" }}>
          Termul
        </p>
        <h1 className="reveal" style={{ animationDelay: "120ms" }}>
          Design system for terminal UIs
        </h1>
        <p className="lede reveal" style={{ animationDelay: "200ms" }}>
          Flutter TUI components — monospace chrome, status glyphs, panes, and
          prompts. Web-first, ready for Android &amp; iOS.
        </p>
        <div className="actions reveal" style={{ animationDelay: "280ms" }}>
          <Link className="btn primary" to="/components">
            Browse components
          </Link>
          <a className="btn" href="https://github.com/TUI-Termul/termul">
            View source
          </a>
        </div>
      </div>
    </header>
  );
}

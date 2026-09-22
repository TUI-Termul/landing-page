import { themes, type ThemeId } from "../themes";

type Props = {
  active: ThemeId;
  onChange: (id: ThemeId) => void;
};

export function Themes({ active, onChange }: Props) {
  return (
    <section className="section themes" id="themes">
      <div className="section-head">
        <h2>Themes</h2>
        <p>Four built-in palettes. Switch to recolor the shell above.</p>
      </div>
      <div className="theme-row">
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`theme-swatch${active === t.id ? " active" : ""}`}
            data-swatch={t.id}
            onClick={() => onChange(t.id)}
            aria-pressed={active === t.id}
            aria-label={`Theme ${t.label}`}
          >
            <span className="swatch-chips" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="swatch-label">{t.label}</span>
            <span className="swatch-mood">{t.mood}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { catalogItems, ComponentGallery } from "../components/ComponentCatalog";
import { Footer } from "../components/Footer";

export function ComponentsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catalogItems;
    return catalogItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <section className="section gallery-hero">
        <p className="eyebrow">catalog</p>
        <h1>Components</h1>
        <p className="lede">
          Full preview of the Termul Flutter TUI kit — {catalogItems.length}{" "}
          building blocks. Switch themes from the top bar to recolor every
          sample.
        </p>

        <label className="comp-search">
          <span className="comp-search-prompt" aria-hidden="true">
            ❯
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search components…"
            autoComplete="off"
            spellCheck={false}
            aria-label="Search components"
          />
          {query ? (
            <button
              type="button"
              className="comp-search-clear"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              esc
            </button>
          ) : null}
        </label>

        <p className="comp-search-meta" aria-live="polite">
          {filtered.length === catalogItems.length
            ? `${catalogItems.length} components`
            : `${filtered.length} of ${catalogItems.length} components`}
        </p>

        {filtered.length > 0 ? (
          <nav className="comp-toc" aria-label="Component index">
            {filtered.map((item) => (
              <a key={item.name} href={`#comp-${item.name.toLowerCase()}`}>
                {item.name}
              </a>
            ))}
          </nav>
        ) : null}
      </section>

      <section className="section gallery-body" aria-label="Component previews">
        {filtered.length > 0 ? (
          <ComponentGallery items={filtered} />
        ) : (
          <p className="comp-empty">
            No components match <code>{query.trim()}</code>.
            <button
              type="button"
              className="btn"
              onClick={() => setQuery("")}
            >
              Clear search
            </button>
          </p>
        )}
        <div className="comp-cta">
          <Link className="btn" to="/">
            ← Back to home
          </Link>
          <a className="btn primary" href="https://github.com/TUI-Termul/termul">
            View source
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

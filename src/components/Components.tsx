import { Link } from "react-router-dom";
import { catalogItems, ComponentGallery } from "./ComponentCatalog";

const teaser = catalogItems.slice(0, 4);

export function Components() {
  return (
    <section className="section components" id="components">
      <div className="section-head">
        <h2>Components</h2>
        <p>Building blocks for agent multiplexers and terminal chrome.</p>
      </div>
      <ComponentGallery items={teaser} idPrefix="home" />
      <div className="comp-cta">
        <Link className="btn primary" to="/components">
          Browse all {catalogItems.length} components
        </Link>
      </div>
    </section>
  );
}

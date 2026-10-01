import { Link } from "react-router-dom";
import { TERMUL_GALLERY_HREF } from "../urls";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">Termul</div>
      <p>Flutter TUI component kit. MIT licensed.</p>
      <div className="footer-links">
        <Link to="/">home</Link>
        <Link to="/components">components</Link>
        <a href={TERMUL_GALLERY_HREF}>preview</a>
        <a href="https://github.com/TUI-Termul/termul">termul</a>
      </div>
    </footer>
  );
}

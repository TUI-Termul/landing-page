import { Link } from "react-router-dom";
import { TemplateShell } from "../components/TemplateShell";
import type { ThemeId } from "../themes";

type Props = {
  theme: ThemeId;
};

export function PreviewPage({ theme }: Props) {
  return (
    <div className="preview-page">
      <div className="preview-bar">
        <Link to="/">← home</Link>
        <span className="preview-title">template · agent shell</span>
        <span className="preview-meta">click a pane, then type</span>
      </div>
      <TemplateShell theme={theme} />
    </div>
  );
}

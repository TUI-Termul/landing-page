import type { ThemeId } from "../themes";

const workspaces = [
  { name: "agents", agents: ["claude ●", "codex ○"] },
  { name: "deploy", agents: ["ship ◉"] },
];

const logs = [
  { tone: "dim", text: "$ termul attach prod-west" },
  { tone: "muted", text: "session opened · pane 0" },
  { tone: "accent", text: "❯ plan rollout for v0.4" },
  { tone: "normal", text: "● drafting migration notes…" },
  { tone: "cyan", text: "  · check health endpoints" },
  { tone: "cyan", text: "  · freeze feature flags" },
  { tone: "green", text: "✓ ready for review" },
];

type Props = {
  theme: ThemeId;
};

export function ShellPreview({ theme }: Props) {
  return (
    <div className="shell" aria-label={`Termul shell preview — ${theme}`}>
      <aside className="shell-sidebar">
        <div className="shell-brand">
          <span className="glyph">◈</span> termul
        </div>
        {workspaces.map((ws) => (
          <div key={ws.name} className="workspace">
            <div className="workspace-name">{ws.name}</div>
            {ws.agents.map((agent) => (
              <div
                key={agent}
                className={`agent${agent.includes("claude") ? " active" : ""}`}
              >
                {agent}
              </div>
            ))}
          </div>
        ))}
        <div className="shell-foot">ctrl+b · help</div>
      </aside>

      <div className="shell-main">
        <div className="shell-tabs">
          <span className="tab active">plan.md</span>
          <span className="tab">logs</span>
          <span className="tab add">+</span>
        </div>
        <div className="shell-pane">
          <div className="pane-title">
            <span>claude · working</span>
            <span className="pane-meta">{theme} / live</span>
          </div>
          <div className="pane-body">
            {logs.map((line) => (
              <div key={line.text} className={`line ${line.tone}`}>
                {line.text}
              </div>
            ))}
            <div className="line prompt">
              ❯ <span className="cursor" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

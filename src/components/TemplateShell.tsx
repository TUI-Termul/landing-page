import { useState } from "react";
import type { FormEvent } from "react";
import type { ThemeId } from "../themes";

type Line = { id: string; tone: string; text: string };
type TabId = "plan" | "logs" | "scratch";

type Agent = {
  id: string;
  name: string;
  mark: string;
  status: string;
};

type Workspace = {
  id: string;
  name: string;
  agents: Agent[];
};

const workspaces: Workspace[] = [
  {
    id: "agents",
    name: "agents",
    agents: [
      { id: "claude", name: "claude", mark: "●", status: "working" },
      { id: "codex", name: "codex", mark: "○", status: "idle" },
    ],
  },
  {
    id: "deploy",
    name: "deploy",
    agents: [{ id: "ship", name: "ship", mark: "◉", status: "watching" }],
  },
];

const tabs: { id: TabId; label: string }[] = [
  { id: "plan", label: "plan.md" },
  { id: "logs", label: "logs" },
  { id: "scratch", label: "+" },
];

const seed: Record<TabId, Line[]> = {
  plan: [
    { id: "p1", tone: "dim", text: "$ termul attach prod-west" },
    { id: "p2", tone: "muted", text: "session opened · pane 0" },
    { id: "p3", tone: "accent", text: "❯ plan rollout for v0.4" },
    { id: "p4", tone: "normal", text: "● drafting migration notes…" },
    { id: "p5", tone: "cyan", text: "  · check health endpoints" },
    { id: "p6", tone: "cyan", text: "  · freeze feature flags" },
    { id: "p7", tone: "green", text: "✓ ready for review" },
  ],
  logs: [
    { id: "l1", tone: "dim", text: "$ termul logs --follow ship" },
    { id: "l2", tone: "muted", text: "14:02  health /ready 200" },
    { id: "l3", tone: "cyan", text: "14:02  flags frozen · v0.4" },
    { id: "l4", tone: "green", text: "14:03  rollout plan attached" },
  ],
  scratch: [],
};

let lineSeq = 0;
function nextId() {
  lineSeq += 1;
  return `n${lineSeq}`;
}

type Props = {
  theme: ThemeId;
};

export function TemplateShell({ theme }: Props) {
  const [workspaceId, setWorkspaceId] = useState(workspaces[0].id);
  const [agentId, setAgentId] = useState(workspaces[0].agents[0].id);
  const [tab, setTab] = useState<TabId>("plan");
  const [draft, setDraft] = useState("");
  const [lines, setLines] = useState(seed);

  const workspace =
    workspaces.find((ws) => ws.id === workspaceId) ?? workspaces[0];
  const agent =
    workspace.agents.find((item) => item.id === agentId) ??
    workspace.agents[0];

  function submit(event: FormEvent) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setLines((current) => ({
      ...current,
      [tab]: [
        ...current[tab],
        { id: nextId(), tone: "accent", text: `❯ ${text}` },
        {
          id: nextId(),
          tone: "green",
          text: `● queued on ${agent.name} · ${tabs.find((item) => item.id === tab)?.label}`,
        },
      ],
    }));
    setDraft("");
  }

  return (
    <div className="shell shell-live" aria-label={`Template preview — ${theme}`}>
      <aside className="shell-sidebar">
        <div className="shell-brand">
          <span className="glyph">◈</span> termul
        </div>
        {workspaces.map((ws) => (
          <div key={ws.id} className="workspace">
            <div className="workspace-name">{ws.name}</div>
            {ws.agents.map((item) => {
              const active = workspace.id === ws.id && agent.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`agent${active ? " active" : ""}`}
                  aria-pressed={active}
                  onClick={() => {
                    setWorkspaceId(ws.id);
                    setAgentId(item.id);
                  }}
                >
                  {item.name} {item.mark}
                </button>
              );
            })}
          </div>
        ))}
        <div className="shell-foot">↵ send · click a pane to focus</div>
      </aside>

      <div className="shell-main">
        <div className="shell-tabs" role="tablist" aria-label="Template panes">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={`tab${item.id === "scratch" ? " add" : ""}${
                tab === item.id ? " active" : ""
              }`}
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="shell-pane">
          <div className="pane-title">
            <span>
              {agent.name} · {agent.status}
            </span>
            <span className="pane-meta">{theme} / live</span>
          </div>
          <div className="pane-body" aria-live="polite">
            {lines[tab].length === 0 ? (
              <div className="line dim">empty buffer · type below to try the template</div>
            ) : (
              lines[tab].map((line) => (
                <div key={line.id} className={`line ${line.tone}`}>
                  {line.text}
                </div>
              ))
            )}
          </div>
          <form className="shell-prompt" onSubmit={submit}>
            <span className="shell-prompt-mark" aria-hidden="true">
              ❯
            </span>
            <label className="sr-only" htmlFor="template-prompt">
              Send to {agent.name}
            </label>
            <input
              id="template-prompt"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={`send to ${agent.name}…`}
              autoComplete="off"
              spellCheck={false}
            />
            <button type="submit" className="shell-prompt-send">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

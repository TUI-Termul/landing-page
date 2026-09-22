import { useState, type ReactNode } from "react";

export type CatalogItem = {
  name: string;
  desc: string;
  preview: ReactNode;
};

function PreviewText() {
  return (
    <div className="pv pv-text">
      <span className="tone-normal">normal</span>
      <span className="tone-muted">muted</span>
      <span className="tone-dim">dim</span>
      <span className="tone-accent">accent</span>
      <span className="tone-cyan">cyan</span>
      <span className="tone-green">green</span>
    </div>
  );
}

function PreviewButton() {
  return (
    <div className="pv pv-row">
      <button type="button" className="tui-btn primary">
        <i className="mark" aria-hidden="true" />
        connect
      </button>
      <button type="button" className="tui-btn ghost">
        ghost
      </button>
      <button type="button" className="tui-btn danger">
        disconnect
      </button>
    </div>
  );
}

function PreviewInput() {
  return (
    <div className="pv pv-input" tabIndex={0}>
      <span className="prompt">❯</span>
      <span className="value">plan rollout for v0.4</span>
      <span className="block-cursor" aria-hidden="true" />
    </div>
  );
}

function PreviewStatusDot() {
  return (
    <div className="pv pv-row pv-status">
      <span className="tone-green">● working</span>
      <span className="tone-accent">◉ blocked</span>
      <span className="tone-cyan">● done</span>
      <span className="tone-dim">○ idle</span>
      <span className="tone-muted">· unknown</span>
    </div>
  );
}

function PreviewBadge() {
  return (
    <div className="pv pv-row">
      <span className="tui-badge">claude</span>
      <span className="tui-badge">codex</span>
      <span className="tui-badge tone-accent">live</span>
      <span className="tui-badge">ctrl+b</span>
    </div>
  );
}

function PreviewTabs() {
  const [index, setIndex] = useState(0);
  const tabs = ["plan.md", "logs", "ssh"];
  return (
    <div className="pv pv-tabs">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          type="button"
          className={`tui-tab${i === index ? " active" : ""}`}
          onClick={() => setIndex(i)}
        >
          {tab}
        </button>
      ))}
      <span className="tui-tab-meta">+ split</span>
    </div>
  );
}

function PreviewSidebar() {
  return (
    <div className="pv pv-sidebar">
      <div className="sb-brand">
        <span className="glyph">◈</span> termul
      </div>
      <div className="sb-section">agents</div>
      <div className="sb-row active">claude ●</div>
      <div className="sb-row">codex ○</div>
      <div className="sb-section">deploy</div>
      <div className="sb-row">ship ◉</div>
    </div>
  );
}

function PreviewPane() {
  return (
    <div className="pv pv-pane">
      <div className="pane-bar">
        <span>claude · working</span>
        <span className="tone-dim">pane 0</span>
      </div>
      <div className="pane-log">
        <div className="tone-dim">$ termul attach prod-west</div>
        <div className="tone-muted">session opened</div>
        <div className="tone-accent">❯ draft migration notes</div>
        <div className="tone-green">✓ ready for review</div>
      </div>
      <div className="pane-foot tone-dim">ctrl+b · help</div>
    </div>
  );
}

function PreviewBox() {
  return (
    <div className="pv pv-box">
      <div className="box-top">
        <span className="corner">┌</span>
        <span className="title">session</span>
        <span className="rule" />
        <span className="corner">┐</span>
      </div>
      <div className="box-body">
        <div>host  10.0.0.12</div>
        <div>user  deploy</div>
        <div className="tone-green">state connected</div>
      </div>
      <div className="box-bot">
        <span className="corner">└</span>
        <span className="rule" />
        <span className="foot">esc close</span>
        <span className="corner">┘</span>
      </div>
    </div>
  );
}

function PreviewField() {
  return (
    <label className="pv pv-field">
      <span className="field-label">host</span>
      <span className="field-control">10.0.0.12</span>
    </label>
  );
}

function PreviewSelect() {
  const [value, setValue] = useState("paper");
  const options = ["paper", "mocha", "phosphor"];
  return (
    <div className="pv pv-row">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`tui-btn ${value === opt ? "primary" : "ghost"}`}
          onClick={() => setValue(opt)}
        >
          {value === opt ? <i className="mark" aria-hidden="true" /> : null}
          {opt}
        </button>
      ))}
    </div>
  );
}

function PreviewSwitch() {
  const [on, setOn] = useState(true);
  return (
    <div className="pv pv-row pv-switch">
      <button
        type="button"
        className={`tui-switch${on ? " on" : ""}`}
        aria-pressed={on}
        aria-label="Toggle live sync"
        onClick={() => setOn((v) => !v)}
      >
        <span className="knob" />
      </button>
      <span className={on ? "tone-accent" : "tone-dim"}>
        live sync {on ? "on" : "off"}
      </span>
    </div>
  );
}

function PreviewDialog() {
  return (
    <div className="pv pv-dialog">
      <div className="dlg-title">disconnect host?</div>
      <div className="dlg-msg tone-muted">
        Session to prod-west will close.
      </div>
      <div className="dlg-actions">
        <button type="button" className="tui-btn ghost">
          cancel
        </button>
        <button type="button" className="tui-btn danger">
          disconnect
        </button>
      </div>
    </div>
  );
}

function PreviewToast() {
  return (
    <div className="pv pv-toast-stack" aria-label="Toast stack preview">
      <div className="pv-toast">
        <span className="toast-mark" aria-hidden="true">
          i
        </span>
        <div className="toast-copy">
          <div className="toast-title">Session attached</div>
          <div className="toast-body tone-muted">
            Agent panes stay alive on this host.
          </div>
        </div>
        <button type="button" className="toast-action">
          open
        </button>
        <button type="button" className="toast-close" aria-label="Close">
          ×
        </button>
        <span className="toast-timer" style={{ width: "62%" }} aria-hidden="true" />
      </div>
      <div className="pv-toast">
        <span className="toast-mark" aria-hidden="true">
          x
        </span>
        <div className="toast-copy">
          <div className="toast-title">Connection refused</div>
          <div className="toast-body tone-muted">
            Nothing is listening on port 22.
          </div>
        </div>
        <button type="button" className="toast-action">
          retry
        </button>
        <button type="button" className="toast-close" aria-label="Close">
          ×
        </button>
        <span className="toast-timer" style={{ width: "28%" }} aria-hidden="true" />
      </div>
    </div>
  );
}

function PreviewSheet() {
  return (
    <div className="pv pv-sheet" aria-label="Bottom sheet preview">
      <div className="sheet-handle" aria-hidden="true" />
      <div className="sheet-title">host key</div>
      <div className="sheet-message">Trust 10.0.0.12?</div>
      <div className="sheet-detail tone-muted">
        First connection. Match the fingerprint on the server before trusting.
      </div>
      <div className="sheet-actions">
        <button type="button" className="tui-btn ghost">
          cancel
        </button>
        <button type="button" className="tui-btn primary">
          <i className="mark" aria-hidden="true" />
          trust
        </button>
      </div>
    </div>
  );
}

function PreviewMenu() {
  return (
    <div className="pv pv-menu" aria-label="Context menu preview">
      <div className="menu-row">
        <span className="menu-check" aria-hidden="true" />
        <span className="menu-label">Attach tmux</span>
      </div>
      <div className="menu-row">
        <span className="menu-check" aria-hidden="true" />
        <span className="menu-label">Edit</span>
        <span className="menu-shortcut tone-dim">↵</span>
      </div>
      <div className="menu-row">
        <span className="menu-check" aria-hidden="true">
          ✓
        </span>
        <span className="menu-label">Word wrap</span>
      </div>
      <div className="menu-divider" />
      <div className="menu-row destructive">
        <span className="menu-check" aria-hidden="true" />
        <span className="menu-label">Delete</span>
        <span className="menu-shortcut tone-dim">⌫</span>
      </div>
      <div className="menu-row disabled">
        <span className="menu-check" aria-hidden="true" />
        <span className="menu-label">Copy link address</span>
      </div>
    </div>
  );
}

function PreviewTooltip() {
  return (
    <div className="pv pv-tooltip-demo" aria-label="Tooltip preview">
      <div className="tooltip-icons">
        <span className="tooltip-icon" title="Settings">
          ⚙
        </span>
        <span className="tooltip-icon" title="Close tab">
          ×
        </span>
        <span className="tooltip-icon" title="New tab">
          ＋
        </span>
      </div>
      <div className="tooltip-bubble" role="tooltip">
        Settings
      </div>
    </div>
  );
}

function PreviewProgress() {
  return (
    <div className="pv pv-progress" aria-label="Progress preview">
      <div className="progress-spinner">
        <span className="spinner-glyph" aria-hidden="true">
          ⠹
        </span>
        <span>Running query…</span>
      </div>
      <div className="progress-block">
        <div className="progress-label tone-muted">Uploading notes.md  42%</div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: "42%" }} />
        </div>
      </div>
      <div className="progress-track indeterminate">
        <div className="progress-fill sweep" />
      </div>
      <div className="progress-banner">⠋ CONNECTING…</div>
    </div>
  );
}

function PreviewTransferRow() {
  return (
    <div className="pv pv-transfer" aria-label="Transfer row preview">
      <div className="transfer-row">
        <span className="transfer-dir tone-accent" aria-hidden="true">
          ↑
        </span>
        <div className="transfer-body">
          <div className="transfer-name">notes.md</div>
          <div className="transfer-meta tone-muted">
            Uploading to prod-west · 410 KB of 977 KB · 80 KB/s
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "42%" }} />
          </div>
        </div>
        <button type="button" className="transfer-action" aria-label="Cancel">
          ×
        </button>
      </div>
      <div className="transfer-row">
        <span className="transfer-dir tone-accent" aria-hidden="true">
          ↓
        </span>
        <div className="transfer-body">
          <div className="transfer-name">dump.sql.gz</div>
          <div className="transfer-meta tone-muted">
            Downloaded from db-1 · 4.6 MB · 2.0 MB/s
          </div>
        </div>
        <button type="button" className="tui-btn ghost">
          open
        </button>
      </div>
    </div>
  );
}

function PreviewDataGrid() {
  return (
    <div className="pv pv-grid" aria-label="Data grid and JSON preview">
      <div className="grid-table">
        <div className="grid-row head">
          <span>id</span>
          <span>email</span>
          <span>role</span>
        </div>
        <div className="grid-row dirty">
          <span>1</span>
          <span>ada@termul.dev</span>
          <span className="cell-dirty">admin</span>
        </div>
        <div className="grid-row">
          <span>2</span>
          <span>lin@termul.dev</span>
          <span className="cell-null">NULL</span>
        </div>
        <div className="grid-row deleted">
          <span>4</span>
          <span>old@termul.dev</span>
          <span>viewer</span>
        </div>
      </div>
      <div className="json-card">
        <div className="json-card-head">
          <span className="tone-dim">1</span>
          <span className="tone-dim">⎘</span>
        </div>
        <div className="json-line">
          <span className="json-key">email</span>:{" "}
          <span className="json-str">"ada@termul.dev"</span>
        </div>
        <div className="json-line">
          <span className="json-twist">▸</span>{" "}
          <span className="json-key">meta</span>
          <span className="tone-muted">: Object(2)</span>
        </div>
      </div>
    </div>
  );
}

function PreviewDiff() {
  return (
    <div className="pv pv-diff" aria-label="Diff view preview">
      <div className="diff-file-head">
        <span className="diff-change-bar" aria-hidden="true">
          <i className="g" />
          <i className="g" />
          <i className="r" />
          <i />
          <i />
        </span>
        <span className="tone-green">+2</span>
        <span className="tone-red">−1</span>
        <span className="diff-path">lib/main.dart</span>
      </div>
      <div className="diff-hunk">@@ -10,3 +10,4 @@</div>
      <div className="diff-split">
        <div className="diff-side removed">
          <span className="gutter">11</span>
          <span className="pref">−</span>
          <span>runApp(const App());</span>
        </div>
        <div className="diff-side added">
          <span className="gutter">11</span>
          <span className="pref">+</span>
          <span>runApp(const TermulApp());</span>
        </div>
      </div>
    </div>
  );
}

function PreviewCodeEditor() {
  return (
    <div className="pv pv-code" aria-label="Code editor preview">
      <div className="code-head">
        <div className="code-titles">
          <span className="code-path">docs/README.md</span>
          <span className="tone-accent">Unsaved changes</span>
        </div>
        <div className="code-mode">
          <span className="tui-chip active">source</span>
          <span className="tui-chip">preview</span>
        </div>
      </div>
      <div className="code-find">
        <span className="code-find-q">Termul</span>
        <span className="tone-dim">1/2</span>
        <span className="tone-dim">×</span>
      </div>
      <div className="code-line">
        <span className="gutter">1</span>
        <span className="tone-accent"># README</span>
      </div>
      <div className="code-line hi">
        <span className="gutter">2</span>
        <span>Termul file tab.</span>
      </div>
      <div className="code-line">
        <span className="gutter">3</span>
        <span className="tone-cyan">```dart</span>
      </div>
    </div>
  );
}

function PreviewFileTree() {
  return (
    <div className="pv pv-tree" aria-label="File tree preview">
      <div className="tree-bar">
        <span>
          EXPLORER <span className="tone-dim">prod-west</span>
        </span>
        <span className="tone-dim">/</span>
      </div>
      <div className="tree-root">
        <span>HOME ▾</span>
        <span className="tone-dim">+ ▣ ↑ ↻</span>
      </div>
      <div className="tree-row">
        <span className="tone-accent">▾</span> src
      </div>
      <div className="tree-row nest selected">
        <span className="guide" />
        <span className="tone-dim">·</span> main.dart
      </div>
      <div className="tree-row nest">
        <span className="guide" />
        <span className="tone-accent">▸</span> lib
      </div>
      <div className="tree-row">
        <span className="tone-dim">·</span> README.md
      </div>
    </div>
  );
}

function PreviewMagicKey() {
  return (
    <div className="pv pv-magic" aria-label="Magic key preview">
      <div className="magic-stage">
        <span className="magic-petal n">↑</span>
        <span className="magic-petal ne">ESC</span>
        <span className="magic-petal e">→</span>
        <span className="magic-petal se">TAB</span>
        <span className="magic-petal s">↓</span>
        <span className="magic-petal sw">^C</span>
        <span className="magic-petal w">←</span>
        <span className="magic-petal nw">^D</span>
        <span className="magic-hub">⏎</span>
      </div>
      <div className="tone-dim magic-cap">tap Enter · hold for rings · dock to edge</div>
    </div>
  );
}

function PreviewSplit() {
  return (
    <div className="pv pv-split" aria-label="Split pane preview">
      <div className="split-strip">
        <span className="split-group">
          <span className="tone-accent">▥</span>
          <span className="split-chip on">shell</span>
          <span className="split-chip">files</span>
        </span>
        <span className="split-chip">chat</span>
      </div>
      <div className="split-panes">
        <div className="split-pane focused">
          <span className="tone-dim">shell</span>
          <span>❯ ls</span>
        </div>
        <div className="split-grip" aria-hidden="true" />
        <div className="split-pane">
          <span className="tone-dim">files</span>
          <span>src/</span>
        </div>
      </div>
    </div>
  );
}

function PreviewChat() {
  return (
    <div className="pv pv-chat" aria-label="Chat bubble preview">
      <div className="chat-layout">
        <div className="chat-sessions">
          <div className="chat-sec">RUNNING</div>
          <div className="chat-sess on">
            <span className="tone-green">●</span> fix magic key
          </div>
          <div className="chat-sec">FINISHED (1)</div>
          <div className="chat-sess">
            <span className="tone-dim">○</span> readme polish
          </div>
        </div>
        <div className="chat-thread">
          <div className="chat-bubble">Add a split view.</div>
          <div className="chat-tool">
            <span className="tone-accent">◇</span> Read{" "}
            <span className="tone-dim">tui_split.dart</span>
          </div>
          <div className="chat-answer">Wired TuiSplitView with a drag grip.</div>
        </div>
      </div>
    </div>
  );
}

function PreviewFilterChips() {
  return (
    <div className="pv pv-filters" aria-label="Filter chips preview">
      <div className="tone-dim filter-label">Object type</div>
      <div className="filter-row">
        <span className="filter-chip on">✓ Tables 42</span>
        <span className="filter-chip on">✓ Views 8</span>
        <span className="filter-chip">Materialized 2</span>
        <span className="filter-chip">Foreign 1</span>
      </div>
    </div>
  );
}

function PreviewDropdown() {
  return (
    <div className="pv pv-dropdown" aria-label="Dropdown preview">
      <div className="dd-label">JUMP HOST</div>
      <div className="dd-field">
        <div>
          <div>bastion.prod</div>
          <div className="tone-dim">10.0.0.2 · jump</div>
        </div>
        <span className="tone-dim">▾</span>
      </div>
      <div className="dd-menu">
        <div className="dd-item on">
          <span className="tone-accent">✓</span> bastion.prod
        </div>
        <div className="dd-item">edge-west</div>
        <div className="dd-item tone-dim">ci-runner-3</div>
      </div>
    </div>
  );
}

function PreviewCheckbox() {
  return (
    <div className="pv pv-checks" aria-label="Checkbox preview">
      <label className="check-row">
        <span className="tui-check on" aria-hidden="true">
          ✓
        </span>
        Include status filter
      </label>
      <label className="check-row">
        <span className="tui-check" aria-hidden="true" />
        created_at ≥ 2026-01-01
      </label>
      <label className="check-row tone-dim">
        <span className="tui-check on dim" aria-hidden="true">
          ✓
        </span>
        Disabled
      </label>
    </div>
  );
}

function PreviewSlider() {
  return (
    <div className="pv pv-slider" aria-label="Slider preview">
      <div className="slider-row">
        <span>Terminal font</span>
        <span className="tone-accent">14px</span>
      </div>
      <div className="tui-slider" aria-hidden="true">
        <div className="tui-slider-fill" style={{ width: "40%" }} />
        <div className="tui-slider-thumb" style={{ left: "40%" }} />
      </div>
      <div className="stepper-row">
        <span>Editor text</span>
        <div className="tui-stepper">
          <span className="step-btn">−</span>
          <span className="tone-accent">13px</span>
          <span className="step-btn">+</span>
        </div>
      </div>
    </div>
  );
}

function PreviewBrandBadge() {
  return (
    <div className="pv pv-brands" aria-label="Brand badge preview">
      <div className="brand-cell">
        <span className="tui-brand ubuntu active">
          Ub
          <i className="brand-dot" />
        </span>
        <span className="brand-ver">24.04</span>
      </div>
      <div className="brand-cell">
        <span className="tui-brand debian">De</span>
        <span className="brand-ver">12</span>
      </div>
      <div className="brand-cell">
        <span className="tui-brand macos">Mc</span>
        <span className="brand-ver">15.1</span>
      </div>
      <div className="brand-cell">
        <span className="tui-brand postgres">Pg</span>
        <span className="brand-ver">16</span>
      </div>
      <div className="brand-cell">
        <span className="tui-brand redis">Rd</span>
        <span className="brand-ver">&nbsp;</span>
      </div>
      <div className="brand-cell">
        <span className="tui-brand unknown">∷</span>
        <span className="brand-ver">&nbsp;</span>
      </div>
    </div>
  );
}

function PreviewChrome() {
  return (
    <div className="pv pv-chrome">
      <div className="section-label">workspaces</div>
      <div className="tui-divider" />
      <div className="tone-muted">Hairline rule + uppercase rail label</div>
    </div>
  );
}

export const catalogItems: CatalogItem[] = [
  {
    name: "TuiText",
    desc: "Monospace type with semantic tones — muted, accent, status colors.",
    preview: <PreviewText />,
  },
  {
    name: "TuiButton",
    desc: "Primary, ghost, danger. Optional prefix glyph for chrome actions.",
    preview: <PreviewButton />,
  },
  {
    name: "TuiInput",
    desc: "Prompt-style field with block cursor and accent focus border.",
    preview: <PreviewInput />,
  },
  {
    name: "TuiStatusDot",
    desc: "● working · ◉ blocked · ○ idle — status at a glance.",
    preview: <PreviewStatusDot />,
  },
  {
    name: "TuiBadge",
    desc: "Small outlined tags for models, keys, and meta labels.",
    preview: <PreviewBadge />,
  },
  {
    name: "TuiTabs",
    desc: "Horizontal tab strip with accent underline on the active tab.",
    preview: <PreviewTabs />,
  },
  {
    name: "TuiSidebar",
    desc: "Workspaces and nested agents, Herdr-style left rail.",
    preview: <PreviewSidebar />,
  },
  {
    name: "TuiPane",
    desc: "Framed terminal surface with title bar, log lines, footer.",
    preview: <PreviewPane />,
  },
  {
    name: "TuiBox",
    desc: "Decorative box-drawing frame with optional title and footer.",
    preview: <PreviewBox />,
  },
  {
    name: "TuiField",
    desc: "Form field — paper surface, hairline border, mono label.",
    preview: <PreviewField />,
  },
  {
    name: "TuiSelect",
    desc: "Single-choice chip row — same model as theme pickers.",
    preview: <PreviewSelect />,
  },
  {
    name: "TuiSwitch",
    desc: "Flat rectangular toggle for settings.",
    preview: <PreviewSwitch />,
  },
  {
    name: "TuiDialog",
    desc: "Centered confirm sheet — panel + mono labels + actions.",
    preview: <PreviewDialog />,
  },
  {
    name: "TuiToast",
    desc: "Stacked status toasts — glyph type mark (not color), optional action, countdown, swipe to dismiss.",
    preview: <PreviewToast />,
  },
  {
    name: "TuiSheet",
    desc: "Bottom sheet — drag handle, confirm / loading / choice / error states. Full-bleed on phone, capped on desktop.",
    preview: <PreviewSheet />,
  },
  {
    name: "TuiMenu",
    desc: "Popup / context menu — hover, disabled, destructive, separators; open at pointer or under a ⋮ anchor.",
    preview: <PreviewMenu />,
  },
  {
    name: "TuiTooltip",
    desc: "Mono tooltip for icon-only controls — hover on desktop, long-press on touch. Pair with TuiIconButton.",
    preview: <PreviewTooltip />,
  },
  {
    name: "TuiProgress",
    desc: "Spinner, determinate/indeterminate bar, transfer row, and full-bleed connecting banner.",
    preview: <PreviewProgress />,
  },
  {
    name: "TuiTransferRow",
    desc: "Transfers list row — direction glyph, host, size/speed, progress bar, Cancel / Open / Retry.",
    preview: <PreviewTransferRow />,
  },
  {
    name: "TuiDataGrid",
    desc: "DB result grid + JSON tree — dirty/new/deleted cells, NULL, foldable objects/arrays.",
    preview: <PreviewDataGrid />,
  },
  {
    name: "TuiDiffView",
    desc: "Side-by-side / unified diff — line gutters, hunk headers, change bar, fold/binary/too-large.",
    preview: <PreviewDiff />,
  },
  {
    name: "TuiCodeEditor",
    desc: "File tab chrome — gutters, find/replace, source/preview toggle, dirty/binary/loading. Markdown blocks with copy.",
    preview: <PreviewCodeEditor />,
  },
  {
    name: "TuiFileTree",
    desc: "Explorer drawer — indent guides, expand/collapse, filter, root actions, selected / loading / empty / error.",
    preview: <PreviewFileTree />,
  },
  {
    name: "TuiMagicKey",
    desc: "Floating Enter on touch — hold for two key rings, drag to dock half-off screen, fades when idle.",
    preview: <PreviewMagicKey />,
  },
  {
    name: "TuiSplitView",
    desc: "Tab groups as panes — side-by-side or stacked, drag grip, focus outline, group chip on the strip.",
    preview: <PreviewSplit />,
  },
  {
    name: "TuiChatBubble",
    desc: "Agent chat — user bubble (sending/queued/failed), expandable tool rows, session list with pinned/running/finished.",
    preview: <PreviewChat />,
  },
  {
    name: "TuiFilterChips",
    desc: "Multi-select filter chips with optional counts — active / inactive. Exclusive mode for single-pick filters.",
    preview: <PreviewFilterChips />,
  },
  {
    name: "TuiDropdown",
    desc: "Long-list picker — form field, scrollable menu, optional filter search. Empty / selected / disabled / error.",
    preview: <PreviewDropdown />,
  },
  {
    name: "TuiCheckbox",
    desc: "Sharp square checkbox — checked / unchecked / disabled, optional tristate and label. For SQL filters and multi-select.",
    preview: <PreviewCheckbox />,
  },
  {
    name: "TuiSlider / TuiStepper",
    desc: "Continuous scrubber or [−]/[+] stepper for font size and numeric settings — sharp track, square thumb, min/max/disabled.",
    preview: <PreviewSlider />,
  },
  {
    name: "TuiBrandBadge",
    desc: "Sharp OS / DB brand tile — monogram on brand colour, optional version caption and active-session corner mark.",
    preview: <PreviewBrandBadge />,
  },
  {
    name: "TuiChrome",
    desc: "Section labels and hairline dividers for rails and settings.",
    preview: <PreviewChrome />,
  },
];

type GalleryProps = {
  items?: CatalogItem[];
  idPrefix?: string;
};

export function ComponentGallery({
  items = catalogItems,
  idPrefix = "comp",
}: GalleryProps) {
  return (
    <ul className="comp-list">
      {items.map((item) => {
        const id = `${idPrefix}-${item.name.toLowerCase()}`;
        return (
          <li key={item.name} id={id}>
            <div className="comp-meta">
              <code>{item.name}</code>
              <span>{item.desc}</span>
            </div>
            <div className="comp-preview" aria-label={`${item.name} preview`}>
              {item.preview}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

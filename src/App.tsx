import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useOutletContext,
} from "react-router-dom";
import { SiteNav } from "./components/SiteNav";
import { HomePage } from "./pages/HomePage";
import { ComponentsPage } from "./pages/ComponentsPage";
import type { ThemeId } from "./themes";

type FrameContext = {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
};

function AppFrame() {
  const [theme, setTheme] = useState<ThemeId>("paper");

  return (
    <div className="app" data-theme={theme}>
      <div className="noise" aria-hidden="true" />
      <SiteNav theme={theme} onThemeChange={setTheme} />
      <Outlet context={{ theme, setTheme } satisfies FrameContext} />
    </div>
  );
}

function HomeRoute() {
  const { theme, setTheme } = useOutletContext<FrameContext>();
  return <HomePage theme={theme} onThemeChange={setTheme} />;
}

export default function App() {
  // Vite `base` is `/landing-page/` on GitHub Pages; keep router in sync.
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<AppFrame />}>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

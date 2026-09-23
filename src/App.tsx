import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteNav } from "./components/SiteNav";
import { HomePage } from "./pages/HomePage";
import { ComponentsPage } from "./pages/ComponentsPage";
import type { ThemeId } from "./themes";

export default function App() {
  const [theme, setTheme] = useState<ThemeId>("paper");

  // Vite `base` is `/landing-page/` on GitHub Pages; keep router in sync.
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

  return (
    <BrowserRouter basename={basename}>
      <div className="app" data-theme={theme}>
        <div className="noise" aria-hidden="true" />
        <SiteNav theme={theme} onThemeChange={setTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage theme={theme} onThemeChange={setTheme} />
            }
          />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

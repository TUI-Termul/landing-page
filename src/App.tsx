import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteNav } from "./components/SiteNav";
import { HomePage } from "./pages/HomePage";
import { ComponentsPage } from "./pages/ComponentsPage";
import type { ThemeId } from "./themes";

export default function App() {
  const [theme, setTheme] = useState<ThemeId>("paper");

  return (
    <BrowserRouter>
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

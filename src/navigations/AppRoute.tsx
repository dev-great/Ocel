import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routePaths, routeComponents } from "./routes";

// ── Lightweight page-level loader ──
const PageLoader = () => <div className="h-screen flex items-center justify-center bg-[#F5F2F7] text-[#5B2EB2] font-sans text-xs tracking-[0.25em] uppercase">Loading…</div>;

// ─────────────────────────────────────────────
//  App Routes
// ─────────────────────────────────────────────
const AppRoute = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* ══════════════ PUBLIC ROUTES ══════════════ */}
        <Route path={routePaths.home} element={<routeComponents.home />} index />
        <Route path={routePaths.ourWorks} element={<routeComponents.ourWorks />} />
        <Route path={routePaths.about} element={<routeComponents.about />} />
        <Route path={routePaths.contact} element={<routeComponents.contact />} />
        <Route path={routePaths.booking} element={<routeComponents.booking />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoute;

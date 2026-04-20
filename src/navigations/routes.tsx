import { lazy } from "react";

// ─────────────────────────────────────────────
//  Route Paths
// ─────────────────────────────────────────────
export const routePaths = {
  // Public
  home: "/",
  ourWorks: "/our-work",
  about: "/about",
  contact: "/contact",
  booking: "/booking",
};

// ─────────────────────────────────────────────
//  Route Components (lazy loaded)
// ─────────────────────────────────────────────
export const routeComponents = {
  // Public Pages
  home: lazy(() => import("../pages/Home/Home")),
  ourWorks: lazy(() => import("../pages/OurWorks/OurWorks")),
  about: lazy(() => import("../pages/About/About")),
  contact: lazy(() => import("../pages/ContactUs/ContactUs")),
  booking: lazy(() => import("../pages/Booking/Booking")),
};

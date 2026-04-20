// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling animation
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
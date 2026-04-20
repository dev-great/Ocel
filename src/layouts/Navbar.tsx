import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { routePaths } from "../navigations/routes";
import Logo from "../assets/Ocel-1.png";

const NAV_LINKS = [
  { label: "Home", path: routePaths.home },
  { label: "Our Works", path: routePaths.ourWorks },
  { label: "About", path: routePaths.about },
  { label: "Contact", path: routePaths.contact },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <div className="relative z-30 w-full pt-6 px-6 md:px-10">
        <nav className="relative max-w-350 mx-auto bg-[#0a0a0a] rounded-full shadow-[0_8px_32px_rgba(10,10,10,0.12)]">
          {/* Accent stripe — red/yellow/green along top edge */}
          <div className="absolute top-0 left-16 right-16 h-0.75 flex rounded-full overflow-hidden opacity-80">
            <div className="flex-1 bg-[#D72638]" />
            <div className="flex-1 bg-[#F4B400]" />
            <div className="flex-1 bg-[#2D7A3E]" />
          </div>

          <div className="flex items-center justify-between h-18 pl-6 pr-2 md:pl-8 md:pr-2">
            {/* Logo */}
            <Link to={routePaths.home} className="flex items-center gap-2.5 no-underline shrink-0 group">
              <img src={Logo} alt="Ocel" className="h-13 w-auto object-contain" />
            </Link>

            {/* Desktop Links — centered */}
            <ul className="hidden lg:flex items-center gap-9 list-none m-0 p-0 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <NavLink to={path} end={path === routePaths.home} className={({ isActive }) => `relative text-[0.9rem] font-medium no-underline py-1 transition-colors duration-300 ${isActive ? "text-[#F4B400]" : "text-white/85 hover:text-[#F4B400]"}`}>
                    {({ isActive }) => (
                      <>
                        {label}
                        <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F4B400] transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA — red with yellow hover */}
            <Link to={routePaths.booking} className="hidden lg:inline-flex items-center justify-center no-underline bg-[#D72638] text-white text-[0.8rem] font-semibold tracking-[0.15em] uppercase px-8 py-[0.95rem] rounded-full transition-all duration-300 hover:bg-[#F4B400] hover:text-[#0a0a0a] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(244,180,0,0.35)] whitespace-nowrap">
              Book Now
            </Link>

            {/* Hamburger */}
            <button className="lg:hidden flex flex-col justify-center gap-1.25 w-10 h-10 mr-2 bg-transparent border-0 p-0 cursor-pointer z-1100" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
              <span className={`block h-0.5 w-6 mx-auto bg-white transition-all duration-300 origin-center rounded-full ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 mx-auto bg-white transition-all duration-300 rounded-full ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 w-6 mx-auto bg-white transition-all duration-300 origin-center rounded-full ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`lg:hidden fixed inset-0 bg-[#0a0a0a] z-1050 flex-col justify-center items-center transition-opacity duration-400 ${menuOpen ? "flex opacity-100 pointer-events-auto" : "hidden opacity-0 pointer-events-none"}`} aria-hidden={!menuOpen}>
        {/* Accent stripes — decorative */}
        <div className="absolute top-20 left-0 right-0 h-1 flex opacity-50">
          <div className="flex-1 bg-[#D72638]" />
          <div className="flex-1 bg-[#F4B400]" />
          <div className="flex-1 bg-[#2D7A3E]" />
        </div>
        <div className="absolute bottom-20 left-0 right-0 h-1 flex opacity-50">
          <div className="flex-1 bg-[#2D7A3E]" />
          <div className="flex-1 bg-[#F4B400]" />
          <div className="flex-1 bg-[#D72638]" />
        </div>

        <ul className="relative list-none m-0 p-0 flex flex-col items-center gap-1 w-full">
          {NAV_LINKS.map(({ label, path }, idx) => (
            <li key={path} className={`w-full text-center transition-all duration-400 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: menuOpen ? `${0.05 + idx * 0.05}s` : "0s" }}>
              <NavLink to={path} end={path === routePaths.home} onClick={handleLinkClick} className={({ isActive }) => `block py-4 px-8 text-5xl no-underline tracking-wide transition-colors duration-300 ${isActive ? "text-[#F4B400]" : "text-white hover:text-[#D72638]"}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to={routePaths.booking} onClick={handleLinkClick} className={`relative mt-10 no-underline bg-[#D72638] text-white text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-all duration-400 hover:bg-[#F4B400] hover:text-[#0a0a0a] ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`} style={{ transitionDelay: menuOpen ? "0.4s" : "0s" }}>
          Book Now
        </Link>
      </div>
    </>
  );
};

export default Navbar;

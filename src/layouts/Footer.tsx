import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, ArrowUp } from "lucide-react";
import { routePaths } from "../navigations/routes";
import Logo from "../assets/Ocel-1.png";

const CONTACT = {
  address: "5020 E Tropicana Ave, Suite 2B",
  addressLine2: "Las Vegas, NV 89122",
  phone: "(702) 934-2007",
  phoneHref: "tel:+17029342007",
  email: "garmenkaizer@gmail.com",
  emailHref: "mailto:garmenkaizer@gmail.com",
  instagramHref: "https://www.instagram.com/ocelafricanhairbraiding/",
  facebookHref: "https://www.facebook.com/OcelAfricanHairBraiding",
};

const NAV_LINKS = [
  { label: "Home", path: routePaths.home },
  { label: "Our Works", path: routePaths.ourWorks },
  { label: "About", path: routePaths.about },
  { label: "Contact", path: routePaths.contact },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Pan-African accent stripe */}
      <div className="flex w-full h-1">
        <div className="flex-1 bg-[#D72638]" />
        <div className="flex-1 bg-[#F4B400]" />
        <div className="flex-1 bg-[#2D7A3E]" />
      </div>

      <div className="relative mx-auto max-w-350 px-6 md:px-10 pt-14 md:pt-16 pb-6">
        {/* ══════════ TOP ROW ══════════ */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-8 pb-10">
          {/* Brand + tagline */}
          <div className="max-w-105">
            {/* Logo */}
            <Link to={routePaths.home} className="flex items-center gap-2.5 pb-1.5 no-underline shrink-0 group">
              <img src={Logo} alt="Ocel" className="h-25 w-auto object-contain" />
            </Link>
            <p className="text-[0.9rem] leading-[1.6] text-white/60">Nevada's trusted African hair braiding studio. Expert hands, elevated finish.</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 md:gap-x-6">
            {NAV_LINKS.map(({ label, path }) => (
              <Link key={label} to={path} className="text-[0.85rem] text-white/70 no-underline transition-colors duration-300 hover:text-[#F4B400]">
                {label}
              </Link>
            ))}
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-all duration-300 hover:bg-[#F4B400] hover:border-[#F4B400]">
              <Instagram className="w-4.25 h-4.25 text-white transition-colors duration-300 group-hover:text-[#0a0a0a]" strokeWidth={2} />
            </a>
            <a href={CONTACT.facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-all duration-300 hover:bg-[#F4B400] hover:border-[#F4B400]">
              <Facebook className="w-4.25 h-4.25 text-white transition-colors duration-300 group-hover:text-[#0a0a0a]" strokeWidth={2} />
            </a>
            <a href={CONTACT.emailHref} aria-label="Email" className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-all duration-300 hover:bg-[#F4B400] hover:border-[#F4B400]">
              <Mail className="w-4.25 h-4.25 text-white transition-colors duration-300 group-hover:text-[#0a0a0a]" strokeWidth={2} />
            </a>
            <button onClick={handleScrollToTop} aria-label="Back to top" className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:border-white ml-1">
              <ArrowUp className="w-4.25 h-4.25 text-white transition-all duration-300 group-hover:text-[#0a0a0a] group-hover:-translate-y-0.5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ══════════ BOTTOM BAR ══════════ */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-6 border-t border-white/10 text-[0.75rem] text-white/50">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© {currentYear} Ocel Studio.</span>
            <span className="text-white/20">·</span>
            <span>{CONTACT.address}</span>
            <span className="text-white/20 hidden md:inline">·</span>
            <a href={CONTACT.phoneHref} className="no-underline text-white/50 hover:text-white transition-colors duration-300">
              {CONTACT.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Link to={routePaths.home} className="no-underline text-white/50 hover:text-white transition-colors duration-300">
              Privacy
            </Link>
            <span className="text-white/20">·</span>
            <Link to={routePaths.home} className="no-underline text-white/50 hover:text-white transition-colors duration-300">
              Terms
            </Link>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1">
              Crafted by
              <a href="https://www.macgrouptech.com/" target="_blank" rel="noopener noreferrer" className="no-underline text-white/70 hover:text-[#F4B400] transition-colors duration-300 font-semibold">
                MacGroup Technology
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

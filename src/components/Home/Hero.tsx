import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { routePaths } from "../../navigations/routes";
import Navbar from "../../layouts/Navbar";
import { galleryImages } from "../../service/gallery";

const Hero = () => {
  // Pick two distinct images for the arch display.
  // Change these indices to feature different photos from the Gallery folder.
  const archImage1 = galleryImages[45] ?? "";
  const archImage2 = galleryImages[85] ?? "";

  return (
    <div className="relative bg-[#FAF7F2] pb-10 lg:pb-14 overflow-hidden">
      {/* ── Warm background glow (top-right) ── */}
      <div
        className="absolute -top-40 -right-40 w-225 h-225 rounded-full blur-3xl pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 30% 30%, #FDE8B8 0%, #F9D9C0 35%, rgba(249,217,192,0) 70%)",
        }}
      />

      {/* Navbar inside Hero so background extends behind it */}
      <Navbar />

      <div className="relative max-w-350 mx-auto px-6 md:px-10 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-10 items-center">
          {/* ── Left: Text (first on mobile + desktop) ── */}
          <div className="relative z-10 order-1">
            {/* Headline */}
            <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.95] tracking-wide text-[#0a0a0a] mb-8 opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]">
              Let Your
              <br />
              Hair{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#D72638]">Shine</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                  <path d="M2 8 Q 50 2, 100 6 T 198 6" stroke="#F4B400" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-[1rem] md:text-[1.1rem] font-normal leading-[1.7] text-[#3a3a3a] max-w-130 mb-10 opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]">
              From cornrows to knotless braids, we provide expert hair braiding services crafted just for you. Elevate your look with <span className="font-semibold text-[#0a0a0a]">Ocel</span> — Nevada's trusted African hair braiding studio.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-6 flex-wrap opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.22,1,0.36,1)_0.45s_forwards]">
              {/* Primary — pill with inset icon circle */}
              <Link to={routePaths.booking} className="group relative no-underline inline-flex items-center gap-4 bg-[#0a0a0a] text-white pl-7 pr-2 py-2 rounded-full transition-all duration-400 hover:shadow-[0_14px_32px_rgba(10,10,10,0.28)] hover:-translate-y-0.5">
                <span className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase">Book an Appointment</span>
                {/* Circle wrapper — bg swaps red → yellow on hover */}
                <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#D72638] overflow-hidden transition-colors duration-400 group-hover:bg-[#F4B400]">
                  {/* Two arrows — first slides out top-right on hover, second slides in from bottom-left */}
                  <ArrowUpRight className="absolute w-4.5 h-4.5 text-white transition-all duration-400 group-hover:translate-x-6 group-hover:-translate-y-6" strokeWidth={2.5} />
                  <ArrowUpRight className="absolute w-4.5 h-4.5 text-[#0a0a0a] -translate-x-6 translate-y-6 transition-all duration-400 group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={2.5} />
                </span>
              </Link>

              {/* Secondary — underlined link, no box */}
              <Link to={routePaths.ourWorks} className="group no-underline inline-flex items-center gap-2 text-[#0a0a0a] text-[0.82rem] font-semibold tracking-[0.14em] uppercase py-2 transition-colors duration-300 hover:text-[#D72638]">
                <span className="relative">
                  Explore Our Works
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-current origin-left scale-x-100 transition-transform duration-400 group-hover:scale-x-0" />
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-current origin-right scale-x-0 transition-transform duration-400 delay-150 group-hover:scale-x-100" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Trust micro-line under CTAs */}
            <p className="mt-6 text-[0.72rem] tracking-[0.15em] uppercase text-[#0a0a0a]/50 flex items-center gap-2 flex-wrap opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.6s_forwards]">
              <span className="inline-block w-6 h-px bg-[#0a0a0a]/30" />
              No deposit · Same-week slots available
            </p>
          </div>

          {/* ── Right: Image Arches (second on mobile + desktop) ── */}
          <div className="relative order-2 grid grid-cols-2 gap-4 lg:gap-5 h-100 md:h-120 opacity-0 animate-[scaleIn_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_forwards]">
            {/* Arch 1 */}
            <div className="relative overflow-hidden rounded-t-[180px] rounded-b-3xl bg-[#0a0a0a] shadow-[0_20px_50px_rgba(10,10,10,0.15)]">
              <img src={archImage1} alt="Ocel braiding work" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Arch 2 */}
            <div className="relative overflow-hidden rounded-t-3xl rounded-b-[180px] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(10,10,10,0.15)] mt-10">
              <img src={archImage2} alt="Ocel signature style" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--tw-rotate, 0deg)); }
        }
      `}</style>
    </div>
  );
};

export default Hero;

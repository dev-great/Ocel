import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { routePaths } from "../../navigations/routes";
import { galleryImages } from "../../service/gallery";

/* ══════════════════════════════════════════════════════════════
   PRICING — grouped by category
   ══════════════════════════════════════════════════════════════ */

type Service = { name: string; price: string; flat?: boolean };
type Category = { key: string; label: string; services: Service[] };

const CATEGORIES: Category[] = [
  {
    key: "braids",
    label: "Braids",
    services: [
      { name: "Cornrows", price: "$55" },
      { name: "Natural Cornrows", price: "$45" },
      { name: "Men's Cornrows", price: "$45" },
      { name: "Knotless Braid", price: "$160" },
      { name: "Tree Braid", price: "$180" },
      { name: "Individuals", price: "$170" },
    ],
  },
  {
    key: "twists",
    label: "Twists",
    services: [
      { name: "Senegalese Twist", price: "$220" },
      { name: "Kinky Twist", price: "$150" },
      { name: "Passion Twist", price: "$180" },
      { name: "Natural Twist", price: "$55" },
    ],
  },
  {
    key: "locs",
    label: "Locs",
    services: [
      { name: "Dreadlocks", price: "$85" },
      { name: "Faux Lock", price: "$180" },
      { name: "Micro", price: "$300" },
    ],
  },
  {
    key: "other",
    label: "Extras",
    services: [
      { name: "Sew In", price: "$150" },
      { name: "Crochet", price: "$120" },
      { name: "Touch Up", price: "$65" },
      { name: "Take Down", price: "$50" },
      { name: "Wash", price: "$25", flat: true },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   MARQUEE — image indices for the two scrolling rows.
   Pick different shots for each row so they don't repeat.
   Adjust these indices to feature your best work.
   ══════════════════════════════════════════════════════════════ */

const MARQUEE_ROW_1 = [2, 5, 8, 14, 19, 25, 31, 38, 44, 50];
const MARQUEE_ROW_2 = [4, 10, 17, 22, 28, 34, 40, 46, 52, 58];

/* ══════════════════════════════════════════════════════════════
   Doodles
   ══════════════════════════════════════════════════════════════ */

const DoodleShine = ({ className = "", color = "#F4B400" }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <path d="M20 4 L22 18 L36 20 L22 22 L20 36 L18 22 L4 20 L18 18 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  </svg>
);

const DoodleStrand = ({ className = "", color = "#0a0a0a" }) => (
  <svg viewBox="0 0 80 20" fill="none" className={className}>
    <path d="M2 10 Q 12 2, 22 10 T 42 10 T 62 10 T 78 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key);
  const active = CATEGORIES.find((c) => c.key === activeCategory) ?? CATEGORIES[0];

  const priceImg1 = galleryImages[82] ?? "";
  const priceImg2 = galleryImages[12] ?? "";

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — PRICING
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#E8D9C0] rounded-t-[40px] md:rounded-t-[56px] pt-16 md:pt-24 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute -top-32 right-[10%] w-125 h-125 rounded-full blur-3xl pointer-events-none opacity-50" style={{ background: "radial-gradient(circle at 50% 30%, #FDE8B8 0%, rgba(249,217,192,0) 70%)" }} />

        <div className="relative mx-auto max-w-350 px-6 md:px-10">
          <DoodleShine className="absolute -top-4 left-10 w-6 h-6 opacity-70 pointer-events-none" color="#F4B400" />
          <DoodleStrand className="absolute top-6 right-10 w-16 h-5 opacity-40 pointer-events-none rotate-[-5deg]" color="#D72638" />

          {/* Section header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-[0.72rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60 mb-4">— Our Menu</span>
              <h2 className="text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] max-w-175">
                Services crafted for <span className="italic text-[#D72638]">every</span> head.
              </h2>
            </div>
            <p className="text-[0.95rem] leading-[1.7] text-[#3a3a3a] max-w-85">Prices start at the listed rate. Final quote depends on hair length and style complexity.</p>
          </div>

          {/* Tabs */}
          <div className="relative z-10 flex flex-wrap items-center gap-2 md:gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = cat.key === activeCategory;
              return (
                <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`relative px-6 md:px-7 py-3 rounded-full text-[0.8rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${isActive ? "bg-[#0a0a0a] text-white shadow-[0_6px_20px_rgba(10,10,10,0.18)]" : "bg-transparent text-[#0a0a0a] border-2 border-[#0a0a0a]/20 hover:border-[#0a0a0a] hover:bg-[#0a0a0a]/5"}`}>
                  {cat.label}
                  {isActive && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F4B400] ml-2 align-middle" />}
                </button>
              );
            })}
          </div>

          {/* Pricing + Images grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-5 lg:gap-6">
            <div key={activeCategory} className="relative bg-white rounded-[28px] px-7 md:px-10 py-8 md:py-10 animate-[fadeInUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] shadow-[0_8px_24px_rgba(10,10,10,0.05)]">
              <ul className="divide-y divide-[#0a0a0a]/10">
                {active.services.map((service, i) => (
                  <li key={service.name} className="flex items-baseline justify-between py-4 md:py-5 opacity-0 animate-[fadeInUp_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]" style={{ animationDelay: `${i * 50}ms` }}>
                    <span className="text-[1rem] md:text-[1.05rem] text-[#0a0a0a]">{service.name}</span>
                    <span className="flex items-baseline gap-1 shrink-0">
                      <span className="text-[1.25rem] md:text-[1.4rem] tracking-tight text-[#0a0a0a] font-semibold">{service.price}</span>
                      {!service.flat && <span className="text-[0.7rem] tracking-widest uppercase text-[#0a0a0a]/50 ml-1">& up</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden lg:block rounded-[28px] overflow-hidden bg-[#0a0a0a] aspect-square shadow-[0_20px_40px_rgba(10,10,10,0.12)]">
              <img src={priceImg1} alt="Ocel braiding" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute top-4 left-4 bg-[#F4B400] text-[#0a0a0a] text-[0.65rem] tracking-[0.15em] uppercase font-semibold px-3 py-1.5 rounded-full">Signature</div>
            </div>

            <div className="relative hidden lg:block rounded-[28px] overflow-hidden bg-[#0a0a0a] aspect-square shadow-[0_20px_40px_rgba(10,10,10,0.12)]">
              <img src={priceImg2} alt="Ocel hairstyle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute top-4 left-4 bg-white text-[#0a0a0a] text-[0.65rem] tracking-[0.15em] uppercase font-semibold px-3 py-1.5 rounded-full">Client Favorite</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-10 flex justify-center mt-14">
            <Link to={routePaths.booking} className="group relative no-underline inline-flex items-center gap-4 bg-[#0a0a0a] text-white pl-7 pr-2 py-2 rounded-full transition-all duration-400 hover:shadow-[0_14px_32px_rgba(10,10,10,0.28)] hover:-translate-y-0.5">
              <span className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase">Book an Appointment</span>
              <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#D72638] overflow-hidden transition-colors duration-400 group-hover:bg-[#F4B400]">
                <ArrowUpRight className="absolute w-4.5 h-4.5 text-white transition-all duration-400 group-hover:translate-x-6 group-hover:-translate-y-6" strokeWidth={2.5} />
                <ArrowUpRight className="absolute w-4.5 h-4.5 text-[#0a0a0a] -translate-x-6 translate-y-6 transition-all duration-400 group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — IMAGE MARQUEE (our work)
          Two rows scroll opposite directions. Pauses on hover.
          Edge-faded so images don't hard-cut at the viewport.
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#F2EDE2] pt-16 md:pt-24 pb-20 md:pb-24 overflow-hidden">
        <DoodleShine className="absolute top-10 right-10 w-6 h-6 opacity-60 pointer-events-none" color="#F4B400" />
        <DoodleStrand className="absolute top-20 left-[40%] w-20 h-5 opacity-30 pointer-events-none rotate-[8deg]" color="#2D7A3E" />

        {/* Section header */}
        <div className="relative mx-auto max-w-350 px-6 md:px-10 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block text-[0.72rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60 mb-4">— Our Work</span>
              <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] max-w-175">
                A decade of <span className="italic text-[#D72638]">beautiful</span> braids.
              </h2>
            </div>
            <Link to={routePaths.ourWorks} className="no-underline inline-flex items-center gap-2 text-[#0a0a0a] text-[0.82rem] font-semibold tracking-[0.14em] uppercase py-2 border-b-2 border-[#0a0a0a] transition-colors duration-300 hover:text-[#D72638] hover:border-[#D72638] self-start md:self-auto">
              See Our Works
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Marquee rows — edge-faded mask on both sides */}
        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          {/* Row 1 — scrolls left */}
          <div className="flex gap-4 md:gap-5 mb-4 md:mb-5 w-max animate-[scrollLeft_50s_linear_infinite] hover:[animation-play-state:paused]">
            {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((idx, i) => (
              <div key={`r1-${i}`} className="group relative shrink-0 w-70 md:w-85 h-55 md:h-65 rounded-3xl overflow-hidden bg-[#0a0a0a] shadow-[0_12px_30px_rgba(10,10,10,0.1)] transition-transform duration-500 hover:-translate-y-1 hover:-rotate-1">
                <img src={galleryImages[idx] ?? ""} alt="Ocel work" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right (opposite direction) */}
          <div className="flex gap-4 md:gap-5 w-max animate-[scrollRight_55s_linear_infinite] hover:[animation-play-state:paused]">
            {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((idx, i) => (
              <div key={`r2-${i}`} className="group relative shrink-0 w-[320px] md:w-95 h-55 md:h-65 rounded-3xl overflow-hidden bg-[#0a0a0a] shadow-[0_12px_30px_rgba(10,10,10,0.1)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-1">
                <img src={galleryImages[idx] ?? ""} alt="Ocel work" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              </div>
            ))}
          </div>
        </div>

        {/* Small stat line below marquee */}
        <div className="relative mx-auto max-w-350 px-6 md:px-10 mt-12 md:mt-14">
          <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-3 text-[0.75rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D72638]" />
              500+ clients styled
            </span>
            <span className="hidden md:inline-block w-px h-3 bg-[#0a0a0a]/20" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400]" />
              17 signature styles
            </span>
            <span className="hidden md:inline-block w-px h-3 bg-[#0a0a0a]/20" />
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A3E]" />
              10+ years hand-braiding
            </span>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

export default ServicesSection;

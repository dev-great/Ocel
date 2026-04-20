import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { routePaths } from "../../navigations/routes";
import { galleryImages } from "../../service/gallery";

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

const CallbackSection = () => {
  const heroImage = galleryImages[46] ?? "";

  return (
    <div className="bg-[#E8D9C0]">
      <section className="relative w-full bg-[#F0F4EE] rounded-t-[40px] md:rounded-t-[56px] pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        {/* Decorative doodles */}
        <DoodleShine className="absolute top-10 left-[8%] w-7 h-7 opacity-55 pointer-events-none" color="#F4B400" />
        <DoodleStrand className="absolute top-20 right-[14%] w-16 h-5 opacity-35 pointer-events-none rotate-6" color="#D72638" />
        <DoodleShine className="absolute bottom-16 right-[8%] w-5 h-5 opacity-50 pointer-events-none" color="#2D7A3E" />

        <div className="relative mx-auto max-w-350 px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* ══════════ LEFT — Arch image ══════════ */}
            <div className="relative h-95 md:h-115 lg:h-auto lg:min-h-125  rounded-b-4xl overflow-hidden bg-[#0a0a0a] shadow-[0_24px_50px_rgba(10,10,10,0.15)]">
              <img src={heroImage} alt="Ocel braiding team" className="absolute inset-0 w-full h-full object-cover" />

              {/* Bottom overlay tag */}
              <div className="absolute bottom-6 left-6 bg-[#FAF7F2] text-[#0a0a0a] text-[0.68rem] tracking-[0.2em] uppercase font-semibold px-3 py-2 rounded-full">Our Braiders</div>
            </div>

            {/* ══════════ RIGHT — CTA card ══════════ */}
            <div className="relative bg-white rounded-[28px] md:rounded-4xl border-2 border-[#0a0a0a]/90 px-7 md:px-10 py-10 md:py-14 flex flex-col justify-center">
              {/* Eyebrow */}
              <span className="inline-block text-[0.7rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60 mb-4">— Ready When You Are</span>

              {/* Headline */}
              <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.02em] text-[#0a0a0a] mb-5">
                Your chair is{" "}
                <span className="relative inline-block">
                  <span className="italic text-[#D72638]">waiting</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                    <path d="M2 8 Q 50 2, 100 6 T 198 6" stroke="#F4B400" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                .
              </h2>

              {/* Description */}
              <p className="text-[0.95rem] md:text-[1rem] leading-[1.65] text-[#3a3a3a] max-w-120 mb-8">Pick your style, pick your slot, and leave the rest to us. Same-week appointments usually available.</p>

              {/* CTA button */}
              <div>
                <Link to={routePaths.booking} className="group relative no-underline inline-flex items-center gap-4 bg-[#0a0a0a] text-white pl-7 pr-2 py-2 rounded-full transition-all duration-400 hover:shadow-[0_14px_32px_rgba(10,10,10,0.28)] hover:-translate-y-0.5">
                  <span className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase">Book an Appointment</span>
                  <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#D72638] overflow-hidden transition-colors duration-400 group-hover:bg-[#F4B400]">
                    <ArrowUpRight className="absolute w-4.5 h-4.5 text-white transition-all duration-400 group-hover:translate-x-6 group-hover:-translate-y-6" strokeWidth={2.5} />
                    <ArrowUpRight className="absolute w-4.5 h-4.5 text-[#0a0a0a] -translate-x-6 translate-y-6 transition-all duration-400 group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={2.5} />
                  </span>
                </Link>
              </div>

              {/* Trust line */}
              <p className="mt-7 text-[0.7rem] tracking-[0.15em] uppercase text-[#0a0a0a]/45 flex items-center gap-2 flex-wrap">
                <span className="inline-block w-6 h-px bg-[#0a0a0a]/30" />
                No deposit · Same-week slots available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallbackSection;

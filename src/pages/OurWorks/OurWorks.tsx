import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, ChevronLeft, X } from "lucide-react";
import { routePaths } from "../../navigations/routes";
import Navbar from "../../layouts/Navbar";
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

const OurWorks = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const nextImage = useCallback(() => {
    setLightboxIdx((curr) => (curr === null ? null : (curr + 1) % galleryImages.length));
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIdx((curr) => (curr === null ? null : (curr - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIdx === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIdx, closeLightbox, nextImage, prevImage]);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          EDITORIAL HEADER — mobile-reduced
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#FAF7F2] overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full blur-3xl pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(circle at 30% 30%, #FDE8B8 0%, #F9D9C0 35%, rgba(249,217,192,0) 70%)",
          }}
        />

        {/* Doodles — hide most on mobile */}
        <DoodleShine className="absolute top-24 left-[8%] md:top-32 w-6 h-6 md:w-8 md:h-8 opacity-60 md:opacity-70 pointer-events-none rotate-[-15deg]" color="#F4B400" />
        <DoodleStrand className="hidden md:block absolute top-[45%] left-[55%] w-20 h-5 opacity-40 pointer-events-none rotate-[-4deg]" color="#D72638" />
        <DoodleShine className="hidden md:block absolute bottom-24 right-[10%] w-6 h-6 opacity-55 pointer-events-none" color="#2D7A3E" />

        <Navbar />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-6 md:pt-12 pb-12 md:pb-28">
          {/* Breadcrumb — tighter margin on mobile */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.7rem] md:text-[0.72rem] tracking-[0.18em] uppercase text-[#0a0a0a]/55 mb-10 md:mb-32">
            <Link to={routePaths.home} className="no-underline text-[#0a0a0a]/55 hover:text-[#D72638] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" strokeWidth={2.5} />
            <span className="text-[#0a0a0a]">Our Works</span>
          </nav>

          {/* ══════ Minimal centered title ══════ */}
          <div className="flex flex-col items-center text-center">
            {/* Small eyebrow */}
            <span className="inline-flex items-center gap-2 md:gap-3 text-[0.62rem] md:text-[0.72rem] tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#0a0a0a]/55 mb-4 md:mb-10 opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.05s_forwards]">
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
              The Portfolio
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
            </span>

            {/* Oversized centered title */}
            <h1 className="text-[clamp(2.4rem,11vw,10rem)] leading-[0.95] md:leading-[0.88] tracking-[-0.03em] text-[#0a0a0a] opacity-0 animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_forwards]">
              Our{" "}
              <span className="relative inline-block">
                <span className="italic text-[#D72638]">works</span>
                <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                  <path d="M2 8 Q 50 2, 100 6 T 198 6" stroke="#F4B400" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MASONRY GRID — 2 cols mobile, 2 sm, 3 lg, 4 xl
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#E8D9C0] rounded-t-[40px] md:rounded-t-[56px] pt-12 md:pt-24 pb-16 md:pb-20 overflow-hidden">
        <DoodleShine className="hidden md:block absolute top-12 left-[6%] w-6 h-6 opacity-55 pointer-events-none" color="#F4B400" />
        <DoodleStrand className="hidden md:block absolute top-20 right-[10%] w-16 h-5 opacity-35 pointer-events-none rotate-[-6deg]" color="#D72638" />

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-10">
          {/* Tiny intro — just enough to orient */}
          <div className="flex items-end justify-between gap-6 mb-8 md:mb-12 px-2 md:px-0">
            <span className="inline-block text-[0.7rem] md:text-[0.72rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60">— The Archive</span>
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#0a0a0a]/55 hidden md:block">Click any image · Arrow keys to navigate</p>
          </div>

          {/* Masonry — 2 columns on mobile, tighter gap */}
          <div className="columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-5 [column-fill:_balance]">
            {galleryImages.map((src, idx) => (
              <button
                key={idx}
                onClick={() => openLightbox(idx)}
                aria-label={`View work ${idx + 1}`}
                className="group relative block w-full mb-3 md:mb-5 rounded-[12px] md:rounded-[18px] overflow-hidden bg-[#0a0a0a] shadow-[0_8px_24px_rgba(10,10,10,0.08)] break-inside-avoid transition-all duration-500 hover:shadow-[0_20px_44px_rgba(10,10,10,0.15)] hover:-translate-y-1 opacity-0 animate-[fadeInUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] cursor-pointer"
                style={{ animationDelay: `${Math.min(idx * 25, 800)}ms` }}
              >
                <img src={src} alt={`Ocel work ${idx + 1}`} loading="lazy" className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="absolute top-2 right-2 md:top-3 md:right-3 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#F4B400] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <ArrowUpRight className="w-[13px] h-[13px] md:w-[16px] md:h-[16px] text-[#0a0a0a]" strokeWidth={2.5} />
                </div>

                <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 text-[0.55rem] md:text-[0.62rem] tracking-[0.2em] uppercase text-white font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">Fig. {String(idx + 1).padStart(2, "0")}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA BAND
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-16 md:py-20">
        <div className="absolute top-0 left-0 right-0 flex h-1">
          <div className="flex-1 bg-[#D72638]" />
          <div className="flex-1 bg-[#F4B400]" />
          <div className="flex-1 bg-[#2D7A3E]" />
        </div>

        <div
          className="absolute -top-32 right-[15%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-25"
          style={{
            background: "radial-gradient(circle at 50% 50%, #D72638 0%, rgba(215,38,56,0) 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-[600px]">
              <span className="inline-block text-[0.7rem] tracking-[0.25em] uppercase text-white/50 mb-3">— See one you like?</span>
              <h3 className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
                Let's get your <span className="italic text-[#F4B400]">name</span> on the chair.
              </h3>
              <p className="text-[0.95rem] text-white/65 leading-[1.6]">Save the image, reference it when you book, and we'll craft the same look — or something better — for you.</p>
            </div>

            <Link to={routePaths.booking} className="group shrink-0 relative no-underline inline-flex items-center gap-3 bg-white text-[#0a0a0a] pl-7 pr-2 py-2 rounded-full transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(255,255,255,0.15)]">
              <span className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase">Book Appointment</span>
              <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#D72638] overflow-hidden transition-colors duration-400 group-hover:bg-[#F4B400]">
                <ArrowUpRight className="absolute w-[18px] h-[18px] text-white transition-all duration-400 group-hover:translate-x-6 group-hover:-translate-y-6" strokeWidth={2.5} />
                <ArrowUpRight className="absolute w-[18px] h-[18px] text-[#0a0a0a] -translate-x-6 translate-y-6 transition-all duration-400 group-hover:translate-x-0 group-hover:translate-y-0" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LIGHTBOX
          ══════════════════════════════════════════════════════════════ */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-[2000] bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_0.3s_ease_forwards]" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button onClick={closeLightbox} aria-label="Close" className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:border-white hover:text-[#0a0a0a] z-10">
            <X className="w-5 h-5" strokeWidth={2} />
          </button>

          <div className="absolute top-5 left-5 md:top-8 md:left-8 text-white/70 text-[0.72rem] tracking-[0.2em] uppercase font-semibold z-10">
            {String(lightboxIdx + 1).padStart(2, "0")} <span className="text-white/30 mx-1">/</span> {String(galleryImages.length).padStart(2, "0")}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:border-white hover:text-[#0a0a0a] hover:-translate-x-1 hover:-translate-y-1/2 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:border-white hover:text-[#0a0a0a] hover:translate-x-1 hover:-translate-y-1/2 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
          </button>

          <div className="relative max-w-[92vw] max-h-[85vh] animate-[scaleIn_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]" onClick={(e) => e.stopPropagation()}>
            <img key={lightboxIdx} src={galleryImages[lightboxIdx]} alt={`Ocel work ${lightboxIdx + 1}`} className="max-w-full max-h-[85vh] rounded-[16px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] object-contain" />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default OurWorks;

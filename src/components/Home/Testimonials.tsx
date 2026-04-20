import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote, ChevronRight } from "lucide-react";
import { routePaths } from "../../navigations/routes";
import { galleryImages } from "../../service/gallery";

/* ══════════════════════════════════════════════════════════════
   TESTIMONIALS DATA
   ══════════════════════════════════════════════════════════════ */

type Testimonial = {
  name: string;
  date: string;
  quote: string;
  avatarIdx: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sophie M.",
    date: "12.09.2025",
    quote: "Amazing experience! The staff really listens to what you want and gives great advice on maintaining healthy hair. I will definitely be coming back.",
    avatarIdx: 40,
  },
  {
    name: "Ann J.",
    date: "08.08.2025",
    quote: "I'm beyond happy with my new hairstyle! The team at Ocel made sure I felt comfortable and left with exactly what I wanted. Fabulous service!",
    avatarIdx: 47,
  },
  {
    name: "Amanda L.",
    date: "17.04.2025",
    quote: "Visited Ocel for the first time and was blown away by the results. The braiding was precise, the atmosphere warm, and the stylists truly skilled.",
    avatarIdx: 41,
  },
  {
    name: "Tiana K.",
    date: "22.03.2025",
    quote: "My knotless braids have never looked this clean. They lasted over two months and still looked fresh. Ocel is my new home for braiding.",
    avatarIdx: 45,
  },
  {
    name: "Destiny R.",
    date: "05.02.2025",
    quote: "Professional, punctual, and incredibly talented. They took their time and got the style exactly right. I get compliments everywhere I go.",
    avatarIdx: 59,
  },
  {
    name: "Maya O.",
    date: "14.01.2025",
    quote: "The attention to detail is unmatched. I came in with a reference picture and walked out with something even better. Worth every dollar.",
    avatarIdx: 53,
  },
];

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

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* ── Responsive: adjust how many cards are visible ── */
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - cardsPerView);

  /* ── Derived state: clamp during render instead of using useEffect ── */
  /* When cardsPerView changes (e.g. window resize), activeIndex may be */
  /* out of bounds. Clamping here avoids the cascading setState pattern. */
  const clampedActiveIndex = Math.min(activeIndex, maxIndex);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, Math.min(prev, maxIndex) - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(maxIndex, Math.min(prev, maxIndex) + 1));
  };

  const gapPx = cardsPerView === 1 ? 16 : 20;
  const totalGaps = (cardsPerView - 1) * gapPx;
  const cardWidthCalc = `calc((100% - ${totalGaps}px) / ${cardsPerView})`;
  const trackTransform = `translateX(calc(-${clampedActiveIndex} * ((100% - ${totalGaps}px) / ${cardsPerView}) - ${clampedActiveIndex} * ${gapPx}px))`;

  /* ── Arrow button shared classes ── */
  const arrowClass = "group w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#0a0a0a] bg-transparent text-[#0a0a0a] flex items-center justify-center transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed enabled:hover:bg-[#0a0a0a] enabled:hover:text-white";

  return (
    <section className="relative w-full bg-[#E8D9C0] rounded-t-[40px] md:rounded-t-[56px] pt-16 md:pt-24 pb-20 md:pb-24 overflow-hidden">
      {/* Decorative doodles */}
      <DoodleShine className="absolute top-10 left-[8%] w-6 h-6 opacity-60 pointer-events-none" color="#F4B400" />
      <DoodleStrand className="absolute top-20 right-[12%] w-16 h-5 opacity-35 pointer-events-none rotate-[-5deg]" color="#D72638" />
      <DoodleShine className="absolute bottom-16 right-[8%] w-5 h-5 opacity-55 pointer-events-none" color="#2D7A3E" />

      <div className="relative mx-auto max-w-350 px-6 md:px-10">
        {/* ══════════ Header ══════════ */}
        {/* Mobile: title on top, arrows below. Desktop: arrows + title inline. */}
        <div className="mb-10 md:mb-16">
          {/* Title (always centered) */}
          <div className="text-center md:relative md:flex md:items-center md:justify-center">
            {/* Desktop-only left arrow */}
            <button onClick={handlePrev} disabled={clampedActiveIndex === 0} aria-label="Previous testimonial" className={`hidden md:flex absolute left-0 ${arrowClass} enabled:hover:-translate-x-1`}>
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-enabled:group-hover:-translate-x-0.5" strokeWidth={2} />
            </button>

            <div>
              <span className="inline-block text-[0.72rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60 mb-4">— Testimonials</span>
              <h2 className="text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-[-0.02em] text-[#0a0a0a]">
                What our{" "}
                <span className="relative inline-block">
                  <span className="italic text-[#D72638]">clients</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                    <path d="M2 8 Q 50 2, 100 6 T 198 6" stroke="#F4B400" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                say.
              </h2>
            </div>

            {/* Desktop-only right arrow */}
            <button onClick={handleNext} disabled={clampedActiveIndex === maxIndex} aria-label="Next testimonial" className={`hidden md:flex absolute right-0 ${arrowClass} enabled:hover:translate-x-1`}>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-enabled:group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </div>

          {/* Mobile-only arrow pair (centered below title) */}
          <div className="md:hidden flex items-center justify-center gap-4 mt-8">
            <button onClick={handlePrev} disabled={clampedActiveIndex === 0} aria-label="Previous testimonial" className={arrowClass}>
              <ArrowLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button onClick={handleNext} disabled={clampedActiveIndex === maxIndex} aria-label="Next testimonial" className={arrowClass}>
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ══════════ Carousel ══════════ */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 md:gap-5 transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: trackTransform }}>
            {TESTIMONIALS.map((t, idx) => {
              const isVisible = idx >= clampedActiveIndex && idx < clampedActiveIndex + cardsPerView;
              return (
                <article key={`${t.name}-${idx}`} className={`shrink-0 relative bg-white rounded-3xl border-2 border-[#0a0a0a]/90 px-7 md:px-8 py-7 md:py-8 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-40"}`} style={{ width: cardWidthCalc }}>
                  <Quote className="absolute top-6 right-6 w-6 h-6 text-[#0a0a0a]/10" strokeWidth={2} fill="currentColor" />

                  <header className="flex items-center gap-4 mb-5">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#E8D9C0] shrink-0 border-2 border-[#0a0a0a]/10">
                      <img src={galleryImages[t.avatarIdx] ?? ""} alt={t.name} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-[0.95rem] font-semibold tracking-widest uppercase text-[#0a0a0a] mb-1">{t.name}</h3>
                      <time className="block text-[0.78rem] text-[#0a0a0a]/55 tracking-wide">{t.date}</time>
                    </div>
                  </header>

                  <p className="text-[0.95rem] md:text-[1rem] leading-[1.6] text-[#2a2a2a]">{t.quote}</p>

                  <div className="mt-5 pt-4 border-t border-[#0a0a0a]/10 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-[#F4B400]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1 L12.5 7 L19 7.5 L14 12 L15.5 19 L10 15 L4.5 19 L6 12 L1 7.5 L7.5 7 Z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-[0.72rem] tracking-[0.15em] uppercase text-[#0a0a0a]/50">Verified</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ══════════ Dot indicators ══════════ */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button key={idx} onClick={() => setActiveIndex(idx)} aria-label={`Go to slide ${idx + 1}`} className={`transition-all duration-300 rounded-full ${idx === clampedActiveIndex ? "w-8 h-2 bg-[#0a0a0a]" : "w-2 h-2 bg-[#0a0a0a]/25 hover:bg-[#0a0a0a]/50"}`} />
          ))}
        </div>

        {/* ══════════ Leave a Review ══════════ */}
        <div className="flex justify-center mt-10 md:mt-12">
          <Link to={routePaths.contact} className="group no-underline inline-flex items-center gap-2 text-[#0a0a0a] text-[0.8rem] font-semibold tracking-[0.18em] uppercase py-2 transition-colors duration-300 hover:text-[#D72638]">
            <span className="relative">
              Leave a Review
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-current origin-left scale-x-100 transition-transform duration-400 group-hover:scale-x-0" />
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-current origin-right scale-x-0 transition-transform duration-400 delay-150 group-hover:scale-x-100" />
            </span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

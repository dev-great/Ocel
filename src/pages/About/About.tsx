import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
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

const About = () => {
  const welcomeImg = galleryImages[7] ?? "";
  const studioImg = galleryImages[16] ?? "";
  const craftImg = galleryImages[29] ?? "";

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HEADER — mobile-reduced
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#FAF7F2] overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full blur-3xl pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(circle at 30% 30%, #FDE8B8 0%, #F9D9C0 35%, rgba(249,217,192,0) 70%)",
          }}
        />

        {/* Doodles — hide most on mobile, keep one subtle accent */}
        <DoodleShine className="absolute top-24 left-[8%] md:top-32 w-6 h-6 md:w-8 md:h-8 opacity-60 md:opacity-70 pointer-events-none rotate-[-15deg]" color="#F4B400" />
        <DoodleStrand className="hidden md:block absolute top-[40%] right-[10%] w-16 h-5 opacity-40 pointer-events-none rotate-[-4deg]" color="#D72638" />
        <DoodleShine className="hidden md:block absolute bottom-24 left-[12%] w-6 h-6 opacity-55 pointer-events-none" color="#2D7A3E" />

        <Navbar />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-6 md:pt-12 pb-12 md:pb-28">
          {/* Breadcrumb — tighter margin on mobile */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.7rem] md:text-[0.72rem] tracking-[0.18em] uppercase text-[#0a0a0a]/55 mb-10 md:mb-32">
            <Link to={routePaths.home} className="no-underline text-[#0a0a0a]/55 hover:text-[#D72638] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" strokeWidth={2.5} />
            <span className="text-[#0a0a0a]">About</span>
          </nav>

          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 md:gap-3 text-[0.62rem] md:text-[0.72rem] tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#0a0a0a]/55 mb-4 md:mb-10 opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.05s_forwards]">
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
              Who We Are
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
            </span>

            <h1 className="text-[clamp(2.4rem,11vw,10rem)] leading-[0.95] md:leading-[0.88] tracking-[-0.03em] text-[#0a0a0a] opacity-0 animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_forwards]">
              About{" "}
              <span className="relative inline-block">
                <span className="italic text-[#D72638]">us</span>
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
          CHAPTER 1 — WELCOME (image left, text right)
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#E8D9C0] rounded-t-[40px] md:rounded-t-[56px] pt-12 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        <DoodleShine className="hidden md:block absolute top-14 right-[8%] w-6 h-6 opacity-55 pointer-events-none" color="#F4B400" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* Image — left */}
            <div className="relative order-2 lg:order-1 h-[420px] md:h-[520px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-t-[180px] rounded-b-[24px] overflow-hidden bg-[#0a0a0a] shadow-[0_30px_60px_rgba(10,10,10,0.18)]">
                <img src={welcomeImg} alt="Ocel African Hair Braiding" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-white/70 mb-1">— Welcome</span>
                    <span className="block text-[1rem] tracking-tight text-white leading-tight">To Ocel.</span>
                  </div>
                  <div className="shrink-0 bg-white text-[#0a0a0a] text-[0.65rem] tracking-[0.18em] uppercase font-semibold px-3 py-1.5 rounded-full">Ch. 01</div>
                </div>
              </div>
            </div>

            {/* Copy — right */}
            <div className="relative z-10 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-px bg-[#0a0a0a]/40" />
                <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60">Chapter One</span>
              </div>

              <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.02em] text-[#0a0a0a] mb-8">
                A salon built for
                <br />
                <span className="italic text-[#D72638]">beautiful</span> experiences.
              </h2>

              <div className="flex flex-col gap-5 text-[1rem] md:text-[1.05rem] leading-[1.75] text-[#2a2a2a] max-w-[520px]">
                <p>Ocel African Hair Braiding is a professional salon in Las Vegas where every client feels at home from the moment they walk in. We create a welcoming atmosphere designed for comfort and relaxation — so your braiding experience is stress-free, enjoyable, and worth the trip.</p>
                <p>We're all about giving you beautiful, personalized braids that fit your unique style. Our mission is simple: create a beautiful experience, prioritize your hair health, and send you out looking and feeling your absolute best.</p>
                <p className="text-[0.95rem] text-[#3a3a3a]/90 italic border-l-2 border-[#D72638] pl-5">Where you can be yourself — valued, comfortable, and ready to transform your look.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHAPTER 2 — THE STUDIO (text left, image right)
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#F2EDE2] pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        <DoodleStrand className="hidden md:block absolute top-16 left-[8%] w-20 h-5 opacity-30 pointer-events-none rotate-[-4deg]" color="#2D7A3E" />
        <DoodleShine className="hidden md:block absolute bottom-20 right-[12%] w-6 h-6 opacity-50 pointer-events-none" color="#D72638" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Copy — left */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-px bg-[#0a0a0a]/40" />
                <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60">Chapter Two</span>
              </div>

              <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.02em] text-[#0a0a0a] mb-8">
                A space that feels
                <br />
                like <span className="italic text-[#D72638]">family</span>.
              </h2>

              <div className="flex flex-col gap-5 text-[1rem] md:text-[1.05rem] leading-[1.75] text-[#2a2a2a] max-w-[520px]">
                <p>Walk into our studio on East Tropicana and you'll understand why clients keep coming back. There's no rush, no pressure — just a warm, welcoming space where you feel at ease the moment you sit down.</p>
                <p>We're known for braiding soft — something tender-headed clients have been quietly grateful for over the years. The styles are neat, long-lasting, and built around your hair health, not around turnover.</p>
                <p>Whether it's your first visit or your fiftieth, you'll be treated like family from the moment you walk through the door.</p>
              </div>

              {/* Location note */}
              <div className="flex items-center gap-2.5 mt-10 text-[0.75rem] tracking-[0.15em] uppercase text-[#0a0a0a]/60">
                <MapPin className="w-4 h-4 text-[#D72638]" strokeWidth={2.25} fill="#D72638" />
                <span>5020 E Tropicana Ave · Las Vegas, NV</span>
              </div>
            </div>

            {/* Image — right */}
            <div className="relative h-[420px] md:h-[520px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-t-[180px] rounded-b-[24px] overflow-hidden bg-[#0a0a0a] shadow-[0_30px_60px_rgba(10,10,10,0.18)]">
                <img src={studioImg} alt="Inside the Ocel studio" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-white/70 mb-1">— The Studio</span>
                    <span className="block text-[1rem] tracking-tight text-white leading-tight">East Tropicana Ave.</span>
                  </div>
                  <div className="shrink-0 bg-white text-[#0a0a0a] text-[0.65rem] tracking-[0.18em] uppercase font-semibold px-3 py-1.5 rounded-full">Ch. 02</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PULL QUOTE BAND (black) — real client review
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 right-0 flex h-1">
          <div className="flex-1 bg-[#D72638]" />
          <div className="flex-1 bg-[#F4B400]" />
          <div className="flex-1 bg-[#2D7A3E]" />
        </div>

        <div
          className="absolute -top-32 right-[15%] w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, #F4B400 0%, rgba(244,180,0,0) 70%)",
          }}
        />

        <div className="relative mx-auto max-w-[1000px] px-6 md:px-10 text-center">
          <div aria-hidden="true" className="text-[#F4B400] text-[6rem] md:text-[8rem] leading-[0.6] italic mb-4">
            "
          </div>

          <blockquote className="text-[clamp(1.7rem,3.5vw,2.8rem)] leading-[1.25] tracking-[-0.01em] italic text-white mb-8">From the moment I walked in, I was welcomed with warmth and genuine hospitality that made me feel right at home.</blockquote>

          <cite className="not-italic inline-flex items-center gap-3 text-[0.72rem] tracking-[0.22em] uppercase text-white/60">
            <span className="inline-block w-6 h-px bg-white/40" />
            A client · Google review
            <span className="inline-block w-6 h-px bg-white/40" />
          </cite>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CHAPTER 3 — THE CRAFT (image left, text right)
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#E8D9C0] pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        <DoodleShine className="hidden md:block absolute top-16 right-[8%] w-6 h-6 opacity-55 pointer-events-none" color="#2D7A3E" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* Image — left */}
            <div className="relative order-2 lg:order-1 h-[420px] md:h-[520px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-t-[180px] rounded-b-[24px] overflow-hidden bg-[#0a0a0a] shadow-[0_30px_60px_rgba(10,10,10,0.18)]">
                <img src={craftImg} alt="Braiding craft at Ocel" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <span className="block text-[0.6rem] tracking-[0.22em] uppercase text-white/70 mb-1">— The Craft</span>
                    <span className="block text-[1rem] tracking-tight text-white leading-tight">Built to last.</span>
                  </div>
                  <div className="shrink-0 bg-white text-[#0a0a0a] text-[0.65rem] tracking-[0.18em] uppercase font-semibold px-3 py-1.5 rounded-full">Ch. 03</div>
                </div>
              </div>
            </div>

            {/* Copy — right */}
            <div className="relative z-10 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-px bg-[#0a0a0a]/40" />
                <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60">Chapter Three</span>
              </div>

              <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.02em] text-[#0a0a0a] mb-8">
                Styles that last
                <br />
                <span className="italic text-[#D72638]">weeks</span>, not days.
              </h2>

              <div className="flex flex-col gap-5 text-[1rem] md:text-[1.05rem] leading-[1.75] text-[#2a2a2a] max-w-[520px]">
                <p>We use top-of-the-line tools and high-quality extensions because a good braid should still look good weeks after you leave the chair. Clients regularly tell us their tribal braids stay neat and beautiful for over a month.</p>
                <p>Knotless braids, boho styles, Senegalese and passion twists, faux locs, cornrows for men and kids — whatever you come in for, we take our time getting it right. Children are handled with extra patience; tender-headed clients are handled with extra care.</p>
                <p>The craft has been alive for centuries. We carry it forward — honoring the tradition in every pattern we weave, every style we create.</p>
              </div>
            </div>
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
              <span className="inline-block text-[0.7rem] tracking-[0.25em] uppercase text-white/50 mb-3">— Come See Us</span>
              <h3 className="text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-[-0.02em] text-white mb-4">
                Ready for your <span className="italic text-[#F4B400]">next</span> style?
              </h3>
              <p className="text-[0.95rem] text-white/65 leading-[1.6]">Book an appointment online, or call us at (702) 934-2007 to check for immediate availability. We're open Monday through Saturday.</p>
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

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default About;

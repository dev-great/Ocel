import { Link } from "react-router-dom";
import { routePaths } from "../../navigations/routes";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500&display=swap');

    @keyframes ctaFadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes ctaShimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }

    .cta-card-fade { opacity: 0; animation: ctaFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
    .cta-card-d1 { animation-delay: 0.08s; }
    .cta-card-d2 { animation-delay: 0.18s; }
    .cta-card-d3 { animation-delay: 0.28s; }
    .cta-card-d4 { animation-delay: 0.38s; }

    .cta-heading-gold {
      background: linear-gradient(90deg, #ac2281 0%, #f0d99a 45%, #ac2281 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: ctaShimmer 4s linear infinite;
    }

    .cta-book-btn {
      transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.3s ease,
                  background 0.25s ease;
    }
    .cta-book-btn:hover {
      transform: translateY(-3px);
      background: #ac2281 !important;
      box-shadow: 0 12px 32px rgba(201,169,110,0.3);
    }
  `}</style>
);

/* ── Inline SVG sketch pattern ──
   Hand-drawn style linework: loose circles, scribble lines, dots, botanical squiggles
   All in gold tones at low opacity so it reads as a texture behind the text
*/
const SketchBg = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0.13,
      pointerEvents: "none",
    }}
    viewBox="0 0 1200 480"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    {/* ── scattered loose circles ── */}
    <circle cx="80" cy="80" r="52" stroke="#c9a96e" strokeWidth="1.2" strokeDasharray="4 6" />
    <circle cx="80" cy="80" r="74" stroke="#c9a96e" strokeWidth="0.7" strokeDasharray="2 8" />
    <circle cx="1120" cy="390" r="64" stroke="#c9a96e" strokeWidth="1.2" strokeDasharray="4 6" />
    <circle cx="1120" cy="390" r="90" stroke="#c9a96e" strokeWidth="0.7" strokeDasharray="2 9" />
    <circle cx="600" cy="440" r="40" stroke="#c9a96e" strokeWidth="0.9" strokeDasharray="3 7" />
    <circle cx="200" cy="380" r="30" stroke="#c9a96e" strokeWidth="0.8" strokeDasharray="2 6" />
    <circle cx="980" cy="80" r="44" stroke="#c9a96e" strokeWidth="1" strokeDasharray="3 7" />

    {/* ── loose hand-drawn ellipses ── */}
    <ellipse cx="600" cy="240" rx="320" ry="130" stroke="#c9a96e" strokeWidth="0.8" strokeDasharray="5 10" />
    <ellipse cx="600" cy="240" rx="480" ry="195" stroke="#c9a96e" strokeWidth="0.5" strokeDasharray="3 12" />

    {/* ── botanical leaf squiggles left ── */}
    <path d="M 30 200 C 50 160, 90 170, 100 140 C 110 110, 80 90, 60 110 C 40 130, 55 160, 30 200 Z" stroke="#c9a96e" strokeWidth="1.1" fill="none" />
    <path d="M 30 200 C 55 185, 75 165, 80 140" stroke="#c9a96e" strokeWidth="0.8" />
    <path d="M 50 310 C 70 270, 110 280, 120 250 C 130 220, 100 200, 80 220 C 60 240, 75 270, 50 310 Z" stroke="#c9a96e" strokeWidth="1" fill="none" />
    <path d="M 50 310 C 75 295, 95 275, 100 250" stroke="#c9a96e" strokeWidth="0.7" />

    {/* ── botanical leaf squiggles right ── */}
    <path d="M 1170 200 C 1150 160, 1110 170, 1100 140 C 1090 110, 1120 90, 1140 110 C 1160 130, 1145 160, 1170 200 Z" stroke="#c9a96e" strokeWidth="1.1" fill="none" />
    <path d="M 1170 200 C 1145 185, 1125 165, 1120 140" stroke="#c9a96e" strokeWidth="0.8" />
    <path d="M 1150 310 C 1130 270, 1090 280, 1080 250 C 1070 220, 1100 200, 1120 220 C 1140 240, 1125 270, 1150 310 Z" stroke="#c9a96e" strokeWidth="1" fill="none" />
    <path d="M 1150 310 C 1125 295, 1105 275, 1100 250" stroke="#c9a96e" strokeWidth="0.7" />

    {/* ── scribble underlines / strokes ── */}
    <path d="M 360 370 C 390 367, 450 372, 500 368 C 550 364, 610 370, 650 366 C 700 362, 750 368, 800 365 C 840 362, 870 368, 840 370" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M 380 382 C 420 379, 500 384, 560 380 C 620 376, 680 382, 730 378" stroke="#c9a96e" strokeWidth="0.8" strokeLinecap="round" />

    {/* ── small diamond / star accents ── */}
    <path d="M 160 140 L 166 150 L 172 140 L 166 130 Z" stroke="#c9a96e" strokeWidth="1" fill="none" />
    <path d="M 163 140 L 169 140 M 166 134 L 166 146" stroke="#c9a96e" strokeWidth="0.8" />
    <path d="M 1030 320 L 1036 330 L 1042 320 L 1036 310 Z" stroke="#c9a96e" strokeWidth="1" fill="none" />
    <path d="M 1033 320 L 1039 320 M 1036 314 L 1036 326" stroke="#c9a96e" strokeWidth="0.8" />
    <path d="M 530 60 L 536 70 L 542 60 L 536 50 Z" stroke="#c9a96e" strokeWidth="1" fill="none" />
    <path d="M 680 400 L 686 410 L 692 400 L 686 390 Z" stroke="#c9a96e" strokeWidth="0.9" fill="none" />

    {/* ── scattered dots ── */}
    {[
      [140, 280],
      [260, 100],
      [400, 420],
      [700, 50],
      [870, 430],
      [1000, 180],
      [450, 300],
      [750, 300],
      [320, 240],
      [900, 300],
      [580, 420],
      [220, 460],
      [1060, 240],
      [490, 130],
      [760, 160],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="2.2" fill="#c9a96e" />
    ))}

    {/* ── loose horizontal sketch lines top & bottom ── */}
    <path d="M 0 30 C 100 28, 200 32, 300 29 C 400 26, 500 31, 600 28 C 700 25, 800 30, 900 27 C 1000 24, 1100 29, 1200 26" stroke="#c9a96e" strokeWidth="0.6" strokeLinecap="round" />
    <path d="M 0 450 C 120 448, 250 452, 400 449 C 550 446, 700 451, 850 448 C 1000 445, 1100 450, 1200 447" stroke="#c9a96e" strokeWidth="0.6" strokeLinecap="round" />

    {/* ── corner flourish top-left ── */}
    <path d="M 0 0 C 40 20, 20 60, 60 80" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round" />
    <path d="M 0 0 C 60 10, 80 40, 110 30" stroke="#c9a96e" strokeWidth="0.7" strokeLinecap="round" />

    {/* ── corner flourish bottom-right ── */}
    <path d="M 1200 480 C 1160 460, 1180 420, 1140 400" stroke="#c9a96e" strokeWidth="1" strokeLinecap="round" />
    <path d="M 1200 480 C 1140 470, 1120 440, 1090 450" stroke="#c9a96e" strokeWidth="0.7" strokeLinecap="round" />
  </svg>
);

const HomeCTA = () => (
  <>
    <GlobalStyles />

    {/* ── outer section padding — sits mid-page ── */}
    <section className="bg-white py-16 px-6 font-[Inter,sans-serif]">
      <div className="max-w-300 mx-auto">
        {/* ── THE CARD ── */}
        <div className="relative bg-[#0e0b0f] rounded-[28px] overflow-hidden px-8 py-20 max-[640px]:py-14 text-center">
          {/* Sketch texture fills the card */}
          <SketchBg />

          {/* Content sits above the sketch */}
          <div className="relative z-10 max-w-150 mx-auto">
            <p className="cta-card-fade cta-card-d1 text-[0.68rem] font-medium tracking-[0.24em] uppercase text-[#ac2281] mb-4">My Bebe Beauty · Maryland</p>

            <h2 className="cta-card-fade cta-card-d2 font-[Syne,sans-serif] font-extrabold text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] tracking-[-0.03em] text-white mb-5">
              Ready for your <span className="cta-heading-gold">glow-up?</span>
            </h2>

            <p className="cta-card-fade cta-card-d3 text-[0.92rem] font-light text-white/50 leading-[1.85] mb-9 max-w-130 mx-auto">Braids, beats, and beauty — all in one place. Book your appointment with us and leave looking like the best version of yourself.</p>

            <div className="cta-card-fade cta-card-d4">
              <Link to={routePaths.booking} className="cta-book-btn no-underline inline-flex items-center gap-3 bg-[#E2B0D2] text-[#0e0b0f] font-[Syne,sans-serif] font-bold text-[0.9rem] tracking-[0.05em] px-9 py-[0.95rem] rounded-full">
                Book Your Appointment
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HomeCTA;

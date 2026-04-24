import { MapPin, Phone, Clock, Mail, ArrowUpRight, Instagram, MessageCircle } from "lucide-react";

/* ══════════════════════════════════════════════════════════════
   CONTACT INFO — edit directly
   ══════════════════════════════════════════════════════════════ */

const CONTACT = {
  address: "5020 E Tropicana Ave, Suite 2B",
  addressLine2: "Las Vegas, NV 89102",
  phone: "(702) 934-2007",
  phoneHref: "tel:+17029342007",
  email: "garmenkaizer@gmail.com",
  emailHref: "mailto:garmenkaizer@gmail.com",
  hoursWeekday: "9:00 AM – 7:00 PM",
  hoursDays: "Monday — Saturday",
  sundayNote: "Closed Sundays",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2450+W+Charleston+Blvd+Las+Vegas+NV",
  instagram: "@ocelbraiding",
  instagramHref: "https://www.instagram.com/ocelafricanhairbraiding/",
};

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

const ContactSection = () => {
  return (
    <div className="bg-[#F0F4EE] ">
      <section className="relative w-full bg-[#F7F2E8] rounded-t-[40px] md:rounded-t-[56px] pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        {/* Decorative doodles */}
        <DoodleShine className="absolute top-12 left-[6%] w-6 h-6 opacity-55 pointer-events-none" color="#F4B400" />
        <DoodleStrand className="absolute top-24 right-[10%] w-16 h-5 opacity-35 pointer-events-none -rotate-6" color="#D72638" />
        <DoodleShine className="absolute bottom-12 left-[10%] w-5 h-5 opacity-50 pointer-events-none" color="#2D7A3E" />

        <div className="relative mx-auto max-w-350 px-6 md:px-10">
          {/* ══════════ Section header ══════════ */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="inline-block text-[0.72rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60 mb-4">— Visit the salon</span>
              <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.02em] text-[#0a0a0a]">
                Come{" "}
                <span className="relative inline-block">
                  <span className="italic text-[#D72638]">see us</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                    <path d="M2 8 Q 50 2, 100 6 T 198 6" stroke="#F4B400" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                .
              </h2>
            </div>
            <p className="text-[0.95rem] leading-[1.7] text-[#3a3a3a] max-w-85">Walk-ins welcome, but appointments get priority seating. Find us on Charleston Blvd in Las Vegas.</p>
          </div>

          {/* ══════════════════════════════════════════════════════════
            BENTO GRID
            ┌──────────────────────────┬───────────────┐
            │                          │    Phone      │
            │    Address (featured)    │               │
            │                          ├───────────────┤
            │                          │    Email      │
            ├──────────────────────────┴───────────────┤
            │   Hours  │  Instagram  │   Map CTA       │
            └──────────────────────────────────────────┘
            ══════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* ════════ ADDRESS — featured large card (spans 2 cols + 2 rows on desktop) ════════ */}
            <div className="group relative md:col-span-2 md:row-span-2 bg-[#0a0a0a] text-white rounded-4xl p-8 md:p-12 flex flex-col justify-between min-h-80 overflow-hidden transition-all duration-500 hover:-translate-y-1">
              {/* Subtle color accent in corner */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#D72638]/15 blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center justify-between">
                <span className="flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-white/60">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                  Find the salon
                </span>
                <span className="text-[0.7rem] tracking-[0.18em] uppercase text-[#F4B400] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400]" />
                  01
                </span>
              </div>

              {/* Big address */}
              <div className="relative py-8 md:py-12">
                <div className="text-[clamp(2rem,4.5vw,3.8rem)] leading-none tracking-[-0.02em] mb-2">{CONTACT.address}</div>
                <div className="text-[clamp(1.2rem,2.4vw,1.8rem)] leading-[1.1] text-white/70 italic">{CONTACT.addressLine2}</div>
              </div>

              {/* Maps CTA */}
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="relative no-underline inline-flex items-center gap-3 text-white text-[0.8rem] font-semibold tracking-[0.16em] uppercase self-start group/cta">
                <span className="relative pb-1">
                  Get Directions
                  <span className="absolute left-0 right-0 bottom-0 h-px bg-white/40" />
                  <span className="absolute left-0 bottom-0 h-px bg-[#F4B400] w-0 group-hover/cta:w-full transition-[width] duration-500" />
                </span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D72638] transition-all duration-400 group-hover/cta:bg-[#F4B400] group-hover/cta:-rotate-45">
                  <ArrowUpRight className="w-4.5 h-4.5 text-white group-hover/cta:text-[#0a0a0a] transition-colors duration-400" strokeWidth={2.5} />
                </span>
              </a>
            </div>

            {/* ════════ PHONE ════════ */}
            <a href={CONTACT.phoneHref} className="group relative no-underline bg-white border-2 border-[#0a0a0a]/90 rounded-[28px] p-7 md:p-8 flex flex-col justify-between min-h-45 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,10,10,0.08)]">
              <div className="flex items-start justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F4B400] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]">
                  <Phone className="w-4.5 h-4.5 text-[#0a0a0a]" strokeWidth={2.25} fill="#0a0a0a" />
                </span>
                <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#0a0a0a]/40">02</span>
              </div>
              <div>
                <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-[#0a0a0a]/50 mb-1.5">Call the salon</span>
                <span className="block text-[1.15rem] md:text-[1.25rem] text-[#0a0a0a] tracking-tight leading-tight">{CONTACT.phone}</span>
              </div>
            </a>

            {/* ════════ EMAIL ════════ */}
            <a href={CONTACT.emailHref} className="group relative no-underline bg-white border-2 border-[#0a0a0a]/90 rounded-[28px] p-7 md:p-8 flex flex-col justify-between min-h-45 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,10,10,0.08)]">
              <div className="flex items-start justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#2D7A3E] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
                  <Mail className="w-4.5 h-4.5 text-white" strokeWidth={2.25} />
                </span>
                <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#0a0a0a]/40">03</span>
              </div>
              <div>
                <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-[#0a0a0a]/50 mb-1.5">Drop a line</span>
                <span className="block text-[0.98rem] md:text-[1.05rem] text-[#0a0a0a] tracking-tight leading-tight break-all">{CONTACT.email}</span>
              </div>
            </a>

            {/* ════════ HOURS ════════ */}
            <div className="group relative bg-white border-2 border-[#0a0a0a]/90 rounded-[28px] p-7 md:p-8 flex flex-col justify-between min-h-45 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D72638] transition-transform duration-300 group-hover:scale-110">
                  <Clock className="w-4.5 h-4.5 text-white" strokeWidth={2.25} />
                </span>
                <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#0a0a0a]/40">04</span>
              </div>
              <div>
                <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-[#0a0a0a]/50 mb-1.5">Open hours</span>
                <span className="block text-[1.05rem] md:text-[1.15rem] text-[#0a0a0a] tracking-tight leading-tight mb-0.5">{CONTACT.hoursWeekday}</span>
                <span className="block text-[0.82rem] text-[#0a0a0a]/60 leading-tight">{CONTACT.hoursDays}</span>
                <span className="inline-flex items-center gap-1.5 mt-2.5 text-[0.7rem] tracking-[0.15em] uppercase text-[#2D7A3E] font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#2D7A3E] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D7A3E]" />
                  </span>
                  Open now
                </span>
              </div>
            </div>

            {/* ════════ INSTAGRAM ════════ */}
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="group relative no-underline bg-[#F4B400] border-2 border-[#0a0a0a]/90 rounded-[28px] p-7 md:p-8 flex flex-col justify-between min-h-45 transition-all duration-500 hover:-translate-y-1 hover:bg-[#FFCB2E] overflow-hidden">
              <div className="flex items-start justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0a0a0a] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
                  <Instagram className="w-4.5 h-4.5 text-white" strokeWidth={2.25} />
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </div>
              <div>
                <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-[#0a0a0a]/70 mb-1.5">Follow along</span>
                <span className="block text-[1.15rem] md:text-[1.3rem] text-[#0a0a0a] tracking-tight leading-tight">{CONTACT.instagram}</span>
              </div>
            </a>

            {/* ════════ WALK-IN NOTE ════════ */}
            <div className="group relative bg-white border-2 border-[#0a0a0a]/90 rounded-[28px] p-7 md:p-8 flex flex-col justify-between min-h-45 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0a0a0a]">
                  <MessageCircle className="w-4.5 h-4.5 text-[#F4B400]" strokeWidth={2.25} />
                </span>
                <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#0a0a0a]/40">05</span>
              </div>
              <div>
                <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-[#0a0a0a]/50 mb-1.5">Walk-ins</span>
                <span className="block text-[1rem] md:text-[1.05rem] text-[#0a0a0a] leading-[1.35]">Drop in anytime during open hours — we'll fit you in between bookings.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;

import { useState, useRef, type FormEvent } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, ChevronRight, ChevronDown, MapPin, Phone, Mail, Clock, Instagram, Check, AlertCircle } from "lucide-react";
import { routePaths } from "../../navigations/routes";
import Navbar from "../../layouts/Navbar";

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY",
};

const CONTACT = {
  address: "5020 E Tropicana Ave, Suite 2B",
  addressLine2: "Las Vegas, NV 89122",
  phone: "(702) 934-2007",
  phoneHref: "tel:+17029342007",
  email: "garmenkaizer@gmail.com",
  emailHref: "mailto:garmenkaizer@gmail.com",
  hoursDays: "Monday — Saturday",
  hoursTime: "9:00 AM – 5:00 PM",
  instagramHandle: "@ocelafricanhairbraiding",
  instagramHref: "https://www.instagram.com/ocelafricanhairbraiding/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=5020+E+Tropicana+Ave+Suite+2B+Las+Vegas+NV+89122",
};

const SUBJECTS = ["Booking Inquiry", "Style Consultation", "Pricing Question", "Availability Check", "General Question", "Other"];

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

type FormStatus = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      await emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, formRef.current, { publicKey: EMAILJS_CONFIG.publicKey });
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please call us at (702) 934-2007 or try again.");
    }
  };

  return (
    // ══════════════════════════════════════════════════════════════
    // Page-level cream wrapper — scoped to THIS page only.
    // `min-h-screen` ensures the cream always reaches past the fold
    // so white body never peeks through anywhere on this page.
    // ══════════════════════════════════════════════════════════════
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* ══════════════════════════════════════════════════════════════
          HEADER
          ══════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#FAF7F2] overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[900px] h-[900px] rounded-full blur-3xl pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(circle at 30% 30%, #FDE8B8 0%, #F9D9C0 35%, rgba(249,217,192,0) 70%)",
          }}
        />

        <DoodleShine className="absolute top-24 left-[8%] md:top-32 w-6 h-6 md:w-8 md:h-8 opacity-60 md:opacity-70 pointer-events-none rotate-[-15deg]" color="#F4B400" />
        <DoodleStrand className="hidden md:block absolute top-[40%] right-[10%] w-16 h-5 opacity-40 pointer-events-none rotate-[-4deg]" color="#D72638" />
        <DoodleShine className="hidden md:block absolute bottom-24 left-[12%] w-6 h-6 opacity-55 pointer-events-none" color="#2D7A3E" />

        <Navbar />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-6 md:pt-12 pb-12 md:pb-28">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.7rem] md:text-[0.72rem] tracking-[0.18em] uppercase text-[#0a0a0a]/55 mb-10 md:mb-32">
            <Link to={routePaths.home} className="no-underline text-[#0a0a0a]/55 hover:text-[#D72638] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" strokeWidth={2.5} />
            <span className="text-[#0a0a0a]">Contact</span>
          </nav>

          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 md:gap-3 text-[0.62rem] md:text-[0.72rem] tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#0a0a0a]/55 mb-4 md:mb-10 opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.05s_forwards]">
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
              Let's Talk
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
            </span>

            <h1 className="text-[clamp(2.4rem,11vw,10rem)] leading-[0.95] md:leading-[0.88] tracking-[-0.03em] text-[#0a0a0a] opacity-0 animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_forwards]">
              Get in{" "}
              <span className="relative inline-block">
                <span className="italic text-[#D72638]">touch</span>
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
          DETAILS + FORM
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#E8D9C0] rounded-t-[40px] md:rounded-t-[56px] pt-12 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        <DoodleShine className="hidden md:block absolute top-14 right-[8%] w-6 h-6 opacity-55 pointer-events-none" color="#F4B400" />
        <DoodleStrand className="hidden md:block absolute bottom-20 left-[10%] w-16 h-5 opacity-30 pointer-events-none rotate-[-6deg]" color="#2D7A3E" />

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-4 md:gap-5 order-2 lg:order-1">
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="group relative no-underline bg-[#0a0a0a] text-white rounded-[24px] p-7 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#D72638]/15 blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className="flex items-center gap-2 text-[0.68rem] tracking-[0.2em] uppercase text-white/60">
                      <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                      Find us
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/60 transition-all duration-300 group-hover:text-[#F4B400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                  </div>
                  <div className="mb-5">
                    <div className="text-[1.2rem] md:text-[1.35rem] leading-[1.2] tracking-tight text-white mb-1">{CONTACT.address}</div>
                    <div className="text-[0.95rem] text-white/70 italic">{CONTACT.addressLine2}</div>
                  </div>
                  <div className="pt-4 border-t border-white/15 text-[0.7rem] tracking-[0.18em] uppercase text-[#F4B400] flex items-center gap-2">
                    <span>Open in Maps</span>
                    <span className="inline-block w-4 h-px bg-[#F4B400]" />
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <a href={CONTACT.phoneHref} className="group relative no-underline bg-white border-2 border-[#0a0a0a]/90 rounded-[22px] p-6 flex flex-col justify-between min-h-[160px] transition-all duration-500 hover:-translate-y-1">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F4B400] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]">
                    <Phone className="w-4 h-4 text-[#0a0a0a]" strokeWidth={2.5} fill="#0a0a0a" />
                  </span>
                  <div className="mt-auto">
                    <span className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#0a0a0a]/50 mb-1">Call us</span>
                    <span className="block text-[1rem] text-[#0a0a0a] tracking-tight">{CONTACT.phone}</span>
                  </div>
                </a>

                <a href={CONTACT.emailHref} className="group relative no-underline bg-white border-2 border-[#0a0a0a]/90 rounded-[22px] p-6 flex flex-col justify-between min-h-[160px] transition-all duration-500 hover:-translate-y-1">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D7A3E] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
                    <Mail className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </span>
                  <div className="mt-auto">
                    <span className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#0a0a0a]/50 mb-1">Email</span>
                    <span className="block text-[0.88rem] text-[#0a0a0a] tracking-tight break-all">{CONTACT.email}</span>
                  </div>
                </a>
              </div>

              <div className="relative bg-white border-2 border-[#0a0a0a]/90 rounded-[22px] p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D72638] shrink-0">
                    <Clock className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <span className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#0a0a0a]/50 mb-1">Open hours</span>
                    <span className="block text-[1rem] text-[#0a0a0a] tracking-tight leading-tight mb-0.5">{CONTACT.hoursTime}</span>
                    <span className="block text-[0.82rem] text-[#0a0a0a]/60 mb-2">{CONTACT.hoursDays}</span>
                    <span className="inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.15em] uppercase text-[#2D7A3E] font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#2D7A3E] opacity-60" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D7A3E]" />
                      </span>
                      Open now
                    </span>
                  </div>
                </div>
              </div>

              <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="group relative no-underline bg-[#F4B400] border-2 border-[#0a0a0a]/90 rounded-[22px] p-6 md:p-7 flex items-center justify-between transition-all duration-500 hover:-translate-y-1 hover:bg-[#FFCB2E]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0a0a0a] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
                    <Instagram className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </span>
                  <div>
                    <span className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#0a0a0a]/70 mb-0.5">Follow along</span>
                    <span className="block text-[0.95rem] text-[#0a0a0a] tracking-tight">{CONTACT.instagramHandle}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </a>
            </div>

            <div className="relative bg-white rounded-[28px] md:rounded-[32px] border-2 border-[#0a0a0a]/90 px-7 md:px-10 py-10 md:py-14 order-1 lg:order-2">
              <div className="mb-8">
                <span className="inline-block text-[0.7rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60 mb-3">— Send Us a Message</span>
                <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1] tracking-[-0.02em] text-[#0a0a0a]">
                  We'll get <span className="italic text-[#D72638]">back</span> to you.
                </h2>
                <p className="text-[0.92rem] text-[#3a3a3a] leading-[1.6] mt-3 max-w-[480px]">Questions, style ideas, or booking requests — drop a note and we'll reply within a business day.</p>
              </div>

              {status === "success" ? (
                <div className="flex items-start gap-4 bg-[#2D7A3E]/10 border-2 border-[#2D7A3E] rounded-[20px] px-5 py-5 animate-[fadeIn_0.4s_ease_forwards]">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D7A3E] shrink-0">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="text-[1rem] font-semibold text-[#0a0a0a] mb-1">Message sent!</div>
                    <div className="text-[0.88rem] text-[#0a0a0a]/70 leading-[1.5]">Thanks for reaching out. We'll get back to you within a business day — keep an eye on your inbox.</div>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="user_name" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                        Name <span className="text-[#D72638]">*</span>
                      </label>
                      <input id="user_name" type="text" name="user_name" required autoComplete="name" placeholder="Jane Doe" disabled={status === "submitting"} className="w-full h-[52px] px-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="user_phone" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                        Phone
                      </label>
                      <input id="user_phone" type="tel" name="user_phone" inputMode="tel" autoComplete="tel" placeholder="(702) 555-0123" disabled={status === "submitting"} className="w-full h-[52px] px-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="user_email" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                      Email <span className="text-[#D72638]">*</span>
                    </label>
                    <input id="user_email" type="email" name="user_email" required autoComplete="email" placeholder="jane@example.com" disabled={status === "submitting"} className="w-full h-[52px] px-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                      Subject <span className="text-[#D72638]">*</span>
                    </label>
                    <div className="relative">
                      <select id="subject" name="subject" required defaultValue="" disabled={status === "submitting"} className="w-full h-[52px] px-4 pr-12 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60 appearance-none cursor-pointer">
                        <option value="" disabled>
                          What's this about?
                        </option>
                        {SUBJECTS.map((subj) => (
                          <option key={subj} value={subj}>
                            {subj}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/50 pointer-events-none" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                      Message <span className="text-[#D72638]">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={6} placeholder="Tell us what style you're interested in, your preferred date, or anything else we should know…" disabled={status === "submitting"} className="w-full px-4 py-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60 resize-none leading-[1.6]" />
                  </div>

                  {status === "error" && errorMsg && (
                    <div className="flex items-start gap-2.5 text-[0.85rem] text-[#D72638] bg-[#D72638]/8 border border-[#D72638]/25 rounded-[12px] px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-2">
                    <button type="submit" disabled={status === "submitting"} className="group relative inline-flex items-center justify-center gap-3 bg-[#0a0a0a] text-white pl-7 pr-2 py-2 rounded-full transition-all duration-400 hover:shadow-[0_14px_32px_rgba(10,10,10,0.28)] enabled:hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed h-[56px]">
                      <span className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase whitespace-nowrap">{status === "submitting" ? "Sending…" : "Send Message"}</span>
                      <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#D72638] overflow-hidden transition-colors duration-400 group-enabled:group-hover:bg-[#F4B400]">
                        <ArrowUpRight className="absolute w-[18px] h-[18px] text-white transition-all duration-400 group-enabled:group-hover:translate-x-6 group-enabled:group-hover:-translate-y-6" strokeWidth={2.5} />
                        <ArrowUpRight className="absolute w-[18px] h-[18px] text-[#0a0a0a] -translate-x-6 translate-y-6 transition-all duration-400 group-enabled:group-hover:translate-x-0 group-enabled:group-hover:translate-y-0" strokeWidth={2.5} />
                      </span>
                    </button>

                    <p className="text-[0.72rem] tracking-[0.12em] uppercase text-[#0a0a0a]/50">
                      Required <span className="text-[#D72638]">*</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;

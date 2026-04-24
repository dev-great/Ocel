import { useState, useRef, type FormEvent } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, ChevronRight, ChevronDown, Clock, Check, AlertCircle, Calendar, Scissors } from "lucide-react";
import { routePaths } from "../../navigations/routes";
import Navbar from "../../layouts/Navbar";

const EMAILJS_CONFIG = {
  serviceId: "service_bvf5d98",
  templateId: "template_vcnowcy",
  publicKey: "TeGk5kVlu1IUCr7cI",
};

const SERVICE_OPTIONS = [
  { group: "Braids", services: ["Cornrows", "Natural Cornrows", "Men's Cornrows", "Knotless Braid", "Tree Braid", "Individuals"] },
  { group: "Twists", services: ["Senegalese Twist", "Kinky Twist", "Passion Twist", "Natural Twist"] },
  { group: "Locs", services: ["Dreadlocks", "Faux Lock", "Micro"] },
  { group: "Extras", services: ["Sew In", "Crochet", "Touch Up", "Take Down", "Wash"] },
  { group: "Other", services: ["Not sure — need help choosing"] },
];

const TIME_OPTIONS = ["Morning (9 AM – 12 PM)", "Early afternoon (12 PM – 3 PM)", "Late afternoon (3 PM – 5 PM)", "Flexible — whenever"];

const DAY_OPTIONS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Any weekday", "Weekend (Saturday)", "Flexible — any day"];

const LENGTH_OPTIONS = ["Short (ear length or above)", "Medium (shoulder length)", "Long (below shoulders)", "Very long (mid-back or longer)"];

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

const Booking = () => {
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
      setTimeout(() => setStatus("idle"), 8000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong sending your request. Please call us at (702) 934-2007 or try again.");
    }
  };

  return (
    <div className=" bg-[#FAF7F2] ">
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
            <span className="text-[#0a0a0a]">Booking</span>
          </nav>

          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 md:gap-3 text-[0.62rem] md:text-[0.72rem] tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#0a0a0a]/55 mb-4 md:mb-10 opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.05s_forwards]">
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
              Reserve Your Seat
              <span className="inline-block w-5 md:w-8 h-px bg-[#0a0a0a]/40" />
            </span>

            <h1 className="text-[clamp(2.4rem,11vw,10rem)] leading-[0.95] md:leading-[0.88] tracking-[-0.03em] text-[#0a0a0a] opacity-0 animate-[fadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.2s_forwards]">
              Book an{" "}
              <span className="relative inline-block">
                <span className="italic text-[#D72638]">appointment</span>
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
          FORM SECTION — form only, centered, no sidebar
          ══════════════════════════════════════════════════════════════ */}
      <div className=" bg-[#FAF7F2] ">
        <section className="relative w-full bg-[#E8D9C0] rounded-t-[40px] md:rounded-t-[56px] pt-12 md:pt-24 pb-20 md:pb-28 overflow-hidden">
          <DoodleShine className="hidden md:block absolute top-14 right-[8%] w-6 h-6 opacity-55 pointer-events-none" color="#F4B400" />
          <DoodleStrand className="hidden md:block absolute bottom-20 left-[10%] w-16 h-5 opacity-30 pointer-events-none rotate-[-6deg]" color="#2D7A3E" />

          <div className="relative mx-auto max-w-[880px] px-6 md:px-10">
            <div className="relative bg-white rounded-[28px] md:rounded-[32px] border-2 border-[#0a0a0a]/90 px-6 md:px-12 py-8 md:py-14">
              {/* Header */}
              <div className="mb-8">
                <span className="inline-block text-[0.7rem] tracking-[0.25em] uppercase text-[#0a0a0a]/60 mb-3">— Booking Request</span>
                <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1] tracking-[-0.02em] text-[#0a0a0a]">
                  Let's get you in the <span className="italic text-[#D72638]">chair</span>.
                </h2>
                <p className="text-[0.92rem] text-[#3a3a3a] leading-[1.6] mt-3 max-w-[560px]">
                  Fill out the details below and we'll confirm your appointment within the next <span className="font-semibold text-[#0a0a0a]">3 hours</span>. All fields marked with <span className="text-[#D72638]">*</span> are required.
                </p>
              </div>

              {/* SUCCESS STATE */}
              {status === "success" ? (
                <div className="flex items-start gap-4 bg-[#2D7A3E]/10 border-2 border-[#2D7A3E] rounded-[20px] px-5 py-6 animate-[fadeIn_0.4s_ease_forwards]">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2D7A3E] shrink-0">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="text-[1.1rem] font-semibold text-[#0a0a0a] mb-2">Booking request received!</div>
                    <div className="text-[0.9rem] text-[#0a0a0a]/75 leading-[1.55] mb-3">
                      We've got your request and we're reviewing our schedule. You'll hear back from us within the next <span className="font-semibold text-[#0a0a0a]">3 hours</span> — by phone or email — to confirm your slot.
                    </div>
                    <div className="text-[0.8rem] tracking-[0.1em] uppercase text-[#2D7A3E] font-semibold">Thank you for choosing Ocel.</div>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 pt-1 pb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D72638] text-white text-[0.65rem] font-semibold">1</span>
                    <span className="text-[0.7rem] tracking-[0.22em] uppercase text-[#0a0a0a]/70 font-semibold">Your details</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="user_name" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                        Name <span className="text-[#D72638]">*</span>
                      </label>
                      <input id="user_name" type="text" name="user_name" required autoComplete="name" placeholder="Jane Doe" disabled={status === "submitting"} className="w-full h-[52px] px-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="user_phone" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                        Phone <span className="text-[#D72638]">*</span>
                      </label>
                      <input id="user_phone" type="tel" name="user_phone" required inputMode="tel" autoComplete="tel" placeholder="(702) 555-0123" disabled={status === "submitting"} className="w-full h-[52px] px-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="user_email" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                      Email <span className="text-[#D72638]">*</span>
                    </label>
                    <input id="user_email" type="email" name="user_email" required autoComplete="email" placeholder="jane@example.com" disabled={status === "submitting"} className="w-full h-[52px] px-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60" />
                  </div>

                  <div className="border-t border-[#0a0a0a]/10 my-3" />

                  <div className="flex items-center gap-3 pb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F4B400] text-[#0a0a0a] text-[0.65rem] font-semibold">2</span>
                    <span className="text-[0.7rem] tracking-[0.22em] uppercase text-[#0a0a0a]/70 font-semibold">What you want done</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                      Service <span className="text-[#D72638]">*</span>
                    </label>
                    <div className="relative">
                      <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/40 pointer-events-none" strokeWidth={2} />
                      <select id="service" name="service" required defaultValue="" disabled={status === "submitting"} className="w-full h-[52px] pl-11 pr-12 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60 appearance-none cursor-pointer">
                        <option value="" disabled>
                          Choose a style…
                        </option>
                        {SERVICE_OPTIONS.map((group) => (
                          <optgroup key={group.group} label={group.group}>
                            {group.services.map((svc) => (
                              <option key={svc} value={svc}>
                                {svc}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/50 pointer-events-none" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="hair_length" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                      Hair length <span className="text-[#D72638]">*</span>
                    </label>
                    <div className="relative">
                      <select id="hair_length" name="hair_length" required defaultValue="" disabled={status === "submitting"} className="w-full h-[52px] px-4 pr-12 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60 appearance-none cursor-pointer">
                        <option value="" disabled>
                          How long is your hair?
                        </option>
                        {LENGTH_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/50 pointer-events-none" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="border-t border-[#0a0a0a]/10 my-3" />

                  <div className="flex items-center gap-3 pb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2D7A3E] text-white text-[0.65rem] font-semibold">3</span>
                    <span className="text-[0.7rem] tracking-[0.22em] uppercase text-[#0a0a0a]/70 font-semibold">When works for you</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="preferred_day" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                        Preferred day <span className="text-[#D72638]">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/40 pointer-events-none" strokeWidth={2} />
                        <select id="preferred_day" name="preferred_day" required defaultValue="" disabled={status === "submitting"} className="w-full h-[52px] pl-11 pr-12 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60 appearance-none cursor-pointer">
                          <option value="" disabled>
                            Pick a day
                          </option>
                          {DAY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/50 pointer-events-none" strokeWidth={2.5} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="preferred_time" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                        Preferred time <span className="text-[#D72638]">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/40 pointer-events-none" strokeWidth={2} />
                        <select id="preferred_time" name="preferred_time" required defaultValue="" disabled={status === "submitting"} className="w-full h-[52px] pl-11 pr-12 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60 appearance-none cursor-pointer">
                          <option value="" disabled>
                            Pick a window
                          </option>
                          {TIME_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0a0a0a]/50 pointer-events-none" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="notes" className="text-[0.68rem] tracking-[0.2em] uppercase text-[#0a0a0a]/60 font-semibold">
                      Additional notes
                    </label>
                    <textarea id="notes" name="notes" rows={5} placeholder="Color/extensions preference, inspiration pic links, if you're bringing a child, or anything else we should know…" disabled={status === "submitting"} className="w-full px-4 py-4 rounded-[14px] bg-[#FAF7F2] border-2 border-[#0a0a0a]/15 text-[0.95rem] text-[#0a0a0a] placeholder:text-[#0a0a0a]/35 focus:outline-none focus:border-[#0a0a0a] transition-colors duration-300 disabled:opacity-60 resize-none leading-[1.6]" />
                  </div>

                  {status === "error" && errorMsg && (
                    <div className="flex items-start gap-2.5 text-[0.85rem] text-[#D72638] bg-[#D72638]/8 border border-[#D72638]/25 rounded-[12px] px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-[#0a0a0a]/10">
                    <button type="submit" disabled={status === "submitting"} className="group relative inline-flex items-center justify-center gap-3 bg-[#0a0a0a] text-white pl-7 pr-2 py-2 rounded-full transition-all duration-400 hover:shadow-[0_14px_32px_rgba(10,10,10,0.28)] enabled:hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed h-[56px] shrink-0">
                      <span className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase whitespace-nowrap">{status === "submitting" ? "Sending…" : "Request Appointment"}</span>
                      <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#D72638] overflow-hidden transition-colors duration-400 group-enabled:group-hover:bg-[#F4B400]">
                        <ArrowUpRight className="absolute w-[18px] h-[18px] text-white transition-all duration-400 group-enabled:group-hover:translate-x-6 group-enabled:group-hover:-translate-y-6" strokeWidth={2.5} />
                        <ArrowUpRight className="absolute w-[18px] h-[18px] text-[#0a0a0a] -translate-x-6 translate-y-6 transition-all duration-400 group-enabled:group-hover:translate-x-0 group-enabled:group-hover:translate-y-0" strokeWidth={2.5} />
                      </span>
                    </button>

                    <p className="text-[0.72rem] tracking-[0.12em] uppercase text-[#0a0a0a]/50 leading-[1.55]">
                      We'll confirm your booking
                      <br />
                      within the next <span className="text-[#0a0a0a] font-semibold">3 hours</span>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

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

export default Booking;

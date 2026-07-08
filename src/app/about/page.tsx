"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-poble-cream">
      <Navbar />
      <main className="flex-grow pt-0 animate-in fade-in duration-1000">
        {/* ── Restaurant Video ── */}
        <section className="py-24 px-8 bg-poble-charcoal relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
              backgroundSize: "400px 400px",
            }}
          />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="mb-10" style={{ fontFamily: "monospace" }}>
              <p className="text-teal-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
                <span className="text-slate-400">poble@about:~$</span> play
                restaurant.mp4
              </p>
            </div>
            <div className="border border-slate-200 overflow-hidden bg-black">
              <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-slate-400 tracking-widest uppercase">
                  restaurant.mp4
                </span>
              </div>
              <video
                src="/videos/restaurant.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* ── 3. Brand Meaning ── */}
        <section className="py-24 px-8 bg-white  border-slate-100 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
              backgroundSize: "400px 400px",
            }}
          />
          <Image
            src="/images/graphic/star.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={52}
            className="absolute bottom-10 right-[10%] animate-float opacity-25"
            style={{ animationDuration: "12s" }}
          />
          <div
            className="max-w-4xl mx-auto text-center relative z-10"
            style={{ fontFamily: "monospace" }}
          >
            <p className="text-teal-600 font-black text-xs uppercase tracking-[0.3em] mb-6">
              <span className="text-slate-400">poble@about:~$</span> cat
              brand-name.txt
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-poble-charcoal tracking-tight mb-6 leading-[1.1] font-heading">
              Derived from <br />
              <span className="text-slate-400">POS + able</span>
            </h2>
            <div className="w-12 h-1 bg-teal-400/60 mb-10 mx-auto"></div>
            <div className="max-w-2xl mx-auto space-y-1">
              <p className="text-xl text-poble-charcoal font-bold leading-relaxed tracking-tight">
                Our name reflects our core mission:{" "}
              </p>
              <p className="text-xl text-poble-charcoal font-bold leading-relaxed tracking-tight">
                <span className="text-poble-gold">
                  enabling merchants to do more.
                </span>
              </p>
              <p className="text-lg text-slate-500 font-bold leading-relaxed">
                We believe technology should empower your team — giving you the
                ability to serve your customers with excellence and ease.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. Ecnesoft Parent Company ── */}
        <section className="py-24 px-8 bg-white border-b border-slate-100 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, #dce4ea 1px, transparent 1px), linear-gradient(to bottom, #dce4ea 1px, transparent 1px)",
              backgroundSize: "400px 400px",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Terminal header */}
            <div className="mb-16" style={{ fontFamily: "monospace" }}>
              <p className="text-teal-600 font-black text-xs uppercase tracking-[0.3em] mb-6">
                <span className="text-slate-400">poble@about:~$</span> cat
                parent-company.txt
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-poble-charcoal tracking-tight leading-[1.1] font-heading mb-4">
                Backed by <br />
                <span className="text-slate-400">20+ years of expertise</span>
              </h2>
              <div className="w-12 h-1 bg-teal-400/60 mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
              {/* Left: Company description */}
              <div style={{ fontFamily: "monospace" }}>
                {/* Terminal window */}
                <div className="border border-slate-200">
                  <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-[10px] text-slate-400 tracking-widest uppercase">
                      ecnesoft — profile.sh
                    </span>
                  </div>
                  <div className="bg-white p-8 space-y-6">
                    <p className="text-[11px] text-slate-400">
                      <span className="text-teal-600 font-bold">
                        ecnesoft@hq:~$
                      </span>{" "}
                      <span className="text-slate-500">./about.sh</span>
                    </p>
                    <p className="text-slate-600 font-bold text-lg leading-relaxed">
                      Poble is a product of{" "}
                      <span className="text-poble-charcoal font-black">
                        Ecnesoft
                      </span>{" "}
                      — a Sydney-based global provider of POS solutions,
                      established in 2002.
                    </p>
                    <p className="text-slate-500 font-bold leading-relaxed">
                      Ecnesoft is a developer and supplier of high quality,
                      well-supported POS systems for the Hospitality and Retail
                      industries. From individual SMB businesses to multistore
                      retail chains and franchise networks — we build systems
                      that scale with you.
                    </p>
                    <p className="text-slate-500 font-bold leading-relaxed">
                      As a leader in Hospitality and Retail POS Software and
                      Hardware, Ecnesoft brings over two decades of domain
                      knowledge to every product we ship — and Poble is no
                      exception.
                    </p>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                        <span className="text-teal-500 mr-1">$</span> exit 0 —
                        profile loaded
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats grid */}
              <div
                className="grid grid-cols-2 gap-4"
                style={{ fontFamily: "monospace" }}
              >
                {[
                  { val: "2002", label: "Year\nFounded", accent: true },
                  {
                    val: "Sydney",
                    label: "Headquartered\nAustralia",
                    accent: false,
                  },
                  {
                    val: "Hospitality\n+ Retail",
                    label: "Industry\nFocus",
                    accent: false,
                  },
                  {
                    val: "SMB →\nFranchise",
                    label: "Business\nScale",
                    accent: true,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`border p-6 flex flex-col justify-between min-h-[130px] transition-colors duration-200 hover:border-teal-300 ${stat.accent ? "border-teal-200 bg-teal-50/30" : "border-slate-200 bg-white"}`}
                  >
                    <div
                      className={`text-2xl font-black leading-tight whitespace-pre-line ${stat.accent ? "text-teal-700" : "text-poble-charcoal"}`}
                    >
                      {stat.val}
                    </div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed whitespace-pre-line mt-3">
                      {stat.label}
                    </div>
                  </div>
                ))}

                {/* Wide bottom cell */}
                <div className="col-span-2 border border-slate-200 bg-white p-6 hover:border-teal-300 transition-colors duration-200">
                  <div className="text-[10px] text-slate-400 mb-3">
                    <span className="text-teal-600 font-bold">
                      ecnesoft@hq:~$
                    </span>{" "}
                    <span className="text-slate-500">locate --hq</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 shrink-0" />
                    <p className="text-sm font-bold text-poble-charcoal">
                      Based in Sydney, serving venues across Australia and
                      globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Principles ── */}
        <section className="py-24 px-8 overflow-hidden relative bg-[#e0e0e0]">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, #c8c8c8 1px, transparent 1px), linear-gradient(to bottom, #c8c8c8 1px, transparent 1px)",
              backgroundSize: "400px 400px",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16" style={{ fontFamily: "monospace" }}>
              <p className="text-teal-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
                <span className="text-slate-500">poble@about:~$</span> list
                --principles
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight font-heading leading-[1.1] text-poble-charcoal">
                What stays{" "}
                <span className="text-poble-charcoal/40">constant for you</span>
              </h2>
            </div>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              style={{ fontFamily: "monospace" }}
            >
              {[
                {
                  title: "Visual Clarity",
                  desc: "Interfaces designed for split-second decisions at the counter.",
                },
                {
                  title: "High-Peak Speed",
                  desc: "Zero-lag responsiveness that keeps up with your busiest hours.",
                },
                {
                  title: "Silent Reliability",
                  desc: "A system so dependable you can forget it's there.",
                },
                {
                  title: "Ethical Scale",
                  desc: "New features added to help you grow — never to slow you down.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="border border-slate-300/60 bg-white/40 p-6 hover:bg-white/70 hover:border-teal-300 transition-all duration-200"
                >
                  <span className="text-teal-500 font-black text-xs mb-4 block">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <h4 className="text-lg font-black mb-3 tracking-tight text-poble-charcoal">
                    {p.title}
                  </h4>
                  <p className="text-poble-charcoal/60 font-bold leading-relaxed text-sm">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

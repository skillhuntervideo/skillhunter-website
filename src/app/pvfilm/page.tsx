"use client";

import { Play, ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Work", labelJa: "作品", href: "/pvportfolio" },
  { label: "Process", labelJa: "制作の流れ", href: "/pvprocess" },
  { label: "Why us", labelJa: "選ばれる理由", href: "/pvwhyus" },
  { label: "About us", labelJa: "制作チーム", href: "/pvabout" },
  { label: "Contact", labelJa: "お問い合わせ", href: "/pvcontact" },
];

export default function PvFilmPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* ── NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-5">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <a href="/pvfilm">
            <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-7" />
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-baseline gap-2 text-white/60 hover:text-[#c9a03c] transition-colors"
              >
                <span className="text-2xl font-bold italic tracking-wide leading-none">
                  {link.label}
                </span>
                {link.labelJa && (
                  <span className="text-[10px] tracking-[0.1em] text-white/25 font-normal">
                    {link.labelJa}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-white/60 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm text-white/70 hover:text-[#c9a03c] transition-colors py-1"
              >
                <span>{link.label}</span>
                {link.labelJa && (
                  <span className="text-xs text-white/30">{link.labelJa}</span>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a03c] z-20" />

        {/* Background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          poster="/images/camera_crew.jpg"
        >
          <source src="/videos/pvhero.mp4" type="video/mp4" />
        </video>

        {/* Fallback poster — shown until video loads */}
        {!videoLoaded && (
          <img
            src="/images/camera_crew.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9a03c] mb-6">
            Skill Hunter Production
          </p>

          {/* Main tagline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-bold leading-[1.05] tracking-tight">
            We create visuals
            <br />
            <span className="text-[#c9a03c]">people remember.</span>
          </h1>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/pvportfolio"
              className="group inline-flex items-center gap-3 bg-[#c9a03c] text-[#0a0a0a] hover:bg-[#d4af50] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200"
            >
              <Play className="size-3.5 fill-[#0a0a0a]" />
              View Our Work
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="border-t border-white/10 py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px grid-cols-1 sm:grid-cols-3 bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                label: "Promotion Films",
                sub: "ホテルプロモーション映像",
                desc: "Cinematic films that capture the atmosphere, service, and story of your property.",
              },
              {
                label: "Award-Winning Work",
                sub: "受賞歴あり",
                desc: "Recognised at Japan and international film competitions for artistic and technical excellence.",
              },
              {
                label: "Short-Form Content",
                sub: "SNS向けショートフォーム",
                desc: "Vertical and short-form videos optimised for Instagram, TikTok, and LINE.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#0a0a0a] px-8 py-10 hover:bg-[#111] transition-colors"
              >
                <div className="h-px w-8 bg-[#c9a03c] mb-5" />
                <h3 className="text-base font-bold text-white">{item.label}</h3>
                <p className="text-xs text-[#c9a03c] mt-0.5 tracking-wide">{item.sub}</p>
                <p className="mt-4 text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
      <section className="pb-4 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-baseline justify-between mb-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Recent Work</p>
            <a href="/pvportfolio" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a03c] hover:text-[#d4af50] transition-colors">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: "zUoRkmIbu08", title: "Hilton Kyoto", award: true },
              { id: "lgk_zNa_Tvg", title: "Hilton Hiroshima" },
              { id: "fzOkq-jt0GU", title: "DoubleTree Tokyo Ariake" },
              { id: "OBJorL7i5yY", title: "Hilton Fukuoka" },
            ].map((v) => (
              <a
                key={v.id}
                href="/pvportfolio"
                className="group relative block rounded-xl overflow-hidden bg-[#16213e] aspect-video"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a03c]" />
                {v.award && (
                  <div className="absolute top-2 right-2 bg-[#c9a03c] text-[#0a0a0a] text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                    受賞作
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full p-3">
                    <Play className="size-5 text-white fill-white" />
                  </div>
                </div>
                <p className="absolute bottom-2 left-3 text-[10px] font-semibold text-white/70 leading-none">{v.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#c9a03c]/20 bg-[#16213e] px-8 py-12 sm:px-12 sm:py-16 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">
              Get in Touch
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              撮影のご相談、<br className="sm:hidden" />お気軽にどうぞ。
            </h2>
            <p className="mt-4 text-sm text-white/50 max-w-md mx-auto leading-relaxed">
              Promotion films, short-form content, opening events — we'd love to hear about your project.
            </p>
            <a
              href="/pvcontact"
              className="group inline-flex items-center gap-3 mt-8 bg-[#c9a03c] text-[#0a0a0a] hover:bg-[#d4af50] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200"
            >
              お問い合わせ
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 px-6 mt-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-5 opacity-40" />
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Skill Hunter
          </p>
        </div>
      </footer>
    </main>
  );
}

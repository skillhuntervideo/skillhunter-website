"use client";

import { Menu, X, MessageSquare, Lightbulb, Camera, Sliders, PackageCheck } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Work", labelJa: "作品", href: "/pvportfolio" },
  { label: "Process", labelJa: "制作の流れ", href: "/pvprocess" },
  { label: "Why us", labelJa: "選ばれる理由", href: "/pvwhyus" },
  { label: "About us", labelJa: "制作チーム", href: "/pvabout" },
  { label: "Contact", labelJa: "お問い合わせ", href: "/pvcontact" },
];

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Inquiry",
    titleJa: "お問い合わせ・ヒアリング",
    body: "ご希望の映像イメージや目的、スケジュールをヒアリングします。",
    bodyEn: "We start by understanding your goals, audience, and vision — so every creative decision that follows is grounded in what actually matters for your project.",
    tags: ["Goals", "Target audience", "Schedule", "Location", "Deliverables"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Creative Planning",
    titleJa: "企画・構成",
    body: "ブランドイメージに合わせた映像演出や撮影構成をご提案します。",
    bodyEn: "We translate your brief into a visual plan — moodboard, storyboard, shot list, and creative direction. You see exactly what we're building before a single frame is shot.",
    tags: ["Moodboard", "Storyboard", "Shot list", "Creative direction"],
  },
  {
    number: "03",
    icon: Camera,
    title: "Production",
    titleJa: "撮影本番",
    body: "現場ディレクションから撮影まで、一貫して進行します。",
    bodyEn: "Our team handles everything on set — directing, lighting, camera operation, and timing. We move efficiently without sacrificing the quality of each shot.",
    tags: ["Drone", "Lighting", "Camera", "On-set direction"],
    highlight: true,
  },
  {
    number: "04",
    icon: Sliders,
    title: "Post Production",
    titleJa: "編集・仕上げ",
    body: "編集・カラーグレーディング・音楽選定を通して映像を仕上げます。",
    bodyEn: "This is where the footage becomes a film. We cut for pace and emotion, grade for mood, design the sound, and add any subtitles or graphics your project needs.",
    tags: ["Editing", "Color grading", "Sound design", "Subtitles"],
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Delivery",
    titleJa: "納品",
    body: "用途に合わせた形式で納品いたします。",
    bodyEn: "Final files delivered in the formats you need — optimised for social, broadcast, or web. We don't hand over a single file and disappear.",
    tags: ["SNS formats", "Vertical edits", "Multilingual versions"],
  },
];

export default function PvProcessPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1a1a2e] text-white">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <a href="/pvfilm">
            <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-7" />
          </a>
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="flex items-baseline gap-2 text-white/50 hover:text-[#c9a03c] transition-colors">
                <span className="text-2xl font-bold italic tracking-wide leading-none">{link.label}</span>
                {link.labelJa && (
                  <span className="text-[10px] tracking-[0.1em] text-white/25 font-normal">{link.labelJa}</span>
                )}
              </a>
            ))}
            <a href="/pvfilm" className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#c9a03c] transition-colors">
              ← Home
            </a>
          </div>
          <button className="sm:hidden text-white/60 hover:text-white p-1" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm text-white/70 hover:text-[#c9a03c] transition-colors py-1">
                <span>{link.label}</span>
                {link.labelJa && <span className="text-xs text-white/30">{link.labelJa}</span>}
              </a>
            ))}
            <div className="h-px bg-white/10" />
            <a href="/pvfilm" onClick={() => setMenuOpen(false)} className="text-xs text-white/40 hover:text-[#c9a03c] transition-colors uppercase tracking-[0.15em]">← Home</a>
          </div>
        )}
      </nav>

      {/* ── PAGE HEADER ── */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">Process</p>
          <h1 className="text-4xl font-bold sm:text-6xl tracking-tight leading-tight">
            制作の<span className="text-[#c9a03c]">流れ</span>
          </h1>
          <p className="mt-5 text-base text-white/50 max-w-xl leading-relaxed">
            From first conversation to final file — here is how we work.
          </p>
          <p className="mt-2 text-sm text-white/30 max-w-xl leading-relaxed">
            お問い合わせから納品まで、5つのステップでプロジェクトを進めます。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── STEPS ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative">

            {/* Vertical connecting line */}
            <div className="absolute left-[27px] sm:left-[35px] top-8 bottom-8 w-px bg-gradient-to-b from-[#c9a03c]/40 via-[#c9a03c]/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;
                return (
                  <div key={step.number} className="relative flex gap-6 sm:gap-10">

                    {/* Step indicator */}
                    <div className="relative flex flex-col items-center shrink-0">
                      <div className={`relative z-10 flex size-14 sm:size-[72px] items-center justify-center rounded-full border-2 ${
                        step.highlight
                          ? "border-[#c9a03c] bg-[#c9a03c]/15"
                          : "border-white/20 bg-[#16213e]"
                      }`}>
                        <Icon className={`size-5 sm:size-6 ${step.highlight ? "text-[#c9a03c]" : "text-white/50"}`} />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 mb-2 rounded-2xl border p-6 sm:p-8 ${
                      step.highlight
                        ? "border-[#c9a03c]/30 bg-[#16213e]"
                        : "border-white/10 bg-[#16213e]/60"
                    }`}>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-2 ${
                            step.highlight ? "text-[#c9a03c]" : "text-white/30"
                          }`}>
                            STEP {step.number}
                          </p>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h2>
                          <p className="text-sm text-white/40 mt-1">{step.titleJa}</p>
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <p className="text-sm text-white/65 leading-relaxed">{step.bodyEn}</p>
                        <p className="text-sm text-white/35 leading-relaxed border-l border-white/10 pl-5">{step.body}</p>
                      </div>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-3 py-1 rounded-full border ${
                            step.highlight
                              ? "border-[#c9a03c]/30 bg-[#c9a03c]/10 text-[#c9a03c]"
                              : "border-white/15 bg-white/5 text-white/50"
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#c9a03c]/20 bg-[#0f3460] p-8 sm:p-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">Ready to start?</p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
              まずはお気軽にご相談ください。
            </h2>
            <p className="mt-2 text-sm text-white/50">We&apos;re happy to talk through your project at no obligation.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/pvcontact"
                className="inline-flex items-center gap-2 bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors rounded-sm">
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-5 opacity-40" />
          <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Skill Hunter</p>
        </div>
      </footer>
    </main>
  );
}

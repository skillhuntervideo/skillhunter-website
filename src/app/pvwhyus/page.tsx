"use client";

import { Menu, X, Trophy, Globe, Users, Clapperboard, ShieldCheck } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Work", labelJa: "作品", href: "/pvportfolio" },
  { label: "Process", labelJa: "制作の流れ", href: "/pvprocess" },
  { label: "Why us", labelJa: "選ばれる理由", href: "/pvwhyus" },
  { label: "About us", labelJa: "制作チーム", href: "/pvabout" },
  { label: "Contact", labelJa: "お問い合わせ", href: "/pvcontact" },
];

const reasons = [
  {
    number: "01",
    icon: Globe,
    title: "Bilingual storytelling — for two audiences at once.",
    titleJa: "日本語と英語、両方の視聴者に届く映像",
    body: "Our team is bilingual and bicultural. We don't just translate — we understand what resonates with Japanese audiences and what moves international viewers. The result is content that works in both directions: compelling to domestic clients, credible to a global audience.",
    bodyJa: "チームはバイリンガルかつバイカルチャル。単なる翻訳ではなく、日本語圏と英語圏それぞれに響くストーリーテリングができます。国内向けにも、海外向けにも、同時に機能する映像を届けます。",
  },
  {
    number: "02",
    icon: Trophy,
    title: "Award-winning quality — on record.",
    titleJa: "受賞歴が証明するクオリティ",
    body: "Our work has been recognised at both Japan and international film competitions, including the Japan World Travel Film Festival 2025 — where we received the 優秀賞 in the Japan Competition and the ART&CRAFT Award in the International Competition. Quality isn't just our promise. It's documented.",
    bodyJa: "Japan World Travel Film Festival 2025にて、国内部門 優秀賞・国際部門 ART&CRAFT賞を受賞。映像のクオリティは口約束ではなく、受賞実績で示しています。",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "We don't just film. We tell stories.",
    titleJa: "撮るだけでなく、物語を作る",
    body: "Anyone can point a camera. What we do is different — we find the angle, the moment, the atmosphere that makes a viewer feel something. Every project starts with understanding what you want your audience to think, feel, and do after watching. Then we build backwards from there.",
    bodyJa: "カメラを向けることは誰でもできます。私たちが作るのは、見た人の感情を動かす映像です。「見た後にどう感じてほしいか」からすべての企画を逆算して組み立てます。",
  },
  {
    number: "04",
    icon: Users,
    title: "One team. From concept to final cut.",
    titleJa: "企画から納品まで、ひとつのチームで",
    body: "Director, cinematographer, editor, social media strategist — all in-house. No outsourcing, no briefing the same thing twice to different vendors. Your vision stays intact from the first conversation to the final deliverable, because the same people carry it through every stage.",
    bodyJa: "ディレクター、カメラマン、編集、SNS担当まですべて社内で完結。外注なし、二重説明なし。最初の打ち合わせから最終納品まで、同じチームが一貫して関わります。",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "We protect what you've built.",
    titleJa: "あなたのブランドを守る",
    body: "We work with brands that have a reputation to uphold. We operate with discretion, respect your brand guidelines at every stage, and never publish or share footage without your explicit approval. Your trust is not taken lightly — it's built into the way we work.",
    bodyJa: "守るべきブランドを持つクライアントと仕事をしています。撮影から納品まで、ブランドガイドラインを徹底尊重。許可なく映像を外部に公開・共有することは一切ありません。信頼は、私たちの仕事の作り方そのものです。",
  },
];

export default function PvWhyUsPage() {
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
              <a
                key={link.href}
                href={link.href}
                className="flex items-baseline gap-2 text-white/50 hover:text-[#c9a03c] transition-colors"
              >
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">Why us</p>
          <h1 className="text-4xl font-bold sm:text-6xl tracking-tight leading-tight">
            選ばれる<span className="text-[#c9a03c]">理由</span>
          </h1>
          <p className="mt-5 text-base text-white/50 max-w-xl leading-relaxed">
            There are many video production companies in Japan. Here is why clients choose Skill Hunter.
          </p>
          <p className="mt-2 text-sm text-white/30 max-w-xl leading-relaxed">
            日本には多くの映像制作会社があります。それでもクライアントがSkill Hunterを選ぶ理由がここにあります。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── REASONS ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-6">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group rounded-2xl border border-white/10 bg-[#16213e] p-8 sm:p-10 hover:border-[#c9a03c]/30 transition-colors duration-300"
              >
                <div className="grid gap-8 lg:grid-cols-[auto_1fr]">

                  {/* Number + icon */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:pt-1">
                    <span className="text-4xl font-bold text-[#c9a03c]/20 leading-none group-hover:text-[#c9a03c]/40 transition-colors">
                      {item.number}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#c9a03c]/10 text-[#c9a03c]">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[#c9a03c]/70 mt-1 font-medium">{item.titleJa}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                      <p className="text-sm text-white/35 leading-relaxed border-l border-white/10 pl-5">{item.bodyJa}</p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#c9a03c]/20 bg-[#0f3460] p-8 sm:p-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">Next Step</p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
              まずは実績をご覧ください。
            </h2>
            <p className="mt-2 text-sm text-white/50">See the work before you decide.</p>
            <a
              href="/pvportfolio"
              className="mt-8 inline-flex items-center gap-3 bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors rounded-sm"
            >
              View Our Work →
            </a>
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

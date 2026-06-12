"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Work", labelJa: "作品", href: "/pvportfolio" },
  { label: "Process", labelJa: "制作の流れ", href: "/pvprocess" },
  { label: "Why us", labelJa: "選ばれる理由", href: "/pvwhyus" },
  { label: "About us", labelJa: "制作チーム", href: "/pvabout" },
  { label: "Contact", labelJa: "お問い合わせ", href: "/pvcontact" },
];

export default function PvAboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1a1a2e] text-white">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <a href="/pvfilm">
            <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-7" />
          </a>

          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-baseline gap-2 text-white/50 hover:text-[#c9a03c] transition-colors"
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
            <a href="/pvfilm" className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#c9a03c] transition-colors">
              ← Home
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-white/60 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm text-white/70 hover:text-[#c9a03c] transition-colors py-1"
              >
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">
            About us
          </p>
          <h1 className="text-4xl font-bold sm:text-6xl tracking-tight leading-tight">
            制作<span className="text-[#c9a03c]">チーム</span>
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── COMPANY SECTION ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-[#16213e] p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-6">
              The Company
            </p>
            <div className="grid gap-10 lg:grid-cols-[1fr_1px_1fr] items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
                  株式会社<br />
                  <span className="text-[#c9a03c]">Skill Hunter</span>
                </h2>
                <div className="mt-6 space-y-4 text-white/65 text-sm leading-relaxed">
                  <p>
                    The Skill Hunter team was formed in <span className="text-white font-semibold">2019</span> and became 株式会社Skill Hunter in <span className="text-white font-semibold">January 2023</span>, focusing their craft on perfecting hotel promotion and educational videos.
                  </p>
                  <p>
                    スキルハンターチームは2019年に結成され、2023年1月に株式会社Skill Hunterとして法人化。ホテルのプロモーション映像と教育映像の制作を専門としています。
                  </p>
                </div>
              </div>
              <div className="hidden lg:block h-full w-px bg-white/10" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "2019", label: "Founded", sub: "設立" },
                  { num: "2023", label: "Incorporated", sub: "法人化" },
                  { num: "5+", label: "Years of work", sub: "制作実績" },
                  { num: "Japan", label: "Based in", sub: "拠点" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-[#1a1a2e] px-5 py-5">
                    <p className="text-2xl font-bold text-[#c9a03c]">{stat.num}</p>
                    <p className="mt-1 text-xs font-semibold text-white uppercase tracking-wider">{stat.label}</p>
                    <p className="text-xs text-white/35 mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── TEAM SECTION ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-10">
            The Team
          </p>

          {/* Andrew card */}
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] items-start">

            {/* Photo */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-[#c9a03c]/40 rounded-tl-sm" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-[#c9a03c]/40 rounded-br-sm" />
              <img
                src="/images/andrew_portrait.jpg"
                alt="Andrew Gibler"
                className="w-full rounded-xl object-cover object-top aspect-[3/4]"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-3">
                  Creative Director · CEO
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Andrew
                  <br />
                  <span className="text-[#c9a03c]">Gibler</span>
                </h2>
                <p className="mt-2 text-sm text-white/40 tracking-widest">
                  アンドリュー・ギブラー
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-4 text-sm text-white/65 leading-relaxed">
                <p>
                  Andrew has produced and directed brand videos across multiple industries and now leads the creative vision powering the Skill Hunter team — redefining how hotels and learners connect through powerful storytelling.
                </p>
                <p>
                  こんにちは、アンドリューです。元々はプロ野球マスコット「スライリー」として来日し、ラジオ、テレビ、スポーツ、プロ野球通訳、不動産広報スタッフと多岐にわたる分野でキャリアを築きました。
                </p>
                <p>
                  現在、株式会社Skill Hunterの代表を務め、ホテルのプロモーション映像・教育映像制作を手掛けています。独学で日本語検定1級を習得。日本語・英語・スペイン語を話し、多様な文化背景を持つクライアントともスムーズに連携しています。
                </p>
              </div>

              <div className="h-px bg-white/10" />

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { en: "Hiroshima Carp Interpreter", ja: "広島東洋カープ 通訳" },
                  { en: "JLPT N1 — Self-taught", ja: "日本語検定1級取得（独学）" },
                  { en: "Brand video director", ja: "ブランド映像ディレクター" },
                  { en: "Trilingual: EN / JA / ES", ja: "英語・日本語・スペイン語" },
                ].map((item) => (
                  <div key={item.en} className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#16213e] px-4 py-3">
                    <div className="mt-1.5 size-1.5 rounded-full bg-[#c9a03c] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">{item.en}</p>
                      <p className="text-xs text-white/35 mt-0.5">{item.ja}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── DAVID ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr] items-start">

            {/* Photo */}
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-[#c9a03c]/40 rounded-tl-sm" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-[#c9a03c]/40 rounded-br-sm" />
              <img
                src="/images/david_portrait.jpg"
                alt="David Llata"
                className="w-full rounded-xl object-cover object-top aspect-[3/4]"
              />
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-3">
                  Creative Director · Creative Lead
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                  David
                  <br />
                  <span className="text-[#c9a03c]">Llata</span>
                </h2>
                <p className="mt-2 text-sm text-white/40 tracking-widest">
                  デビッド・ヤッタ
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-4 text-sm text-white/65 leading-relaxed">
                <p>
                  As the creative force behind our video production, David brings ideas to life through stunning visuals and thoughtful storytelling.
                </p>
                <p>
                  国内最大手の英会話イーオンの講師として来日。TESOL（英語を母国語としない人に、英語を教える英語教授法）で修士を保持。日本企業での英会話講師や、大学で講師として従事。現在はクリエイティブディレクターとして動画制作の統括を行う。
                </p>
              </div>

              <div className="h-px bg-white/10" />

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { en: "Master's in TESOL", ja: "英語教授法 修士号" },
                  { en: "Former AEON instructor", ja: "英会話イーオン 講師" },
                  { en: "University lecturer in Japan", ja: "日本の大学 非常勤講師" },
                  { en: "Cinematographer & Director", ja: "映像撮影・演出" },
                ].map((item) => (
                  <div key={item.en} className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#16213e] px-4 py-3">
                    <div className="mt-1.5 size-1.5 rounded-full bg-[#c9a03c] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">{item.en}</p>
                      <p className="text-xs text-white/35 mt-0.5">{item.ja}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── SUPPORTING TEAM ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-2">
            Supporting Team
          </p>
          <h2 className="text-2xl font-bold text-white mb-10">その他スタッフ</h2>

          {/* Production group */}
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5 flex items-center gap-3">
              <span>Production</span>
              <span className="flex-1 h-px bg-white/10" />
            </p>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xl">
              Our production team brings ideas to life with creativity and care, filming and editing videos, turning each client&apos;s vision into a story that feels real, beautiful, and uniquely theirs.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Jazz", role: "Production" },
                { name: "Futa", role: "Production" },
                { name: "Paulina", role: "Production" },
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#16213e] px-5 py-4">
                  <div className="size-10 rounded-full bg-[#c9a03c]/15 border border-[#c9a03c]/30 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#c9a03c]">{member.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-xs text-white/35 mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Camera & Project Support group */}
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5 flex items-center gap-3">
              <span>Camera · Project Support</span>
              <span className="flex-1 h-px bg-white/10" />
            </p>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xl">
              Team members offering support with project planning, logistics, script writing, photography and photo editing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "Roberto", role: "Camera · Project Support" },
                { name: "Yotsuba", role: "Camera · Project Support" },
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#16213e] px-5 py-4">
                  <div className="size-10 rounded-full bg-[#c9a03c]/15 border border-[#c9a03c]/30 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#c9a03c]">{member.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-xs text-white/35 mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other roles */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5 flex items-center gap-3">
              <span>Other Roles</span>
              <span className="flex-1 h-px bg-white/10" />
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Karen",
                  role: "Model · Social Media Strategist",
                  desc: "Local model and social media strategist.",
                },
                {
                  name: "Sayu",
                  role: "Super Utility Player · University Student",
                  desc: "Provides the youth and life to Skill Hunter helping with various tasks while pursuing her education at university.",
                },
              ].map((member) => (
                <div key={member.name} className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#16213e] px-5 py-4">
                  <div className="size-10 rounded-full bg-[#c9a03c]/15 border border-[#c9a03c]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-[#c9a03c]">{member.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-xs text-[#c9a03c]/70 mt-0.5">{member.role}</p>
                    <p className="text-xs text-white/45 mt-2 leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 px-6 mt-8">
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

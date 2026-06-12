"use client";

import { Menu, X, Mail, Youtube, Instagram, Clock } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "How It Works", labelJa: "学習の仕組み", href: "/eduprocess" },
  { label: "Hospitality", labelJa: "ホテル特化", href: "/edubuilt" },
  { label: "Courses", labelJa: "コースサンプル", href: "/eduportfolio" },
  { label: "Contact", labelJa: "お問い合わせ", href: "/educontact" },
];

const EMAIL = ""; // ← メールアドレスをここに入力

export default function EduContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-sm px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <a href="/edufilm">
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
            <a href="/edufilm" className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#c9a03c] transition-colors">
              ← Home
            </a>
          </div>
          <button className="sm:hidden text-white/60 hover:text-white p-1" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm text-white/70 hover:text-[#c9a03c] transition-colors py-1">
                <span>{link.label}</span>
                {link.labelJa && <span className="text-xs text-white/30">{link.labelJa}</span>}
              </a>
            ))}
            <div className="h-px bg-white/10" />
            <a href="/edufilm" onClick={() => setMenuOpen(false)} className="text-xs text-white/40 hover:text-[#c9a03c] transition-colors uppercase tracking-[0.15em]">← Home</a>
          </div>
        )}
      </nav>

      {/* ── PAGE HEADER ── */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">Contact</p>
          <h1 className="text-4xl font-bold sm:text-6xl tracking-tight leading-tight">
            お問い合わせ<span className="text-[#c9a03c]">.</span>
          </h1>
          <p className="mt-5 text-base text-white/50 max-w-xl leading-relaxed">
            Interested in our e-learning courses? We&apos;d love to hear about your training needs.
          </p>
          <p className="mt-2 text-sm text-white/30 max-w-xl leading-relaxed">
            ご依頼・ご相談はお気軽にご連絡ください。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── CONTACT CARDS ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-5">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#c9a03c]/10 text-[#c9a03c]">
              <Mail className="size-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Email</p>
              <h2 className="text-lg font-bold text-white">メールで相談する</h2>
              <p className="text-xs text-white/40 mt-1">Send us a message anytime</p>
            </div>
            {EMAIL ? (
              <a href={`mailto:${EMAIL}`}
                className="mt-auto inline-flex items-center gap-2 text-sm text-[#c9a03c] hover:text-[#d4af50] transition-colors font-medium">
                {EMAIL}
              </a>
            ) : (
              <p className="mt-auto text-sm text-white/20 italic">Coming soon</p>
            )}
          </div>

          {/* YouTube */}
          <a
            href="https://skillhunter.jp/home"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-5 hover:border-[#c9a03c]/30 transition-colors"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#c9a03c]/10 text-[#c9a03c] group-hover:bg-[#c9a03c]/20 transition-colors">
              <Youtube className="size-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-2">YouTube</p>
              <h2 className="text-lg font-bold text-white">作品をYouTubeで見る</h2>
              <p className="text-xs text-white/40 mt-1">Watch our work on YouTube</p>
            </div>
            <p className="mt-auto text-sm text-[#c9a03c]/70 group-hover:text-[#c9a03c] transition-colors font-medium">
              skillhunter.jp/home →
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/skillhunterenglish/?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-5 hover:border-[#c9a03c]/30 transition-colors"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#c9a03c]/10 text-[#c9a03c] group-hover:bg-[#c9a03c]/20 transition-colors">
              <Instagram className="size-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-2">Instagram</p>
              <h2 className="text-lg font-bold text-white">Instagramで最新情報</h2>
              <p className="text-xs text-white/40 mt-1">Follow us on Instagram</p>
            </div>
            <p className="mt-auto text-sm text-[#c9a03c]/70 group-hover:text-[#c9a03c] transition-colors font-medium">
              @skillhunterenglish →
            </p>
          </a>
        </div>

        {/* Response time notice */}
        <div className="mx-auto max-w-6xl mt-6">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4">
            <Clock className="size-4 text-[#c9a03c] shrink-0" />
            <p className="text-sm text-white/50">
              通常、<span className="text-white font-semibold">2営業日以内</span>にご返信いたします。
              <span className="text-white/30 ml-2">We typically respond within 2 business days.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 px-6 mt-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-5 opacity-40" />
          <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Skill Hunter</p>
        </div>
      </footer>
    </main>
  );
}

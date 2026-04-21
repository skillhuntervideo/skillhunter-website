import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import AndrewTracker from "./AndrewTracker";

export const metadata = {
  title: "ZoomでAndrewと話す — Book a chat with Andrew | Skill Hunter",
  description:
    "30-min free chat with Andrew Gibler, founder of Skill Hunter. No pressure — just a conversation.",
};

export default function AndrewPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <AndrewTracker />

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <Link href="/">
            <img src="/images/logo_wh.png" alt="Skill Hunter" className="h-8" />
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/#courses" className="text-sm text-white/60 hover:text-white transition-colors">
              コース
            </Link>
            <Link href="/#about" className="text-sm text-white/60 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#plans" className="text-sm text-white/60 hover:text-white transition-colors">
              プラン
            </Link>
            <a
              href="https://login.skillhunter.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              ログイン
            </a>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden text-white">
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#1a1a2e] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-90" />
        <div className="relative mx-auto max-w-xl px-6 pt-14 pb-14 sm:pt-20 sm:pb-20 text-center">
          <div className="mx-auto mb-6 h-36 w-36 sm:h-40 sm:w-40 overflow-hidden rounded-full ring-4 ring-[#c9a03c]/70 shadow-xl shadow-black/30">
            <img
              src="/images/andrew_portrait.jpg"
              alt="Andrew Gibler — Founder, Skill Hunter"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a03c]">
            Andrew Gibler · Founder
          </p>
          <h1
            className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight"
            style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}
          >
            <span style={{ display: "inline-block" }}>ZoomでAndrewと</span>
            <span style={{ display: "inline-block" }}>話す</span>
          </h1>
          <p className="mt-2 text-base sm:text-lg font-semibold text-white/90">
            Book a chat with Andrew
          </p>
          <p className="mt-4 text-sm sm:text-base text-white/65">
            30分の無料相談です。お気軽にどうぞ。
          </p>
          <p className="mt-1 text-xs sm:text-sm text-white/45">
            30-min free chat. No pressure.
          </p>
        </div>
      </section>

      {/* ─── CALENDAR EMBED ─── */}
      <section className="relative bg-gradient-to-b from-[#fafaf8] to-white pt-10 pb-16 sm:pt-14 sm:pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#1a1a2e]/15 ring-1 ring-black/5">
            {/* Gold accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#c9a03c] via-[#d4af50] to-[#c9a03c]" />

            {/*
              TODO(lewis): Replace this placeholder with the real TidyCal / Calendly
              embed when the link is provided. Example:
                <iframe src="https://tidycal.com/andrewgibler/30-min" ... />
              Keep the outer card + accent bar styling.
            */}
            <div className="flex min-h-[420px] items-center justify-center bg-[#fafaf8] px-4 py-12 text-center">
              <div className="max-w-xs sm:max-w-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a03c]">
                  Calendar embed placeholder
                </p>
                <p className="mt-3 text-base font-semibold text-[#1a1a2e]">
                  予約カレンダーをここに埋め込みます
                </p>
                <p className="mt-2 text-sm text-[#1a1a2e]/60 leading-relaxed">
                  Replace the embed in <code className="break-all rounded bg-white px-1.5 py-0.5 text-xs">/andrew/page.tsx</code> when the link is provided.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[#1a1a2e]/60 leading-relaxed" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
            <span style={{ display: "inline-block" }}>うまく予約できない場合は、</span>
            <span style={{ display: "inline-block" }}>直接お電話ください:</span>{" "}
            <a
              href="tel:+819053732354"
              className="font-semibold text-[#1a1a2e] underline hover:text-[#c9a03c] whitespace-nowrap"
            >
              +81 90-5373-2354
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

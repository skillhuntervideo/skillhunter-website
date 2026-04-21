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
    <main className="min-h-screen bg-white">
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
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a03c]">
            Skill Hunter
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            ZoomでAndrewと話す
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-semibold text-white/90">
            Book a chat with Andrew
          </p>
          <p className="mt-5 text-sm sm:text-base text-white/65 max-w-xl mx-auto">
            30分の無料相談です。お気軽にどうぞ。
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-white/45 max-w-xl mx-auto">
            30-min free chat. No pressure.
          </p>
        </div>
      </section>

      {/* ─── CALENDAR EMBED ─── */}
      <section className="bg-gradient-to-b from-[#fafaf8] to-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 -mt-12 sm:-mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#1a1a2e]/15 ring-1 ring-black/5">
            {/* Gold accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#c9a03c] via-[#d4af50] to-[#c9a03c]" />

            {/*
              TODO(lewis): Replace this placeholder with the real TidyCal / Calendly
              embed when the link is provided. Example:
                <iframe src="https://tidycal.com/andrewgibler/30-min" ... />
              Keep the outer card + accent bar styling.
            */}
            <div className="flex min-h-[520px] items-center justify-center bg-[#fafaf8] px-6 py-16 text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a03c]">
                  Calendar embed placeholder
                </p>
                <p className="mt-3 text-base font-semibold text-[#1a1a2e]">
                  予約カレンダーをここに埋め込みます
                </p>
                <p className="mt-2 text-sm text-[#1a1a2e]/60">
                  Replace <code className="rounded bg-white px-1.5 py-0.5 text-xs">src</code> in
                  {" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs">/andrew/page.tsx</code>
                  {" "}
                  when the link is provided.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[#1a1a2e]/60">
            うまく予約できない場合は、直接お電話ください:{" "}
            <a href="tel:+819053732354" className="font-semibold text-[#1a1a2e] underline hover:text-[#c9a03c]">
              +81 90-5373-2354
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

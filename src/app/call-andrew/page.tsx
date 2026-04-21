import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import CallTracker from "./CallTracker";

export const metadata = {
  title: "Andrewに直接電話する — Call Andrew direct | Skill Hunter",
  description:
    "Call Andrew Gibler, founder of Skill Hunter, directly. Mon–Fri 10am–6pm JST.",
};

export default function CallAndrewPage() {
  return (
    <main className="min-h-screen bg-white">
      <CallTracker />

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
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-24 text-center">
          <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full ring-4 ring-[#c9a03c]/70 shadow-xl shadow-black/30">
            <img
              src="/images/andrew_portrait.jpg"
              alt="Andrew Gibler — Founder, Skill Hunter"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a03c]">
            Andrew Gibler · Founder
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            Andrewに直接電話する
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-semibold text-white/90">
            Call Andrew direct
          </p>
          <p className="mt-5 text-sm sm:text-base text-white/65">
            営業時間: 平日 10:00–18:00 JST
          </p>
          <p className="mt-1 text-xs sm:text-sm text-white/45">
            Mon–Fri 10am–6pm JST
          </p>
        </div>
      </section>

      {/* ─── PRIMARY CALL BUTTON ─── */}
      <section className="bg-gradient-to-b from-[#fafaf8] to-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 -mt-12 sm:-mt-14">
          <a
            href="tel:+819053732354"
            className="block rounded-2xl bg-[#c9a03c] px-6 py-8 sm:py-10 text-center text-[#1a1a2e] shadow-2xl shadow-[#c9a03c]/40 ring-1 ring-[#1a1a2e]/10 transition-transform hover:bg-[#d4af50] active:scale-[0.98]"
          >
            <span className="block text-base font-semibold uppercase tracking-[0.18em]">
              📞 タップして電話
            </span>
            <span className="mt-2 block text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums">
              +81 90-5373-2354
            </span>
            <span className="mt-1 block text-xs font-medium opacity-70">
              Tap to call
            </span>
          </a>

          <p className="mt-8 text-center text-sm text-[#1a1a2e]/60">
            またはZoomで予約:{" "}
            <Link
              href="/andrew"
              className="font-semibold text-[#1a1a2e] underline hover:text-[#c9a03c]"
            >
              Book a Zoom chat
            </Link>
          </p>
          <p className="mt-2 text-center text-sm text-[#1a1a2e]/50">
            メール:{" "}
            <a
              href="mailto:andrew.gibler@skillhunter.jp"
              className="underline hover:text-[#c9a03c]"
            >
              andrew.gibler@skillhunter.jp
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

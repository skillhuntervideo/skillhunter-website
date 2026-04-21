import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SignupForm from "./SignupForm";

export const metadata = {
  title: "30日間無料体験 — Start Your Free Trial | Skill Hunter",
  description:
    "Start your free 30-day trial of Skill Hunter — story-based English training for hotel staff in Japan.",
};

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
            <span style={{ display: "inline-block" }}>ホテル現場で使える</span><span style={{ display: "inline-block" }}>英語トレーニング</span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-semibold text-white/90">
            Story-Based English for Hotel Staff
          </p>
          <p className="mt-5 text-sm sm:text-base text-white/65 max-w-xl mx-auto" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
            <span style={{ display: "inline-block" }}>フロント、レストラン、</span><span style={{ display: "inline-block" }}>電話対応 —</span> <span style={{ display: "inline-block" }}>300名以上が受講中の</span><span style={{ display: "inline-block" }}>ストーリー型オンラインコース。</span><span style={{ display: "inline-block" }}>スマホでもPCでも、</span><span style={{ display: "inline-block" }}>いつでも学べます。</span>
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-white/45 max-w-xl mx-auto">
            Front desk, restaurant, phone — 300+ students learning through story-based lessons. Any device, any time.
          </p>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="bg-gradient-to-b from-[#fafaf8] to-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 -mt-12 sm:-mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#1a1a2e]/15 ring-1 ring-black/5">
            {/* Gold accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#c9a03c] via-[#d4af50] to-[#c9a03c]" />
            <div className="px-2 sm:px-4 pt-4 pb-2">
              <SignupForm />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[#1a1a2e]/60">
            法人プランをお探しですか？{" "}
            <a
              href="https://skillhunter.jp/inquiry678052"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a2e] underline hover:text-[#c9a03c]"
            >
              法人のお問い合わせはこちら — Corporate inquiry
            </a>
          </p>
        </div>
      </section>

      <Script src="https://link.skillhunter.jp/js/form_embed.js" strategy="afterInteractive" />
    </main>
  );
}

import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const metadata = {
  title: "ヒルトンスタッフ英語トレーニング — Free Trial | Skill Hunter × Hilton",
  description:
    "Skill Hunter × Hilton — Story-based English training built for Hilton hotel staff in Japan. Start your free trial today.",
};

export default function HiltonSignupPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── NAV (Hilton co-branded) ─── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#002E5E]/95 backdrop-blur-sm">
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
      <section className="relative overflow-hidden bg-[#002E5E] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002E5E] via-[#003d7a] to-[#002E5E] opacity-95" />
        <img
          src="/images/point_01.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 text-center">
          <div className="mb-8 flex justify-center">
            <img src="/images/logos/hilton_white.svg" alt="Hilton" className="h-10 sm:h-12" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            <span className="text-white/90">30日間</span>無料体験
          </h1>
          <p className="mt-2 text-lg sm:text-2xl font-semibold text-white/90">
            Start Your 30-Day Free Trial
          </p>
          <p className="mt-5 text-sm sm:text-base text-white/70 max-w-2xl mx-auto" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
            <span style={{ display: "inline-block" }}>ヒルトンスタッフ向けの</span><span style={{ display: "inline-block" }}>英語トレーニングを、</span><span style={{ display: "inline-block" }}>今日から無料で。</span><span style={{ display: "inline-block" }}>フロント、</span><span style={{ display: "inline-block" }}>コンシェルジュ、</span><span style={{ display: "inline-block" }}>F&B、客室 —</span> <span style={{ display: "inline-block" }}>現場でそのまま</span><span style={{ display: "inline-block" }}>使えるコースに、</span><span style={{ display: "inline-block" }}>クレカ不要で</span><span style={{ display: "inline-block" }}>アクセスできます。</span>
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-white/50 max-w-2xl mx-auto">
            Free English training built for Hilton staff. Front desk, concierge, F&amp;B, housekeeping — 30 days free, no credit card required.
          </p>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="bg-gradient-to-b from-[#fafaf8] to-white pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 -mt-12 sm:-mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#002E5E]/20 ring-1 ring-black/5">
            {/* Hilton blue accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#002E5E] via-[#0057B8] to-[#002E5E]" />
            <div className="px-2 sm:px-4 pt-4 pb-2">
              {/* TODO: Replace form ID with Hilton-specific form once created in CC360 */}
              <iframe
                src="https://link.skillhunter.jp/widget/form/X4j0pD0U3hPp3S4PZedh"
                style={{ width: "100%", border: "none", borderRadius: "3px", display: "block" }}
                id="inline-X4j0pD0U3hPp3S4PZedh"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Hilton Trial Signup"
                data-height="1156"
                data-layout-iframe-id="inline-X4j0pD0U3hPp3S4PZedh"
                data-form-id="X4j0pD0U3hPp3S4PZedh"
                title="Hilton Trial Signup"
                height={1156}
              />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[#002E5E]/70" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
            <span style={{ display: "inline-block" }}>ヒルトン人事部の方へ</span>{" "}
            <a
              href="https://skillhunter.jp/inquiry678052"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002E5E] underline hover:text-[#0057B8]"
            >
              法人のお問い合わせはこちら — Hilton HR inquiry
            </a>
          </p>
        </div>
      </section>

      <Script src="https://link.skillhunter.jp/js/form_embed.js" strategy="afterInteractive" />
    </main>
  );
}

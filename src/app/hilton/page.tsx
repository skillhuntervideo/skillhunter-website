import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, BadgeCheck, Quote } from "lucide-react";

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
          <a href="#signup" className="mt-8 inline-block">
            <Button className="bg-[#c9a03c] hover:bg-[#b8912e] text-white text-base px-8 py-3 h-auto font-semibold rounded-lg shadow-lg">
              無料体験を始める — Start Free Trial
            </Button>
          </a>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}

      {/* Sub-Section A: Vendor Badge Strip + Client Roster */}
      <section className="bg-[#002E5E] border-t-2 border-[#c9a03c]">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16 flex flex-col items-center text-center gap-4">
          <BadgeCheck className="size-8 text-[#c9a03c]" aria-hidden="true" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ヒルトン・オフィシャル認定ベンダー
            </h2>
            <p className="text-sm text-white/60 italic mt-1">
              Officially Signed Hilton Vendor
            </p>
          </div>
          <p className="max-w-2xl text-sm text-white/75 leading-relaxed" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
            <span style={{ display: "inline-block" }}>ヒルトン・ジャパン本部との</span><span style={{ display: "inline-block" }}>ベンダー契約は締結済み。</span><span style={{ display: "inline-block" }}>新規プロパティは</span><span style={{ display: "inline-block" }}>施設単位の簡易プロセスで</span><span style={{ display: "inline-block" }}>スムーズに導入できます。</span>
            <br />
            <span className="italic text-white/50">
              The vendor agreement is already in place at Hilton Japan HQ — new properties can onboard quickly and easily through a streamlined property-level process.
            </span>
          </p>

          {/* Brand family strip */}
          <p className="text-xs text-white/40 tracking-wide mt-4">
            Hilton &middot; DoubleTree by Hilton &middot; Conrad &middot; Waldorf Astoria &middot; Canopy by Hilton &middot; Hilton Garden Inn
          </p>

          {/* Property chip grid */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {[
              "Hilton Hiroshima",
              "Conrad Tokyo",
              "DoubleTree by Hilton Okinawa Naha Shuri Castle",
              "Waldorf Astoria Osaka",
              "DoubleTree by Hilton Osaka Castle",
              "Canopy by Hilton Osaka Umeda",
              "DoubleTree by Hilton Kyoto Higashiyama",
              "Hilton Tokyo Bay",
              "Hilton Garden Inn Kyoto Shijo Karasuma",
            ].map((name) => (
              <Badge key={name} variant="outline" className="text-xs font-normal text-white/80 border-white/20 bg-white/5">
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Section B: Metric Band */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { stat: "9",   ja: "ヒルトングループ導入施設",     en: "Hilton Group properties" },
              { stat: "228", ja: "研修中のホテルスタッフ",       en: "Staff currently training" },
              { stat: "6",   ja: "ヒルトンブランドファミリー",   en: "Hilton brand families" },
              { stat: "3+",  ja: "年の継続的な研修実績",         en: "Years of continuous service" },
            ].map(({ stat, ja, en }) => (
              <div key={stat} className="flex flex-col items-center gap-1">
                <span className="text-5xl font-bold text-[#002E5E]">{stat}</span>
                <span className="text-sm font-medium text-[#1a1a2e] mt-1">{ja}</span>
                <span className="text-xs text-muted-foreground italic">{en}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
            <span style={{ display: "inline-block" }}>2022年10月、</span><span style={{ display: "inline-block" }}>広島ヒルトンとの契約を皮切りに、</span><span style={{ display: "inline-block" }}>現在は東京・大阪・京都・</span><span style={{ display: "inline-block" }}>広島・沖縄の</span><span style={{ display: "inline-block" }}>5都市で展開中です。</span>
            <br />
            <span className="italic">
              Started with Hilton Hiroshima in October 2022. Now running across 5 cities: Tokyo, Osaka, Kyoto, Hiroshima, and Okinawa.
            </span>
          </p>
        </div>
      </section>

      {/* Sub-Section D: Testimonials + Sub-Section E: Live Lectures Callout */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            導入中のヒルトングループ・ホテルスタッフの声
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Real feedback from Hilton staff already using Skill Hunter
          </p>
          <p className="mt-1 text-xs text-muted-foreground italic">
            匿名アンケート（回答者27名）より抜粋 — 総合満足度 4.36 / 5
            <br />
            From an anonymous 27-respondent survey — 4.36 / 5 overall satisfaction
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1 — T2 (answers "will staff engage?") */}
            <Card className="bg-white flex flex-col">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「学んだ英語が仕事に直結するので、全くのストレスなく、楽しく続けられます。講師の方々の熱意が動画超しでも感じられ、双方向性のビデオレッスンでも、気兼ねなく聞きやすいです。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;The English I learn connects directly to my work — I can keep going stress-free and actually enjoy it. The instructors&apos; passion comes through the screen, and the interactive lessons make it easy to ask questions.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="border-t pt-4">
                    <p className="text-xs font-medium text-[#1a1a2e]">ホテルスタッフ / Hotel staff</p>
                    <p className="text-xs text-muted-foreground">Hilton Group property</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 — T6 (answers "is it hotel-specific?" — the sticky steak-doneness moment) */}
            <Card className="bg-white flex flex-col">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「接客での言い回しなど専門的な英語を学べたこと。焼き加減をスムーズに聞けるようになった時は嬉しかったです。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;I learned industry-specific phrases. The first time I smoothly asked a guest how they wanted their steak cooked — that was a real moment.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="border-t pt-4">
                    <p className="text-xs font-medium text-[#1a1a2e]">レストランスタッフ / Restaurant staff</p>
                    <p className="text-xs text-muted-foreground">Hilton Group property</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 — T3 (answers "will it show measurable improvement?") */}
            <Card className="bg-white flex flex-col">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「よく使う英語のフレーズを、目と耳と声で、身体に染み込ませることができました。ゲストからの英語の質問に素早く反応できています。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;I absorbed common phrases through eyes, ears, and voice. Now I can react to guest questions in English almost instantly.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="border-t pt-4">
                    <p className="text-xs font-medium text-[#1a1a2e]">フロントスタッフ / Front desk</p>
                    <p className="text-xs text-muted-foreground">Hilton Group property</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 — T7 (English-native response — visible proof of outcome) */}
            {/* Intentionally English-only: no Japanese quote, no italic translation */}
            <Card className="bg-white flex flex-col">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-[10px] font-medium text-[#c9a03c] uppercase tracking-widest mb-2">
                  Submitted in English / 英語で回答
                </p>
                <p className="text-sm leading-relaxed text-foreground/90">
                  &ldquo;Many practical real-life situations can be directly applied to both work and everyday life. It&apos;s possible to use the questions you&apos;ve learned to communicate with customers and respond to what they ask.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="border-t pt-4">
                    <p className="text-xs font-medium text-[#1a1a2e]">ホテルスタッフ / Hotel staff</p>
                    <p className="text-xs text-muted-foreground">Hilton Group property</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Sub-Section E: Live Lectures Callout */}
        <div className="mx-auto max-w-5xl px-6 pb-16 sm:pb-24">
          <div className="max-w-2xl mx-auto border-l-2 border-[#c9a03c] pl-4 mt-12">
            <p className="text-sm text-[#1a1a2e] leading-relaxed" style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
              <span style={{ display: "inline-block" }}>オンライン動画教材に加え、</span><span style={{ display: "inline-block" }}>日本国内の</span><span style={{ display: "inline-block" }}>ヒルトングループ加盟ホテル向けに、</span><span style={{ display: "inline-block" }}>合同ライブ英語レッスンも</span><span style={{ display: "inline-block" }}>開催しています。</span>
            </p>
            <p className="text-xs text-muted-foreground italic mt-1 leading-relaxed">
              On top of the platform, Skill Hunter runs live group English lectures for Hilton properties across Japan — so your staff learns together.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section id="signup" className="bg-gradient-to-b from-[#fafaf8] to-white pb-20 sm:pb-28 scroll-mt-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 -mt-12 sm:-mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#002E5E]/20 ring-1 ring-black/5">
            {/* Hilton blue accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#002E5E] via-[#0057B8] to-[#002E5E]" />
            <div className="px-2 sm:px-4 pt-4 pb-2">
                <iframe
                src="https://link.skillhunter.jp/widget/form/8gpL8YrMqwIktyCl8bov"
                style={{ width: "100%", border: "none", borderRadius: "3px", display: "block" }}
                id="inline-8gpL8YrMqwIktyCl8bov"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Free 30 day trial HILTON (Lewis)"
                data-height="1120"
                data-layout-iframe-id="inline-8gpL8YrMqwIktyCl8bov"
                data-form-id="8gpL8YrMqwIktyCl8bov"
                title="Free 30 day trial HILTON (Lewis)"
                height={1120}
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

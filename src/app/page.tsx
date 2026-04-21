import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ComparisonWidget } from "@/components/shared/comparison-widget";
import { ShiryouDialog } from "@/components/shared/shiryou-dialog";
import {
  Monitor,
  Phone,
  UtensilsCrossed,
  ConciergeBell,
  Mail,
  CheckCircle,
  Quote,
  Menu,
  GraduationCap,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <img
            src="/images/logo_wh.png"
            alt="Skill Hunter"
            className="h-8"
          />
          <div className="hidden sm:flex items-center gap-6">
            <a href="#courses" className="text-sm text-white/60 hover:text-white transition-colors">
              コース
            </a>
            <a href="#plans" className="text-sm text-white/60 hover:text-white transition-colors">
              プラン
            </a>
            <a href="#compare" className="text-sm text-white/60 hover:text-white transition-colors">
              料金比較
            </a>
            <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">
              お問い合わせ
            </a>
            <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">
              チーム
            </a>
            <a href="https://login.skillhunter.jp" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
              ログイン
            </a>
            <Button size="sm" asChild className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold">
              <a href="/signup">無料体験</a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden text-white">
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative overflow-hidden bg-[#1a1a2e] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-90" />
        {/* Hero background image */}
        <img
          src="/images/point_01.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a03c]">
              ホテルスタッフのための
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              おもてなしに
              <span className="text-[#c9a03c]">自信</span>
              がつく、
              <br />
              楽しい英語。
            </h1>
            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              Confident English hospitality. Built for hotel staff. Designed to be fun.
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/80 max-w-2xl">
              教科書ではなく、ドラマのように学ぶ。Netflixで映画を観るように英語が身につく、ホテル特化型のオンラインコースです。
            </p>
            <p className="mt-2 text-sm text-white/50 max-w-2xl">
              Not a textbook. Not a classroom. Staff learn the way you absorb a Netflix series — by living inside the story. Every course is built around real hotel situations.
            </p>

            {/* Hero pull quote — from anonymous staff survey */}
            <div className="mt-8 border-l-2 border-[#c9a03c] pl-5 max-w-xl">
              <p className="text-base sm:text-lg italic text-white/90 leading-snug">
                「今まで受けてきた中で一番わかりやすい英語教材でした。」
              </p>
              <p className="mt-2 text-xs text-white/50">
                — ホテルスタッフ · 匿名アンケート (2025)
              </p>
              <p className="text-xs italic text-white/40">
                &ldquo;The clearest English material I&apos;ve ever used.&rdquo;
              </p>
            </div>

            {/* Pricing line — inline, lightweight */}
            <div className="mt-8 space-y-1.5">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a03c]">
                1ホテル定額 / Flat rate per hotel
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3 text-white/80">
                <span className="text-3xl sm:text-4xl font-light text-[#c9a03c]">
                  ¥49,000〜
                </span>
                <span className="text-sm text-white/60">/ 月（税別）</span>
              </div>
              <div className="text-sm text-white/80">
                1ホテル定額 · 人数無制限 · 追加料金なし
              </div>
              <div className="text-xs text-white/50">
                Flat rate per hotel · Unlimited staff · No per-seat fees
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold text-base px-8 h-12">
                <a href="/signup">30日間無料体験 — Start 30-Day Free Trial</a>
              </Button>
              <ShiryouDialog label="資料ダウンロード — Download Brochure" variant="outline-dark" size="lg" />
            </div>
            <p className="mt-4 text-xs text-white/40">
              30日間無料 · クレジットカード不要 · 無理な勧誘なし
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: TRUSTED BY ─── */}
      <section className="border-b bg-[#fafaf8] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#c9a03c]">
            世界的ホテルブランドに導入済み
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Trusted by major global hotel brands
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            {[
              { src: "/images/logos/hilton.svg", alt: "Hilton", h: "h-5" },
              { src: "/images/logos/conrad.svg", alt: "Conrad", h: "h-4" },
              { type: "text", text: "JANU", alt: "Janu" },
              { src: "/images/logos/waldorf_mark.svg", alt: "Waldorf Astoria", h: "h-10" },
              { src: "/images/logos/marriott.svg", alt: "Marriott", h: "h-5" },
              { src: "/images/logos/prince.svg", alt: "Prince Hotels", h: "h-5" },
            ].map((logo) => (
              "type" in logo && logo.type === "text" ? (
                <span
                  key={logo.alt}
                  className="text-lg font-light tracking-[0.3em] text-gray-800 opacity-40"
                >
                  {logo.text}
                </span>
              ) : (
                <img
                  key={logo.alt}
                  src={"src" in logo ? logo.src : ""}
                  alt={logo.alt}
                  className={`${"h" in logo ? logo.h : "h-5"} w-auto opacity-40 grayscale`}
                />
              )
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="text-3xl font-bold text-[#1a1a2e]">
                11<span className="text-base font-semibold text-[#1a1a2e]/70 ml-1">ホテル</span>
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Partner hotels</p>
            </div>
            <div className="hidden sm:block h-10 w-px bg-[#1a1a2e]/15" />
            <div>
              <p className="text-3xl font-bold text-[#1a1a2e]">
                300<span className="text-xl">+</span>
                <span className="text-base font-semibold text-[#1a1a2e]/70 ml-1">名</span>
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Hotel staff learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE PROBLEM + BEFORE/AFTER ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a03c]">
              なぜ既存の研修は続かないのか
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e] leading-tight">
              研修は続かない。
              <br />
              だから英語も<span className="text-[#c9a03c]">定着しない</span>。
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Training that doesn&apos;t stick. English that never arrives.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                num: "01",
                jp: "途中でやめてしまう",
                en: "Boring content doesn't get finished",
                body: "面白くない教材は続かない。従来の教科書型研修は、スタッフが最後までやり切れない。",
              },
              {
                num: "02",
                jp: "現場で使えない英語",
                en: "Generic English doesn't transfer",
                body: "ビジネス英語の教材は、チェックインや電話対応には使えない。現場で使う表現が抜け落ちている。",
              },
              {
                num: "03",
                jp: "成果が見えない",
                en: "No measurable results",
                body: "英検などの客観指標で効果を示せず、経営陣への説明ができない。投資対効果が測れない。",
              },
            ].map((item) => (
              <Card key={item.num} className="border-t-2 border-t-[#c9a03c] border-x border-b border-[#1a1a2e]/10 bg-white">
                <CardContent className="pt-6">
                  <p className="text-2xl font-semibold text-[#c9a03c] leading-none">{item.num}</p>
                  <h3 className="mt-3 text-base font-bold text-[#1a1a2e]">{item.jp}</h3>
                  <p className="text-xs italic text-muted-foreground mt-0.5">{item.en}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Teaser strip — forward to Voices section */}
          <a
            href="#voices"
            className="mt-12 flex items-center justify-between gap-4 rounded-xl bg-[#1a1a2e] px-6 py-5 text-white transition-colors hover:bg-[#0f3460]"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9a03c]">
                Next · この3つの課題への答え
              </p>
              <p className="mt-1 text-base font-bold">
                実際の受講者 28名の声で、3つの課題に答えます。
              </p>
              <p className="mt-0.5 text-xs italic text-white/60">
                Here&apos;s how 28 real learners answer each problem.
              </p>
            </div>
            <span className="text-3xl font-extrabold text-[#c9a03c] leading-none">→</span>
          </a>
        </div>
      </section>

      {/* ─── SECTION 6: SOCIAL PROOF ─── */}
      <section id="voices" className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a03c]">
            3つの課題への、現場からの答え
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e] leading-tight">
            続けられた。使えるようになった。
            <span className="text-[#c9a03c]">成果も見えた。</span>
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Three problems. Three answers — in learners&apos; own words.
          </p>

          {/* Stats row — split by dimension, from 28-person anonymous survey */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="bg-white border border-[#1a1a2e]/10 rounded-lg px-5 py-4 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-[#c9a03c] leading-none">82%</span>
              <div className="text-xs leading-snug">
                <p className="font-medium text-[#1a1a2e]">満足度 4点以上</p>
                <p className="italic text-muted-foreground">Content satisfaction 4+/5</p>
              </div>
            </div>
            <div className="bg-white border border-[#1a1a2e]/10 rounded-lg px-5 py-4 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-[#c9a03c] leading-none">86%</span>
              <div className="text-xs leading-snug">
                <p className="font-medium text-[#1a1a2e]">業務で役立った 4点以上</p>
                <p className="italic text-muted-foreground">Useful on the job 4+/5</p>
              </div>
            </div>
            <div className="bg-[#1a1a2e] text-white rounded-lg px-5 py-4 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-[#c9a03c] leading-none">0%</span>
              <div className="text-xs leading-snug">
                <p className="font-medium">「教材が理由で継続しない」</p>
                <p className="italic text-white/60">Cited content as reason to stop</p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            出典：大手ホテルチェーン 28名 匿名アンケート（2025年実施）· Source: Anonymous survey, 28 staff at a major hotel chain (2025).
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* ANSWER 01 — Continuation */}
            <Card className="bg-white flex flex-col border-t-2 border-t-[#c9a03c]">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Badge className="self-start bg-[#c9a03c] text-[#1a1a2e] text-[10px] font-black tracking-[0.16em] px-2.5 py-1 hover:bg-[#c9a03c]">
                  → 答え 01 · CONTINUATION
                </Badge>
                <Quote className="size-5 text-[#c9a03c] mt-4" />
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  「学んだ英語が仕事に直結するので、全くのストレスなく、楽しく続けられます。講師の方々の熱意が動画越しでも感じられ、気兼ねなく聞きやすいです。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;The English connects directly to my work, so there&apos;s zero stress — I actually enjoy it and keep going. You can feel the teachers&apos; passion through the screen; it&apos;s easy to ask questions.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 border-t pt-4">
                    <div className="size-8 rounded-full bg-[#c9a03c]/15 text-[#c9a03c] flex items-center justify-center font-bold text-sm">A</div>
                    <div>
                      <p className="text-sm font-medium">ホテルスタッフ A</p>
                      <p className="text-xs text-muted-foreground">Hotel staff · 匿名アンケート</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ANSWER 02 — On-the-job */}
            <Card className="bg-white flex flex-col border-t-2 border-t-[#c9a03c]">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Badge className="self-start bg-[#c9a03c] text-[#1a1a2e] text-[10px] font-black tracking-[0.16em] px-2.5 py-1 hover:bg-[#c9a03c]">
                  → 答え 02 · ON-THE-JOB USE
                </Badge>
                <Quote className="size-5 text-[#c9a03c] mt-4" />
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  「よく使う英語のフレーズを、目と耳と声で、身体に染み込ませることができました。ゲストからの英語の質問に素早く反応できています。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;Eyes, ears, voice — the phrases sink into my body. I now respond to guests&apos; English questions instantly.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 border-t pt-4">
                    <div className="size-8 rounded-full bg-[#c9a03c]/15 text-[#c9a03c] flex items-center justify-center font-bold text-sm">B</div>
                    <div>
                      <p className="text-sm font-medium">ホテルスタッフ B</p>
                      <p className="text-xs text-muted-foreground">Hotel staff · 匿名アンケート</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ANSWER 03 — Measurable (dark navy) */}
            <Card className="flex flex-col bg-[#1a1a2e] text-white border-t-2 border-t-[#c9a03c] sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Badge className="self-start bg-[#c9a03c] text-[#1a1a2e] text-[10px] font-black tracking-[0.16em] px-2.5 py-1 hover:bg-[#c9a03c]">
                  → 答え 03 · MEASURABLE
                </Badge>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#c9a03c] leading-none">英検 3級+</span>
                  <div className="text-xs text-white/70 leading-snug">
                    <p>A1コース修了時の到達目安</p>
                    <p className="italic">Eiken Grade 3+ at A1 completion</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/15">
                  <p className="text-sm leading-relaxed">
                    「英語で会話をする事に対して恐怖感を抱かず、少しではあるが会話できるようになった。」
                  </p>
                  <p className="mt-2 text-xs italic text-white/60 leading-relaxed">
                    &ldquo;No more fear of speaking English. I can actually have conversations now.&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-white/50">
                    — ホテルスタッフ C · 大手ホテルチェーン 28名アンケート (2025)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Community screenshot */}
          <div className="mt-12 rounded-xl overflow-hidden border shadow-sm">
            <img
              src="/images/point_03.jpg"
              alt="Skill Hunter community — Q&A with students and instructors"
              className="w-full"
            />
            <div className="bg-white px-6 py-4">
              <p className="text-sm font-medium text-[#1a1a2e]">コミュニティサポート</p>
              <p className="text-xs text-muted-foreground mt-1">
                Students interact directly with instructors — questions get answered, progress gets supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE METHOD ─── */}
      <section className="bg-[#1a1a2e] py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 sm:grid-cols-[1fr_320px] items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                ドラマを観るように、英語を覚える。
              </h2>
              <p className="mt-2 text-base text-white/60">
                Learning English like watching a drama series.
              </p>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                Netflixで映画を観るように、英語が身につく。スタッフはストーリーの中の登場人物を追いかけながら、自然に英語を吸収していきます。「次どうなるんだろう？」と思いながら、気づいたら英語が口から出ている。それがSkill Hunterのメソッドです。
              </p>
              <p className="mt-2 text-sm text-white/50">
                Staff follow a story. Real characters, real hotel situations. They absorb the language naturally — the same way you pick up phrases from a show you love. No memorisation drills. No grammar tables. Just immersion that actually works.
              </p>
            </div>
            {/* Instructor screenshot */}
            <div className="hidden sm:block">
              <img
                src="/images/skillhunter_top.jpg"
                alt="Skill Hunter cast"
                className="rounded-xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* 4-step lesson flow */}
          <div className="mt-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 bg-white/10" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a03c]">
                1レッスンの流れ · Lesson Flow
              </p>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                { n: "1", jp: "失敗シーンを見る", en: "Spot the mistake", d: "ホテルでよくある失敗例のスキットを視聴。" },
                { n: "2", jp: "正しい表現を学ぶ", en: "Learn the fix", d: "講師が失敗の原因と、3つの改善ポイントを解説。" },
                { n: "3", jp: "発音練習", en: "Pronunciation drill", d: "L/R、ストレス、イントネーションなど弱点を克服。" },
                { n: "4", jp: "ロールプレイ", en: "Roleplay", d: "実際のゲスト対応シナリオで声に出して練習。", highlight: true },
              ].map((step) => (
                <div
                  key={step.n}
                  className={`rounded-xl border p-4 ${
                    step.highlight
                      ? "border-[#c9a03c] bg-[#c9a03c]/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className={`text-2xl font-bold leading-none ${step.highlight ? "text-[#c9a03c]" : "text-[#c9a03c]/70"}`}>
                    {step.n}
                  </div>
                  <p className="mt-3 text-sm font-bold text-white">{step.jp}</p>
                  <p className="text-[11px] italic text-white/50">{step.en}</p>
                  <p className="mt-2 text-xs text-white/70 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                jp: "ホテル業務に特化したシナリオ — フロント、レストラン、電話対応、コンシェルジュ",
                en: "Hospitality-specific scenarios — front desk, restaurant, phone calls, concierge",
              },
              {
                jp: "ネイティブスピーカーによる自然な英語",
                en: "Native English speakers throughout — natural pace, real accent, real tone",
              },
              {
                jp: "いつでも、どこでも、自分のペースで学習可能",
                en: "Self-paced and fully online — staff study on their schedule, not yours",
              },
              {
                jp: "スマートフォン、タブレット、PCどれでも対応",
                en: "Works on any device — phone, tablet, or laptop",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <CheckCircle className="mt-0.5 size-5 shrink-0 text-[#c9a03c]" />
                <div>
                  <p className="text-sm font-medium text-white/90">{item.jp}</p>
                  <p className="mt-1 text-xs text-white/50">{item.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSE JOURNEY (unified: flow + content) ─── */}
      <section id="courses" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a03c]">
              学習の流れ と コース内容 / The Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl text-[#1a1a2e] leading-tight">
              ゼロから、<span className="text-[#c9a03c]">現場で使える英語</span>まで。
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Every staff member follows the same clear path — from beginner to confident hotel professional. Each stage uses real courses with measurable milestones.
            </p>
          </div>

          {/* ─── STAGE 1 ─── */}
          <div className="mt-16">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a03c]">
                Stage 1 · ゼロから基礎へ
              </p>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#1a1a2e] leading-tight">
                英語初心者はここから。<span className="text-muted-foreground font-normal text-lg">/ Staff with little English start here.</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                全スタッフが共通の基礎コースからスタート。修了時には<span className="font-bold text-[#1a1a2e]">英検3級相当</span>のレベルに到達し、現場で使える英語の土台が整います。既に英語ができるスタッフはこのステージをスキップして、Stage 2 から直接始められます。
              </p>
              <p className="mt-1 text-xs italic text-muted-foreground leading-relaxed">
                All beginners start here. By the end of A1, staff reach Eiken Grade 3 — the measurable foundation. Experienced staff can skip straight to Stage 2.
              </p>
            </div>

            <div className="mt-8 grid items-stretch gap-3 sm:grid-cols-[auto_auto_1fr]">
              {/* Start chip */}
              <div className="rounded-xl border border-[#1a1a2e]/10 bg-[#fafaf8] flex flex-col justify-center text-center px-6 py-6 sm:min-w-[140px]">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1a1a2e]/50">Start</p>
                <p className="mt-1 text-xl font-bold text-[#1a1a2e]">ゼロ</p>
                <p className="text-[11px] italic text-[#1a1a2e]/50">Zero / Beginner</p>
              </div>
              {/* Arrow */}
              <div className="flex items-center justify-center text-[#c9a03c] text-2xl font-semibold">
                <span className="hidden sm:inline">→</span>
                <span className="sm:hidden">↓</span>
              </div>
              {/* A1 Course card */}
              <Card className="group hover:shadow-md transition-shadow overflow-hidden relative">
                <div className="grid sm:grid-cols-[180px_1fr]">
                  <div className="h-32 sm:h-full overflow-hidden">
                    <img
                      src="/images/course_a1.jpg"
                      alt="A1 Foundation"
                      style={{ objectPosition: "35% center" }}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="py-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a03c]">
                      Foundation · 基礎英語
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#1a1a2e]">
                      A1 コース <span className="text-sm font-normal text-muted-foreground">/ Basic English</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      日常会話・基本文法・リスニング・簡単な接客英語。修了時に英検3級レベルへ。
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Everyday conversation, basic grammar, listening, and simple guest interactions.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>

          {/* ─── MILESTONE ─── */}
          <div className="mt-12 rounded-2xl bg-[#c9a03c] px-6 py-8 sm:px-10 sm:py-10 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1a1a2e]/70">
              Milestone 達成 / Milestone Reached
            </p>
            <p className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-[#1a1a2e]">
              英検 3級+
            </p>
            <p className="mt-1 text-base text-[#1a1a2e]/70 italic">Eiken Grade 3 or above</p>
            <p className="mt-4 text-sm text-[#1a1a2e]/80 max-w-xl mx-auto">
              経営陣にも説明しやすい、客観的な成果指標。次は、役割ごとの現場英語へ。
            </p>
            <p className="text-xs italic text-[#1a1a2e]/60 max-w-xl mx-auto">
              A clear, objective measure you can report to leadership — and the gateway to role-specific English.
            </p>
          </div>

          {/* ─── STAGE 2 ─── */}
          <div className="mt-8">
            {/* Arrow down from milestone */}
            <div className="flex justify-center -mt-2 mb-6" aria-hidden="true">
              <div className="flex flex-col items-center">
                <div className="h-8 w-px bg-[#c9a03c]" />
                <div className="text-[#c9a03c] text-2xl leading-none -mt-1">↓</div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a03c]">
                Stage 2 · 現場に特化
              </p>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#1a1a2e] leading-tight">
                役割ごとの専門英語へ。<span className="text-muted-foreground font-normal text-lg">/ Role-specific English.</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                基礎が整ったスタッフは、自分の担当業務に直結する専門コースへ。フロントデスク、レストラン、電話対応など、現場ですぐに使えるフレーズとシチュエーションを中心に学習します。
              </p>
              <p className="mt-1 text-xs italic text-muted-foreground leading-relaxed">
                Staff branch into the tracks that match their role — real hotel situations, real phrases.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Monitor,
                  image: "/images/course_01.jpg",
                  title: "フロントデスク",
                  titleEn: "Front Desk",
                  jp: "チェックイン・チェックアウトを英語でスムーズに対応",
                  en: "Staff handle check-in, check-out, and guest requests in English — without hesitation.",
                },
                {
                  icon: UtensilsCrossed,
                  image: "/images/course_02.jpg",
                  title: "レストラン",
                  titleEn: "Restaurant",
                  jp: "英語メニューの説明、注文対応、アレルギーへの対応を自信を持って",
                  en: "From menu explanations to allergy requests, staff communicate clearly and warmly.",
                },
                {
                  icon: Phone,
                  image: "/images/course_03.jpg",
                  title: "電話対応",
                  titleEn: "Phone Calls",
                  jp: "予約・問い合わせ・クレームを電話で英語対応",
                  en: "Staff take reservations, handle enquiries, and manage complaints — calmly and clearly.",
                },
                {
                  icon: ConciergeBell,
                  image: "/images/course_04.jpg",
                  title: "コンシェルジュ",
                  titleEn: "Concierge",
                  jp: "観光案内・交通情報・おすすめスポットを英語で案内",
                  en: "Staff recommend restaurants, explain directions, and guide guests through local experiences.",
                },
                {
                  icon: Mail,
                  image: "/images/business_email.png",
                  title: "ビジネスメール",
                  titleEn: "Business Emails",
                  jp: "予約確認・クレーム対応・提案を英語メールで対応",
                  en: "Staff write professional English emails — reservations, complaints, follow-ups.",
                },
                {
                  icon: GraduationCap,
                  image: "/images/course_professional.jpg",
                  imagePosition: "left center",
                  isNew: true,
                  title: "プロフェッショナル英語",
                  titleEn: "Professional English",
                  jp: "挨拶・対応・言葉遣いを磨き、プロとしての印象を残す",
                  en: "Staff learn to greet warmly, respond confidently when they don't have the answer, and turn everyday moments into professional impressions.",
                },
              ].map((course, i) => (
                <Card key={i} className={`group hover:shadow-md transition-shadow overflow-hidden relative ${course.isNew ? "ring-2 ring-[#c9a03c] shadow-md" : ""}`}>
                  {course.isNew && (
                    <span className="absolute top-3 right-3 z-10 rounded-full bg-[#c9a03c] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#1a1a2e] shadow">
                      New
                    </span>
                  )}
                  <div className="h-40 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.titleEn}
                      style={course.imagePosition ? { objectPosition: course.imagePosition } : undefined}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-[#1a1a2e] text-[#c9a03c]">
                        <course.icon className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a1a2e]">{course.title}</p>
                        <p className="text-xs text-muted-foreground">{course.titleEn}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">{course.jp}</p>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{course.en}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ─── SECTION 7: MEET THE TEAM ─── */}
      <section id="about" className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a03c]">
              チーム紹介 / Meet the Team
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a2e]">
              The people behind Skill Hunter.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Built by educators who actually teach — not just content producers. Hotel English, designed by the people who know it works.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Andrew */}
            <div className="rounded-2xl border border-[#1a1a2e]/10 bg-white overflow-hidden shadow-sm flex flex-col">
              <div className="h-96 overflow-hidden">
                <img
                  src="/images/andrew_portrait.jpg"
                  alt="Andrew Gibler — Founder"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a03c]">
                  Founder · 創業者
                </p>
                <p className="mt-1 text-2xl font-bold text-[#1a1a2e]">Andrew Gibler</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  2009年、英語だけを持って日本へ来ました。日本語はゼロ。でも4年も経たないうちに、広島東洋カープの通訳になっていました。使ったのは教科書でも語学スクールでもなく、没入型の学習——物語の中に飛び込み、自然に言語を吸収する方法です。Skill Hunterのコースは、その方法をそのまま英語学習に応用したものです。
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Moved to Japan in 2009 with zero Japanese. No language school — just immersion. Within four years, interpreting for the Hiroshima Toyo Carp in NPB professional baseball. Skill Hunter is that same method, built for hotel staff learning English.
                </p>
              </div>
            </div>

            {/* David */}
            <div className="rounded-2xl border border-[#1a1a2e]/10 bg-white overflow-hidden shadow-sm flex flex-col">
              <div className="h-96 overflow-hidden">
                <img
                  src="/images/david_portrait.jpg"
                  alt="David — Lead Instructor"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a03c]">
                  Lead Instructor · 講師
                </p>
                <p className="mt-1 text-2xl font-bold text-[#1a1a2e]">David</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  大手英会話スクールで英会話の教師として勤務。一度帰国し<span className="font-semibold text-[#1a1a2e]">TESOL</span>（英語を母国語としない人に、英語を教える英語教授法）で修士を取得。日本国内の大学や企業での講師経験あり。スキルハンターではカメラマン兼主役として大活躍。
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Former English teacher at a major eikaiwa chain. Returned home to complete a Master&apos;s in TESOL. Has taught at universities and companies across Japan. At Skill Hunter, he&apos;s our cameraman and on-screen lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7.5: COST COMPARISON WIDGET ─── */}
      <ComparisonWidget />

      {/* ─── SECTION 8: PRICING + ONBOARDING ─── */}
      <section id="plans" className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a03c]">
              Flat Fee · Per Hotel
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl text-[#1a1a2e]">
              まずは<span className="text-[#c9a03c]">30日間</span>、
              <br className="sm:hidden" />
              無料でお試しください。
            </h2>
            <p className="mt-2 text-base text-muted-foreground italic">
              Try it free for 30 days. No card required.
            </p>
          </div>

          {/* Two pricing tiers */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#c9a03c]/40 bg-[#1a1a2e] p-8 text-white shadow-lg">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a03c]">
                Standard
              </p>
              <p className="text-xs text-white/60 mt-1">客室 250室以下</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-light text-[#c9a03c]">¥49,000</span>
                <span className="text-sm text-white/50">/月</span>
              </div>
              <p className="mt-2 text-xs text-white/50">
                (税別) · 全スタッフ込み
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#1a1a2e]/10 bg-white p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a03c]">
                Large
              </p>
              <p className="text-xs text-muted-foreground mt-1">客室 251室以上</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-light text-[#1a1a2e]">¥98,000</span>
                <span className="text-sm text-muted-foreground">/月</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                (税別) · 全スタッフ込み · 人数カウントなし
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground italic">
            (tax excl.) · All staff included · No seat tracking · No hidden charges
          </p>

          {/* 30-day trial guarantees */}
          <div className="mt-10 rounded-2xl border border-[#1a1a2e]/10 bg-white p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a03c] mb-4 text-center">
              30日間の無料トライアルに含まれるもの · What&apos;s Included
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "30日間無料 — クレジットカード不要",
                "全コースにアクセス可能",
                "ステーションカード 4枚付き",
                "無理な勧誘は一切ありません",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-[#c9a03c]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3-step onboarding */}
          <div className="mt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c9a03c] mb-5 text-center">
              導入までの流れ · 3-Step Onboarding
            </p>
            <div className="grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {[
                { n: "1", jp: "お問い合わせ", sub: "資料ダウンロード or Email" },
                null,
                { n: "2", jp: "無料トライアル開始", sub: "全コースすぐ利用可" },
                null,
                { n: "3", jp: "30日後に判断", sub: "効果を確認して継続", highlight: true },
              ].map((step, i) =>
                step === null ? (
                  <div key={i} className="flex items-center justify-center text-[#c9a03c] text-xl font-semibold">
                    →
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`rounded-xl p-5 text-center ${
                      step.highlight
                        ? "bg-[#c9a03c] text-[#1a1a2e]"
                        : "border border-[#1a1a2e]/10 bg-white text-[#1a1a2e]"
                    }`}
                  >
                    <p className={`text-2xl font-light leading-none ${step.highlight ? "text-[#1a1a2e]" : "text-[#c9a03c]"}`}>
                      {step.n}
                    </p>
                    <p className="mt-2 text-sm font-bold">{step.jp}</p>
                    <p className={`mt-1 text-xs ${step.highlight ? "text-[#1a1a2e]/70" : "text-muted-foreground"}`}>
                      {step.sub}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Primary CTA (free trial) + brochure secondary + corporate inquiry tertiary */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold text-base px-10 h-12">
                <a href="/signup">30日間無料体験を始める — Start 30-Day Free Trial</a>
              </Button>
              <ShiryouDialog label="資料ダウンロード" variant="outline" size="lg" />
            </div>
            <a
              href="https://skillhunter.jp/inquiry678052"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
            >
              直接お問い合わせ — Contact us directly
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: FOOTER CTA ─── */}
      <section className="bg-[#1a1a2e] py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            まずは30日間、無料で試してみてください。
          </h2>
          <p className="mt-2 text-lg text-white/60">
            Try it free for 30 days. No commitment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" asChild className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold text-base px-10 h-12">
              <a href="/signup">無料体験を始める — Start Your Free Trial</a>
            </Button>
            <ShiryouDialog label="資料ダウンロード" variant="outline-dark" size="lg" />
          </div>
          <p className="mt-4 text-sm text-white/40">
            クレジットカード不要。いつでもキャンセル可能。
          </p>
          <p className="text-xs text-white/30">
            No credit card required. Cancel any time.
          </p>
        </div>
      </section>

      {/* ─── CONTACT (subtle, below main CTA) ─── */}
      <section id="contact" className="border-t bg-[#fafaf8] py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            お問い合わせ / Contact
          </p>
          <h2 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl text-[#1a1a2e]">
            ご質問・ご相談はお気軽に。
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Have questions, or want to chat about a custom setup for your hotel? Get in touch.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Button size="default" asChild className="border border-[#1a1a2e]/20 bg-white text-[#1a1a2e] hover:bg-[#1a1a2e]/5 font-semibold text-sm h-10">
              <a href="https://skillhunter.jp/inquiry678052" target="_blank" rel="noopener noreferrer">
                お問い合わせフォーム — Contact Form
              </a>
            </Button>
            <Button size="default" asChild variant="ghost" className="text-[#1a1a2e] hover:bg-[#1a1a2e]/5 font-medium text-sm h-10">
              <a href="mailto:andrew@skillhunter.jp">
                andrew@skillhunter.jp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t bg-[#fafaf8] py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <img src="/images/logo_wh.png" alt="Skill Hunter" className="h-6 brightness-0" />
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                ホテルスタッフのための英語学習プラットフォーム
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#1a1a2e]">リンク</p>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a href="https://skillhunter.jp" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    skillhunter.jp
                  </a>
                </li>
                <li>
                  <a href="https://comedyjapanese.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                    comedyjapanese.com — 外国人スタッフの日本語学習
                  </a>
                </li>
                <li>
                  <a href="https://skillhunter.jp/inquiry678052" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    お問い合わせ / Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#1a1a2e]">法的情報</p>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a href="https://skillhunter.jp/trade-law" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    特定商取引法に基づく表記
                  </a>
                </li>
                <li>
                  <a href="https://skillhunter.jp/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    利用規約 / Terms
                  </a>
                </li>
                <li>
                  <a href="https://skillhunter.jp/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    プライバシーポリシー / Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex items-center justify-between">
            <p className="text-xs text-muted-foreground/40">
              &copy; {new Date().getFullYear()} Skill Hunter English
            </p>
            <a href="https://login.skillhunter.jp" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              会員ログイン / Member Login
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

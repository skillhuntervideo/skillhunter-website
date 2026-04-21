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
            <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">
              About
            </a>
            <a href="#plans" className="text-sm text-white/60 hover:text-white transition-colors">
              プラン
            </a>
            <a href="#compare" className="text-sm text-white/60 hover:text-white transition-colors">
              料金比較
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

            {/* Pricing line — inline, lightweight */}
            <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-white/80">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a03c]">
                1ホテル定額
              </span>
              <span className="text-2xl sm:text-3xl font-light text-[#c9a03c]">
                ¥49,000<span className="text-sm text-white/50">/月〜</span>
              </span>
              <span className="text-xs text-white/50">
                （税別）· 人数無制限 · 追加料金なし
              </span>
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

          {/* Before / After strip */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 bg-[#1a1a2e]/10" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a2e]/60">
                受講後の変化 · Before → After
              </p>
              <span className="h-px flex-1 bg-[#1a1a2e]/10" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Check-in · チェックイン",
                  before: "\"Hi.\"",
                  after: "\"Good afternoon. Welcome to our hotel.\"",
                },
                {
                  label: "Question · 質問対応",
                  before: "\"Wait.\"",
                  after: "\"Allow me a moment to find the best answer.\"",
                },
                {
                  label: "Busy period · 繁忙時",
                  before: "\"Sorry, busy.\"",
                  after: "\"I truly understand. Let me see what I can do.\"",
                },
              ].map((ba, i) => (
                <div key={i} className="rounded-xl border border-[#1a1a2e]/10 bg-[#fafaf8] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a1a2e]/50 mb-3">
                    {ba.label}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#1a1a2e]/40">Before</p>
                      <p className="text-sm italic text-[#1a1a2e]/50">{ba.before}</p>
                    </div>
                    <div className="text-[#c9a03c] text-center leading-none">↓</div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#c9a03c]">After</p>
                      <p className="text-sm font-medium text-[#1a1a2e]">{ba.after}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                src="/images/point_02.jpg"
                alt="Skill Hunter lesson — speaking time"
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

      {/* ─── SECTION 5: COURSE TRACKS ─── */}
      <section id="courses" className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl text-[#1a1a2e]">
              現場で使える英語を。スタッフが自信を持って対応できるようになる、全5コース。
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your staff will handle real situations with confidence — from check-in to check-out and everything in between.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            ].map((course, i) => (
              <Card key={i} className="group hover:shadow-md transition-shadow overflow-hidden">
                {course.image && (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.titleEn}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
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
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {course.jp}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {course.en}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES / EIKEN PATHWAY ─── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a03c]">
              スタッフが到達するレベル
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e] leading-tight">
              「成果が見えない」を、
              <br />
              英検で<span className="text-[#c9a03c]">可視化する。</span>
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Measurable English. Measurable ROI.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-foreground/75">
              Skill Hunterは修了後のスタッフが<span className="font-bold text-[#1a1a2e]">英検3級相当</span>のレベルに到達することを目標に設計されています。経営陣にも説明しやすい、客観的な成果指標。
            </p>
          </div>

          {/* Pathway */}
          <div className="mt-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1a2e]/50 mb-4">
              習得の流れ · Learning Pathway
            </p>
            <div className="grid items-stretch gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1.2fr_auto_1fr]">
              {[
                { jp: "ゼロ", en: "Zero / Beginner" },
                null,
                { jp: "A1 コース", en: "Foundation" },
                null,
                { jp: "英検 3級+", en: "Eiken Grade 3+", milestone: true },
                null,
                { jp: "ホスピタリティ中級", en: "Hospitality Intermediate" },
              ].map((step, i) =>
                step === null ? (
                  <div key={i} className="flex items-center justify-center text-[#c9a03c] text-xl font-semibold">
                    →
                  </div>
                ) : step.milestone ? (
                  <div
                    key={i}
                    className="rounded-xl bg-[#c9a03c] text-[#1a1a2e] text-center px-4 py-5 shadow-sm"
                  >
                    <p className="text-[9px] font-black uppercase tracking-[0.2em]">Milestone</p>
                    <p className="mt-1 text-lg font-black">{step.jp}</p>
                    <p className="text-[11px] italic">{step.en}</p>
                  </div>
                ) : (
                  <div
                    key={i}
                    className="rounded-xl border border-[#1a1a2e]/10 bg-[#fafaf8] text-center px-4 py-5"
                  >
                    <p className="text-sm font-bold text-[#1a1a2e]">{step.jp}</p>
                    <p className="text-[11px] italic text-[#1a1a2e]/50 mt-1">{step.en}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Two entry paths */}
          <div className="mt-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1a2e]/50 mb-4">
              2つの入り口 · Two Entry Paths
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#1a1a2e]/10 border-l-4 border-l-[#c9a03c] bg-white p-6">
                <p className="text-base font-bold text-[#1a1a2e]">英語初心者のスタッフ</p>
                <p className="text-xs italic text-muted-foreground">For staff with little English</p>
                <p className="mt-4 text-sm leading-loose text-foreground/75">
                  <span className="font-semibold text-[#1a1a2e]">A1 コース</span>から開始 →{" "}
                  <span className="font-semibold text-[#1a1a2e]">英検3級到達</span> →
                  ホスピタリティ中級へ。
                </p>
              </div>
              <div className="rounded-xl border border-[#1a1a2e]/10 border-l-4 border-l-[#c9a03c] bg-white p-6">
                <p className="text-base font-bold text-[#1a1a2e]">既に英語ができるスタッフ</p>
                <p className="text-xs italic text-muted-foreground">For experienced staff</p>
                <p className="mt-4 text-sm leading-loose text-foreground/75">
                  <span className="font-semibold text-[#1a1a2e]">A1 をスキップ</span>して、
                  <span className="font-semibold text-[#1a1a2e]">中級・上級コース</span>へ直接進学可能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATION CARD BONUS ─── */}
      <section className="border-y bg-[#fafaf8] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 items-start">
            {/* Left: copy */}
            <div>
              <Badge variant="secondary" className="mb-4 text-[#c9a03c] bg-[#c9a03c]/10">
                無料特典 / Free Bonus
              </Badge>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
                無料体験に含まれる、すぐ使えるステーションカード4枚。
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your free trial includes 4 printable station card cheat sheets. Real phrases your staff can use on their next shift.
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground/80">
                各ステーションカードは「こう言いがち → こう言うとプロ」の形式で、ホテルの各ポジションで使える英語フレーズをまとめた1枚もの。印刷してカウンターに置くだけで、すぐに使えます。
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Each card is a one-page quick reference in &ldquo;Instead of / Say&rdquo; format, covering polished English phrases for a specific role. Print it, keep it at the station. Staff use it the same day.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
                <Button size="lg" asChild className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold text-base px-8 h-12">
                  <a href="/signup">30日間無料体験を始める — Start Free Trial</a>
                </Button>
                <ShiryouDialog label="資料ダウンロード" variant="outline" size="lg" />
              </div>
            </div>

            {/* Right: 2x2 card grid with sample phrases */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Monitor,
                  title: "フロントデスク",
                  titleEn: "Front Desk",
                  instead: "\"I don't know.\"",
                  say: "\"Allow me to find out for you, sir.\"",
                },
                {
                  icon: ConciergeBell,
                  title: "コンシェルジュ",
                  titleEn: "Concierge",
                  instead: "\"It's over there.\"",
                  say: "\"It is just a five-minute walk. May I show you on the map?\"",
                },
                {
                  icon: UtensilsCrossed,
                  title: "レストラン",
                  titleEn: "Restaurant",
                  instead: "\"Here's your food.\"",
                  say: "\"Our chef has prepared the grilled miso cod for you this evening.\"",
                },
                {
                  icon: UtensilsCrossed,
                  title: "アレルギー対応",
                  titleEn: "Allergies & Dietary",
                  instead: "\"Any allergies?\"",
                  say: "\"May I ask if you have any food allergies or dietary requirements, sir?\"",
                },
              ].map((card, i) => (
                <Card key={i} className="border-l-2 border-l-[#c9a03c] bg-white">
                  <CardContent className="pt-5 pb-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-[#1a1a2e] text-[#c9a03c]">
                        <card.icon className="size-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#1a1a2e] leading-tight">{card.title}</p>
                        <p className="text-[11px] text-muted-foreground">{card.titleEn}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Instead of:</p>
                        <p className="text-xs italic text-foreground/50 leading-relaxed">{card.instead}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-[#c9a03c] uppercase tracking-wide">Say:</p>
                        <p className="text-xs font-medium text-foreground/90 leading-relaxed">{card.say}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: SOCIAL PROOF ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            ホテルスタッフの声
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Voices from the people using it.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Testimonial 1 */}
            <Card className="bg-white flex flex-col">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「難しくて途中でやめてしまうことが多かったけど、このコースは続けられました。気づいたら英語が出てくるようになっていて、自分でもびっくりしています。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;Most English courses I&apos;ve tried, I quit halfway through. This one I actually finished. Then started again. I&apos;m genuinely surprised at how naturally the words come out now.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 border-t pt-4">
                    <img
                      src="/images/airi_avatar.jpg"
                      alt="Airi"
                      className="size-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">Airi</p>
                      <p className="text-xs text-muted-foreground">20代 / Individual learner</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white flex flex-col">
              <CardContent className="pt-6 flex flex-col flex-1">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「教科書っぽくなくて、自然に英語が頭に入ってくる感じがします。仕事でも少しずつ英語を使えるようになってきました。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;It doesn&apos;t feel like studying. The English just goes in. I&apos;ve started using it at work — small things, but real things. That hasn&apos;t happened with anything else I&apos;ve tried.&rdquo;
                </p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2 border-t pt-4">
                    <img
                      src="/images/naoki_avatar.jpg"
                      alt="Naoki"
                      className="size-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">Naoki</p>
                      <p className="text-xs text-muted-foreground">30代 / Individual learner</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 — Chihiro from old site */}
            <Card className="bg-white sm:col-span-2">
              <CardContent className="pt-6">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「クスッと笑える動画を見ながら楽しく英語力を伸ばすことができる一押しのコンテンツです。分からない語句や言い回しの質疑応答も丁寧で、サポート体制もバッチリ！」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;A top-recommended platform where you can enjoy improving your English while watching videos that make you chuckle. The Q&amp;A on unclear phrases is thorough, and the support system is great!&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                  <img
                    src="/images/chihiro_avatar.jpg"
                    alt="Chihiro F."
                    className="size-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Chihiro F.</p>
                    <p className="text-xs text-muted-foreground">ホテル・スタッフ / Hotel Staff</p>
                  </div>
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

      {/* ─── SECTION 7: ANDREW'S STORY ─── */}
      <section id="about" className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 sm:grid-cols-[280px_1fr] items-start">
            {/* Andrew photo */}
            <div className="mx-auto sm:mx-0">
              <img
                src="/images/Andrew%20Conrad.JPG"
                alt="Andrew Gibler — Skill Hunter founder"
                className="w-64 h-auto rounded-2xl object-cover shadow-lg"
              />
            </div>

            <div>
              <Badge variant="secondary" className="mb-4 text-[#c9a03c] bg-[#c9a03c]/10">
                About Andrew
              </Badge>
              <p className="text-base leading-relaxed text-foreground/90">
                2009年、英語だけを持って日本へ来ました。日本語はゼロ。でも4年も経たないうちに、広島東洋カープの通訳になっていました。使ったのは教科書でも語学スクールでもなく、没入型の学習——物語の中に飛び込み、自然に言語を吸収する方法です。Skill Hunterのコースは、その方法をそのまま英語学習に応用したものです。
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                I moved to Japan in 2009 with zero Japanese. No language school — just immersion. Within four years, I was interpreting for the Hiroshima Toyo Carp in NPB professional baseball. Skill Hunter is that same method, built for hotel staff learning English. I know it works because I lived it in the other direction.
              </p>
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
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#1a1a2e]/10 bg-white p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a03c]">
                Standard
              </p>
              <p className="text-xs text-muted-foreground mt-1">客室 250室以下</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-light text-[#1a1a2e]">¥49,000</span>
                <span className="text-sm text-muted-foreground">/月</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                (税別) · 全スタッフ込み
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#c9a03c]/40 bg-[#1a1a2e] p-8 text-white shadow-lg">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c9a03c]">
                Large
              </p>
              <p className="text-xs text-white/60 mt-1">客室 251室以上</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-light text-[#c9a03c]">¥98,000</span>
                <span className="text-sm text-white/50">/月</span>
              </div>
              <p className="mt-2 text-xs text-white/50">
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

      {/* ─── COMPARING PROVIDERS? ─── */}
      <section className="border-t bg-[#fafaf8] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            他社と比較中ですか？
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            Comparing providers?
          </p>
          <h2 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl text-[#1a1a2e]">
            Skill Hunterと他の英語研修を比較
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            See how Skill Hunter compares to Berlitz, ECC, GABA, and other options.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild className="border border-[#1a1a2e]/20 bg-white text-[#1a1a2e] hover:bg-[#1a1a2e]/5 font-semibold text-sm px-6 h-11">
              <a href="/compare">英語研修比較ガイド — Training Comparison Guide</a>
            </Button>
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
                  <a href="/compare" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    英語研修比較ガイド / Training Comparison
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

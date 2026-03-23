import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Phone,
  UtensilsCrossed,
  ConciergeBell,
  Mail,
  CheckCircle,
  Building2,
  User,
  Quote,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative overflow-hidden bg-[#1a1a2e] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-90" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
              ホテルスタッフのための、
              <br />
              楽しくて身につく英語。
            </h1>
            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              English that actually sticks. Built for hotel staff. Designed to be fun.
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/80 max-w-2xl">
              教科書ではなく、ドラマのように学ぶ。Netflixで映画を観るように英語が身につく、ホテル特化型のオンラインコースです。
            </p>
            <p className="mt-2 text-sm text-white/50">
              Not a textbook. Not a classroom. Staff learn English the way you absorb a Netflix series — by living inside the story. Every course is built around real hotel situations, so the language transfers to real shifts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold text-base px-8 h-12">
                7日間無料体験 — 7-Day Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8 h-12">
                ホテル法人プランを見る — Corporate Plan
              </Button>
            </div>
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

          {/* Logo placeholders */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-40">
            {["Hilton", "Marriott", "Aman", "Conrad", "Prince"].map((name) => (
              <div
                key={name}
                className="flex h-10 items-center px-4 text-lg font-semibold tracking-wide text-gray-400"
              >
                {name}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            数百名のホテルスタッフが受講中
          </p>
          <p className="text-xs text-muted-foreground/70">
            Hundreds of hotel staff already learning.
          </p>
        </div>
      </section>

      {/* ─── SECTION 3: THE PROBLEM ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
              一般的なホテル英語研修が、うまくいかない理由。
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Why standard hotel English training doesn&apos;t work.
            </p>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              多くのホテルが英語研修に投資していますが、現場のスタッフが本当に使える英語を身につけているケースは、まだ少数です。その理由は、コンテンツにあります。
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Many hotels invest in English training. But most staff still freeze up with a foreign guest at the front desk. The content is the problem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                jp: "退屈で、途中でやめてしまう。面白くないコンテンツは、続けることができません。",
                en: "Boring content doesn't get finished. If staff aren't engaged, they won't keep going.",
              },
              {
                jp: "ホテルの現場と関係ない英語ばかり。ビジネス英語の教材は、チェックインや電話対応には使えません。",
                en: "Generic English doesn't transfer to the job. 'Business English' courses teach boardrooms, not breakfast service.",
              },
              {
                jp: "管理が大変で、コストも高い。集合研修は日程調整が難しく、個人の進捗管理もほぼ不可能です。",
                en: "Hard to manage, expensive to run. Classroom training is a scheduling nightmare at scale.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-red-100 bg-red-50/30">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {item.jp}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {item.en}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE METHOD ─── */}
      <section className="bg-[#1a1a2e] py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
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

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
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
      <section className="py-16 sm:py-24">
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
                title: "フロントデスク",
                titleEn: "Front Desk",
                jp: "チェックイン・チェックアウトを英語でスムーズに対応",
                en: "Staff handle check-in, check-out, and guest requests in English — without hesitation.",
              },
              {
                icon: UtensilsCrossed,
                title: "レストラン",
                titleEn: "Restaurant",
                jp: "英語メニューの説明、注文対応、アレルギーへの対応を自信を持って",
                en: "From menu explanations to allergy requests, staff communicate clearly and warmly.",
              },
              {
                icon: Phone,
                title: "電話対応",
                titleEn: "Phone Calls",
                jp: "予約・問い合わせ・クレームを電話で英語対応",
                en: "Staff take reservations, handle enquiries, and manage complaints — calmly and clearly.",
              },
              {
                icon: ConciergeBell,
                title: "コンシェルジュ",
                titleEn: "Concierge",
                jp: "観光案内・交通情報・おすすめスポットを英語で案内",
                en: "Staff recommend restaurants, explain directions, and guide guests through local experiences.",
              },
              {
                icon: Mail,
                title: "ビジネスメール",
                titleEn: "Business Emails",
                jp: "予約確認・クレーム対応・提案を英語メールで対応",
                en: "Staff write professional English emails — reservations, complaints, follow-ups.",
              },
            ].map((course, i) => (
              <Card key={i} className="group hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
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
            <Card className="bg-white">
              <CardContent className="pt-6">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「難しくて途中でやめてしまうことが多かったけど、このコースは続けられました。気づいたら英語が出てくるようになっていて、自分でもびっくりしています。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;Most English courses I&apos;ve tried, I quit halfway through. This one I actually finished. Then started again. I&apos;m genuinely surprised at how naturally the words come out now.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#1a1a2e] text-xs text-white font-semibold">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-medium">Airi</p>
                    <p className="text-xs text-muted-foreground">20代 / Individual learner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white">
              <CardContent className="pt-6">
                <Quote className="size-6 text-[#c9a03c] mb-3" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  「教科書っぽくなくて、自然に英語が頭に入ってくる感じがします。仕事でも少しずつ英語を使えるようになってきました。」
                </p>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed italic">
                  &ldquo;It doesn&apos;t feel like studying. The English just goes in. I&apos;ve started using it at work — small things, but real things. That hasn&apos;t happened with anything else I&apos;ve tried.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                  <div className="flex size-8 items-center justify-center rounded-full bg-[#1a1a2e] text-xs text-white font-semibold">
                    N
                  </div>
                  <div>
                    <p className="text-sm font-medium">Naoki</p>
                    <p className="text-xs text-muted-foreground">30代 / Individual learner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* HR Manager placeholder */}
          <div className="mt-6 rounded-lg border border-dashed border-muted-foreground/20 bg-white/50 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              ホテルHRマネージャーの声 — 近日公開
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Hotel HR Manager testimonial — coming soon
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: ANDREW'S STORY ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 sm:grid-cols-[280px_1fr] items-start">
            {/* Photo placeholder */}
            <div className="mx-auto sm:mx-0 flex size-64 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
              <div className="text-center">
                <User className="mx-auto size-16 opacity-40" />
                <p className="mt-2 text-xs opacity-40">Photo</p>
              </div>
            </div>

            <div>
              <Badge variant="secondary" className="mb-4 text-[#c9a03c] bg-[#c9a03c]/10">
                About the founder
              </Badge>
              <p className="text-base leading-relaxed text-foreground/90">
                2009年、英語だけを持って日本へ来ました。日本語はゼロ。でも4年も経たないうちに、広島東洋カープの通訳になっていました。使ったのは教科書でも語学スクールでもなく、没入型の学習——物語の中に飛び込み、自然に言語を吸収する方法です。Skill Hunterのコースは、その方法をそのまま英語学習に応用したものです。
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                I moved to Japan in 2009 with zero Japanese. No textbooks, no language school — just immersion. Within four years, I was interpreting for the Hiroshima Toyo Carp in NPB professional baseball. Skill Hunter is that same method, built for hotel staff learning English. I know it works because I lived it in the other direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: TWO-PATH CTA ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            どちらのプランをお探しですか？
          </h2>
          <p className="mt-2 text-center text-base text-muted-foreground">
            Which plan are you looking for?
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* Card 1: Corporate */}
            <Card className="relative overflow-hidden border-2 border-[#c9a03c]/30 bg-white">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a03c]" />
              <CardContent className="pt-8 pb-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1a1a2e] text-[#c9a03c] mb-4">
                  <Building2 className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e]">ホテルの研修として導入したい</h3>
                <p className="text-sm text-muted-foreground mt-1">I want to train my hotel team.</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  年間契約でスタッフ全員を対象に。月ごとに受講者数を柔軟に調整できます。多くのホテルが導入済み。
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Annual contract, flexible monthly seat adjustments, tiered pricing by team size. Trusted by hotels across Japan.
                </p>
                <Button className="mt-6 w-full bg-[#1a1a2e] text-white hover:bg-[#1a1a2e]/90 h-11">
                  法人プランを見る — View Corporate Plan
                </Button>
              </CardContent>
            </Card>

            {/* Card 2: Individual */}
            <Card className="bg-white">
              <CardContent className="pt-8 pb-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1a1a2e] text-[#c9a03c] mb-4">
                  <User className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e]">自分で英語を学びたい</h3>
                <p className="text-sm text-muted-foreground mt-1">I want to improve my own English.</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  自分のペースで、どこでも学習可能。月額サブスクリプションで、今すぐ始められます。
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Self-paced, fully online, available anywhere. Monthly subscription. Start today.
                </p>
                <Button variant="outline" className="mt-6 w-full h-11">
                  個人プランを見る — View Individual Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: FOOTER CTA ─── */}
      <section className="bg-[#1a1a2e] py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            まずは7日間、無料で試してみてください。
          </h2>
          <p className="mt-2 text-lg text-white/60">
            Try it free for 7 days. No commitment.
          </p>
          <Button size="lg" className="mt-8 bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold text-base px-10 h-12">
            無料体験を始める — Start Your Free Trial
          </Button>
          <p className="mt-4 text-sm text-white/40">
            クレジットカード不要。いつでもキャンセル可能。
          </p>
          <p className="text-xs text-white/30">
            No credit card required. Cancel any time.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm text-muted-foreground">
            外国人スタッフの日本語学習はこちら →{" "}
            <a href="https://comedyjapanese.com" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
              comedyjapanese.com
            </a>
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            For foreign staff learning Japanese →{" "}
            <a href="https://comedyjapanese.com" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
              comedyjapanese.com
            </a>
          </p>
          <p className="mt-6 text-xs text-muted-foreground/40">
            &copy; {new Date().getFullYear()} Skill Hunter English
          </p>
        </div>
      </footer>
    </main>
  );
}

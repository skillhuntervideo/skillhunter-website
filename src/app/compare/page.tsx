import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Menu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Hotel English Training Programs in Japan (2026) | Skill Hunter",
  description:
    "Comparing hotel staff English training options in Japan — Berlitz, ECC, GABA, apps, in-house, and Skill Hunter. Find the right fit for your property.",
};

const providers = [
  {
    name: "Skill Hunter English",
    tag: "Recommended for Hotels",
    tagColor: "bg-green-600 text-white",
    bestFor: "Hotels that want staff to actually finish the course",
    description:
      "Story-based, hospitality-specific English courses designed for hotel staff. Five courses covering front desk, F&B, concierge, housekeeping, and phone skills. Self-paced with shift-friendly scheduling. 14-day free trial.",
    strengths: [
      "Built specifically for hotel scenarios",
      "Story-based format drives 80%+ completion rates",
      "Self-paced — works around shift schedules",
      "Scalable pricing for teams of any size",
      "14-day free trial, no credit card required",
    ],
    weaknesses: [
      "No live instructor sessions (by design — prioritizes scalability)",
      "Newer brand compared to legacy providers",
    ],
  },
  {
    name: "Berlitz Japan",
    tag: "Established Brand",
    tagColor: "bg-blue-600 text-white",
    bestFor: "Companies with large L&D budgets and flexible schedules",
    description:
      "Instructor-led, general business English with decades of brand recognition. Strong methodology but not built for hospitality. Premium pricing reflects the brand, not the specialization.",
    strengths: [
      "Well-known brand — easy internal approval",
      "Live instructor-led sessions",
      "Multiple locations across Japan",
    ],
    weaknesses: [
      "No hotel-specific content or scenarios",
      "Fixed class schedules conflict with shift work",
      "Premium pricing (often 3-5x alternatives)",
      "Low completion rates for busy staff",
    ],
  },
  {
    name: "ECC Corporate",
    tag: "Japanese-HQ Provider",
    tagColor: "bg-blue-600 text-white",
    bestFor: "Companies that prefer a domestic provider with group lessons",
    description:
      "Japan-based language school offering group corporate lessons. Familiar to Japanese HR departments. Group format keeps costs lower but limits individual progress.",
    strengths: [
      "Familiar brand for Japanese HR teams",
      "Group lessons keep per-person costs down",
      "Japanese-language support and contracts",
    ],
    weaknesses: [
      "Generic business English curriculum",
      "Group pace — advanced staff wait, beginners struggle",
      "Scheduled classes don't fit hotel shift patterns",
    ],
  },
  {
    name: "GABA",
    tag: "Best for Individuals",
    tagColor: "bg-purple-600 text-white",
    bestFor: "Individual learners with consistent schedules and budgets",
    description:
      "One-on-one lessons with native speakers. High-quality instruction for motivated individuals, but the model doesn't scale for training entire hotel teams.",
    strengths: [
      "True 1-on-1 instruction",
      "Flexible lesson booking",
      "High-quality instructors",
    ],
    weaknesses: [
      "Expensive per person — doesn't scale for teams",
      "No hospitality-specific curriculum",
      "Individual focus — no team progress tracking",
      "Requires commute to a GABA center",
    ],
  },
  {
    name: "Apps (Duolingo, etc.)",
    tag: "Free",
    tagColor: "bg-amber-500 text-white",
    bestFor: "Casual learners with no specific professional goals",
    description:
      "Free or freemium language apps. Great for general vocabulary but lack any hospitality context. Gamification drives opens but not professional-level outcomes.",
    strengths: [
      "Free or very low cost",
      "Available on any device",
      "Gamified — easy to start",
    ],
    weaknesses: [
      "Zero hospitality or hotel content",
      "No professional skill development",
      "No progress tracking for managers",
      "Completion rates below 5% for professional goals",
    ],
  },
  {
    name: "In-House Training",
    tag: "DIY",
    tagColor: "bg-gray-500 text-white",
    bestFor: "Hotels with a dedicated English-speaking training manager",
    description:
      "Building your own training program internally. Full control but requires a capable trainer, curriculum development time, and ongoing maintenance. Single point of failure if the trainer leaves.",
    strengths: [
      "Full control over content and schedule",
      "Can be tailored to your specific property",
      "No per-seat licensing costs",
    ],
    weaknesses: [
      "Single point of failure — trainer leaves, program dies",
      "Curriculum development is a full-time job",
      "No benchmarking against industry standards",
      "Quality depends entirely on one person",
    ],
  },
];

const comparisonRows = [
  {
    label: "Hotel-specific content",
    values: ["yes", "no", "no", "no", "no", "maybe"],
  },
  {
    label: "Self-paced",
    values: ["yes", "no", "no", "no", "yes", "maybe"],
  },
  {
    label: "Shift-friendly",
    values: ["yes", "no", "no", "no", "yes", "maybe"],
  },
  {
    label: "Scalable pricing",
    values: ["yes", "no", "maybe", "no", "yes", "yes"],
  },
  {
    label: "Progress tracking",
    values: ["yes", "maybe", "maybe", "no", "no", "maybe"],
  },
  {
    label: "Completion rates",
    values: ["yes", "no", "no", "no", "no", "maybe"],
  },
  {
    label: "Free trial",
    values: ["yes", "no", "no", "no", "yes", "no"],
  },
];

const providerShortNames = [
  "Skill Hunter",
  "Berlitz",
  "ECC",
  "GABA",
  "Apps",
  "In-House",
];

function StatusIcon({ status }: { status: string }) {
  if (status === "yes")
    return <CheckCircle className="size-5 text-green-600 mx-auto" />;
  if (status === "no")
    return <XCircle className="size-5 text-red-400 mx-auto" />;
  return <AlertCircle className="size-5 text-amber-500 mx-auto" />;
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="/">
            <img
              src="/images/logo_wh.png"
              alt="Skill Hunter"
              className="h-8"
            />
          </a>
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="/#courses"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              コース
            </a>
            <a
              href="/#about"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/#plans"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              プラン
            </a>
            <a
              href="https://login.skillhunter.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              ログイン
            </a>
            <Button
              size="sm"
              asChild
              className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold"
            >
              <a
                href="https://skillhunter.jp/a1checkout-4-trial"
                target="_blank"
                rel="noopener noreferrer"
              >
                無料体験
              </a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden text-white"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#1a1a2e] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-90" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-[#c9a03c]/20 text-[#c9a03c] border-[#c9a03c]/30">
                2026 Comparison
              </Badge>
              <Badge className="bg-white/10 text-white/80 border-white/20">
                6 Options Reviewed
              </Badge>
              <Badge className="bg-white/10 text-white/80 border-white/20">
                Hospitality-Specific
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
              Best Hotel English Training Programs in Japan
            </h1>
            <p className="mt-4 text-lg text-white/70 sm:text-xl max-w-2xl">
              Comparing hotel staff English training options — Berlitz, ECC,
              GABA, apps, in-house, and Skill Hunter. Find the right fit for
              your property.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ─── */}
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
              { type: "text" as const, text: "JANU", alt: "Janu" },
              {
                src: "/images/logos/waldorf_mark.svg",
                alt: "Waldorf Astoria",
                h: "h-10",
              },
              {
                src: "/images/logos/marriott.svg",
                alt: "Marriott",
                h: "h-5",
              },
              {
                src: "/images/logos/prince.svg",
                alt: "Prince Hotels",
                h: "h-5",
              },
            ].map((logo) =>
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
            )}
          </div>
        </div>
      </section>

      {/* ─── WHY HOTEL ENGLISH IS DIFFERENT ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            Why Hotel English Training Is Different
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 max-w-3xl">
            Generic business English doesn&apos;t prepare staff for the
            real-time, high-stakes interactions that happen at a hotel front
            desk. Hotel English requires situational fluency — handling
            complaints, giving directions, explaining services, and making
            guests feel welcome — all under time pressure and often across
            cultural boundaries. The training solution you choose needs to
            understand this context.
          </p>
        </div>
      </section>

      {/* ─── WHAT TO LOOK FOR ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            What to Look For
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Five criteria that separate effective hotel English training from
            generic options.
          </p>
          <div className="mt-10 grid gap-4">
            {[
              {
                title: "Hospitality-specific content",
                desc: "Does the program teach language for real hotel situations — check-in, complaints, room service, concierge requests — or just generic business phrases?",
              },
              {
                title: "Shift-friendly scheduling",
                desc: "Hotel staff work rotating shifts. Training that requires fixed class times will see attendance drop within weeks.",
              },
              {
                title: "Scalable pricing",
                desc: "Can you enroll 5 staff or 50 without the budget exploding? Per-seat costs matter when you're training an entire team.",
              },
              {
                title: "Measurable completion rates",
                desc: "If staff don't finish the program, the investment is wasted. Look for providers that can show completion data, not just enrollment numbers.",
              },
              {
                title: "Progress tracking for managers",
                desc: "HR and training managers need visibility into who's learning, who's stuck, and who's finished — without chasing individual staff members.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-l-4 border-l-green-600 bg-white"
              >
                <CardContent className="py-4">
                  <h3 className="font-semibold text-[#1a1a2e]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE OPTIONS ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            The Options
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Six approaches to hotel English training, compared honestly.
          </p>
          <div className="mt-10 grid gap-6">
            {providers.map((provider) => (
              <Card key={provider.name} className="bg-white overflow-hidden">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge className={provider.tagColor}>
                      {provider.tag}
                    </Badge>
                    <h3 className="text-lg font-bold text-[#1a1a2e]">
                      {provider.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[#c9a03c]">
                    Best for: {provider.bestFor}
                  </p>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                    {provider.description}
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-2">
                        Strengths
                      </p>
                      <ul className="space-y-1">
                        {provider.strengths.map((s) => (
                          <li
                            key={s}
                            className="flex items-start gap-2 text-sm text-green-700"
                          >
                            <CheckCircle className="size-4 mt-0.5 shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Weaknesses
                      </p>
                      <ul className="space-y-1">
                        {provider.weaknesses.map((w) => (
                          <li
                            key={w}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <XCircle className="size-4 mt-0.5 shrink-0" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            Side-by-Side Comparison
          </h2>
          <p className="mt-2 text-base text-muted-foreground mb-8">
            How each option stacks up on the criteria that matter for hotels.
          </p>
          <Card className="bg-white overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#1a1a2e]">
                  <TableHead className="text-white/80 font-semibold min-w-[160px]">
                    Criteria
                  </TableHead>
                  {providerShortNames.map((name) => (
                    <TableHead
                      key={name}
                      className="text-white/80 font-semibold text-center"
                    >
                      {name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonRows.map((row) => (
                  <TableRow key={row.label}>
                    <TableCell className="font-medium text-[#1a1a2e]">
                      {row.label}
                    </TableCell>
                    {row.values.map((val, i) => (
                      <TableCell key={i} className="text-center">
                        <StatusIcon status={val} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* ─── WHICH OPTION IS RIGHT ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            Which Option Is Right for Your Hotel?
          </h2>

          {/* Skill Hunter verdict box */}
          <Card className="mt-8 border-2 border-[#c9a03c]/30 bg-[#c9a03c]/5 overflow-hidden">
            <div className="h-1 bg-[#c9a03c]" />
            <CardContent className="pt-6 pb-6">
              <Badge className="bg-green-600 text-white mb-3">
                Our Recommendation
              </Badge>
              <h3 className="text-lg font-bold text-[#1a1a2e]">
                Skill Hunter English
              </h3>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                If you need a training program that hotel staff will actually
                complete, that works around shift schedules, and that teaches
                language they&apos;ll use on their next shift — Skill Hunter is
                the clear choice. It&apos;s the only option built from the
                ground up for hospitality. The 14-day free trial means you can
                test it with your team before committing.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold"
                >
                  <a
                    href="https://skillhunter.jp/a1checkout-4-trial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choose Skill Hunter — 14-Day Free Trial
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white"
                >
                  <a href="/#contact">Corporate Inquiry</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alternative verdicts */}
          <div className="mt-10 space-y-6">
            <div>
              <h3 className="font-semibold text-[#1a1a2e]">
                Choose Berlitz if...
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                your company requires a recognized brand name for internal
                approval and has the budget for premium instructor-led sessions.
                Be aware that the content won&apos;t be hotel-specific.{" "}
                <a
                  href="/compare/berlitz"
                  className="text-[#c9a03c] hover:underline font-medium"
                >
                  See our full Berlitz comparison &rarr;
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a1a2e]">
                Choose ECC if...
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                you prefer a Japanese-headquartered provider and group lessons
                work for your team&apos;s schedule. Good for general English
                improvement, less effective for hospitality-specific outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a1a2e]">
                Choose GABA if...
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                you&apos;re sponsoring individual high-performers (e.g., a
                front-desk lead or guest relations manager) rather than training
                a whole team. Excellent 1-on-1 instruction, but doesn&apos;t
                scale.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a1a2e]">
                Use an app if...
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                you want to supplement formal training with casual practice.
                Apps are great as a complement, but shouldn&apos;t be your
                primary training strategy for professional hospitality English.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1a1a2e]">
                Build in-house if...
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                you have a dedicated, long-term English-speaking training
                manager and are willing to invest in curriculum development.
                Just have a backup plan for when that person moves on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1a1a2e] py-16 sm:py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Ready to See the Difference?
          </h2>
          <p className="mt-2 text-lg text-white/60">14日間無料体験</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold text-base px-10 h-12"
            >
              <a
                href="https://skillhunter.jp/a1checkout-4-trial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Free Trial
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="border border-white/30 bg-transparent text-white hover:bg-white/10 text-base px-8 h-12"
            >
              <a href="/#contact">Corporate Inquiry</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/40">
            No credit card required. Cancel any time.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t bg-[#fafaf8] py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <img
                src="/images/logo_wh.png"
                alt="Skill Hunter"
                className="h-6 brightness-0"
              />
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                ホテルスタッフのための英語学習プラットフォーム
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#1a1a2e]">リンク</p>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a
                    href="https://skillhunter.jp"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    skillhunter.jp
                  </a>
                </li>
                <li>
                  <a
                    href="https://comedyjapanese.com"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    comedyjapanese.com — 外国人スタッフの日本語学習
                  </a>
                </li>
                <li>
                  <a
                    href="https://skillhunter.jp/inquiry678052"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    お問い合わせ / Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/compare"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    英語研修比較ガイド / Training Comparison Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sm text-[#1a1a2e]">法的情報</p>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a
                    href="https://skillhunter.jp/trade-law"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    特定商取引法に基づく表記
                  </a>
                </li>
                <li>
                  <a
                    href="https://skillhunter.jp/terms"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    利用規約 / Terms
                  </a>
                </li>
                <li>
                  <a
                    href="https://skillhunter.jp/privacy-policy"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
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
            <a
              href="https://login.skillhunter.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              会員ログイン / Member Login
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

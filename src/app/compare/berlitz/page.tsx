import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Globe,
  BookOpen,
  Menu,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Skill Hunter vs Berlitz: Hotel English Training Compared (2026) | Skill Hunter",
  description:
    "Detailed comparison of Skill Hunter and Berlitz for hotel staff English training in Japan. Method, pricing, scheduling, content — which fits your property?",
};

export default function BerlitzComparisonPage() {
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
          <Button variant="ghost" size="icon" className="sm:hidden text-white">
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      <section className="relative overflow-hidden bg-[#1a1a2e] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-90" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-white/10 text-white/80 border-white/20">
                Head-to-Head Comparison
              </Badge>
              <Badge className="bg-white/10 text-white/80 border-white/20">
                2026 Updated
              </Badge>
              <Badge className="bg-[#c9a03c]/20 text-[#c9a03c] border-[#c9a03c]/30">
                14-Day Free Trial
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
              Skill Hunter vs Berlitz
            </h1>
            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              Berlitz teaches business English. Your hotel staff need
              hospitality English. Here&apos;s how they compare.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: TRUSTED BY ─── */}
      <section className="border-b bg-[#fafaf8] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#c9a03c]">
            Trusted by global hotel brands
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            {[
              { src: "/images/logos/hilton.svg", alt: "Hilton", h: "h-5" },
              { src: "/images/logos/conrad.svg", alt: "Conrad", h: "h-4" },
              {
                src: "/images/logos/waldorf_mark.svg",
                alt: "Waldorf Astoria",
                h: "h-10",
              },
              { src: "/images/logos/marriott.svg", alt: "Marriott", h: "h-5" },
              {
                src: "/images/logos/prince.svg",
                alt: "Prince Hotels",
                h: "h-5",
              },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.h} w-auto opacity-40 grayscale`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON NAV ─── */}
      <section className="border-b bg-white sticky top-[49px] z-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 -mx-1">
            <a href="/compare" className="shrink-0 rounded-full border border-[#1a1a2e]/15 px-4 py-2 text-xs font-medium text-[#1a1a2e] hover:bg-[#1a1a2e]/5 transition-colors">All Providers</a>
            <a href="/compare/berlitz" className="shrink-0 rounded-full bg-[#1a1a2e] px-4 py-2 text-xs font-semibold text-white">vs Berlitz</a>
            <a href="/compare/ecc" className="shrink-0 rounded-full border border-[#1a1a2e]/15 px-4 py-2 text-xs font-medium text-[#1a1a2e] hover:bg-[#1a1a2e]/5 transition-colors">vs ECC</a>
            <a href="/compare/gaba" className="shrink-0 rounded-full border border-[#1a1a2e]/15 px-4 py-2 text-xs font-medium text-[#1a1a2e] hover:bg-[#1a1a2e]/5 transition-colors">vs GABA</a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: TL;DR VERDICT ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Card className="border-[#16213e]/20 bg-[#16213e]/5">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-[#1a1a2e]">
                TL;DR: The Quick Verdict
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                <strong>Berlitz</strong> is an established, global brand with
                decades of experience teaching general and business English
                through live instruction. It&apos;s a safe, recognisable choice.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                <strong>Skill Hunter</strong> is purpose-built for hotel staff
                in Japan. Every lesson, every scenario, every phrase comes from
                real hotel operations. If your goal is to improve English
                specifically for hospitality, the content match is night and day.
              </p>
              <p className="mt-4 text-sm font-medium text-[#1a1a2e]">
                The question isn&apos;t &ldquo;which is better at English
                training?&rdquo; It&apos;s &ldquo;which is better at{" "}
                <em>hotel</em> English training?&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ─── SECTION 4: AT A GLANCE TABLE ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e] text-center">
            At a Glance
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Side-by-side on the things that matter for hotel training.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1a1a2e]/10">
                  <th className="py-3 pr-4 text-left font-semibold text-[#1a1a2e] w-1/4">
                    &nbsp;
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-[#c9a03c] w-[37.5%]">
                    Skill Hunter
                  </th>
                  <th className="py-3 pl-4 text-left font-semibold text-muted-foreground w-[37.5%]">
                    Berlitz
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Built for",
                    sh: "Hotel staff in Japan",
                    b: "General / business professionals",
                    shWin: true,
                  },
                  {
                    label: "Method",
                    sh: "Story-based immersion + AI tutor",
                    b: "Berlitz Method (live instructor, target language only)",
                    shWin: false,
                  },
                  {
                    label: "Content",
                    sh: "100% hospitality scenarios",
                    b: "General business English",
                    shWin: true,
                  },
                  {
                    label: "Delivery",
                    sh: "Self-paced online (phone/PC)",
                    b: "Live classes (online or in-person)",
                    shWin: false,
                  },
                  {
                    label: "Scheduling",
                    sh: "Anytime, any shift",
                    b: "Scheduled class times",
                    shWin: true,
                  },
                  {
                    label: "Levels",
                    sh: "Beginner to intermediate (A1-B1)",
                    b: "All levels (A1-C2)",
                    shWin: false,
                  },
                  {
                    label: "Pricing",
                    sh: "Per-team flat rate",
                    b: "Per-student, per-lesson",
                    shWin: true,
                  },
                  {
                    label: "Free trial",
                    sh: "14 days, full access",
                    b: "Single demo lesson",
                    shWin: true,
                  },
                  {
                    label: "HR dashboard",
                    sh: "Yes — progress tracking per employee",
                    b: "Varies by contract",
                    shWin: true,
                  },
                  {
                    label: "Hotel clients",
                    sh: "Major luxury brands across Japan",
                    b: "Not disclosed (small segment)",
                    shWin: true,
                  },
                  {
                    label: "Instructor access",
                    sh: "AI Andrew Sensei 24/7 + community",
                    b: "Live instructor (scheduled only)",
                    shWin: false,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="py-3 pr-4 font-medium text-[#1a1a2e]">
                      {row.label}
                    </td>
                    <td
                      className={`py-3 px-4 ${row.shWin ? "text-emerald-600 font-medium" : "text-foreground/70"}`}
                    >
                      {row.sh}
                    </td>
                    <td
                      className={`py-3 pl-4 ${!row.shWin ? "text-foreground/70" : "text-red-500"}`}
                    >
                      {row.b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHY HOTELS LOOK FOR ALTERNATIVES ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            Why Hotels Look for Berlitz Alternatives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Three problems we hear from HR managers who&apos;ve used Berlitz for
            hotel teams.
          </p>

          <div className="mt-10 space-y-4">
            {[
              {
                title: "Content doesn't match the job",
                desc: "Berlitz teaches business English — boardrooms, negotiations, presentations. Your front desk staff need check-in phrases, complaint handling, and concierge recommendations. The gap between what's taught and what's needed means staff can't transfer learning to real shifts.",
              },
              {
                title: "Scheduling around shifts is a nightmare",
                desc: "Hotel staff work rotating shifts. Fixed class times mean someone always misses. Attendance drops from 12 to 8 to 5 within weeks. You're paying for seats nobody fills.",
              },
              {
                title: "Per-student pricing doesn't scale",
                desc: "When every learner costs extra, HR starts limiting who gets training. The staff who need it most — newer hires, part-time workers — get cut first. Training becomes a perk for a few, not a capability for the team.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-l-4 border-l-red-400">
                <CardContent className="pt-6">
                  <h3 className="text-base font-bold text-[#1a1a2e]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: METHOD ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            Method: How Staff Actually Learn
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Two very different approaches to the same goal.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#1a1a2e]">
                  Berlitz Method
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Live instructor, target language only
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="size-4 mt-0.5 text-emerald-600 shrink-0" />
                    <p className="text-sm text-foreground/80">
                      <strong>Strength:</strong> Real-time conversation practice
                      with a live teacher. Immediate feedback and correction.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="size-4 mt-0.5 text-red-500 shrink-0" />
                    <p className="text-sm text-foreground/80">
                      <strong>Challenge:</strong> Requires scheduling, costs per
                      session, and the content is general — not tailored to what
                      hotel staff actually say at work.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#1a1a2e]">
                  Skill Hunter Method
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Story-based immersion + AI Andrew Sensei 24/7
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="size-4 mt-0.5 text-emerald-600 shrink-0" />
                    <p className="text-sm text-foreground/80">
                      <strong>Strength:</strong> Staff learn by following hotel
                      stories — like watching a drama. Language sticks because it
                      comes from situations they recognise. Available 24/7 on any
                      device.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="size-4 mt-0.5 text-red-500 shrink-0" />
                    <p className="text-sm text-foreground/80">
                      <strong>Challenge:</strong> No live instructor in
                      real-time. AI Andrew Sensei fills part of this gap but
                      isn&apos;t a human conversation partner.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-[#16213e]/20 bg-[#16213e]/5">
            <CardContent className="pt-6">
              <h3 className="text-base font-bold text-[#1a1a2e]">
                The Trade-Off
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                Berlitz gives you a live instructor. Skill Hunter gives you
                content that matches the job. For hotels, content relevance
                typically matters more — staff who practise &ldquo;May I take
                your luggage?&rdquo; outperform staff who practised &ldquo;Let
                me walk you through the quarterly report.&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ─── SECTION 7: CONTENT ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            Content: What Gets Taught
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This is where the difference is sharpest.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card className="border-l-4 border-l-gray-300">
              <CardContent className="pt-6">
                <h3 className="text-base font-bold text-[#1a1a2e]">Berlitz</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  General business English curriculum. Covers meetings,
                  presentations, email writing, negotiation. Adaptable to
                  different industries but not pre-built for any specific one.
                </p>
                <p className="mt-3 text-sm italic text-muted-foreground">
                  Example lesson: &ldquo;How to lead a team meeting in
                  English&rdquo;
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-500">
              <CardContent className="pt-6">
                <h3 className="text-base font-bold text-[#1a1a2e]">
                  Skill Hunter
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  100% hotel-specific. Five courses covering the departments
                  where English matters most. Every scenario, phrase, and
                  vocabulary word comes from real hotel operations in Japan.
                </p>
                <p className="mt-3 text-sm italic text-muted-foreground">
                  Example lesson: &ldquo;Handling a guest complaint about room
                  temperature at 2am&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>

          {/* The Five Courses */}
          <h3 className="mt-14 text-lg font-bold text-[#1a1a2e]">
            The Five Courses
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Each one maps to a real hotel department.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              {
                img: "/images/course_01.jpg",
                title: "Front Desk",
                desc: "Check-in, check-out, reservations, guest requests",
              },
              {
                img: "/images/course_02.jpg",
                title: "Restaurant",
                desc: "Ordering, dietary needs, recommendations, complaints",
              },
              {
                img: "/images/course_03.jpg",
                title: "Phone Calls",
                desc: "Reservations, wake-up calls, transfers, messages",
              },
              {
                img: "/images/course_04.jpg",
                title: "Concierge",
                desc: "Directions, recommendations, bookings, local tips",
              },
              {
                img: "/images/business_email.png",
                title: "Business Email",
                desc: "Confirmations, follow-ups, complaints, formal tone",
              },
            ].map((course, i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="h-32 w-full object-cover"
                />
                <CardContent className="pt-4 pb-4">
                  <h4 className="text-sm font-bold text-[#1a1a2e]">
                    {course.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {course.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: SCHEDULING ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            Scheduling: The Hidden Dealbreaker
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This is the reason most hotel Berlitz contracts quietly don&apos;t
            get renewed.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card className="border-l-4 border-l-red-400">
              <CardContent className="pt-6">
                <h3 className="text-base font-bold text-[#1a1a2e]">
                  What Actually Happens with Berlitz
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Month 1: 12 staff enrolled, classes at 3pm Tuesdays. Month 2:
                  shift changes mean 4 can&apos;t make it, attendance drops to
                  8. Month 3: 5 regulars, the rest have quietly stopped. HR
                  is still paying for 12 seats.
                </p>
                <p className="mt-3 text-sm text-red-500 font-medium">
                  Fixed schedules and rotating shifts are fundamentally
                  incompatible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-500">
              <CardContent className="pt-6">
                <h3 className="text-base font-bold text-[#1a1a2e]">
                  How Skill Hunter Works Instead
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Every lesson is self-paced, available on phone or PC, 24/7.
                  Night shift staff study at midnight. Morning staff study before
                  their shift. Part-timers study on days off. Nobody misses
                  because nobody needs to be anywhere at a fixed time.
                </p>
                <p className="mt-3 text-sm text-emerald-600 font-medium">
                  Completion rates stay high because the schedule bends to the
                  staff, not the other way around.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: AI ANDREW SENSEI ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            AI Andrew Sensei: An Instructor on Every Shift
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-3xl">
            Berlitz&apos;s biggest advantage is live instructors. Skill
            Hunter&apos;s answer is AI Andrew Sensei — an AI chatbot built into
            every course that knows the material, speaks Japanese, and never
            clocks out.
          </p>

          <Card className="mt-10 border-l-4 border-l-emerald-500">
            <CardContent className="pt-6">
              <h3 className="text-base font-bold text-[#1a1a2e]">
                How It Works
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                AI Andrew Sensei is an AI chatbot embedded inside every Skill
                Hunter course. It knows all the course material — vocabulary,
                grammar points, cultural context. Staff can ask questions in
                Japanese and get instant, accurate answers that reference the
                actual lesson they&apos;re studying.
              </p>
              <div className="mt-4 rounded-lg bg-gray-50 p-4 border">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Real example
                </p>
                <p className="text-sm text-foreground/80">
                  <strong>Staff asks:</strong>{" "}
                  &ldquo;なぜお客様にplease sit
                  hereと言ったら、怒られましたか？&rdquo;
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  <strong>AI Andrew Sensei:</strong> Explains that &ldquo;please
                  sit here&rdquo; sounds like a command in English — too direct
                  for a guest. Suggests the politer phrasing from the course
                  material: &ldquo;May I show you to your table?&rdquo; or
                  &ldquo;Right this way, please.&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              {
                stat: "24/7",
                label: "Available on any shift",
                icon: Clock,
              },
              {
                stat: "Japanese",
                label: "Ask questions in native language",
                icon: Globe,
              },
              {
                stat: "Instant",
                label: "No waiting for next class",
                icon: MessageCircle,
              },
              {
                stat: "Course-aware",
                label: "Answers from actual course material",
                icon: BookOpen,
              },
            ].map((item, i) => (
              <Card key={i} className="border-t-2 border-t-[#c9a03c]">
                <CardContent className="pt-5 pb-5">
                  <item.icon className="size-5 text-[#c9a03c] mb-2" />
                  <p className="text-lg font-bold text-[#1a1a2e]">
                    {item.stat}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-[#16213e]/20 bg-[#16213e]/5">
            <CardContent className="pt-6">
              <h3 className="text-base font-bold text-[#1a1a2e]">
                Why This Matters vs. Berlitz
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                Imagine a staff member makes a language mistake with a guest at
                10pm. With Berlitz, they wait until their next scheduled class —
                maybe days later — to ask about it. By then, the moment is gone.
                With AI Andrew Sensei, they open the app on their break, ask the
                question in Japanese, and get an answer that references the exact
                lesson. The learning happens when the motivation is highest.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ─── SECTION 10: FOUNDER ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 sm:grid-cols-[200px_1fr] items-center">
            <div className="mx-auto sm:mx-0">
              <img
                src="/images/Andrew%20Conrad.JPG"
                alt="Andrew Gibler — Skill Hunter founder"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
            <div>
              <Badge
                variant="secondary"
                className="mb-4 text-[#c9a03c] bg-[#c9a03c]/10"
              >
                The Method Behind It
              </Badge>
              <h2 className="text-xl font-bold text-[#1a1a2e]">
                Built by someone who learned a language the hard way
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                Andrew Gibler moved to Japan in 2009 with zero Japanese. No
                language school — just immersion. Within four years, he was
                interpreting for the Hiroshima Toyo Carp in NPB professional
                baseball and passed JLPT N1. Skill Hunter is that same
                immersion method, built for hotel staff learning English.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                He knows it works because he lived it in the other direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 11: WHERE EACH WINS ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e] text-center">
            Where Each Wins
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Honest assessment — neither is perfect for every situation.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#1a1a2e]">
                  Berlitz Wins When...
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Staff need advanced-level English (B2-C2)",
                    "Live conversation practice with a human is the priority",
                    "Brand recognition matters to your stakeholders",
                    "You need general English, not hospitality-specific",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="size-4 mt-0.5 text-muted-foreground shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#c9a03c]/30">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-[#c9a03c]">
                  Skill Hunter Wins When...
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "You need hospitality-specific English content",
                    "Completion rates are more important than class hours",
                    "Staff work rotating shifts that make scheduling impossible",
                    "You're training a team, not individuals",
                    "You want to trial before committing budget",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="size-4 mt-0.5 text-[#c9a03c] shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── SECTION 12: SWITCHING TIMELINE ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e] text-center">
            What Switching Looks Like
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            You don&apos;t have to cancel Berlitz to try Skill Hunter.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-4">
            {[
              {
                step: "1",
                period: "Week 1-2",
                title: "Trial alongside Berlitz",
                desc: "Start a free 14-day trial. Run Skill Hunter in parallel with your existing Berlitz contract. No disruption.",
              },
              {
                step: "2",
                period: "Week 3-4",
                title: "Compare engagement",
                desc: "Check the HR dashboard. Compare completion rates, time spent, and staff feedback between both programmes.",
              },
              {
                step: "3",
                period: "Week 5-8",
                title: "Expand if working",
                desc: "If the data supports it, expand Skill Hunter to more departments. Scale back Berlitz seats as contracts allow.",
              },
              {
                step: "4",
                period: "Month 3+",
                title: "Full transition",
                desc: "Most hotels complete the switch within one quarter. Some keep Berlitz for advanced learners only.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#1a1a2e] text-white font-bold text-lg">
                  {item.step}
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[#c9a03c]">
                  {item.period}
                </p>
                <h3 className="mt-1 text-sm font-bold text-[#1a1a2e]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 13: THE NUMBERS ─── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e]">
            The Numbers
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              {
                stat: "5",
                label: "Hospitality-specific courses",
              },
              {
                stat: "250+",
                label: "Hotel employees learning",
              },
              {
                stat: "100+",
                label: "Real hotel scenario lessons",
              },
              {
                stat: "14",
                label: "Day free trial, no credit card",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="pt-6 pb-6">
                  <p className="text-3xl font-bold text-[#c9a03c]">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 14: FAQ ─── */}
      <section className="bg-[#fafaf8] py-16 sm:py-24 border-y">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-[#1a1a2e] text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-8 max-w-3xl mx-auto">
            {[
              {
                q: "Why should we change from Berlitz?",
                a: "You don't have to. But if your hotel staff are learning phrases they never use at work, attendance is dropping because of shift conflicts, and per-student costs keep climbing — those are signs the format doesn't fit. Skill Hunter was built specifically to solve those three problems.",
              },
              {
                q: "Can we use both at the same time?",
                a: "Yes, and many hotels do during the transition. Run Skill Hunter alongside Berlitz for a quarter, compare the engagement data, and decide based on what's actually working.",
              },
              {
                q: "How do I justify switching to my GM?",
                a: "Show them the trial data. After 14 days, you'll have completion rates, time-on-platform, and staff feedback. Compare that against your current Berlitz attendance numbers. The data usually speaks for itself.",
              },
              {
                q: "Is it cheaper than Berlitz?",
                a: "In most cases, significantly. Berlitz charges per student per lesson. Skill Hunter uses team-based flat-rate pricing, which means you can train your entire staff without worrying about per-head costs climbing as you scale.",
              },
              {
                q: "What if staff have questions while studying?",
                a: "AI Andrew Sensei is built into every course. Staff can ask questions in Japanese and get instant answers that reference the actual lesson material. It's not a generic chatbot — it knows the Skill Hunter curriculum.",
              },
              {
                q: "What if our staff are too advanced for Skill Hunter?",
                a: "Skill Hunter currently covers A1 through B1 (beginner to intermediate). If you have staff at B2 or above, Berlitz or another provider may be a better fit for them specifically. Many hotels use Skill Hunter for the majority and keep a smaller Berlitz contract for advanced learners.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-base font-bold text-[#1a1a2e]">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 15: CTA ─── */}
      <section className="relative overflow-hidden bg-[#1a1a2e] py-16 sm:py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] opacity-90" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            See the Difference in 14 Days
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Start a free trial. No credit card. No commitment. Just better
            English training for your hotel.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
              <a href="/#contact">
                法人のお問い合わせ Corporate Inquiry
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
                    href="/compare"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    英語研修比較ガイド / Training Comparison
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

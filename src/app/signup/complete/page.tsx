import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Mail, Menu } from "lucide-react";

export const metadata = {
  title: "登録完了 — Signup Complete | Skill Hunter",
  description:
    "Your free trial signup is complete. Check your email for login instructions.",
};

export default function SignupCompletePage() {
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
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36 text-center">
          <CheckCircle className="mx-auto size-16 text-[#c9a03c] mb-6" strokeWidth={1.5} />

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            ご登録ありがとうございます！
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-white/90">
            Thank you for signing up!
          </p>

          <div className="mt-10 mx-auto max-w-xl space-y-6 text-left">
            <div className="flex gap-4 items-start">
              <Mail className="mt-1 size-5 text-[#c9a03c] shrink-0" />
              <div>
                <p className="text-sm sm:text-base text-white/80">
                  まもなく <span className="text-white font-medium">andrew@skillhunter.jp</span> よりご案内メールをお送りします。
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-white/55">
                  You'll receive an invite email shortly from andrew@skillhunter.jp.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start rounded-lg border border-[#c9a03c]/30 bg-[#c9a03c]/10 px-4 py-3">
              <Clock className="mt-0.5 size-5 text-[#c9a03c] shrink-0" />
              <div>
                <p className="text-sm sm:text-base text-white font-medium">
                  10分経っても届かない場合は、迷惑メールフォルダをご確認ください。
                </p>
                <p className="mt-1 text-xs sm:text-sm text-white/70">
                  If it doesn't arrive within 10 minutes, please check your spam folder.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle className="mt-1 size-5 text-[#c9a03c] shrink-0" />
              <div>
                <p className="text-sm sm:text-base text-white/80">
                  ご不明な点は <a href="mailto:andrew@skillhunter.jp" className="text-[#c9a03c] underline hover:text-[#d4af50]">andrew@skillhunter.jp</a> までご連絡ください。
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-white/55">
                  Need help? Email <a href="mailto:andrew@skillhunter.jp" className="text-[#c9a03c]/80 underline hover:text-[#d4af50]">andrew@skillhunter.jp</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

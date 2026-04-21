"use client";

import { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-dark" | "nav";
type Size = "default" | "lg" | "sm";

type Props = {
  label?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const SHIRYOU_URL = "/shiryou.pdf";

export function ShiryouDialog({
  label = "資料ダウンロード — Download Brochure",
  variant = "primary",
  size = "lg",
  className,
}: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", hotel: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.hotel) return;
    setSubmitting(true);
    // TODO(lewis): wire to CC360 form webhook. For now, capture locally + open PDF.
    try {
      const leads = JSON.parse(localStorage.getItem("shiryou_leads") || "[]");
      leads.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem("shiryou_leads", JSON.stringify(leads));
    } catch {
      /* noop */
    }
    setSubmitted(true);
    setSubmitting(false);
    window.open(SHIRYOU_URL, "_blank", "noopener,noreferrer");
  };

  const resetAndClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", hotel: "" });
    }, 200);
  };

  const buttonClass = cn(
    "font-semibold",
    size === "lg" && "text-base px-8 h-12",
    size === "default" && "text-sm px-6 h-10",
    size === "sm" && "text-xs px-4 h-9",
    variant === "primary" && "bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50]",
    variant === "outline" &&
      "border border-[#1a1a2e]/20 bg-white text-[#1a1a2e] hover:bg-[#1a1a2e]/5",
    variant === "outline-dark" &&
      "border border-white/30 bg-transparent text-white hover:bg-white/10",
    variant === "nav" && "bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] h-9 text-sm px-4",
    className
  );

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : resetAndClose())}>
      <DialogTrigger asChild>
        <Button className={buttonClass}>
          <Download className="mr-2 size-4" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl text-[#1a1a2e]">
                資料をダウンロード
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                Enter your details and we&apos;ll send you the Skill Hunter brochure
                (PDF, JP).
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              <div>
                <label
                  htmlFor="sh-name"
                  className="block text-xs font-semibold text-[#1a1a2e]"
                >
                  お名前 · Your Name
                </label>
                <input
                  id="sh-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-[#1a1a2e]/20 px-3 py-2 text-sm focus:border-[#c9a03c] focus:outline-none focus:ring-2 focus:ring-[#c9a03c]/20"
                  placeholder="山田 太郎"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="sh-email"
                  className="block text-xs font-semibold text-[#1a1a2e]"
                >
                  メールアドレス · Email
                </label>
                <input
                  id="sh-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-[#1a1a2e]/20 px-3 py-2 text-sm focus:border-[#c9a03c] focus:outline-none focus:ring-2 focus:ring-[#c9a03c]/20"
                  placeholder="you@hotel.co.jp"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="sh-hotel"
                  className="block text-xs font-semibold text-[#1a1a2e]"
                >
                  ホテル名 · Hotel Name
                </label>
                <input
                  id="sh-hotel"
                  type="text"
                  required
                  value={form.hotel}
                  onChange={(e) => setForm({ ...form, hotel: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-[#1a1a2e]/20 px-3 py-2 text-sm focus:border-[#c9a03c] focus:outline-none focus:ring-2 focus:ring-[#c9a03c]/20"
                  placeholder="○○ホテル"
                  autoComplete="organization"
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-semibold h-11"
              >
                <Download className="mr-2 size-4" />
                {submitting ? "送信中…" : "資料をダウンロード"}
              </Button>
              <p className="text-[10px] text-muted-foreground leading-relaxed text-center">
                送信いただいた情報はSkill Hunterからのご連絡のみに使用されます。
                <br />
                Your details are used only to follow up about Skill Hunter.
              </p>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto size-12 text-[#c9a03c]" />
            <h3 className="mt-4 text-lg font-bold text-[#1a1a2e]">
              ダウンロードを開始しました
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Your download has started.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              開かない場合は
              <a
                href={SHIRYOU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a03c] font-semibold underline mx-1"
              >
                こちら
              </a>
              をクリック — If it didn&apos;t open, click here.
            </p>
            <Button
              onClick={resetAndClose}
              variant="outline"
              className="mt-6 border-[#1a1a2e]/20"
            >
              閉じる — Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

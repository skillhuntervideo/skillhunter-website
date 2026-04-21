"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Info } from "lucide-react";

type Option = {
  id: string;
  nameJp: string;
  nameEn: string;
  blurbJp: string;
  blurbEn: string;
  prosJp: string[];
  consJp: string[];
  perPerson: (staff: number) => number;
  monthly: (staff: number) => number;
  footnoteJp?: string;
  footnoteEn?: string;
  highlight?: boolean;
};

const OPTIONS: Option[] = [
  {
    id: "low-cost-online",
    nameJp: "格安オンライン英会話",
    nameEn: "Low-cost online lessons",
    blurbJp: "毎日受講可・ネイティブ講師は少数",
    blurbEn: "Daily lessons, rarely native-speaker",
    prosJp: ["低コスト", "毎日レッスン可能", "手軽に始められる"],
    consJp: [
      "日本人向けに設計されていない",
      "講師の質にばらつきがある",
      "ホテル業界に特化していない",
      "継続率が低い傾向",
    ],
    perPerson: () => 6500,
    monthly: (s) => 6500 * s,
  },
  {
    id: "generic-online-course",
    nameJp: "一般的なオンライン英語コース",
    nameEn: "Generic online courses",
    blurbJp: "セルフペース型・ホテル特化ではない",
    blurbEn: "Self-paced, generic English — not hotel-specific",
    prosJp: ["自分のペースで学習可能", "24時間いつでもアクセス"],
    consJp: [
      "ホテル業務に必要な英語ではない",
      "一般英語のみ（接客・予約対応などに直結しない）",
      "完了率が低い（モチベーション維持が難しい）",
    ],
    perPerson: () => 9800,
    monthly: (s) => 9800 * s,
  },
  {
    id: "in-person-group",
    nameJp: "対面グループレッスン",
    nameEn: "In-person group lessons",
    blurbJp: "高品質・講師派遣型",
    blurbEn: "High quality, instructor-dispatched",
    prosJp: ["経験豊富な講師", "カリキュラムのカスタマイズ可", "対面での学習効果"],
    consJp: [
      "高コスト",
      "スタッフ全員のスケジュール調整が必要",
      "欠席者はその日の内容を取り戻せない",
      "人数が増えるほどコストが比例して増加",
    ],
    perPerson: () => 13000,
    monthly: (s) => 13000 * s,
    footnoteJp: "目安：1レッスン¥30,000/週1回/10名グループ換算",
    footnoteEn: "Assumes ¥30,000/lesson, weekly, groups of 10",
  },
  {
    id: "skill-hunter",
    nameJp: "Skill Hunter",
    nameEn: "Skill Hunter",
    blurbJp: "ホテル全体の定額制・ホテル特化型",
    blurbEn: "Flat-fee for your whole hotel, built for hotel staff",
    prosJp: [
      "ホテル全スタッフが利用可能",
      "日本人のために設計された英語学習",
      "ホテル業務に特化したコンテンツ",
      "人数が増えてもコストは変わらない",
      "ドラマ形式で楽しく続けられる",
    ],
    consJp: [],
    perPerson: (s) => (s <= 250 ? 49000 / s : 98000 / s),
    monthly: (s) => (s <= 250 ? 49000 : 98000),
    highlight: true,
  },
];

const formatYen = (n: number) => `¥${Math.round(n).toLocaleString("ja-JP")}`;

export function ComparisonWidget() {
  const [staff, setStaff] = useState(100);
  const [expanded, setExpanded] = useState<string | null>(null);

  const rows = useMemo(
    () =>
      OPTIONS.map((o) => ({
        ...o,
        perPersonValue: o.perPerson(staff),
        monthlyValue: o.monthly(staff),
      })),
    [staff]
  );

  return (
    <section id="compare" className="bg-[#fafaf8] py-16 sm:py-20 border-y">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#1a1a2e] sm:text-4xl">
            スタッフ全員を英語でトレーニングする、
            <br className="hidden sm:inline" />
            本当のコストは？
          </h2>
          <p className="mt-2 text-base text-[#1a1a2e]/70 sm:text-lg">
            See what it really costs to train your whole staff in English.
          </p>
        </div>

        {/* Staff input */}
        <div className="mt-8 rounded-2xl border border-[#1a1a2e]/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="staff-count" className="text-sm font-semibold text-[#1a1a2e]">
              スタッフ数 — Staff to train
            </label>
            <div className="flex items-center gap-2">
              <input
                id="staff-count"
                type="number"
                min={5}
                max={1000}
                value={staff}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (!Number.isNaN(v)) setStaff(Math.max(5, Math.min(1000, v)));
                }}
                className="w-24 rounded-lg border border-[#1a1a2e]/20 px-3 py-1.5 text-xl font-bold text-[#1a1a2e] focus:border-[#c9a03c] focus:outline-none focus:ring-2 focus:ring-[#c9a03c]/20"
              />
              <span className="text-sm text-[#1a1a2e]/60">名</span>
            </div>
          </div>
          <input
            type="range"
            min={5}
            max={500}
            step={5}
            value={Math.min(staff, 500)}
            onChange={(e) => setStaff(Number(e.target.value))}
            className="mt-4 w-full accent-[#c9a03c]"
            aria-label="Staff count slider"
          />
          <div className="mt-1 relative h-4 text-[10px] text-[#1a1a2e]/50">
            <span className="absolute left-0 -translate-x-1/2">5</span>
            <span className="absolute -translate-x-1/2" style={{ left: `${((100 - 5) / (500 - 5)) * 100}%` }}>100</span>
            <span className="absolute -translate-x-1/2" style={{ left: `${((250 - 5) / (500 - 5)) * 100}%` }}>250</span>
            <span className="absolute right-0 translate-x-1/2">500+</span>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="mt-6 space-y-3">
          {rows.map((r) => {
            const isOpen = expanded === r.id;
            return (
              <div
                key={r.id}
                className={`overflow-hidden rounded-xl border transition ${
                  r.highlight
                    ? "border-[#c9a03c] bg-[#1a1a2e] text-white shadow-md ring-1 ring-[#c9a03c]/30"
                    : "border-[#1a1a2e]/10 bg-white text-[#1a1a2e]"
                }`}
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : r.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    {/* Left: name */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`truncate text-base font-bold sm:text-lg ${
                            r.highlight ? "text-[#c9a03c]" : ""
                          }`}
                        >
                          {r.nameJp}
                        </h3>
                        {r.highlight && (
                          <span className="flex-shrink-0 rounded-full bg-[#c9a03c] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#1a1a2e]">
                            あなたのホテル
                          </span>
                        )}
                      </div>
                      <p
                        className={`truncate text-xs ${
                          r.highlight ? "text-white/60" : "text-[#1a1a2e]/50"
                        }`}
                      >
                        {r.nameEn} · {r.blurbEn}
                      </p>
                    </div>

                    {/* Right: price block */}
                    <div className="flex flex-shrink-0 items-center gap-3">
                      <div className="text-right">
                        <div
                          className={`text-2xl font-bold leading-none sm:text-3xl ${
                            r.highlight ? "text-[#c9a03c]" : "text-[#1a1a2e]"
                          }`}
                        >
                          {formatYen(r.monthlyValue)}
                        </div>
                        <div
                          className={`mt-1 text-[11px] ${
                            r.highlight ? "text-white/60" : "text-[#1a1a2e]/55"
                          }`}
                        >
                          月額 · {formatYen(r.perPersonValue)} / 人
                        </div>
                      </div>
                      <ChevronDown
                        className={`size-4 flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        } ${r.highlight ? "text-white/60" : "text-[#1a1a2e]/40"}`}
                      />
                    </div>
                  </button>
                </div>

                {/* Expandable details */}
                {isOpen && (
                  <div
                    className={`border-t px-5 py-4 text-sm sm:px-6 ${
                      r.highlight
                        ? "border-white/10 bg-[#16213e] text-white/80"
                        : "border-[#1a1a2e]/5 bg-[#fafaf8] text-[#1a1a2e]/75"
                    }`}
                  >
                    <p className="mb-3">{r.blurbJp}</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {r.prosJp.length > 0 && (
                        <div>
                          <p
                            className={`mb-1.5 text-[11px] font-semibold uppercase tracking-wide ${
                              r.highlight ? "text-[#c9a03c]" : "text-green-700/80"
                            }`}
                          >
                            メリット
                          </p>
                          <ul className="space-y-1 text-xs">
                            {r.prosJp.map((p, i) => (
                              <li key={i} className="flex gap-2">
                                <span className={r.highlight ? "text-[#c9a03c]" : "text-green-700"}>
                                  ＋
                                </span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {r.consJp.length > 0 && (
                        <div>
                          <p
                            className={`mb-1.5 text-[11px] font-semibold uppercase tracking-wide ${
                              r.highlight ? "text-white/50" : "text-red-700/70"
                            }`}
                          >
                            デメリット
                          </p>
                          <ul className="space-y-1 text-xs">
                            {r.consJp.map((c, i) => (
                              <li key={i} className="flex gap-2">
                                <span className={r.highlight ? "text-white/40" : "text-red-600/80"}>
                                  −
                                </span>
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    {r.footnoteJp && (
                      <p
                        className={`mt-3 text-[11px] ${
                          r.highlight ? "text-white/45" : "text-[#1a1a2e]/45"
                        }`}
                      >
                        {r.footnoteJp}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 flex gap-2.5 rounded-lg bg-[#1a1a2e]/[0.04] p-3 text-[11px] leading-relaxed text-[#1a1a2e]/55">
          <Info className="mt-0.5 size-3.5 flex-shrink-0" />
          <div>
            Skill Hunterの料金はホテルの客室数（250室以下: ¥49,000/月、251室以上: ¥98,000/月、税抜）に基づきます。通常スタッフ数と客室数はほぼ同水準のため、比較のためスタッフ数を入力値としています。他社の料金は該当カテゴリの一般的な市場相場で、特定の提供者を指すものではありません。
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { timeline, type TimelineCategory } from "@/data/timeline";

// カテゴリごとの表示ラベルと配色（チップ・ドット）
const categoryMeta: Record<
  TimelineCategory,
  { label: string; chip: string; dot: string }
> = {
  education: { label: "学歴", chip: "bg-blue-100 text-blue-800 ring-blue-200", dot: "bg-blue-600" },
  event: { label: "イベント", chip: "bg-sky-100 text-sky-800 ring-sky-200", dot: "bg-sky-600" },
  hackathon: { label: "ハッカソン", chip: "bg-violet-100 text-violet-800 ring-violet-200", dot: "bg-violet-600" },
  award: { label: "受賞", chip: "bg-amber-100 text-amber-800 ring-amber-200", dot: "bg-amber-500" },
  research: { label: "研究", chip: "bg-cyan-100 text-cyan-800 ring-cyan-200", dot: "bg-cyan-600" },
  internship: { label: "インターン", chip: "bg-indigo-100 text-indigo-800 ring-indigo-200", dot: "bg-indigo-600" },
  learning: { label: "学習", chip: "bg-emerald-100 text-emerald-800 ring-emerald-200", dot: "bg-emerald-600" },
  certification: { label: "資格", chip: "bg-teal-100 text-teal-800 ring-teal-200", dot: "bg-teal-600" },
  development: { label: "開発", chip: "bg-fuchsia-100 text-fuchsia-800 ring-fuchsia-200", dot: "bg-fuchsia-600" },
  presentation: { label: "学会発表", chip: "bg-rose-100 text-rose-800 ring-rose-200", dot: "bg-rose-600" },
};

// フィルタに表示するカテゴリの並び順
const categoryOrder: TimelineCategory[] = [
  "education",
  "event",
  "hackathon",
  "award",
  "research",
  "internship",
  "learning",
  "certification",
  "development",
  "presentation",
];

type Filter = "all" | TimelineCategory;
type Order = "newest" | "oldest";

export default function Timeline() {
  const [filter, setFilter] = useState<Filter>("all");
  const [order, setOrder] = useState<Order>("newest");

  // データに実際に登場するカテゴリだけをフィルタとして表示する
  const usedCategories = useMemo(() => {
    const set = new Set<TimelineCategory>();
    timeline.forEach((item) => item.categories.forEach((c) => set.add(c)));
    return categoryOrder.filter((c) => set.has(c));
  }, []);

  const items = useMemo(() => {
    const filtered =
      filter === "all"
        ? timeline
        : timeline.filter((item) => item.categories.includes(filter));
    return [...filtered].sort((a, b) =>
      order === "newest"
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date),
    );
  }, [filter, order]);

  return (
    <section id="timeline" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Timeline"
            title="これまでの歩み"
            description="学びと制作を通じて、少しずつできることを広げてきました。"
          />
        </Reveal>

        {/* フィルタ & 並び替え */}
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterButton
                active={filter === "all"}
                onClick={() => setFilter("all")}
              >
                すべて
              </FilterButton>
              {usedCategories.map((c) => (
                <FilterButton
                  key={c}
                  active={filter === c}
                  onClick={() => setFilter(c)}
                >
                  {categoryMeta[c].label}
                </FilterButton>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-1 self-start rounded-full border border-slate-200 bg-white p-1">
              <SortButton
                active={order === "newest"}
                onClick={() => setOrder("newest")}
              >
                新しい順
              </SortButton>
              <SortButton
                active={order === "oldest"}
                onClick={() => setOrder("oldest")}
              >
                古い順
              </SortButton>
            </div>
          </div>
        </Reveal>

        {items.length === 0 ? (
          <p className="text-sm text-slate-500">該当する出来事はありません。</p>
        ) : (
          <ol className="relative ml-2 space-y-8 border-l-2 border-slate-200 pl-8">
            {items.map((item, i) => {
              const dotColor =
                categoryMeta[item.categories[0]]?.dot ?? "bg-blue-500";
              return (
                <li key={item.date + item.title} className="relative">
                  <span
                    aria-hidden
                    className={`absolute -left-[39px] top-2 h-3 w-3 rounded-full ring-4 ring-slate-50 ${dotColor}`}
                  />
                  <Reveal delay={Math.min(i, 6) * 70}>
                    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <p className="text-sm font-semibold text-blue-600">
                        {item.date}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.categories.map((c) => (
                          <span
                            key={c}
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${categoryMeta[c].chip}`}
                          >
                            {categoryMeta[c].label}
                          </span>
                        ))}
                      </div>
                      <ExpandableText text={item.description} />
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}

// 長い説明文は2行でクランプし、必要なときだけ「もっと見る／閉じる」を表示する
function ExpandableText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // クランプ状態（マウント直後）で本文がはみ出すかを測定する
    setNeedsToggle(el.scrollHeight > el.clientHeight + 1);
  }, [text]);

  return (
    <div className="mt-4">
      <p
        ref={ref}
        className={`text-sm leading-relaxed text-slate-600 ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {text}
      </p>
      {needsToggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          {expanded ? "閉じる" : "もっと見る"}
          <svg
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white shadow-sm"
          : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"
      }`}
    >
      {children}
    </button>
  );
}

function SortButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
        active ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-900"
      }`}
    >
      {children}
    </button>
  );
}

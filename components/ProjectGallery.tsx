"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function ChevronLeft({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ChevronRight({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export default function ProjectGallery({
  images,
  alt,
  className = "aspect-[16/10] w-full",
  fit = "cover",
  bgClass = "bg-slate-100",
}: {
  images: string[];
  alt: string;
  /** サムネイル（トリガー）のサイズ用クラス */
  className?: string;
  /** 画像の表示方法。contain は全体表示（カードのカバーは cover） */
  fit?: "cover" | "contain";
  /** サムネイル背景（contain 時のレターボックス部分の色） */
  bgClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, prev, next]);

  if (images.length === 0) return null;

  const multiple = images.length > 1;

  return (
    <>
      {/* カード上のカバー（左右で切り替え・クリックで拡大） */}
      <div
        className={`group/thumb relative overflow-hidden ${bgClass} ${className}`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${alt} のスクリーンショットを拡大表示`}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={images[index]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`transition-transform duration-300 group-hover/thumb:scale-105 ${
              fit === "contain" ? "object-contain" : "object-cover"
            }`}
          />
          <span className="absolute inset-0 bg-slate-900/0 transition-colors group-hover/thumb:bg-slate-900/10" />
        </button>

        {multiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="前の写真"
              className="absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/55 text-white backdrop-blur transition-colors hover:bg-slate-900/80"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="次の写真"
              className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/55 text-white backdrop-blur transition-colors hover:bg-slate-900/80"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-slate-900/55 px-2 py-1 backdrop-blur">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1} 枚目を表示`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 拡大表示（ライトボックス） */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} のスクリーンショット`}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="閉じる"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[80vh] w-full max-w-5xl items-center justify-center"
          >
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {multiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="前の画像"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="次の画像"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <ChevronRight />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                {index + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

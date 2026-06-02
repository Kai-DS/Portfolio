import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { awards } from "@/data/awards";

function TrophyIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.7}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="bg-section py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Awards"
            title="受賞歴"
            description="コンテストやハッカソンでの受賞と、その背景・取り組みを紹介します。"
          />
        </Reveal>

        {awards.length === 0 ? (
          <Reveal>
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-sm text-slate-500">
                受賞歴をここで詳しく紹介します。
              </p>
              <p className="mt-1 text-xs text-slate-400">
                data/awards.ts に追加すると表示されます。
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6">
            {awards.map((award, i) => (
              <Reveal key={award.title + award.date} delay={i * 90}>
                <article className="relative overflow-hidden rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                  {/* 左端のゴールドアクセント */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-amber-400 to-amber-500"
                  />

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-sm">
                      <TrophyIcon />
                    </span>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800 ring-1 ring-inset ring-amber-200">
                        {award.prize}
                      </span>
                      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {award.date}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {award.title}
                  </h3>

                  {award.tech && award.tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {award.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {award.description}
                  </p>

                  {award.link && (
                    <a
                      href={award.link.href}
                      target={award.link.href.startsWith("http") ? "_blank" : undefined}
                      rel={award.link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition-colors hover:text-amber-800"
                    >
                      {award.link.label}
                      <ExternalLinkIcon />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

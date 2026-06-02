import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import Reveal from "./Reveal";
import { skillCategories, learningNow, certifications } from "@/data/skills";

// skillCategories と同じ順番でアイコンを対応させる
const categoryIcons = [
  // 言語
  <path
    key="lang"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="m6.75 7.5-3 3 3 3m6.75-6 3 3-3 3m-2.25-7.5L10.5 18"
  />,
  // ライブラリ / フレームワーク
  <path
    key="lib"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
  />,
  // ツール
  <path
    key="tool"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.529-.642 1.36-.922 2.182-.916a4.5 4.5 0 0 0 3.498-1.307l1.611-1.611-2.475-2.475-1.611 1.611a4.5 4.5 0 0 0-1.307 3.498c.006.822-.274 1.653-.916 2.182l-3.03 2.496m-2.44 2.44L7.5 17.25m0 0L4.5 14.25m3 3 .622-.622"
  />,
  // 専門領域
  <path
    key="domain"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 0 0 2.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
  />,
];

const statusChip: Record<string, string> = {
  取得: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  取得予定: "bg-blue-100 text-blue-800 ring-blue-200",
  学習中: "bg-amber-100 text-amber-800 ring-amber-200",
};

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-400">
      <span className="h-px w-7 bg-gradient-to-r from-blue-500 to-cyan-400" />
      {children}
    </h3>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-section py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="TOOLKIT"
            title="スキルと資格"
            description="授業や制作を通じて身につけた技術と、取得した資格をまとめています。"
          />
        </Reveal>

        {/* Skills */}
        <Reveal>
          <SubHeading>Skills</SubHeading>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 80} className="h-full">
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.7}
                      stroke="currentColor"
                      aria-hidden
                    >
                      {categoryIcons[i]}
                    </svg>
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {category.title}
                  </h4>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 現在学んでいること */}
        <Reveal delay={120}>
          <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <h4 className="text-sm font-bold text-slate-900">
                現在学んでいること
              </h4>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              スキルの幅を広げるため、いま重点的に取り組んでいる分野です。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {learningNow.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-dashed border-blue-400 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <div className="mt-16">
          <Reveal>
            <SubHeading>Certifications</SubHeading>
          </Reveal>

          <Reveal>
            {certifications.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="text-sm text-slate-500">
                  取得した資格・検定をここに掲載します。
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((cert) => {
                  const status = cert.status ?? "取得";
                  return (
                    <div
                      key={cert.name}
                      className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.7}
                          stroke="currentColor"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">
                            {cert.name}
                          </h4>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                              statusChip[status] ?? statusChip["取得"]
                            }`}
                          >
                            {status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">{cert.org}</p>
                        <p className="mt-0.5 text-xs font-medium text-slate-400">
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

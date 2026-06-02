import Image from "next/image";
import Tag from "./Tag";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const interests = ["機械学習", "データ分析", "Web 開発", "生成 AI", "可視化"];

const techCount = skillCategories.reduce((sum, c) => sum + c.items.length, 0);

const stats = [
  { value: String(projects.length), label: "制作物" },
  { value: `${techCount}+`, label: "技術スタック" },
  { value: String(interests.length), label: "興味分野" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Kai-DS",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.73.5.5 5.73.5 12.01c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
];

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-900/10">
      <div className="flex items-center gap-2 border-b border-slate-700/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-2 text-xs text-slate-400">profile.py</span>
      </div>
      <div className="space-y-1 overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-300 sm:text-sm">
        <div>
          <span className="text-purple-400">class</span>{" "}
          <span className="text-emerald-300">Student</span>:
        </div>
        <div className="pl-4">
          <span className="text-sky-300">name</span> <span className="text-slate-500">=</span>{" "}
          <span className="text-amber-300">&quot;佐藤 快&quot;</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-300">major</span> <span className="text-slate-500">=</span>{" "}
          <span className="text-amber-300">&quot;データサイエンス&quot;</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-300">stack</span> <span className="text-slate-500">=</span>{" "}
          [<span className="text-amber-300">&quot;Python&quot;</span>,{" "}
          <span className="text-amber-300">&quot;ML&quot;</span>,{" "}
          <span className="text-amber-300">&quot;Web&quot;</span>]
        </div>
        <div className="h-2" />
        <div className="pl-4">
          <span className="text-purple-400">def</span>{" "}
          <span className="text-yellow-200">goal</span>(self):
        </div>
        <div className="pl-8">
          <span className="text-purple-400">return</span>{" "}
          <span className="text-amber-300">&quot;動く楽しさを、使える形に。&quot;</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* 背景の控えめなアクセント */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-section to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-24 -z-10 h-72 w-72 rounded-full bg-violet-400/30 blur-3xl"
      />

      <div className="mx-auto max-w-content px-6 pb-20 pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左：プロフィール */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              インターン・就活に向けて活動中
            </span>

            <p className="mt-8 inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
              Data Science Student
            </p>

            <div className="mt-3 flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-lg ring-4 ring-white">
                <Image
                  src="/images/profile/me-avatar.jpg"
                  alt="佐藤 快"
                  fill
                  priority
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  佐藤 快
                </h1>
                <p className="mt-2 text-lg text-slate-500">データサイエンス学部</p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-slate-800">
              動く楽しさを、
              <br className="hidden sm:block" />
              使える形に。
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              データサイエンス学部で、統計・機械学習・プログラミングを学んでいます。授業や制作を通じて得た知識を、Web
              アプリやデータ分析、体験型のコンテンツ制作に活かしながら、実際に触れて動かせるものを作ることを大切にしています。
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Tag key={interest}>{interest}</Tag>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-700 hover:to-violet-700 hover:shadow-md"
              >
                制作物を見る
              </a>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 右：コードカード */}
          <div className="lg:pl-6">
            <CodeCard />
          </div>
        </div>

        {/* スタッツ */}
        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200 pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

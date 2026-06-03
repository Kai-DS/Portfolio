import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";
import Reveal from "./Reveal";
import { projects, type Project } from "@/data/projects";

// Featured カードの配色テーマ
const featuredThemes = {
  neon: {
    card: "border-slate-800 bg-slate-950",
    chip: "bg-cyan-400/10 text-cyan-300",
    desc: "text-slate-300",
    techChip: "bg-white/10 text-slate-100",
    label: "text-cyan-300",
    demoBtn: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    ghBtn: "border-slate-600 text-slate-100 hover:border-slate-400 hover:bg-white/5",
    fallbackBg: "bg-gradient-to-b from-slate-900 to-black",
    imgBg: "bg-slate-900",
  },
  wine: {
    card: "border-rose-300/25 bg-gradient-to-br from-[#7b2d3b] to-[#3f1620]",
    chip: "bg-rose-100/15 text-rose-100",
    desc: "text-rose-100/85",
    techChip: "bg-white/12 text-rose-50",
    label: "text-rose-200",
    demoBtn: "bg-rose-50 text-[#5a2029] hover:bg-white",
    ghBtn: "border-rose-200/40 text-rose-50 hover:border-rose-200/70 hover:bg-white/10",
    fallbackBg: "bg-gradient-to-b from-[#7b2d3b] to-[#3f1620]",
    imgBg: "bg-[#2b0f17]",
  },
} as const;

function FeaturedProject({ project }: { project: Project }) {
  const t = featuredThemes[project.theme ?? "neon"];

  return (
    <article
      className={`overflow-hidden rounded-2xl border text-white shadow-lg ${t.card}`}
    >
      <div className="grid md:grid-cols-2">
        {/* スクリーンショット */}
        {project.images && project.images.length > 0 ? (
          <ProjectGallery
            images={project.images}
            alt={project.name}
            className="h-60 w-full md:h-full md:min-h-[300px]"
            fit="contain"
            bgClass={t.imgBg}
          />
        ) : (
          <div
            className={`flex aspect-[16/10] items-center justify-center p-8 md:aspect-auto md:min-h-[280px] ${t.fallbackBg}`}
          >
            <p className="text-2xl font-black tracking-[0.2em] text-white/90 sm:text-3xl">
              {project.name}
            </p>
          </div>
        )}

        {/* 内容 */}
        <div className="p-8 sm:p-10">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${t.chip}`}
          >
            Featured Project
          </span>
          <h3 className="mt-4 text-2xl font-bold text-white">{project.name}</h3>
          <p className={`mt-3 text-sm leading-relaxed ${t.desc}`}>
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${t.techChip}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5">
            <p
              className={`text-xs font-semibold uppercase tracking-wider ${t.label}`}
            >
              工夫した点
            </p>
            <p className={`mt-1 text-sm leading-relaxed ${t.desc}`}>
              {project.highlights}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${t.demoBtn}`}
              >
                デモを見る
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${t.ghBtn}`}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="制作物"
            description="学んだ技術を活かして制作した Web アプリ・ゲームです。"
          />
        </Reveal>

        <div className="mb-10 space-y-8">
          {featured.map((project) => (
            <Reveal key={project.name}>
              <FeaturedProject project={project} />
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.name} delay={i * 90} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

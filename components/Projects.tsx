import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

function FeaturedProject() {
  const project = projects.find((p) => p.featured);
  if (!project) return null;

  return (
    <article className="mb-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div className="grid md:grid-cols-2">
        {/* ネオン筐体のビジュアル */}
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-5 bg-gradient-to-b from-slate-900 to-black p-8 md:aspect-auto">
          <p
            className="text-3xl font-black tracking-[0.2em] text-cyan-300 sm:text-4xl"
            style={{ textShadow: "0 0 14px rgba(34,211,238,0.85)" }}
          >
            NEON JACK
          </p>
          <div className="flex gap-3">
            {[7, 7, 7].map((n, i) => (
              <div
                key={i}
                className="flex h-16 w-12 items-center justify-center rounded-md border border-cyan-400/60 bg-slate-900 text-2xl font-bold text-cyan-300"
                style={{ boxShadow: "0 0 12px rgba(34,211,238,0.4)" }}
              >
                {n}
              </div>
            ))}
          </div>
          <span className="rounded-full border border-cyan-400/50 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-300">
            MAX BET
          </span>
        </div>

        {/* 内容 */}
        <div className="p-8 sm:p-10">
          <span className="inline-flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Featured Project
          </span>
          <h3 className="mt-4 text-2xl font-bold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              工夫した点
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              {project.highlights}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                デモを見る
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400 hover:bg-white/5"
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
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="制作物"
            description="学んだ技術を活かして制作した Web アプリ・ゲームです。"
          />
        </Reveal>

        <Reveal>
          <FeaturedProject />
        </Reveal>

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

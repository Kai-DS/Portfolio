import Tag from "./Tag";
import ProjectGallery from "./ProjectGallery";
import type { Project } from "@/data/projects";

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

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      {/* ホバー時に現れる上部アクセント */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100"
      />

      {project.images && project.images.length > 0 && (
        <div className="relative">
          <ProjectGallery images={project.images} alt={project.name} />
          {typeof index === "number" && (
            <span
              aria-hidden
              className="absolute left-3 top-3 z-10 rounded-md bg-slate-900/70 px-2 py-0.5 text-xs font-bold text-white backdrop-blur"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <dl className="mt-5 space-y-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              工夫した点
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate-600">
              {project.highlights}
            </dd>
          </div>
          {project.learnings && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                学んだこと
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                {project.learnings}
              </dd>
            </div>
          )}
        </dl>

        {project.liveUrl && (
          <div className="mt-auto pt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              サイトを見る
              <ExternalLinkIcon />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

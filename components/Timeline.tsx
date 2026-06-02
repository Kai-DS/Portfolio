import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { timeline } from "@/data/timeline";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-slate-600">{value}</dd>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Timeline"
            title="これまでの歩み"
            description="学びと制作を通じて、少しずつできることを広げてきました。"
          />
        </Reveal>

        <ol className="relative ml-2 space-y-10 border-l-2 border-slate-200 pl-8">
          {timeline.map((item, i) => (
            <li key={item.period + item.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white"
              />
              <Reveal delay={i * 90}>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-sm font-semibold text-blue-600">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                  <Field label="背景" value={item.background} />
                  <Field label="役割・工夫" value={item.role} />
                  <Field label="学び" value={item.learning} />
                </dl>
              </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

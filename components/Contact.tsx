import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
};

// URL は仮置きです。実際のアカウントに合わせて編集してください。
const links: ContactLink[] = [
  {
    label: "GitHub",
    value: "@Kai-DS",
    href: "https://github.com/Kai-DS",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.73.5.5 5.73.5 12.01c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-section py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="お問い合わせ"
            description="ご連絡は以下からお気軽にどうぞ。インターン・就活に関するお問い合わせもお待ちしています。"
          />
        </Reveal>

        <div className="mx-auto grid max-w-4xl items-start gap-8 lg:grid-cols-5">
          {/* フォーム（メールアドレスは表示せず受信箱に届く） */}
          <div className="lg:col-span-3">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          {/* SNS などのリンク */}
          <div className="lg:col-span-2">
            <Reveal delay={80}>
              <p className="mb-3 text-sm text-slate-500">
                SNS からもお気軽にどうぞ。
              </p>
              <div className="grid gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                      {link.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-900">
                        {link.label}
                      </span>
                      <span className="block truncate text-sm text-slate-500">
                        {link.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

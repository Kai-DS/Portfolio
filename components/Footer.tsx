export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="text-sm font-semibold text-slate-900">
          Portfolio<span className="text-blue-600">.</span>
        </p>
        <p className="text-sm text-slate-500">
          © {year} Kai Sato. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

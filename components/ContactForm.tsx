"use client";

import { useState } from "react";

// Web3Forms のアクセスキー（https://web3forms.com で無料取得）。
// このキーは公開しても問題ないものです（送信専用・あなたのメールはサイトに出ません）。
// 取得した UUID に書き換えてください。
const WEB3FORMS_ACCESS_KEY = "2ec4bdc3-a6ad-4eea-b63d-db09871c79f1";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "ポートフォリオからのお問い合わせ");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* スパム対策のハニーポット（人間には見えない） */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            お名前
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="山田 太郎"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            メールアドレス
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
          <p className="mt-1 text-xs text-slate-400">
            返信のために、ご連絡先のメールアドレスをご記入ください。
          </p>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            内容
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="お問い合わせ内容をご記入ください。"
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:from-blue-700 hover:to-violet-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "送信中…" : "送信する"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
          送信しました。ご連絡ありがとうございます！
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700 ring-1 ring-inset ring-rose-100">
          送信に失敗しました。時間をおいて、もう一度お試しください。
        </p>
      )}
    </form>
  );
}

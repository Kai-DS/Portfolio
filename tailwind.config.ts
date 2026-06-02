import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // サイト全体の落ち着いた青系のカラーパレット
        // background は body 側 (bg-slate-50 = #F8FAFC) で指定
        section: "#D9E6FC", // 青みのあるセクション背景（やや濃いめ）
        // accent-blue   = blue-600   (#2563EB)
        // accent-cyan   = cyan-500   (#06B6D4)
        // accent-purple = violet-600 (#7C3AED)
        // main-text     = slate-900  (#0F172A)
        // sub-text      = slate-500  (#64748B)
        // border        = slate-200  (#E2E8F0)
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Hiragino Kaku Gothic ProN",
          "Hiragino Sans",
          "Yu Gothic",
          "Meiryo",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "64rem",
      },
    },
  },
  plugins: [],
};

export default config;

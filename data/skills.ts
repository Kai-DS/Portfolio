export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "言語",
    items: ["Python", "JavaScript", "HTML", "CSS", "PHP", "SQL"],
  },
  {
    title: "ライブラリ / フレームワーク",
    items: ["Pandas", "NumPy", "Matplotlib", "scikit-learn", "Flask", "Flet"],
  },
  {
    title: "ツール",
    items: [
      "GitHub",
      "VS Code",
      "SQLite",
      "Vercel",
      "Claude Code",
      "ChatGPT",
      "NotebookLM",
    ],
  },
  {
    title: "専門領域",
    items: [
      "データ分析",
      "機械学習",
      "Web アプリ開発",
      "生成 AI 活用",
      "データ可視化",
    ],
  },
];

// いま重点的に学んでいる分野（適宜編集してください）
export const learningNow: string[] = [
  "深層学習 (PyTorch)",
  "統計検定 2級",
  "Next.js",
  "SQL チューニング",
  "クラウド (AWS)",
];

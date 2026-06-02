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

export type Certification = {
  /** 資格・検定名 */
  name: string;
  /** 発行機関 */
  org: string;
  /** 取得・受験年月（例: "2025年5月"） */
  date: string;
  /** 状態（省略時は「取得」扱い） */
  status?: "取得" | "取得予定" | "学習中";
};

// 取得した資格をここに追加してください（例を参考に。今は空でOKです）。
// 例: { name: "基本情報技術者試験", org: "IPA 情報処理推進機構", date: "2025年5月", status: "取得" }
export const certifications: Certification[] = [];

// いま重点的に学んでいる分野（適宜編集してください）
export const learningNow: string[] = [
  "深層学習 (PyTorch)",
  "ML",
  "Next.js",
  "SQL チューニング",
  "クラウド (AWS)",
];

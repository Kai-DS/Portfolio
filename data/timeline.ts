// タイムラインのカテゴリ。フィルタ用のキーとして使う。
export type TimelineCategory =
  | "education" // 学歴
  | "event" // イベント
  | "hackathon" // ハッカソン
  | "award" // 受賞
  | "research" // 研究
  | "internship" // インターン
  | "learning" // 学習
  | "certification" // 資格
  | "development" // 開発
  | "presentation"; // 学会発表

export type TimelineItem = {
  /** 表示する年月（例: "2024.10"）。"YYYY.MM" 形式にすると正しく並び替えられます。 */
  date: string;
  /** 出来事のタイトル */
  title: string;
  /** カテゴリ（複数指定可。フィルタとタグ表示に使われる） */
  categories: TimelineCategory[];
  /** 説明文 */
  description: string;
};

// 出来事を追加・編集してください。順番は問いません（画面側で並び替えます）。
export const timeline: TimelineItem[] = [
  {
    date: "2024.04",
    title: "データサイエンス学部 入学",
    categories: ["education"],
    description:
      "AI時代と呼ばれる社会の中で、技術に触れながらその流れを学びたいと考え、データサイエンス学部に入学しました。",
  },
  {
    date: "2024.09",
    title: "未来創造PJ 配属",
    categories: ["research"],
    description:
      "1年後期からゼミに配属され、研究活動に触れる機会となりました。後期末の発表に向けてテーマを決め、卒業研究につながる基礎的な取り組みとして活動しました。",
  },
  {
    date: "2025.01",
    title: "未来創造PJ ポスター発表",
    categories: ["research", "development", "award"],
    description:
      "配属先のゼミの特色に合わせ、半年間の成果をポスター発表としてまとめました。Webアプリ制作を中心とするゼミに所属していたため、ダイエット中でも外食先を選びやすくするWebアプリを作成しました。着眼点や既存サービスとの差別化が評価され、学科賞をいただきました。",
  },
  {
    date: "2025.12",
    title: "学部内ハッカソン 参加",
    categories: ["hackathon", "development", "award"],
    description:
      "学部内の学生でチームを組み、ハッカソンに参加しました。チームメンバーが地方観光に関心を持っていたことから、地図とAIを活用した観光パンフレット自動生成アプリを制作しました。観光スポットを選択すると、AIがルートや紹介文をまとめ、HTML/PDF形式の旅行パンフレットを作成できる仕組みです。実用性や汎用性が評価され、審査員賞をいただきました。",
  },
];

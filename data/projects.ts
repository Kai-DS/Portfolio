export type Project = {
  name: string;
  description: string;
  /** 使用技術タグ */
  tech: string[];
  /** 工夫した点 */
  highlights: string;
  /** 学んだこと */
  learnings: string;
  /** 公開サイト / デモの URL（仮の場合は "#"） */
  liveUrl?: string;
  /** GitHub リポジトリの URL */
  githubUrl?: string;
  /** 最も目立たせる Featured Project */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Triplet",
    description:
      "Python を用いて制作した Web アプリケーション。ユーザーがブラウザ上で操作できるアプリとして実装し、Web アプリ開発の基礎を学ぶために制作した。",
    tech: ["Python", "HTML", "CSS"],
    highlights:
      "ブラウザ上で直感的に操作できるよう、シンプルな画面構成と分かりやすい導線を意識した。",
    learnings:
      "Python でサーバー側の処理を書きながら、Web アプリが動く仕組みの基礎を理解した。",
    liveUrl: "https://gms.gdl.jp/~ka1/Triplet/index.py/",
  },
  {
    name: "e-port",
    description:
      "ログイン機能を備えた Web アプリケーション。ユーザー認証・画面遷移・フォーム処理など、実用的な Web アプリに必要な基本機能を意識して制作した。",
    tech: ["Python", "HTML", "CSS", "SQLite"],
    highlights:
      "ユーザー認証・フォーム処理・画面遷移を組み合わせ、実用的な Web アプリの構造を意識して設計した。",
    learnings:
      "SQLite を用いたデータ管理と、ログイン状態に応じた画面制御の実装方法を学んだ。",
    liveUrl: "https://gms.gdl.jp/~ka1/e-port/index.py/login",
  },
  {
    name: "Diet App",
    description:
      "食事や体重管理をテーマにした Web アプリケーション。日々の記録を通じて、生活習慣の改善や自己管理を支援することを目的に制作した。",
    tech: ["PHP", "HTML", "CSS"],
    highlights:
      "毎日の記録を続けやすいよう、入力の手間を減らしたシンプルな UI にこだわった。",
    learnings:
      "PHP でのフォーム処理とデータ保存を通じて、サーバーサイド開発の流れを身につけた。",
    liveUrl: "https://gms.gdl.jp/~ka1/diet2.php",
  },
  {
    name: "NEON JACK",
    description:
      "スロット風の Web ゲーム。黒基調と青ネオンの筐体デザインをベースに、3 リール・停止ボタン・MAXBET・レバー・カウンター表示などを実装した。見た目だけでなく、ゲームとして遊べる操作感と演出を意識して制作した。",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights:
      "黒基調 × 青ネオンの筐体デザインを再現し、3 リール・停止ボタン・MAXBET・レバー・カウンターなど、実機のような操作感と演出にこだわった。",
    learnings:
      "JavaScript でのアニメーションや状態管理を通じて、見た目と遊びやすさを両立させるゲーム実装の難しさと面白さを学んだ。",
    // TODO: 公開後に実際の URL へ差し替えてください（仮置き）。
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

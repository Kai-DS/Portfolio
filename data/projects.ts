export type Project = {
  name: string;
  description: string;
  /** 使用技術タグ */
  tech: string[];
  /** 工夫した点 */
  highlights: string;
  /** 学んだこと（任意） */
  learnings?: string;
  /** 公開サイト / デモの URL（仮の場合は "#"） */
  liveUrl?: string;
  /** GitHub リポジトリの URL */
  githubUrl?: string;
  /** 最も目立たせる Featured Project */
  featured?: boolean;
  /** Featured カードの配色テーマ（既定は neon） */
  theme?: "neon" | "wine";
  /** スクリーンショット画像（複数可。先頭がカバー画像） */
  images?: string[];
};

export const projects: Project[] = [
  {
    name: "Triplet",
    description:
      "地図とAIを活用した、福岡観光パンフレット自動生成Webアプリケーション。マップ上で行きたい観光スポットを選択すると、AIがルートや紹介文をまとめ、HTML/PDF形式の旅行パンフレットを生成できる仕組みとして制作した。",
    tech: ["Python", "HTML", "CSS", "AI", "PDF生成"],
    highlights:
      "観光スポットを選ぶだけで旅行プランが形になるよう、地図上での選択、AIによる文章生成、パンフレット出力までの流れを一つの体験としてつなげた。",
    learnings:
      "地図情報とAI生成を組み合わせることで、ユーザーの入力に応じて内容が変化するWebアプリの設計を学んだ。また、HTML/PDFとして出力することで、Web上の操作を実際に持ち歩ける成果物につなげる考え方を身につけた。",
    liveUrl: "https://gms.gdl.jp/~ka1/Triplet/index.py/",
    images: [
      "/images/projects/Triplet/1.png",
      "/images/projects/Triplet/2.png",
      "/images/projects/Triplet/3.png",
    ],
  },
  {
    name: "e-port",
    description:
      "学内で制作した作品や学習成果を記録・共有するためのWebアプリケーション。授業ごとに制作物を整理できるほか、コメント機能やDM機能を備え、学生同士が制作物を見ながら交流できる仕組みを意識して制作した。",
    tech: ["Python", "HTML", "CSS", "SQLite", "ログイン機能", "コメント機能", "DM機能"],
    highlights:
      "単に作品を掲載するだけでなく、授業ごとに整理できる構造にすることで、学習の記録として見返しやすくした。また、コメントやDM機能を入れることで、学内向けのポートフォリオとして交流が生まれる形を意識した。",
    learnings:
      "ユーザー認証、データ保存、コメント投稿、画面遷移など、実用的なWebアプリに必要な基本機能を組み合わせて実装する流れを学んだ。",
    liveUrl: "https://gms.gdl.jp/~ka1/e-port/index.py/login",
    images: ["/images/projects/e-port/1.png"],
  },
  {
    name: "Diet App",
    description:
      "ダイエット中でも外食先を選びやすくすることを目的とした、マップ型の食事支援Webアプリケーション。検索範囲を選択し、現在地周辺の候補から食事場所を探せるプロトタイプとして制作した。",
    tech: ["PHP", "HTML", "CSS", "マップ", "検索機能"],
    highlights:
      "ダイエット中の外食では、店選びに迷いやすいという課題に着目し、マップ上から候補を探せる形にした。検索範囲を選べるようにすることで、利用場面に合わせて探しやすい設計を意識した。",
    learnings:
      "PHPを用いたWebページの処理や、条件に応じて表示内容を変える基本的な仕組みを学んだ。また、実際の生活課題をWebアプリとして形にする流れを経験した。",
    liveUrl: "https://gms.gdl.jp/~ka1/diet2.php",
    images: ["/images/projects/diet/1.png"],
  },
  {
    name: "CASINO HUB",
    description:
      "複数のカジノ風ゲームを1つのロビーから遊べる、無料チップ専用のシミュレーションゲーム Web アプリケーション。カジノに入場してテーブルに座る体験を重視し、緑のポーカーテーブル上に配られたトランプカードから各ゲーム（NEON JACK／Video Poker など）へ入場できる仕組みとして制作した。現金・換金要素は一切持たせていない。現在も開発を続けており、収録ゲームや演出を追加しながら作り込んでいる制作途中のプロジェクト。",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Zustand", "Vitest"],
    highlights:
      "単なるゲーム一覧ではなく「カジノに入場する体験」を軸に、ロビーのカード配布演出からレート選択・プレイ・チップ残高や履歴の保存までを一つの流れでつなげた。設計ではゲームロジックを UI から純粋関数として分離し、各ゲームはアダプタ層だけでカジノ経済に接続。新しいゲームを足してもロビーを書き換えずに拡張でき、純ロジックには単体テストも用意した。",
    liveUrl: "https://casino-site-base.vercel.app/",
    featured: true,
    theme: "wine",
    images: ["/images/projects/casino-site/1.png"],
  },
  {
    name: "NEON JACK",
    description:
      "CASINO HUB に収録するゲームの一つとして制作した、スロット風の Web ゲーム。黒基調と青ネオンの筐体デザインをベースに、3 リール・停止ボタン・MAXBET・レバー・カウンター表示などを実装した。見た目だけでなく、ゲームとして遊べる操作感と演出を意識して制作した。",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights:
      "黒基調 × 青ネオンの筐体デザインを再現し、3 リール・停止ボタン・MAXBET・レバー・カウンターなど、実機のような操作感と演出にこだわった。",
    learnings:
      "JavaScript でのアニメーションや状態管理を通じて、見た目と遊びやすさを両立させるゲーム実装の難しさと面白さを学んだ。",
    liveUrl: "https://casino-front-nine.vercel.app",
    featured: true,
    images: ["/images/projects/SLOT/1.png"],
  },
];

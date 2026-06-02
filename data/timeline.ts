export type TimelineItem = {
  /** 表示する期間（例: 2023.04） */
  period: string;
  /** 出来事のタイトル */
  title: string;
  /** 背景：なぜそれに取り組んだのか */
  background: string;
  /** 役割・工夫：自分が何をしたか */
  role: string;
  /** 学び：そこから得たもの */
  learning: string;
};

// 内容は実際の経歴に合わせて自由に編集してください。
export const timeline: TimelineItem[] = [
  {
    period: "2023.04",
    title: "データサイエンス学部に入学",
    background:
      "高校時代に統計やプログラミングに興味を持ち、データから課題を解決する学問を学ぶためにデータサイエンス学部へ進学した。",
    role: "数学・統計・プログラミングの基礎を中心に履修し、Python でのデータ処理を授業外でも進めた。",
    learning:
      "データを正しく扱うための基礎体力と、新しいことを学び続ける習慣が身についた。",
  },
  {
    period: "2023.09",
    title: "Web 開発の学習をスタート",
    background:
      "授業で学んだ Python を、実際に動くものづくりに活かしたいと考えるようになった。",
    role: "HTML / CSS / Python を使い、ブラウザ上で動く小さな Web アプリ（Triplet）を制作・公開した。",
    learning:
      "設計から実装・公開までの一連の流れと、ユーザー目線で UI を考えることの大切さを学んだ。",
  },
  {
    period: "2024.04",
    title: "実用的な Web アプリ制作に挑戦",
    background:
      "ログインやデータ保存など、より実践的な機能を持つアプリに挑戦したいと考えた。",
    role: "認証と DB 連携を備えた e-port や、PHP による Diet App を制作。SQLite でのデータ管理も経験した。",
    learning:
      "ユーザー認証・データ永続化・画面遷移など、実用アプリに必要な構成要素を理解した。",
  },
  {
    period: "2024.10",
    title: "データ分析・機械学習へ展開",
    background:
      "制作スキルに加えて、データから価値を引き出す力を伸ばしたいと考えた。",
    role: "Pandas や scikit-learn を用いたデータ分析と、Matplotlib による可視化に取り組んだ。",
    learning:
      "前処理からモデル構築・評価までの分析プロセスと、結果を伝える可視化の重要性を学んだ。",
  },
];

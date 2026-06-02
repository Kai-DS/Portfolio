# Portfolio — 佐藤 快

データサイエンス学部の学生向け個人ポートフォリオサイト。
就活・インターン応募で見せられる、シンプルで見やすい 1 ページ完結型サイトです。

**技術構成:** Next.js (App Router) / TypeScript / Tailwind CSS / Vercel デプロイ対応

## セクション構成

- **Hero / About** — 肩書き・名前・所属・キャッチコピー・自己紹介・興味分野タグ
- **Timeline** — 経歴を時系列で表示（各項目に「背景 / 役割・工夫 / 学び」）
- **Skills** — 言語 / ライブラリ・フレームワーク / ツール / 専門領域
- **Projects** — 制作物をカード表示（NEON JACK を Featured Project として強調）
- **Contact** — GitHub / X / Email へのリンク

## ディレクトリ構成

```
Portfolio/
├── app/
│   ├── globals.css        # Tailwind 読み込み + スムーズスクロール
│   ├── layout.tsx         # ルートレイアウト・フォント・メタデータ
│   └── page.tsx           # 各セクションを組み立てるトップページ
├── components/
│   ├── Header.tsx         # ナビ（モバイルメニュー対応）
│   ├── Hero.tsx           # Hero / About
│   ├── Timeline.tsx       # 縦線つきタイムライン
│   ├── Skills.tsx         # スキルカテゴリ + タグ
│   ├── Projects.tsx       # Projects（Featured + 通常カード）
│   ├── ProjectCard.tsx    # 通常プロジェクトのカード
│   ├── Contact.tsx        # 連絡先リンク
│   ├── Footer.tsx         # フッター
│   ├── SectionHeading.tsx # 各セクション共通の見出し
│   └── Tag.tsx            # タグ UI
├── data/
│   ├── timeline.ts        # 経歴データ
│   ├── skills.ts          # スキルデータ
│   └── projects.ts        # プロジェクトデータ
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

> 表示するテキストはすべて `data/` 配下のファイルにまとまっています。
> 経歴・スキル・プロジェクトの内容を変更したいときは、まずここを編集してください。

## 実行方法

```bash
# 1. 依存パッケージをインストール
npm install

# 2. 開発サーバーを起動（http://localhost:3000）
npm run dev

# 本番ビルドの確認
npm run build
npm start
```

Node.js は 20.9 以上を推奨します（Next.js 16 の要件）。

## 内容の編集ポイント

- **プロフィール文・キャッチコピー** … `components/Hero.tsx`
- **経歴（タイムライン）** … `data/timeline.ts`
- **スキル** … `data/skills.ts`
- **プロジェクト** … `data/projects.ts`
- **連絡先リンク（GitHub / X / Email）** … `components/Contact.tsx`

### 仮置きになっている項目

- **NEON JACK の URL** … `data/projects.ts` の `liveUrl` / `githubUrl` が `"#"` です。公開後に差し替えてください。
- **X のリンク** … `components/Contact.tsx` の `https://x.com/` を実際のアカウントに変更してください。

## Vercel へのデプロイ手順

1. このリポジトリを GitHub に push する（このプロジェクトは既に `Kai-DS/Portfolio` に紐づいています）。
2. [vercel.com](https://vercel.com) にアクセスし、GitHub アカウントでログイン。
3. **「Add New… → Project」** から `Portfolio` リポジトリを Import。
4. Framework は **Next.js** が自動検出されるので、設定はそのまま **Deploy** を押す。
   - Build Command: `next build`（自動）
   - Output: 自動
   - 環境変数は不要
5. 数十秒で `https://<プロジェクト名>.vercel.app` が発行されます。
6. 以降は `main` ブランチへ push するたびに自動で再デプロイされます。

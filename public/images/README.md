# 画像フォルダ

サイトで使う写真・画像を置く場所です。`public/` 配下のファイルは
`/` から始まる URL で参照できます（例: `public/images/profile/me.jpg` → `/images/profile/me.jpg`）。

## フォルダ構成

```
public/images/
├── profile/    # プロフィール写真・アバター
└── projects/   # 各プロジェクトのスクリーンショット
```

## 置くファイルの目安

| 用途             | 置き場所            | 推奨サイズ・形式                     |
| ---------------- | ------------------- | ------------------------------------ |
| プロフィール写真 | `profile/`          | 正方形 400×400px 程度 / jpg・png・webp |
| プロジェクト画像 | `projects/`         | 横長 1200×750px 程度 / jpg・png・webp |
| OGP 画像（任意） | `public/` 直下      | 1200×630px / png・jpg                |

ファイル容量は 1 枚あたり 300KB 以内が目安です（webp 推奨）。
ファイル名は半角英数字・ハイフンで（例: `triplet.png`, `neon-jack.png`）。

## 使い方（コード側での参照）

画像を最適化して表示できる Next.js の `next/image` を使うのがおすすめです。

```tsx
import Image from "next/image";

<Image
  src="/images/profile/me.jpg"
  alt="佐藤 快"
  width={400}
  height={400}
  className="rounded-full"
/>
```

### 例 1: プロフィール写真をアバターに使う

`components/Hero.tsx` の「快」と表示している円（アバター）を、写真に差し替える場合：

```tsx
// 変更前（イニシャル表示）
<div className="flex h-16 w-16 ... ">快</div>

// 変更後（写真表示）
<Image
  src="/images/profile/me.jpg"
  alt="佐藤 快"
  width={64}
  height={64}
  className="h-16 w-16 rounded-full object-cover ring-4 ring-white"
/>
```

### 例 2: プロジェクトのスクリーンショットを使う

`data/projects.ts` に画像パスの項目を追加しておくと、カード側で参照できます。

```ts
// data/projects.ts の各プロジェクトに追記
image: "/images/projects/triplet.png",
```

その後 `components/ProjectCard.tsx` で `project.image` を `next/image` で表示します。

> 画像を追加したら、`.gitkeep` は消さなくても問題ありません（空フォルダ維持用の目印です）。

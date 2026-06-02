以下のポートフォリオサイトを参考に、大学生向けの個人ポートフォリオサイトを実装してください。

参考サイト：
https://dangara215-portfolio.vercel.app/
https://suzukioff.com

目的：
データサイエンス学部の大学生として、学習内容・制作物・スキルを見せるためのポートフォリオサイトを作りたいです。
就活やインターン応募で見せられる、シンプルで見やすいサイトにしてください。

技術構成：
- Next.js
- TypeScript
- Tailwind CSS
- Vercelにデプロイしやすい構成
- 1ページ完結型
- レスポンシブ対応
- 白背景ベースの清潔感あるデザイン
- カードUI、タグ、タイムライン、スムーズスクロールを使う
- 過度なアニメーションは不要

ページ構成：
1. Header
   - About
   - Timeline
   - Skills
   - Projects
   - Contact
   のナビゲーションを設置
   ※Presentationsセクションは不要

2. Hero / About
   - 肩書き：Data Science Student
   - 名前：佐藤 快
   - 所属：データサイエンス学部
   - キャッチコピー：AI・データ分析・Web開発を通じて、身近な課題を形にする。
   - 自己紹介文を配置
   - 興味分野タグを表示
     例：機械学習、データ分析、Web開発、生成AI、可視化

3. Timeline
   経歴を時系列で表示。
   各項目は「背景」「役割・工夫」「学び」の3つを持つカード形式にする。

4. Skills
   以下のカテゴリに分けて表示。
   - 言語：Python, JavaScript, HTML, CSS, PHP, SQL
   - ライブラリ / フレームワーク：Pandas, NumPy, Matplotlib, scikit-learn, Flask, Flet
   - ツール：GitHub, VS Code, SQLite, Vercel, Claude Code, ChatGPT, NotebookLM
   - 専門領域：データ分析, 機械学習, Webアプリ開発, 生成AI活用, データ可視化

5. Projects
   以下の4つのプロジェクトをカード形式で表示する。

   1. Triplet
      URL：
      https://gms.gdl.jp/~ka1/Triplet/index.py/

      概要：
      Pythonを用いて制作したWebアプリケーション。
      ユーザーがブラウザ上で操作できるアプリとして実装し、Webアプリ開発の基礎を学ぶために制作した。

      使用技術：
      Python / HTML / CSS

      表示内容：
      - 概要
      - 使用技術タグ
      - 工夫した点
      - 学んだこと
      - サイトを見るボタン

   2. e-port
      URL：
      https://gms.gdl.jp/~ka1/e-port/index.py/login

      概要：
      ログイン機能を備えたWebアプリケーション。
      ユーザー認証、画面遷移、フォーム処理など、実用的なWebアプリに必要な基本機能を意識して制作した。

      使用技術：
      Python / HTML / CSS / SQLite

      表示内容：
      - 概要
      - 使用技術タグ
      - 工夫した点
      - 学んだこと
      - サイトを見るボタン

   3. Diet App
      URL：
      https://gms.gdl.jp/~ka1/diet2.php

      概要：
      食事や体重管理をテーマにしたWebアプリケーション。
      日々の記録を通じて、生活習慣の改善や自己管理を支援することを目的に制作した。

      使用技術：
      PHP / HTML / CSS

      表示内容：
      - 概要
      - 使用技術タグ
      - 工夫した点
      - 学んだこと
      - サイトを見るボタン

   4. NEON JACK
      URL：
      仮置きでよい。あとで差し替えられるようにする。

      概要：
      スロット風のWebゲーム。
      黒基調と青ネオンの筐体デザインをベースに、3リール、停止ボタン、MAXBET、レバー、カウンター表示などを実装した。
      見た目だけでなく、ゲームとして遊べる操作感と演出を意識して制作した。

      使用技術：
      HTML / CSS / JavaScript

      表示内容：
      - 概要
      - 使用技術タグ
      - 工夫した点
      - 学んだこと
      - デモリンク
      - GitHubリンク

   Projectsセクションでは、NEON JACKをFeatured Projectとして最も目立つカードにする。
   他の3つより少し大きく表示し、画像・概要・使用技術・工夫点・デモリンクを置ける構成にする。

6. Contact
   - GitHub
   - X
   - Email
   へのリンク欄を作る。URLは仮置きでよい。

デザイン要件：
- 参考サイトのように、落ち着いたレイアウトにする
- セクションごとに余白を広めに取る
- スキルや興味分野はタグUI
- プロジェクトはカードUI
- タイムラインは縦線つき
- スマホでも読みやすくする
- コードは保守しやすいように、componentsフォルダに分割する
- Projectsは制作物が一番目立つようにする
- Presentationsセクションは作らない

出力してほしいもの：
- 完成するコード一式
- ディレクトリ構成
- 実行方法
- Vercelへのデプロイ手順
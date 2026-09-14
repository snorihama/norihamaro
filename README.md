# 東大麻婆愛好会 乘濵楼 公式サイト

東大麻婆愛好会「乘濵楼」の公式サイトです。五月祭の特設ページと新歓（勧誘）ページを配信しています。

- 本番URL: https://www.norihamaro.com/
- ホスティング: [Vercel](https://vercel.com/)

## 技術構成

| 用途 | 使用技術 |
| --- | --- |
| フレームワーク | [Next.js](https://nextjs.org/)（App Router） |
| 言語 | TypeScript / React |
| スタイリング | [Tailwind CSS v4](https://tailwindcss.com/) |
| Lint / Format | [Biome](https://biomejs.dev/) |
| 未使用コード検出 | [Knip](https://knip.dev/) |
| アイコン | [@remixicon/react](https://remixicon.com/) |

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いて表示を確認してください。

## 開発の基本フロー

コードを変更したら、PRを出す前に以下を実施してください。

1. `npm run dev` でブラウザ上の見た目・動作を実際に確認する
2. `npm run check:fix-unsafe` でフォーマット・Lintエラーを自動修正する
3. `npm run knip` で使われなくなったコード・依存関係が残っていないか確認する
4. `npm run build` がエラーなく完了することを確認する

このプロジェクトにはCI（自動チェック）は設定されていないため、上記のコマンドをコミット前に手元で必ず実行してください。

## Lint / Format / Check コマンド一覧

Biomeが Lint（コードの誤り・お作法チェック）と Format（見た目の整形）の両方を担っています。

| コマンド | 内容 |
| --- | --- |
| `npm run lint` | Lintエラーがないか確認する（修正はしない） |
| `npm run lint:fix` | Lintエラーを自動修正する（安全な修正のみ） |
| `npm run lint:fix-unsafe` | Lintエラーを自動修正する（挙動が変わりうる修正も含む。差分を必ず確認すること） |
| `npm run format` | フォーマット崩れがないか確認する（修正はしない） |
| `npm run format:fix` | フォーマットを自動整形する |
| `npm run check` | Lint・Format・import順序をまとめて確認する |
| `npm run check:fix` | 上記をまとめて自動修正する（安全な修正のみ） |
| `npm run check:fix-unsafe` | 上記をまとめて自動修正する（挙動が変わりうる修正も含む。差分を必ず確認すること） |
| `npm run knip` | 使われていないファイル・export・依存パッケージを検出する |

## ディレクトリ構成

```
src/
  app/                     Next.js App Router によるルーティング
    page.tsx                 "/"（next.config.ts のリダイレクト設定により実質 /events/2026 に転送される。実質未使用）
    welcome/
      page.tsx                "/welcome" 新歓・勧誘ページ（メタデータのみ）
      _components/            "/welcome" 専用のパーツ（Home, Calendar, Rect）
    events/
      2025/
        page.tsx               過去（2025年）の五月祭ページ（メタデータのみ）
        _components/           2025年ページ専用のパーツ（他の年度からは参照しない）
      2026/
        page.tsx               今年（2026年）の五月祭ページ（メタデータのみ）
        _components/           2026年ページ専用のパーツ（他の年度からは参照しない）
    layout.tsx               全ページ共通レイアウト・フォント・グローバルCSS読み込み
    globals.css               Tailwind の設定・カラーパレット・アニメーション定義（複数機能で共有するものだけ）
  components/
    ui/                      どのページ・年度からも使い回せる汎用UIパーツのみ
  context/                   React Context（HeroAreaProvider など）
  lib/
    site-assets.ts             favicon・OGP画像のURLを型安全に組み立てるヘルパー（後述）
  assets/                    next/image で読み込む画像（アプリにバンドルされる。詳細は後述）
    branding/                  ロゴ・ヘッダー・QRコードなど
    photos/                    料理・人物などの写真
    map/                       アクセスマップ
public/                       favicon・OGP画像など「固定のURLで直接アクセスされる」静的アセットのみ
scripts/                      画像加工用のPythonスクリプト（Next.jsアプリとは独立）
  assets/                      その加工スクリプトが読み込む「加工前の生画像」（詳細は後述）
```

`app/` の各ルート配下にはページの中身が入る `page.tsx`（メタデータ定義のみ）と、そのページ専用のパーツをまとめた `_components/` を置いています。`_components` は Next.js の「private folder」という命名規則で、頭に `_` を付けたフォルダはルーティング対象から除外される、というNext.js公式の仕組みです。これにより、「このフォルダはページの一部にすぎず、単体のURLにはならない」ということが名前だけで分かるようにしています。

## コンポーネント設計の方針（重要）

このプロジェクトでは、コンポーネントを置く場所を「使い回すかどうか」で分けています。

- **`src/components/ui/`**：年度やページに関係なく使い回す汎用パーツ（区切り線・セクション枠・アニメーションなど）だけを置く場所です。ここには「今年の日付」のような特定の年度・企画限定の文言をハードコードしないでください。
- **各ページの `_components/`**（例：`app/events/2026/_components/`）：そのページでしか使わない前提のパーツを置く場所です。日程・値段・キャッチコピーなどの文言はそのままハードコードして構いません。

以前は五月祭特設ページのコンポーネントが `src/components/event/` に一つだけ置かれ、`/events/2025` と `/events/2026` の両方から同じ実装を共有していました。そのため一方の年度向けに文言や日付を変更すると、もう一方（アーカイブとして残しておきたいページ）の表示まで意図せず変わってしまう問題がありました。これを解消するため、五月祭特設ページのコンポーネントは年度ごとに `app/events/<year>/_components/` として物理的に分離しています。

今後の開発では、次の基準でコンポーネントの置き場所を判断してください。

- 迷ったときの基準は「このコンポーネントは他のページ・他の年度でも同じ内容で使い回すか？」。
  - 使い回す → `components/ui/` に置く（文言・年度依存の値をハードコードしない）。
  - 使い回さない（そのページ・その年度限定） → そのページの `_components/` に閉じて実装する。既存の他ページ・他年度の `_components/` を直接編集しない。
- 新しい年度の五月祭ページ（例：2027年）を追加するときは、`app/events/2026/_components/` の内容を新しい `app/events/2027/_components/` にコピーしてから編集してください。既存の年度のフォルダはそのまま残し、アーカイブとして固定します。

このコンポーネント配置の考え方は、CSS（スタイル）にもそのまま当てはまります。

- `src/app/globals.css`：複数のページ・複数の年度で共有する色やアニメーションだけを置く（`--color-primary` など）。1つの機能でしか使わない値をここに置かない。
- 1つのコンポーネント・機能でしか使わない値やアニメーションは、そのコンポーネントの隣に置く（後述の「スタイリング」参照）。

## スタイリング

Tailwind CSS v4 を使用しています。カラーパレットや、複数機能で共有するアニメーションは `src/app/globals.css` の `@theme` ブロックで一元管理されています（`--color-primary`, `--color-beige` など）。新しい色や、複数機能で使うアニメーションを追加する場合はこのファイルに追記してください。逆に、ある1つのコンポーネントでしか使わない値を `globals.css` に追加しないでください。

### コンポーネント専用のCSSファイル（例外的な扱い）

基本はTailwindのユーティリティクラスで十分ですが、`src/components/ui/vertical-text/style.css` や `src/app/events/2026/_components/overlay/AnimatedText/AnimatedText.css` のように、コンポーネントと同じフォルダにプレーンCSSファイルを置き、`import "./xxx.css"` で読み込むケースもあります。これは主に、JS側の値（例：アニメーションの再生時間）を動的にスタイルへ渡す必要がある場合の対処です。

**重要な注意点**：Tailwind CSS はソースコードを静的にスキャンしてCSSを生成するため、次のようにクラス名の一部をテンプレートリテラルで動的に組み立てると、対応するCSSがビルドされず、見た目上何も起こらなくなります。

```tsx
// NG: durationが変数のため、Tailwindがこのクラスに対応するCSSを生成できない
className={`[transition:opacity_${duration}s_ease]`}
```

値を動的にしたい場合は、CSS変数とインラインスタイルを使ってください。

```tsx
// OK: クラス名自体は静的な文字列のまま、値だけをCSS変数経由で渡す
<div
  className="my-static-class"
  style={{ "--duration": `${duration}s` } as React.CSSProperties}
/>
```

```css
/* 同じフォルダの .css ファイル側 */
.my-static-class {
  transition: opacity var(--duration, 1s);
}
```

## 画像・アセット管理

このプロジェクトでは画像を置き場所によって3種類に分けています。少し複雑なので、迷ったら以下の表と判断基準に沿って決めてください。

| 置き場所 | 何を置くか | 読み込み方 | 安全性 |
| --- | --- | --- | --- |
| `public/` | favicon・OGP画像など、**アプリの外部（ブラウザのタブ、SNSのクローラーなど）から固定のURLで直接アクセスされるもの** | `src/lib/site-assets.ts` 経由の文字列パス | △ 共通ヘルパーで一元化されるため重複や表記ゆれは防げるが、ファイルが実在するかまではチェックされない |
| `src/assets/` | ページ内で `<Image>` として表示する写真・ロゴなど、**アプリの内部でしか使わないもの** | `import` 文で読み込む | ◎ 存在しないファイルを import しようとするとビルドエラーになる |
| `scripts/assets/` | 加工前の生画像（高解像度のロゴ・圧縮前のOG画像など）。**Next.js アプリからは一切参照しない** | Python スクリプトからのみ読み込む | — |

### なぜ分けているか

- `public/` の中身はそのままの URL（例: `https://www.norihamaro.com/favicons/club-icon/32x32.ico`）で外部から参照されるため、favicon や OGP画像のように **URLが固定でなければ困るもの以外は置かない** ようにしています。ここに写真やロゴまで置いてしまうと、「本当に使われているファイルはどれか」が名前だけでは分からなくなり、今回整理する前のように未使用ファイルが溜まっていく原因になります。
- `src/assets/` の画像は Next.js のビルド時に `import` で解決されるため、ファイル名を打ち間違えたり、ファイルを消してしまった場合に **ビルドがエラーで教えてくれます**。`public/` の文字列パス（例: `"/mapo-pan.jpg"`）は単なる文字列なので、打ち間違えてもビルドは通ってしまい、本番で画像が表示されずに気づく、という事故が起きやすいです。
- `scripts/assets/` は Photoshop の元データのようなもので、サイトの表示には直接関係ありません。圧縮前のOG画像（十数MB）や、favicon生成前の高解像度ロゴなどがここに入ります。ここが `public/` と混ざっていると、「配信される完成品」と「加工前の下書き」の見分けがつかなくなります。

### 新しい画像を追加するときの判断基準

新しい画像を追加するときは、次の順に自問してください。

1. **favicon や OGP画像（SNSシェア時のプレビュー画像）か？** → `public/` に置き、`src/lib/site-assets.ts` にパスを追加する。
2. **ページ内のコンポーネントで `<Image>` として表示するか？** → `src/assets/` の中の適切なフォルダ（`branding/` `photos/` `map/` など、なければ新設してよい）に置き、コンポーネント側で `import` する。
3. **Pythonスクリプトで圧縮・変換する前の元データか？** → `scripts/assets/` に置く。

判断に迷ったら「このファイルのURLを直接誰かに送ったり、`<meta>` タグに書いたりする必要があるか？」を基準にしてください。必要ならYESの場合は `public/`、それ以外（アプリのコンポーネントの中だけで使う）は `src/assets/` です。

### コード例

`src/assets/` の画像は文字列パスではなく `import` してください。

```tsx
// NG: 文字列パスだと、ファイル名を打ち間違えても気づけない（ビルドは通ってしまう）
<Image src="/mapo-pan.jpg" alt="麻婆鍋" width={500} height={500} />

// OK: import することで、存在しないファイルを参照した瞬間にビルドエラーになる
import mapoPan from "@/assets/photos/mapo-pan.jpg";
// ...
<Image src={mapoPan} alt="麻婆鍋" width={500} height={500} />
```

`public/` 配下の favicon・OGP画像は、`src/lib/site-assets.ts` の `getFaviconIcons()` と `ogImages` を経由してください。直接パスをハードコードすると、ブランド名やドメイン名を含む同じ配列が各ページに重複してしまいます。

```tsx
// NG: 各ページの metadata に同じURLをハードコードする
icons: {
  icon: [
    { url: "https://www.norihamaro.com/icons/club-icon_16x16.ico", sizes: "16x16", type: "image/x-icon" },
    // ...サイズの数だけ繰り返し、ページの数だけ重複する
  ],
},

// OK: 共通のヘルパーを経由する
import { getFaviconIcons, ogImages } from "@/lib/site-assets";
// ...
icons: {
  icon: getFaviconIcons("clubIcon"), // "clubIcon" | "norihamaro" から選ぶ
},
openGraph: {
  images: [{ url: ogImages.default, width: 1200, height: 630, alt: "..." }],
},
```

新しいブランドの favicon を追加する場合は、`src/lib/site-assets.ts` の `faviconBrands` に1行追加するだけで、`getFaviconIcons()` がすべてのサイズのURLを組み立ててくれます。

## 画像処理スクリプト（`scripts/`）

Next.js アプリとは独立した、画像加工用の Python ユーティリティです（[uv](https://docs.astral.sh/uv/) で管理）。`scripts/assets/` にある加工前の生画像を読み込み、OG画像の圧縮（`compress_og.py`）や favicon（`.ico`）生成（`png_to_ico.py`）を行い、結果を `public/` に書き出します。通常の開発フローには含まれないため、画像を差し替える場合のみ `scripts/` ディレクトリ内で実行してください。

```bashs
cd scripts
uv sync
uv run python compress_og.py
```

## デプロイ

`main` ブランチへの変更は Vercel によって [https://www.norihamaro.com/](https://www.norihamaro.com/) に自動デプロイされます。

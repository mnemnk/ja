---
title: Lifelogging Agents
---
ここではMnemnk Lifelogging Agentsのセットアップ方法と、Mnemnkを用いた基本的なライフロギング環境の構築方法について説明する。

## 環境設定

Mnemnk Lifelogging Agentsをインストールするための環境を構築する。

### 各種ビルドツールのインストール

Mnemnk Appは予めビルドされたバイナリーが配布されているが、Mnemnk Lifelogging Agentを含め多くのエージェントはユーザーが開発環境を持っていることを仮定している。

どのようなツールが必要かは各エージェントによって異なる。
このページのインストールではGitとRustを必要とする。

- [Git](https://git-scm.com/)
- [Rust](https://www.rust-lang.org/ja/learn/get-started)

## Mnemnk Lifelogging Agentsのインストール

[Mnemnk Lifelogging Agents](https://github.com/mnemnk/mnemnk-lifelogging-agents) はMnemnkをライフロギングツールとして活用する上で基本となるエージェントのコレクションである。

- [Mnemnk Application](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-application): アプリケーションのアクティブティを出力
- [Mnemnk Screen](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-screen): スクリーンキャプチャを出力
- [Mnemnk API](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-api): APIサーバーとなり外部アプリケーションから情報を出力

### ダウンロードとビルド

Mnemnk Appのインストールで指定したMnemnk Directoryにagentsというディレクトリーができているので、そこにリポジトリーをクローンする。

```sh
cd {You Mnemnk Directory}/agents
git clone https://github.com/mnemnk/mnemnk-lifelogging-agents.git
```

クローンしたディレクトリーで実行バイナリーをビルドする。

```sh
cd mnemnk-lifelogging-agents
cargo build --release
```

### Agent Flow

Mnemnk Appを再起動し、右上のAgentsメニューからLifeloggingを開くとApplicaiton, API, Screenが追加されている。

FileメニューのImportを選ぶと、ファイルダイアログが出現するので、先ほどクローンした`mnemnk-lifelogging-agents/`ディレクトリーの中の`logging.json`を選択する。

すると、エージェントが停止した状態で読み込まれるので中央下のプレイボタン ▶ を押しエージェントを起動する。

![](/images/guide/lifelogging-agents/screenshot-lifelogging-agents-imported.png)

起動するとエージェントの色が明るくなる。

![](/images/guide/lifelogging-agents/screenshot-lifelogging-agents.png)

Fileメニューから"Save"を選び保存する。(`agent_flows/logging.json`に保存される)

画面上のナビゲーションバーの左端のHomeを選択し、リロード(Ctrl+R)すると今日の日付が変化しデータが保存されたことが分かる。

![](/images/guide/lifelogging-agents/first-logging.png)

クリックして確認しよう。

![](/images/guide/lifelogging-agents/first-daily-page.png)

おめでとう！🎉

### Auto Startの設定

記録はMnemnk Appがバックグラウンドで動作しているときにしか行われない。常に記録を取り続けるためにWindowsの起動時にMnemnk Appが起動するようにするには、Settingsページの"Auto Start"をオンにすることを推奨する。オンにしたらSaveし、Mnemnk Appを再起動することを忘れないように。

## Mnemnk Browser Extensionのインストール

作者が個人的に最も便利だと思っているのがブラウザによるWebブラウジングとの連携だ。Mnemnkはそもそもこの機能から開発が始まった[^1]。

[Mnemnk Broser Extension](https://github.com/mnemnk/mnemnk-browser-extension) を使うと、ブラウザ上でのページの移動がMnemnk APIへと送信されMnemnk Appによって活用することができる。

インストールするためには[^2]、

1. releaseページを開き `mnemnk-X.Y.Z-chrome.zip` をダウンロードする。
2. ChromeのManage extensions `chrome://extensions/` を開く。
3. 右上の"Developer mode"をオンにする。
4. ダウンロードしたzipファイルをブラウザにドラッグアンドドロップする。

オプションでMnemnk APIエージェントのアドレスとトークンをSettingページから指定できるが、デフォルトのままで構わない。Mnemnk APIエージェントの設定を変更したときは合わせて変更するといい。

## まとめ

このページではMnemnk Lifelogging AgentsとMnemnk Browser Extensionのインストールについて解説した。

Mnemnk Appの基本的な機能であるライフロギング機能でさえも外部プログラムとして提供されていることからも分かるように、Mnemnk Appが収集する情報とその活用方法はエージェントをどのように構築するかによって決まっている。君は、作者が想定するライフロギングツールとしてMnemnkを活用してもいいし、活用しなくてもいい。

[^1]: 当初はeverythingという名前で2020年3月に開発が始まった。その話は機会があれば。

[^2]: Chrome Web Storeへの申請も進めていますが、Privacy Policyを配置したホームページが必要など手続きが色々とありまして...

---
title: Lifelogging Agents
---

ここではMnemnk Lifelogging Agentsのセットアップ方法と、Mnemnkを用いた基本的なライフロギング環境の構築方法について説明します。

## 環境設定

Mnemnk Lifelogging Agentsをインストールするための環境を構築します。

### 各種ビルドツールのインストール

Mnemnk Appは予めビルドされたバイナリーが配布されていますが、Mnemnk Lifelogging Agentを含め多くのエージェントはユーザーが開発環境を持っていることを前提としています。

どのようなツールが必要かは各エージェントによって異なります。
このページのインストールではGitとRustを必要とします。

- [Git](https://git-scm.com/)
- [Rust](https://www.rust-lang.org/ja/learn/get-started)

## Mnemnk Lifelogging Agentsのインストール

[Mnemnk Lifelogging Agents](https://github.com/mnemnk/mnemnk-lifelogging-agents) はMnemnkをライフロギングツールとして活用する上で基本となるエージェントのコレクションです。

- [Mnemnk Application](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-application): アプリケーションのアクティビティを出力します
- [Mnemnk Screen](https://github.com/mnemnk/mnemnk-lifelogging-agents/tree/main/mnemnk-screen): スクリーンキャプチャを出力します

### ダウンロードとビルド

Mnemnk Appのインストールで指定したMnemnk Directoryにagentsというディレクトリーができていますので、そこにリポジトリーをクローンします。

```sh
cd {You Mnemnk Directory}/agents
git clone https://github.com/mnemnk/mnemnk-lifelogging-agents.git
```

クローンしたディレクトリーで実行バイナリーをビルドします。

```sh
cd mnemnk-lifelogging-agents
cargo build --release
```

### Agent Flow

Mnemnk Appを再起動し、右上のAgentsメニューからLifeloggingを開くとApplication, Screenが追加されています。

FileメニューのImportを選ぶと、ファイルダイアログが表示されますので、先ほどクローンした`mnemnk-lifelogging-agents/`ディレクトリーの中の`logging.json`を選択します。

すると、ライフロギングのためのエージェントのフローが停止した状態で読み込まれますので、中央下のプレイボタン ▶ を押して起動します。

![](/images/guide/intro/lifelogging-agents/screenshot-lifelogging-agents-imported.png)

起動するとエージェントの色が明るくなります。

![](/images/guide/intro/lifelogging-agents/screenshot-lifelogging-agents.png)

Fileメニューから"Save"を選び保存します（`agent_flows/logging.json`に保存されます）。

画面上のナビゲーションバーの左端のHomeを選択し、リロード(Ctrl+R)すると今日の日付が変化しデータが保存されたことが分かります。

![](/images/guide/intro/lifelogging-agents/first-logging.png)

クリックして確認してみましょう。

![](/images/guide/intro/lifelogging-agents/first-daily-page.png)

あなたのアクティビティが保存されはじめました。🎉

### Auto Startの設定

記録はMnemnk Appがバックグラウンドで動作しているときにしか行われません。常に記録を取り続けるためにWindowsの起動時にMnemnk Appが起動するようにするには、Settingsページの"Auto Start"をオンにすることをお勧めします。オンにしたらSaveし、Mnemnk Appを再起動することを忘れないようにしてください。

## Mnemnk Browser Extensionのインストール

作者が個人的に最も便利だと思っているのがブラウザによるWebブラウジングとの連携です。Mnemnkはそもそもこの機能から開発が始まりました。

[Mnemnk Browser Extension](https://github.com/mnemnk/mnemnk-browser-extension) を使うと、ブラウザ上でのページの移動がAPIエージェントへと送信されMnemnk Appによって活用することができます。

インストールするためには、

1. releaseページを開き `mnemnk-X.Y.Z-chrome.zip` をダウンロードします。
2. ChromeのManage extensions `chrome://extensions/` を開きます。
3. 右上の"Developer mode"をオンにします。
4. ダウンロードしたzipファイルをブラウザにドラッグアンドドロップします。

オプションでAPIエージェントのアドレスとトークンをSettingページから指定できますが、デフォルトのままで構いません。
APIエージェントの設定を変更したときは合わせて変更するといいでしょう。

## まとめ

このページではMnemnk Lifelogging AgentsとMnemnk Browser Extensionのインストールについて解説しました。

Mnemnk Appの基本的な機能であるライフロギング機能でさえも外部プログラムとして提供されていることからも分かるように、Mnemnk Appが収集する情報とその活用方法はエージェントをどのように構築するかによって決まっている。君は、作者が想定するライフロギングツールとしてMnemnkを活用してもいいし、活用しなくてもいい。

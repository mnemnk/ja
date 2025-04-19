---
title: Mnemnkのインストール
---
ここではMnemnkを使い始める方法について説明する。

Mnemnk AppはTauriを用いて作成されており、Windows, macOS, Linux上で実行できる。
ここではインストール手順では、Windows環境でのMnemnkのセットアップを中心に説明する。

## Mnemnk Appのインストール (Windows)

Mnemnk Appを[GitHubのリリースページ](https://github.com/mnemnk/mnemnk-app/releases)からダウンロードする。`_aarch64.dmg`がmacOS用、`_amd64.deb`がLinux用、`_x64_en-US.msi`がWindows用である。

![](/images/guide/getting-started/mnemnk-release-page.png)

ダウンロードしたファイルを開いたときに次の警告が出た場合は "More info" をクリックし、 "Run anyway" をクリックしてほしい。

![](/images/guide/getting-started/windows-protect.png)

実行するとセットアップウィザードが開くのでウィザードに従いインストールを行う。

![](/images/guide/getting-started/mnemnk-setup-wizard1.png)

![](/images/guide/getting-started/mnemnk-setup-wizard2.png)

インストールの場所はどこでも構わない。

![](/images/guide/getting-started/mnemnk-setup-wizard3.png)

UACが開くので了承する。

![](/images/guide/getting-started/mnemnk-setup-wizard4.png)

Mnemnk Appは起動しただけではウィンドウを開かない。デスクトップ右下のタスクトレイで動作を確認できる。

タスクトレイ内のアイコンのメニューから"Show"を選択するか、デスクトップに作成されたアイコンをダブルクリックするとウィンドウが開く。

## Mnemnk Appの設定

はじめてMnemnkを起動するとSettingsページが開く。（表示されない場合は歯車⚙のアイコンをクリックする）

![](/images/guide/getting-started/settings.png)

最低限、Mnemnk Directoryだけは設定を行う必要がある。

### Mnemnk Directory

Mnemnk Directoryとして空のディレクトリー（フォルダー）を指定する。ここには以下の3つのディレクトリーが作成される。

- agent_flows: エージェントフローが保存される。
- agents: カスタムエージェントをここに配置する。
- data: データベースとスクリーンショットが保存される。

:::warning
クラウドストレージ（OneDrive, iCloudなど）内のディレクトリーは指定しないように。
最悪のケースでは、データベースファイルが破壊されるかもしれない。
:::

ディレクトリーを指定したら、その他の設定はデフォルトのままで構わないので"Save"をクリックしMnemnk Appを終了する。再度、起動すると指定したデフォルトに上記の3つのディレクトリーが作成される。

<Expansion title="その他の設定 (Optional)" showIcon={false}>

### Auto Start

オンにするとOSの起動時にMnemnk Appが自動起動する。

### Shortcut Keys

- Global Shortcut: Mnemnk Appを呼び出すためのショートカット。
- Fullscreen: 全画面表示
- Screenshot Only: daily表示で情報を非表示に。デフォルトでスペースキーが設定されている。
- Search: searchページを開く

### Thumbnail Width / Height

daily pageで用いられるthumbnailのサイズ。どちらか一方だけを指定すると画像の縦横比を守る。デフォルトはHeight = 36となっている。

### Day Start Hour

daily pageの一日の開始時間を何時にするかを設定する。デフォルトは0時（12:00 pm)。夜型の人はデフォルトでは深夜の作業が2日に分かれてしまうため、就寝時間に合わせて設定するといい。
設定した場合、過去のデータの再インデックスをする場合はReindex YMDをクリックする。（クリック後、しばらくアプリを終了しないように）

</Expansion>

## まとめ

このページではMnemnk Appをインストールし立ち上げて実行する方法を学んだ。

Mnemnkをライフロギングツールとして活用するためには、次の [Lifelogging Agents](/guide/lifelogging-agents) へ進んでほしい。

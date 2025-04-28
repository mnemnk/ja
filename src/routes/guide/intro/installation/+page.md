---
title: Mnemnkのインストール
---
ここではMnemnkをインストールする方法について説明します。

Mnemnk AppはTauriを用いて作成されており、Windows、macOS、Linux上で実行できます。
このインストール手順では、Windows環境でのMnemnkのセットアップを中心に説明します。

## Mnemnk Appのインストール (Windows)

Mnemnk Appを[GitHubのリリースページ](https://github.com/mnemnk/mnemnk-app/releases)からダウンロードします。`_aarch64.dmg`がmacOS用、`_amd64.deb`がLinux用、`_x64_en-US.msi`がWindows用です。

![](/images/guide/installation/mnemnk-release-page.png)

ダウンロードしたファイルを開いたときに次の警告が出た場合は "More info" をクリックし、 "Run anyway" をクリックしてください。

![](/images/guide/installation/windows-protect.png)

実行するとセットアップウィザードが開くので、ウィザードに従いインストールを行います。

![](/images/guide/installation/mnemnk-setup-wizard1.png)

![](/images/guide/installation/mnemnk-setup-wizard2.png)

インストールの場所はどこでも構いません。

![](/images/guide/installation/mnemnk-setup-wizard3.png)

UACが開いたときは了承します。

![](/images/guide/installation/mnemnk-setup-wizard4.png)

Mnemnk Appは起動しただけではウィンドウを開きません。デスクトップ右下のタスクトレイで動作を確認できます。

タスクトレイ内のアイコンのメニューから"Show"を選択するか、デスクトップに作成されたアイコンをダブルクリックするとウィンドウが開きます。

## Mnemnk Appの設定

はじめてMnemnkを起動するとSettingsページが開きます。（表示されない場合は歯車⚙のアイコンをクリックしてください）

![](/images/guide/installation/settings.png)

最低限、Mnemnk Directoryだけは設定を行う必要があります。

### Mnemnk Directory

Mnemnk Directoryとして空のディレクトリー（フォルダー）を指定します。ここには以下の3つのディレクトリーが作成されます。

- agent_flows: エージェントフローが保存されます
- agents: カスタムエージェントをここに配置します
- data: データベースとスクリーンショットが保存されます

:::warning
クラウドストレージ（OneDrive、iCloudなど）内のディレクトリーは指定しないでください。
最悪のケースでは、データベースファイルが破壊されるおそれがあります。
:::

ディレクトリーを指定したら、その他の設定はデフォルトのままで構わないので"Save"をクリックしMnemnk Appを終了します。再度起動すると、指定したディレクトリーに上記の3つのディレクトリーが作成されます。

<Expansion title="その他の設定 (Optional)" showIcon={false}>

### Auto Start

オンにするとOSの起動時にMnemnk Appが自動起動します。

### Shortcut Keys

- Global Shortcut: Mnemnk Appを呼び出すためのショートカット
- Fullscreen: 全画面表示
- Screenshot Only: daily表示で情報を非表示にします。デフォルトでスペースキーが設定されています
- Search: searchページを開く

### Thumbnail Width / Height

daily pageで用いられるサムネイルのサイズです。どちらか一方だけを指定すると画像の縦横比を維持します。指定がない場合はheight = 36となります。

### Day Start Hour

daily pageの一日の開始時間を何時にするかを設定します。デフォルトは0時（12:00 am）です。夜型の人はデフォルトでは深夜の作業が2日に分かれてしまうため、就寝時間に合わせて設定するといいでしょう。
（過去のデータも変更したいときにはReindex YMDをクリックします）

</Expansion>

## まとめ

このページではMnemnk Appをインストールし、起動して実行する方法を説明しました。

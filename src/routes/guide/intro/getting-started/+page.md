---
title: Getting Started
---
ここではMnemnkをはじめて使う人を対象として、基本的なコンセプトと操作を説明します。

Mnemnkがすでにインストールされているなら、実際に試しながら読むこともできます。

## Agents

Mnemnkはエージェントを自由に組み合わせることでさまざまな処理を行うことができます。

![](/images/guide/getting-started/initial-agent-page.png)

Agentsページの右上の「Agents」メニューから Core > Utils > Counter を選んでCounterエージェントを配置してみましょう。

![](/images/guide/getting-started/first-agent.png)

配置したばかりのエージェントは停止状態になっています。

画面下のプレイボタン▶を押すか、エージェントを右クリックして「Start」を選択することでエージェントを起動できます。

![](/images/guide/getting-started/start-agent.png)

エージェントは入力と出力を持ちます。

次に、他のエージェントと接続してみましょう。

Core > Input > Unit Input を配置し、Unit InputのUnitハンドル（左側）とCounterのInハンドル（右側）を接続します。

![](/images/guide/getting-started/connect-agents.png)

Unit Inputエージェントを起動してもCounterの値は変化しません。

![](/images/guide/getting-started/start-input.png)

Unit InputのunitをクリックするとCounterの値が上昇します。
これはUnit Inputがシグナルを送信し、Counterがそれを受け取って値を増加させているためです。

![](/images/guide/getting-started/click-input.png)

Mnemnkのエージェントはプレイボタンが押されたときに1度だけ実行されるのではなく、常に動作し続けます。

これを確認するために、Core > Utils > Interval TimerをCounterに接続してみましょう。

![](/images/guide/getting-started/interval-timer.png)

エージェントは、（入力を持つ場合）入力に応じた処理を行い、必要に応じて出力を行います。

## Flows

エージェントを配置し接続したものを「フロー」と呼びます。
Mnemnkでは複数のフローを管理できます。

File > New から新しいフローを作成することができます。

![](/images/guide/getting-started/new-flow.png)

フロー名を入力すると、新しい空のフローが作成されます。

![](/images/guide/getting-started/new-flow-dialog.png)

![](/images/guide/getting-started/flow2.png)

フローは画面左側の「Flows」メニューで切り替えることができます。

フロー名の左に表示される <span class="flex-none inline-block w-2 h-2 bg-green-500 rounded-full" title="active"></span> マークは、そのフロー内に動作中のエージェントが存在することを示しています。

重要なポイントとして、あるフローが表示されていなくても（バックグラウンドにあっても）、そのフロー内のエージェントは動作し続けます。

![](/images/guide/getting-started/background-flow.png)

Fileメニューからフローを操作することができます。
作成したフローはFile > Save (Ctrl+S) から保存できます。
保存したフローはMnemnk App終了後も保持され、次回起動時に自動的に読み込まれます。

さらに、前回終了時に動作していたエージェントは、Mnemnk App起動時に自動的に起動します。

## Board

Mnemnkの持つ特徴的なエージェントにBoard InとBoard Outというエージェントがあります。

Board Inエージェントを用意しBoard Nameを`counter`と設定します。
そしてCounterのcountと接続します。

![](/images/guide/getting-started/board-in.png)

これによって`counter`という名前のボードが作成されます。

続いて、Board OutエージェントとDisplay Dataエージェントを用意します。
Board OutのBoard Nameも`counter`とすることで、先ほど作成した`counter`ボードをサブスクライブすることができます。

![](/images/guide/getting-started/board-out.png)

Display DataはCounterと直接、繋がっていませんが、Board InとBoard Outを通してデータを受け取ることができました。

Boardを用いると異なるフロー間でもデータをやり取りすることができます。

Flowsから「flow2」に移動し、さきほどと同様にBoard OutとDisplay Dataを作成します。

（shift + mouse dragで複数のエージェントを選択し、Ctrl+C, Ctrl+Vでコピー＆ペーストすることもできます）

![](/images/guide/getting-started/board-out-another-flow.png)

「main」フローで更新されているのと同じ値が「flow2」でも表示されることが確認できます。
これはボードを通じてフロー間でデータが共有されているためです。

## おわりに

ここでは、Mnemnkの基本的なコンセプトと操作を単純なエージェントを用いて説明しました。

実際の使用では、単なるカウンターではなく、ライフロギングデータをAIエージェントによって分析・活用するような複雑なフローを構築することになるでしょう。しかし、どんなに複雑なフローでも、ここで学んだ基本原理—エージェントの配置、接続、ボードによる通信—は変わりません。

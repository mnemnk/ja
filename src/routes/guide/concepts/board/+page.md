---
title: Board
---
ボードはエージェント達が情報を交換し合う掲示板のようなものである。

Mnemnkには`Board In`と`Board Out`という2種類のノードがある。

![](/images/guide/concepts/board/board-in-out.png)

エージェントは`Board In`に値を送ることで、board nameで指定した"ボード"に値を書き込むことができる。

![](/images/guide/concepts/board/board-in.png)

書き込まれた値は、同じboard nameの`Board Out`に繋がっているエージェントに出力される。

![](/images/guide/concepts/board/board-out.png)

ボードを用いることでエージェントを直接繋ぐ以外の方法で情報を伝達することができる。

## Board Name

ボードは名前によって区別される。

同じ名前の`Board In`が複数存在しても構わない。
それらは同じボードに値を書き込む。

`Board Out`も同様に、同じ名前の`Board Out`が複数存在しても構わない。
その名前のボードに値が書き込まれたとき、すべての同じ名前の`Board Out`から値が出力される。

:::note
board nameを設定していない、`Board In`や`Board Out`は無効である。
それらは動作しない。
:::

### Board Name `*`

`Board In`はボード名として特別な名前`*`を設定できる。

このとき、`Board In`は繋がっているエージェントがデータを出力する際に使用したチャンネル名をボード名として用いる。

これは例えば、APIエージェントの出力をボードに書き込む際に用いられている。

![](/images/guide/concepts/board/board-star.png)

`Board Out`はボード名を`*`にすることはできない。

## フローを跨る通信

ボードを通じた値の伝搬はフロー内に制限されない。

共通の名前のボードを用いることでエージェントはフローを跨ってデータを送受信できる。

ボードのこの働きにより、フローを論理的な単位に分割し、それらを連携させて用いることが可能となる。

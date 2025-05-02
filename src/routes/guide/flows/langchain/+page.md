---
title: LangChain
---
[Mnemnk LangChain Agents](https://github.com/mnemnk/mnemnk-langchain)は[LangChain](https://www.langchain.com/langchain)をMnemnkのエージェントとして使えるようにしたものです。

## Write A Novel

[message](https://python.langchain.com/docs/concepts/messages/)を[Chat Model](https://python.langchain.com/docs/concepts/chat_models/)に与えてLLMが出力したmessageを得る。

![](/images/guide/flows/langchain/write_a_novel.png)

[write_a_novel.json](/flows/langchain/write_a_novel.json)

## Simple Chat Bot

Chat botを実現するために、一連の会話を保存するInMemory Chat Historyエージェントを用います。

![](/images/guide/flows/langchain/simple_chat_bot.png)

[simple_chat_bot.json](/flows/langchain/simple_chat_bot.json)

InMemory Chat HistoryエージェントとChat Modelエージェントの間でループがありますが、Chat Modelは最後のメッセージが`AIMessage`であれば処理をしないため問題ありません。

## Web Summary

要約を得たいページのurlを"web summary url"ボードに入力すると、結果を"web summary out"ボードに出力します。

![](/images/guide/flows/langchain/web_summary.png)

[web_summary.json](/flows/langchain/web_summary.json)

フローは次のように組まれています:

1. urlで指定されたページを[WebBaseLoader](https://python.langchain.com/docs/integrations/document_loaders/web_base/)を用いてダウンロードします。
2. [RecursiveCharacterTextSplitter](https://python.langchain.com/api_reference/text_splitters/character/langchain_text_splitters.character.RecursiveCharacterTextSplitter.html#langchain_text_splitters.character.RecursiveCharacterTextSplitter)でcontentsを分割
3. Chat Modelを繰り返し用い、分割されたテキストの要約を作成します。
4. 得られた要約を一つにし全体の要約を作成します。

### Translate

最後のパートに翻訳を行うフローを挿入すると結果を母国語で得ることができます。

![](/images/guide/flows/langchain/translate_ja.png)

[web_summary_ja.json](/flows/langchain/web_summary_ja.json)

## YouTube Summary

![](/images/guide/flows/langchain/youtube_summary.png)

[youtube_summary.json](/flows/langchain/youtube_summary.json)

Web Summaryとの違いは[YoutubeLoader](https://python.langchain.com/docs/integrations/document_loaders/youtube_transcript/)を使っていることだけです。

このようにLoaderを作成することで様々なデータソースに対応できます。

## PDF Summary

![](/images/guide/flows/langchain/pdf_summary.png)

[pdf_summary.json](/flows/langchain/pdf_summary.json)

[PyMuPDFLoader](https://python.langchain.com/docs/integrations/document_loaders/pymupdf/)を用いています。
`PyMuPDF Loader`エージェントは各ページごとに分かれた`text`の配列を出力するため`String Join`が追加されています。

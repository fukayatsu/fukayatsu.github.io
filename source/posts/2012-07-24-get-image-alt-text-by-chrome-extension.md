---
title: "コンテキストメニューで画像のalt-textを取得する"
date: 2012-07-24 00:30
tags: chrome-extensions
---

前回の記事で宿題になっていたコンテキストメニューからimgタグのalt取得の件が解決した。
content_script側でimgタグにイベントリスナを追加してやって、
そこからaltタグの情報をメッセージとしてbackground_pageに送ってやればよかった。

[src/content_script.js](https://github.com/fukayatsu/chrome-markdown-linker/blob/master/src/content_script.js)

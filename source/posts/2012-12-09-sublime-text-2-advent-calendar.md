---
title: "ST2からTwitterに投稿するプラグイン作った"
date: 2012-12-09 16:55
tags: advent_calendar,sublime_text_2,st2
---


この記事は
[Sublime Text 2 Advent Calendar 2012](http://www.adventar.org/calendars/20)の9日目の記事です。

## Sublime Text 2と僕
メインのエディタをVimからST2にしてからだいたい4ヶ月ぐらい経ちました。

VimのキーバインドでPHPやRuby、markdownなどを書くのに使っています。

使っているプラグインは[このへん](https://github.com/fukayatsu/dotfiles/blob/master/sublime/User/Package%20Control.sublime-settings)
で見れます。

## プラグイン作ってみた

[TweetLine](https://github.com/fukayatsu/SublimeTweetLine)というSublime Text 2のTwitter投稿専用プラグインを作ったので紹介します。

すでに高機能な[Sublime Tweet](https://github.com/rozboris/Sublime-Tweet)というのがありますが、
input barからテキストを入力しても日本語変換確定時のEnterでTweetされてしまうなど
微妙に使いにくいという問題がありました。

この問題はプラグインの問題というよりはSublime Text 2自体の問題のようなので、
新規にプラグインを作ってエディタからのTweetを快適にしようと考えました。

## 使いかた
- `super + shift + p` > Install Package

![](https://dl.dropbox.com/u/85825/blog/image/20121209/install_package.png)

- TweetLineを選択

![](https://dl.dropbox.com/u/85825/blog/image/20121209/install_tweetline.png)

- key設定

![](https://dl.dropbox.com/u/85825/blog/image/20121209/menu.png)
↓
![](https://dl.dropbox.com/u/85825/blog/image/20121209/keymap.png)

- `super + ctrl + t` (初回のみ)

![](https://dl.dropbox.com/u/85825/blog/image/20121209/authorize_web.png)
↓
![](https://dl.dropbox.com/u/85825/blog/image/20121209/authorized.png)
↓
![](https://dl.dropbox.com/u/85825/blog/image/20121209/input_pincode.png)


- 選択範囲無しで`super + ctrl + t` : 現在の行をつぶやく

![](https://dl.dropbox.com/u/85825/blog/image/20121209/current_line.png)
↓
![](https://dl.dropbox.com/u/85825/blog/image/20121209/tweet_current_line.png)

- 選択範囲ありで`super + ctrl + t` : 選択範囲をつぶやく

![](https://dl.dropbox.com/u/85825/blog/image/20121209/selected_area.png)
↓
![](https://dl.dropbox.com/u/85825/blog/image/20121209/tweet_selected_area.png)


- `super + shift + p` > logout

![](https://dl.dropbox.com/u/85825/blog/image/20121209/logout.png)

- おわり

いかがでしたでしょうか。
エラー処理とかは未だちゃんと実装していないのですが、よかったら使ってみてください

明日は[@yumu19](https://twitter.com/yumu19)さんです :)
---
title: "hubot jotei > 女帝 Advent Calendar 2012(3日目)"
date: 2012-12-03 00:00
tags: advent-calendar,女帝
---

この記事は[女帝 Advent Calendar 2012](http://atnd.org/events/34298)の3日目の記事です。

```
・Advent Calendarとは
クリスマスまでの日数を数えるために、1日に1つ、穴が空けられるようになっているカレンダーです。
転じて、技術系コミュニティで、クリスマスまでの25日間にTipsを1つずつ公開するイベントをAdvent Calendarと呼ぶそうです。

・ルール
女帝に関する話題を特定の日に自分のブログ等にアップロードしてもらうだけです。
執筆はこのイベントに参加した順です。最初の人が12月1日、2人目が12月2日…最後の人が12月25日です。
twitterへの投稿（140文字）でも構いません。複数にわたる場合は、去年のようにtogetterでまとめるという措置をとる予定です。（例 : 女帝advent calendar 22日目 – Togetter ）
アップロードしたら、 このイベントのコメント欄にタイトルとURLを貼り付ける＋twitterでハッシュタグ #joteadvent2012 をつけてつぶやいてください。
女帝に関するものならどんなことでも構いません。
参考 : 女帝 Advent Calendar 2011 : ATND
```


追記(12/4):
一つ前の記事は[女帝 Advent Calendar 2012 2日目「女帝ってこんなんだった」 - へたれ日記](http://d.hatena.ne.jp/arc680/20121202/1354374076)
一つ後の記事は[合わないだなんて言わないで - Togetter](http://togetter.com/li/417761)
です

---
去年の
[女帝 Advent Calendar 2011](http://atnd.org/events/22939)
では
[Androidアプリ](http://d.hatena.ne.jp/fukayatsu/20111219/1324316844)
をつくったりました。

去年の今頃はAndroidクラスタ崩れみたいな感じだったのでアプリを作りましたが、
今年は普段ギョームで使っている
[HUBOT](http://hubot.github.com/)
で参加したいと思います。

## hubotとは
githubが公開しているnode.jsによる実装のbotフレームワークです。
irc, twitter, hipchatなど、いろいろなサービスのアダプターが開発されており、
coffee-scriptで独自のコマンドを追加することができます。

例えば、
```
fukayatsu | @hubot production deploy
hubot     | おｋ @all デプロイします
hubot     | cakes.mu にデプロイ完了しました(｀・ω・´)
```
というやりとりを毎日行なっています(メッセージは時期によって異なります)。
このあたりの事は、いずれまたどこかで詳しくまとめたいと思います。


## hubot jotei
さて本題ですが、こんなコマンドを追加しました。


{% gist 4188057 %}

こんな感じになります。

![](https://dl.dropbox.com/u/85825/blog/image/hubot-jotei-img.png)

![](https://dl.dropbox.com/u/85825/blog/image/hubot-jotei-status.png)

便利ですね(?)


## その他
そういえば、自分がいろいろなサービスでできるだけ同じアカウント名を使うようになったきっかけは @yamashitam だったような気がする。





---

明日は[@HomeiMiyashita](http://twitter.com/HomeiMiyashita)さんです :)

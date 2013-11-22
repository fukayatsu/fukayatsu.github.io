---
title: "#scmbc tokyo 3 に行ってきました"
date: 2012-07-21 23:08
tags: git, github, workshop, scmbc, 夏のコンフリクト祭り, なごやこわい, ねこみみメイド うさみエンジニア
---
[7月21日 SCMBootCamp in Tokyo 3 #scmbc(東京都)](http://kokucheese.com/event/index/42642/)

![座席表](https://lh4.googleusercontent.com/-HUE7jfc_yUk/UAq8jeG0K7I/AAAAAAAADbo/FJKWSiX5MtQ/w594-h497-k/SCMBootCampinTokyo3.png)

↑ 実際の座席表。GoogleDriveでリアルタイムに編集していくのが楽しかったです。


### ハンズオン
実はこういう形式のイベントに参加するのは初めてで、
どういうものかと若干不安だったけど、ただ話を聞くより全然よかったと思う。
集中して手を動かす分疲れるけども。

良かったと思う点としては、

- 周りの人と喋らざるを得ないので交流しやすい
- 困ったときに質問できる人がすぐ近くにいる
- 他の人のやり方を間近で見れる

とか、そんな感じ。なるべく手を動かさないといけないなと思いました。


### やったこと
午前中は基調講演:[世代差で見る履歴管理ツール入門](http://www.lares.dti.ne.jp/~foozy/fujiguruma/scm/scmbc-201207/speech.html)からスタート。
第0世代(手動管理)からgitなどの第3世代(DVCS)の管理方法を一巡りし、それぞれの特徴や
メリット・デメリットなどのまとめ。

その後、アイスブレイクで簡単に自己紹介したり、座席表を編集したり。
お弁当タイムを挟んで午後から実習。
3回ぐらい休憩をはさみつつ、github上で[gitのチートシート](https://github.com/STAR-ZERO/necomimi)を作りました。

![カステラ](https://lh4.googleusercontent.com/-WlWKUIeW7HI/UAqurhRSWPI/AAAAAAAADYw/3bjdYdTGLIc/s807/IMG_20120721_162728.jpg)

最初は敢えて同じファイル(`README.md`)に対して同時にコミットして、
コンフリクトを発生させたり。途中から各自リポジトリをForkして、
pull request / mergeの練習をしたりという感じでした。

最後にKPTを付箋に書いてホワイトボードに書いて終了。

〜 そして懇親会へ 〜

![ビールと食べ物](https://lh4.googleusercontent.com/-QTgh6Jzhptw/UAquwh5ektI/AAAAAAAADY4/0cykiGzrmrQ/s807/IMG_20120721_191356.jpg)

豊富なアルコールと食べ物に囲まれつつ、闇LTなるものが始まりました。
オフレコっぽい就活の話があったり、gitをもっと便利に使おうという趣旨のものもあったり、
多岐に渡っていて楽しかったです。
主催のきょんさんはMercurialでfizz buzzとかいう[なごやこわい]な発表は今回自粛とのことで、
[Veracity - The Next Step in DVCS](http://veracity-scm.com/)
のLTをしてました。これが本当にスタンダードになったりするのかな。楽しみです。



最後に、groovy-scriptによる抽選の結果、bitbucket-Tシャツと付箋(?)をもらいました！
![おみやげ](https://lh6.googleusercontent.com/-tu5WItm8i8Q/UAqvoqHi4ZI/AAAAAAAADbU/tVF5Ze8r_oM/s605/IMG_20120721_210946.jpg)

いやー楽しかったですね。
運営の皆様、同じグループの皆様、本当にありがとうございました。



### 反省
- 「夏のコンフリクト祭り」をやるまでは良かったものの、その後
コミット履歴を綺麗にするには？的なことをやる時間が無かったorz
  - 手順とかも書くと良かったかも
  - 演習で使ったリポジトリを使って、一緒にやったメンバーで今後もチートシートを整備していけたらいいなー
- windows+gitは文字コード周りの問題が厳しいなぁと。
- 主催して頂いた方々とあまり絡めなかった。
  - もっと酔わねば

### その他
- 構成管理に関連したバージョン管理の話をちょろっと聞けた。
  - "git flow"はリリースbranchをmasterに限定しているので、1.x系と2.x系を同時にリリースしていく場合のhotfixをどうするのか？
    - 方向によってcherry-pick mergeと普通のmergeを使い分けるとか
    - 分岐のところから枝を生やして両方にマージとか


### links
[世代差で見る履歴管理ツール入門](http://www.lares.dti.ne.jp/~foozy/fujiguruma/scm/scmbc-201207/speech.html)

[SCMBootCamp in Tokyo3 #scmbc - Togetter](http://togetter.com/li/342324)

[git の一歩その先に](http://tomykaira.rackbox.net/lt/lt.html)



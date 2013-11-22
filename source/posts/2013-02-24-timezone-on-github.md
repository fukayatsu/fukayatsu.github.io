---
title: "github上の時刻表示をちょっと見やすくするchrome extension"
date: 2013-02-24 19:46
tags: github,chrome,extension
---

github上でコミット時刻が`3 month ago`とか表示されているとき、カーソルを重ねてtooltipを見ても`-08:00`なタイムゾーンで表示されるのでわかりにくい。

ちょっと探した範囲ではそれを解決するような拡張機能は見つからなかったので、試しに作ってみた。

しばらく使ってみようと思う。

-  [Chrome ウェブストア - github-localtime](https://chrome.google.com/webstore/detail/github-localtime/nnicjaooimionienobllhkaohdjohfhm)
-  [fukayatsu/github-localtime-crx · GitHub](https://github.com/fukayatsu/github-localtime-crx)

## screen shots

- before
![before](https://raw.github.com/fukayatsu/github-localtime-crx/master/screen_shots/before.png)


- after
![after](https://raw.github.com/fukayatsu/github-localtime-crx/master/screen_shots/after.png)

## 既知の不具合

- 一定時間経つと表示が元に戻る
    - とりあえずリロードで対処...
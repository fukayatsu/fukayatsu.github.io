---
title: ChromeAppsGeneratorを更新した
date: 2013-12-18 01:07 JST
tags: advent-calendar-2013, chrome-apps
---

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 18日目

Chrome Ver33からchrome appのwebview内でIMEが使えるようになることがわかったので、
また[ChromeAppsGenerator](http://chrome-apps-generator.herokuapp.com/)へのモチベーションが高まり、機能追加等をした。

- webview margin調整
- 初期アイコン登録
    - mini_magickで中心をcropしてリサイズ
- ダウンロード数表示
    - redisでカウントだけ保存
- favicon追加
- like, tweetボタン追加
- analytics追加


Chrome(stable)でもIMEが効くようになったら、ドキュメントとかテストを整備していこうと思う。

## 蛇足
ChromeAppsGeneratorをそれ自身でapp化したらどうなるかと思ってやってみたけど、
ChromeAppにはdownloaderの機能がないので駄目だった。

---
title: WebサービスをChrome App化する
date: 2013-12-06 21:30 JST
tags: chrome-app heroku
---

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 6日目

昨日作った[wriper](/2013/12/06/wriper)で結構簡単にWebアプリをChrome Appにできることがわかったので、
ほかのWebアプリも簡単にChromeアプリにできるようにGeneratorを作った。

- [ChromeAppsGenerator](http://chrome-apps-generator.herokuapp.com/)

# 使いかた

- http://chrome-apps-generator.herokuapp.com/ でアプリにしたいURLとアプリ名と説明を入力する
![](/images/2013-12-06-a.png)

- ダウンロードして解凍
![w50](/images/2013-12-06-b.png)

- chrome://extensions/ に解凍して出来たフォルダをDrag & Drop
- `Launch`をクリック
![](/images/2013-12-06-e.png)

- Chrome アプリになった
![](/images/2013-12-06-c.png)

- .appも生成されている
![](/images/2013-12-06-d.png)

# が、しかし日本語入力が出来ない
- 調査中
    - 確認したらwriperもだめだった
    - この辺の問題？ [Issue 235573 - chromium - webview does not properly interface with the IME - An open-source project to help move the web forward. - Google Project Hosting](https://code.google.com/p/chromium/issues/detail?id=235573)


## そのほかのTODO

- デザイン調整
    - 微妙にwebviewの下の方が切れている
- アイコンをアップロードできるようにする
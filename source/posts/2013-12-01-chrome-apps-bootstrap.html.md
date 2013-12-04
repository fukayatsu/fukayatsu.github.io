---
title: chrome-apps-bootstrap
date: 2013-12-01 10:31 JST
tags: advent-calendar-2013, chrome-apps, bootstrap
---


> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 1日目

技術調査の目的で、Twitter BootstrapとjQueryを使って[Chrome Appsのサンプルを作った](https://github.com/fukayatsu/chrome-apps-bootstrap)。

開発方法はChrome Extensionとほぼ同じだけど、Chrome AppsはChromeが立ち上がっていなくても動作する（実際はAppsを立ち上げるとChromeのプロセスも立ち上がる）。

ChromeさえインストールされていればWindows/Mac/Linuxで動作するデスクトップアプリがWebの知識(html/css/js)で作れて、それが簡単に公開できる。便利。

![](https://raw.github.com/fukayatsu/chrome-apps-bootstrap/master/screenshots/Screen%20Shot%202013-11-30%20at%2021.11.00.png)

## .app
macだとインストール時に`*.app`を作ってくれるので、spotlightやランチャーの検索対象になる。
![](https://raw.github.com/fukayatsu/chrome-apps-bootstrap/master/screenshots/Screen%20Shot%202013-11-30%20at%2021.07.03.png)

## 雑感
- WebAPIベースのデスクトップアプリを作るなら、一番楽な選択肢なのでは
- 最初`Chrome Apps Bootstrap`という名前でChrome Web Storeにアップロードしようとしたら、ガイドライン違反だと警告された
- アプリのviewに`<a href="http://example.com/foo"></a>`とか書いても反応しない
    - `target="_new"`とか`target="_blank"`のように、target属性を指定する必要がある
- Macのmenu barにアイコンがでるようなアプリを作りたくてgoogle hangoutsのChrome Appを調べてたら、内部で[NPAPI Plugins (deprecated)](http://developer.chrome.com/extensions/npapi.html)を使っていた。
    - それなら普通にMacApp作ったほうが楽そう。
        - [MacRubyを使ったMacAppがMavericksで動きさえすれば...](http://stackoverflow.com/questions/19795976/macruby-on-os-x-mavericks)

## 参考リンク
- [What Are Chrome Apps? - Google Chrome](http://developer.chrome.com/apps/about_apps.html)
    - 公式ドキュメント
- [GoogleChrome/chrome-app-samples](https://github.com/GoogleChrome/chrome-app-samples)
    - 公式サンプル集のリポジトリ

公式ドキュメントをちょっと見て、後はサンプルコードを試しながらコード読めばよいと思う。

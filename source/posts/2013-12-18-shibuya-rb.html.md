---
title: 渋谷.rb[:20131218]に行ってきた
date: 2013-12-18 21:27 JST
tags: shibuya-rb, ruby, community
---

![](/images/2013-12-18-b.jpg)
会場提供のIGNIS様

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 19日目

- [渋谷.rb[:20131218] on Zusaar](http://www.zusaar.com/event/2337006)
- [渋谷.rb[:20131218]のまとめ #shibuyarb - Togetterまとめ](http://togetter.com/li/604599)

![](/images/2013-12-18.jpg)

半年ぶりぐらいに渋谷.rbに行った。
この半年の間にサービスのCakePHPからRailsへの移行があったり、
部屋を引っ越ししたりいろいろあったような気がする。

また月1,2くらいで何かしらイベントに顔出すようにしたい。

# メモ
- Favoriteの設計実装はパターンの話
    - 他のAdvent Calendarを全然見てないので、年末にまとめて読む
- ジオフェンシング
    - 卓球ハウスで活用してるとのこと
        - 用語自体しらなかった
    - [Android x Google Play Services #4 Location API の Geofencing で地図上のある範囲への出入りを通知する ｜ Developers.IO](http://dev.classmethod.jp/smartphone/android/android-google-play-services-location-api-geofencing/)
        - 自宅の周辺50mで電気付くようにしたい
- プリキュア愛
    - プルリクのやりとりが勉強になる
- ChromeアプリのGenerator
    - http://chrome-apps-generator.herokuapp.com/ の紹介をした
    - chrome ver 33+推奨
    - もっと準備しとくべきだった
    - Macの場合、Launcherをインストールしないと.app出来ないっぽいことが、他の人に使ってもらって分かった
- migrationをwebから参照、実行できるやつ
    - 使いたい
        - pending migration errorの画面から実行したい
- ruby-dmmの話
    - readmeがアレだった
- iRemocon 1万円で買えるらしい
    - [glamo スマートフォン家電コントローラー IRM-01LE8 iRemocon EDION - エディオンネットショップ](http://www.edion.com/CSfLastGoodsPage_001/97672)
- 渋谷.rb[:20140115] on Zusaar
    - 現時点で半分埋まってたw

- LTの合間はfluentdをherokuで試してみた
    - 現状hipchatに流している室温等のセンサデータは、herokuにfluentdで投げてAPI作るのがよいかもしれない

- 懇親会
    - プロキシ関連の苦労話で盛り上がった
       - そういえば大学でもgem install時にproxy指定しないといけなかった

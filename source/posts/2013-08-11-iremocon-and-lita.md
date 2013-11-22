---
title: "RubyとLita(chat bot)で自宅のエアコンを操作する"
date: 2013-08-11 22:16
tags: ruby,iremocon,lita,hipchat
---

以前は[音声認識で家電操作](https://github.com/fukayatsu/room_bot/blob/master/julius/roombot.rb)をしてたけど、
引越しの時に環境が変わったのでちょっとやりかたを変えてみた。

![ArduinoとiRemocon](https://lh6.googleusercontent.com/-kIVBmVmPATk/UgOX0He2ECI/AAAAAAAAPFs/QtRvi0Pc464/w701-h526-no/IMG_20130808_220558.jpg)
ポスター用の剥がせる両面テープで壁に貼ってみた

![w50](https://dl.dropboxusercontent.com/u/85825/blog/image/20130811/home-lita.png)
hipchatのAndroidアプリ

# できること
- 30分おきに温度、湿度、明るさを報告
- Hipchatからエアコンと照明のON/OFF
    - 最近暑いので、会社を出る前にクーラー入れたりする
- 毎日8:00に照明ON, 25:00に照明OFF
    - 寝起きが良くなった気がする

# 下準備
- 天井の照明をリモコン式のものに変更
    - 制御が楽なのでONとOFFのボタンが付いているものがよい
- hipchatアカウント取得
    - 今なら5人まで無料なので、自分の分とbotの分を作る
    - よく考えたらチャットルームに自分とbotしかいないのって...

# ハードウェア
- MacBook Air(サーバ)
- 赤外線送信
    - iRemocon
        - 以前音声認識で家電を操作してた時のを流用
        - 無操作だと5分で接続が切れるので、keep aliveが必要ということを今回はじめて知った
- 温度、湿度、明るさセンサー
    - Arduino + 秋月電子で買ったパーツ
    - これも以前使っていたものを流用

# ソフトウェア
- [fukayatsu/home-lita](https://github.com/fukayatsu/home-lita)
    - 本体
- [jimmycuadra/lita](https://github.com/jimmycuadra/lita)
    - ざっくり言うとhubot(github製bot framework)のRuby版。userの権限管理とかもできる
    - ちょっと前に会社のhipchat上のbotをhubotからlitaに置き換えたら結構良かったので、今回採用
- [jimmycuadra/lita-hipchat](https://github.com/jimmycuadra/lita-hipchat)
    - litaのhipchat adapter
- [fukayatsu/lita-schedule](https://github.com/fukayatsu/lita-schedule)
    - lita上でcron的なことをするやつ。とりあえず動くぐらいの完成度
- [r7kamura/iremocon](https://github.com/r7kamura/iremocon)
    - iremoconのrubyインタフェース
- [austinbv/dino](https://github.com/austinbv/dino)
    - [Arduino買ったのでRubyとDinoでLチカした - fukayatsu.dev](http://blog.fukayatsu.com/2013/01/23/hello-arduino-with-ruby-and-dino/)を参照

# これからやりたいこと
- 音声認識、音声再生を復活させたい
    - 「今何時？」とか「今日の天気は？」とか「電気消して」とかが地味に便利だった
- Androidとかと組み合わせて、自宅から出たら電気が消えるようにしたい
    - 端末の自宅wifiへの接続の有無で制御できそう？
- Lita本体にschedule機能を入れたい
    - テスト書く

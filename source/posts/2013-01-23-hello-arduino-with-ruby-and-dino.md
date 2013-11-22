---
title: "Arduino買ったのでRubyとDinoでLチカした"
date: 2013-01-23 22:49
tags: arduino,ruby,dino
---

前回[roomba-hack-01 準備編](http://fukayatsu.github.com/2013/01/21/roomba-hack-01/)で必要な部品を揃えるときに、
ついでに注文していた[Arduino Micro](http://www.switch-science.com/products/detail.php?product_id=1120)が先に届いたのでいじってみた。

# Arduino Micro

![Arduino Micro](https://lh4.googleusercontent.com/-ICg8dyo-5eU/UP_oaT5a_-I/AAAAAAAAJxQ/K1MWoZt_u14/s865/IMG_20130123_223909.jpg)

PCとの接続は名前の通り(?)micro USBケーブル。
余ってるAndroidのケーブルとか使えて良い感じ。

どうやら最初から`13 pin`にLEDが接続されているみたい。
他のArduinoもだいたいそうらしい。

# はじめてのArduino
> [Arduinoをはじめようを購入してセットアップ〜LEDを点滅させるまで | 9ensanのLifeHack](http://9ensan.com/blog/diy/diy-arduino-setup-led-flash/)

このページを参考にさせてもらってLEDをチカチカさせました。

# RubyからArduinoコントロールしたい
これからJenkinsのXFDとか作るにあたって、どうせならRubyでコントロールしたいと思っていくつかライブラリを調べた。

## library: funnel
最初に見つけたのがこれ。

> [funnel.cc | Software / Ruby](http://funnel.cc/Software/Ruby)

一度Arduino側に書き込んでしまえば、あとはRubyでやりたい放題らしい。

へー、と思って`gem i funnel`とかやったら
"a realtime resource-centric application framework"な方の[funnel](https://github.com/dansimpson/funnel)
がインストールされたorz

> [Downloads - funnel - A toolkit to sketch your idea physically - Google Project Hosting](http://code.google.com/p/funnel/downloads/list)

↑ ここからダウンロードするのが正解だったみたい。

でもRequirementsに`Ruby 1.8.6`とあったのでやめた。

## gem: serialport
次に考えたのがこれ。

> [Arduino Playground - Ruby](http://playground.arduino.cc/interfacing/ruby)

にも

> The SerialPort gem seems to do the job.

と書いてある。

そういえば以前友人もこのgemを使ってArduinoで遊んでた。
> [rubyとarduinoで、twitterのリプライをLED通知してみた - メモりメモる](http://hatone.hateblo.jp/entry/2012/02/12/160257)


でも結局Arduino側もプログラム書かないといけないのでもうちょっと他の方法を探した。

## gem: Dino
最後に見つけたのがこれ。
(というか最初から[Arduinoの公式のRubyのところ](http://playground.arduino.cc/interfacing/ruby)を確認しておくべきだった。)

2012年11月のRubyWorld Conference 2012で発表された、かなり新しいプロダクトらしい。
funnelと同じく一度Arduinoにバイナリを書き込んでしまえば、あとはRubyだけでいけるタイプ。

[Arduino the Ruby way - Austin Vance - Ruby Conference 2012](http://confreaks.com/videos/1294-rubyconf2012-arduino-the-ruby-way)

<script async class="speakerdeck-embed" data-id="5098572bc5f78d0002010edb" data-ratio="1.2994923857868" src="//speakerdeck.com/assets/embed.js"></script>

<iframe width="640" height="360" src="http://www.youtube.com/embed/oUIor6GK-qA" frameborder="0" allowfullscreen></iframe>
<br>
<br>

### DinoでLチカ
うん、こういうのを探してた :)

```ruby
require 'dino'  # gem install dino

board = Dino::Board.new(Dino::TxRx.new)
led = Dino::Components::Led.new(pin: 13, board: board)

[:on, :off].cycle do |switch|
  led.send(switch)
  sleep 0.5
end
```

使ってみようと思った人は↓このチュートリアルが詳しくて良いかも。

> [Introducing Arduino & Dino - Jumpstart Lab Curriculum](http://tutorials.jumpstartlab.com/projects/arduino/introducing_arduino.html)


# つづく
ブレッドボードが手元になかったので今日はここまで。
早くセンサとかつないでいろいろ試したい
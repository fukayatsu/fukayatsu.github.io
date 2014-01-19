---
title: RPiとHipchatでインターホン作った
date: 2014-01-19 21:47 JST
tags: raspberry-pi, intercom, ruby, hipchat
---

オフィスにインターホンがないので作った。


## 配線図
![w50](/images/2014-01-19-1390133638_1.png)

左のスイッチがメインのスイッチで、右のスイッチがシャットダウンスイッチ。あとカメラモジュール。

## 組み立て
- 今回は配線が見えないように白いケースを使った。
![w50](/images/2014-01-19-1390133850_1.jpg)

- 青いスイッチがメインスイッチ(人を呼ぶやつ)
![w50](/images/2014-01-19-1390133971_1.jpg)

- 右下の黒いスイッチはシャットダウン用
![w50](/images/2014-01-19-1390134001_1.jpg)

- [Ｓｅｅｅｄ Ｓｔｕｄｉｏ ８０００５１００１ Ｒａｓｐｂｅｒｒｙ　Ｐｉ用　短いｍｉｃｒｏＳＤカードアダプタ　【スライドロック式】](http://www.sengoku.co.jp/mod/sgk_cart/detail.php?code=EEHD-4FUK)
    - 今回はこれとmicro SDカードを使った。ケースからはみ出なくてよい。

## ソースコード
- [fukayatsu/pintercom](https://github.com/fukayatsu/pintercom)

#### あれな話
- [jwhitehorn/pi_piper](https://github.com/jwhitehorn/pi_piper)でうまく内部のpull-up抵抗が使えてないようだったので、直接コマンドを実行してpull-up状態にしている。
    - TODO: あとでソースコード追ってみる
- Hipchatに画像ファイルをuploadする公式APIがあってもいい気がする。
    - 内部的にはあるっぽい

## 動作テストの様子
- 青いボタンを押すと、こんな感じでhipchatに書き込まれる
![w50](/images/2014-01-19-1390133726_1.png)

`@here`を使ってそのroomにいる人にだけ通知するようにしているので、
対応できる人がそのroomに入ってくれるといいかんじだと思う。

## 雑感
もうちょっとテストしてオフィスの玄関付近に置こうと思うけど、
近くにコンセントがないのでどうやって電源にアクセスするかを考えている。

- [Amazon.co.jp： iBUFFALO Arvel USB延長スリムケーブル 1.5M ホワイト AUSE15WH: パソコン・周辺機器](http://www.amazon.co.jp/iBUFFALO-Arvel-USB%E5%BB%B6%E9%95%B7%E3%82%B9%E3%83%AA%E3%83%A0%E3%82%B1%E3%83%BC%E3%83%96%E3%83%AB-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88-AUSE20WH/dp/B000G2XTW8/ref=cm_lmf_tit_15)
    - こういうのを使うのもありかもしれない


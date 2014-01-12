---
title: Raspberry Piを使ってトイレの空き情報を確認できるようにした
date: 2014-01-12 16:20 JST
tags: raspberry-pi, heroku, electronics
---

![](/images/2014-01-12-1389502288_1.jpg)

> [Chrome ウェブストア - ucchusma](https://chrome.google.com/webstore/detail/ucchusma/ofbnhnlaccejlhdfefcgmffilffhnipg)

アイコンはあまり目立たないようにした。

- 使用中
![w50](/images/2014-01-12-1389500588_1.png)

- 空き
![w50](/images/2014-01-12-1389500588_2.png)

# 背景
オフィスのフロアにトイレがひとつしかなく、何度も空いているかどうか確認しに行くのが面倒だった。

> [ヘブンズ･ドア　〜私が行ったら空いてるトイレ〜](http://heavens-door.info/)

先日これを見て自分で作ることにした。

raspberry piを触りたい欲とか、ハンダ付け欲とかもあった。

# 仕組み
![](/images/2014-01-12-1389501835_1.jpg)
raspberry piはひたすらセンサーデータをherokuに送り続け、clientがそれをpollingする形にした。
当初はraspberry pi上にweb serverを置こうかと思ったけど、台数が増えたりlocalのipが変わったりすることを考えてherokuを併用することにした。

# 材料
- 本体: 長期運用を考えてケース付きのを買った
<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=atsfky-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=B00DGKUHFE" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

- SDカード: 8GBで十分だったかも
<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=atsfky-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=B003VNKNEQ" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

- 無線LAN子機: 動作報告があったので
<iframe src="http://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=atsfky-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=B003NSAMW2" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

- モーションセンサ: 開発の裏話的なやつが面白かった
    - [松下の省エネ技術 | にぎりこぷしのエコの細道 | ナピオン-１ | イズム「ism」 | Panasonic](http://panasonic.co.jp/ism/eco/napion/)
    - [パナソニック電工 ＡＭＮ３１１１１ ＮａＰｉＯｎ　ＭＰモーションセンサ（黒）　標準検出タイプ](http://www.sengoku.co.jp/mod/sgk_cart/detail.php?code=7AXC-MAGW)

- その他
    - 抵抗(10kΩ, 1kΩ)
    - コンデンサ(1μF)
    - 単線
    - ホットボンド
    - ユニバーサル基盤の切れ端
    - ジャンパワイヤ(オス-メス)
        - なくても何とかなったけどあったほうが良い...
    - ブレッドボード
        - 回路テスト用
    - プッシュスイッチ
        - シャットダウンスイッチ用

# 配線図
![](/images/2014-01-12-1389509062_1.png)

[Fritzing](http://fritzing.org/)で図を書くの楽しい。
コンデンサはなくても多分問題ないので省いた。

# code
- [fukayatsu/ucchusma-pi](https://github.com/fukayatsu/ucchusma-pi)
- [fukayatsu/ucchusma-web](https://github.com/fukayatsu/ucchusma-web)
- [fukayatsu/ucchusma-crx](https://github.com/fukayatsu/ucchusma-crx)

- /home/pi/set_gpio_pins.sh

```
#!/bin/sh

for pin in 4; do
   echo $pin > /sys/class/gpio/export
   chown -R www-data:pi /sys/class/gpio/gpio$pin
   chmod -R g+w /sys/class/gpio/gpio$pin
done
```

- /home/pi/shutdown-daemon.sh

```
#!/bin/sh
GPIO=7      #使用するGPIOポート
PUSHTIME=3  #押す秒数

#初期設定
echo "$GPIO" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio$GPIO/direction
echo "high" > /sys/class/gpio/gpio$GPIO/direction

#5秒間押されるまで待つ
cnt=0
while [ $cnt -lt $PUSHTIME ] ; do
  data=`cat /sys/class/gpio/gpio$GPIO/value`
  if [ "$data" -eq "0" ] ; then
    cnt=`expr $cnt + 1`
  else
    cnt=0
  fi
  sleep 1
done

#シャットダウンの実行
shutdown -h now
```

> 参考: [Raspberry Piブログ : [コラム] 第8回『ボタン長押しでシャットダウンする電源ボタンを作ろう』](http://blog.livedoor.jp/victory7com/archives/32699844.html)

- /etc/rc.local

```
#!/bin/sh -e

...

su -c /home/pi/shutdown-daemon.sh &
su -c /home/pi/set_gpio_pins.sh &

export TOKEN=*********
su -c "cd /home/pi/ucchusma-pi; /home/pi/.rbenv/shims/bundle exec ruby watcher.rb"

...

exit 0
```

# 参考
- sudoなしでGPIOにアクセスする
    - [Raspberry Pi – using GPIO / WiringPi without root (sudo) access | Dissection by David blog](http://dissectionbydavid.wordpress.com/2013/10/21/raspberry-pi-using-gpio-wiringpi-without-root-sudo-access/)
- 無線LAN
    - [コチョナナバ: Raspberry Piを無線LAN対応させてみた](http://kingyo-bachi.blogspot.jp/2013/07/raspberry-pilan.html)
    - [RASPBERRY PI – Airlink 101 Installation with WPA/WPA2](http://www.instantsupportsite.com/self-help/raspberry-pi/raspberry-pi-airlink-101-installation-wpa/)
- image書き込み
    - [command line - Why is the error, dd: /dev/rdisk1bs=1m: Operation not supported, popping up while trying to instal ubuntu on usb? - Ask Ubuntu](http://askubuntu.com/questions/159039/why-is-the-error-dd-dev-rdisk1bs-1m-operation-not-supported-popping-up-whil)
- シャットダウンフリー化(したい)
    - [「コラム：お手軽シャットダウンフリー化」をHTML化してみました (QR1679) | ε-ARK Project](http://www.e-ark.jp/raspberryjamsession-02/)
- code
    - [fukayatsu/ucchusma-pi](https://github.com/fukayatsu/ucchusma-pi)
    - [fukayatsu/ucchusma-web](https://github.com/fukayatsu/ucchusma-web)
    - [fukayatsu/ucchusma-crx](https://github.com/fukayatsu/ucchusma-crx)
- ucchusmaとは?
    - [烏枢沙摩明王 - Wikipedia](http://ja.wikipedia.org/wiki/%E7%83%8F%E6%9E%A2%E6%B2%99%E6%91%A9%E6%98%8E%E7%8E%8B)
    - 伝承ひどい
- 配線図等を作るツール
    - [Fritzing](http://fritzing.org/)

# 雑感
- raspberry pi
    - rbenvでruby2.1.0をインストールするのに2時間ちょっとかかった。
    - 使ってみて、改めて「小さいlinux pc」なのだなと思った。
        - GPIOで直接電子回路に接続できるのが良い
        - アナログ入力も付いてたらもっと良いのに
    - imageを焼く時に、MacbookProのSDカードリーダーが反応しなくて困った
        - 結局別のPCから焼いた
- Fritzing
    - 便利
    - 自分でnapionのパーツ作ろうかと思ったけど、適当なパーツでお茶を濁した。
        - パーツエディタが何度かクラッシュした...
- 実戦投入
    - 週明けになる見込み

---
title: "[WIP]Leap MotionとRubyで遊ぶ"
date: 2013-07-25 20:23
tags: leap-motion,ruby,wip
---

![](https://lh6.googleusercontent.com/-r7Cit35PdGs/Ue1PUJS9T3I/AAAAAAAAOrU/15GcUYE-Gc4/w739-h555-no/IMG_20130723_001953-MOTION.gif)

↑ leap motionのデモアプリで遊んでいる図

---

今年の2月にorderした[Leap Motion](https://www.leapmotion.com/)が先日(7/21)届いたので、
ここ数日[アプリをダウンロード](https://airspace.leapmotion.com/)したりして遊んでいる。
(長時間姿勢を維持する必要があるアプリは結構疲れる)


せっかくなので自分でも何か作ろうと思って[Developerページ](https://developer.leapmotion.com/docs)を見ると、
今のところ公式にSDKが存在するのは

- C++
- Java
- Python
- C# and Unity
- JavaScript

の5つ(6つ？)で、残念ながらRubyのSDKは無かった。

ということで、以下Leap MotionをRubyで使うためにやったことの雑記

## gemを探す

ちょっと探したところ、
> [glejeune/ruby-leap-motion](https://github.com/glejeune/ruby-leap-motion) "Ruby interface to the Leap Motion Controller"

というのを見つけた。最終更新が2ヶ月前なので最新のSDKには対応していないのかもしれないけど、とりあえずこれを使ってみた

### SWIG?

この`ruby-leap-motion`は`SWIG`というのを使っているらしかった。

> [SWIG - Wikipedia](http://ja.wikipedia.org/wiki/SWIG)
  SWIG (Simplified Wrapper and Interface Generator) は、 C/C++ で書かれたプログラムやライブラリを、Tcl/Tk、Perl、Python、Ruby、PHP、Lua などのスクリプト言語や、Java、C#、Scheme、Ocaml などの言語に接続するためのオープンソースのツールである。


> [ruby-leap-motion/ext/swig/Leap.i at master · glejeune/ruby-leap-motion](https://github.com/glejeune/ruby-leap-motion/blob/master/ext/swig/Leap.i)

にはRuby用の設定が含まれているけど、最新のSDKの中の`Leap.i`には無かった。glejeuneさんが自分で追加したのだろうか。とりあえず今は保留。

### 座標を取得

とりあえず何らかの座標が取得できないと始まらないので(ジェスチャー認識もあるけど)、

> [ruby-leap-motion/ext/swig/Leap.i at master · glejeune/ruby-leap-motion](https://github.com/glejeune/ruby-leap-motion/blob/master/ext/swig/Leap.i)

これを見て試行錯誤して、指先の座標を取得することができた。

### テルミンつくろう

画面を描写するのは大変そうだし、音だけ出ればいいやと思ってテルミン作ることにした。
先人↓


<iframe width="560" height="315" src="//www.youtube.com/embed/SE6XV3nLDUk" frameborder="0" allowfullscreen></iframe>

### テルミンの演奏法を調べる

> [テルミン演奏法の説明](http://www.prhymx.com/theremin/text2.html)

右手を右に移動させると音が高くなって、左手を上に移動させると音が大きくなるらしい


<blockquote class="twitter-tweet"><p><a href="https://twitter.com/fukayatsu">@fukayatsu</a> 青山テルミン！... 何でもありません。</p>&mdash; dopin (@dopingoo) <a href="https://twitter.com/dopingoo/statuses/360042327479287808">July 24, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


## どうやって音鳴らそう?
Windowsならbeepとか使えた気がするけど、Macで音を出すプログラム書いた事なかったので困った。

> [nagachika/ruby-coreaudio](https://github.com/nagachika/ruby-coreaudio)

ちょっと調べて↑これを使わせてもらうことにした。


## とりあえず動くようにした

> [fukayatsu/leap-motion-sandbox](https://github.com/fukayatsu/leap-motion-sandbox)


[↑録音してみた](https://dl.dropboxusercontent.com/u/85825/blog/sound/2013-07-25/leap-t.mp3)

SDKを`~/Development/LeapSDK`に置いた場合はこんな感じで実行できるかもしれない(※後述)↓

```
$ git clone git@github.com:fukayatsu/leap-motion-sandbox.git
$ cd leap-motion-sandbox
$ bundle config build.leap-motion --with-leap-lib=~/Development/LeapSDK/lib --with-leap-include=~/Development/LeapSDK/include
$ bundle
$ bundle exec ruby theremin.rb
```

### 既知の問題

- 音程が変わるときに音がブツブツ切れる
    - [この辺](http://nagano.monalisa-au.org/archives/204) の処理が必要かも
- しばらく動かすと、`[FATAL] failed to allocate memory`で落ちる
- なぜか `ruby 2.0.0p195 (2013-05-14 revision 40734) [x86_64-darwin12.3.0]`でしか`bundle`が成功しない
    - むしろなぜp195で成功したのか...



## 今後について

- `[FATAL] failed to allocate memory`の原因を探る
- bundleの検証
- Core Audioをもう少し深堀りする
- PythonのSDKを試してみる

---
title: say-japanese-gem
date: 2013-11-26 23:07 JST
tags: ruby, gem
---


[say-japanese](https://rubygems.org/gems/say-japanese)というRubyから日本語を喋らせるGemを作った(Mac限定)。

ちょっと調べた段階で、[smart/say](https://github.com/smart/say)を見つけたけど、日本語の音声に対応していないのと作者がgithub上で活動していないようなので作ることに。

今のところvoiceは`Kyoko`と`Otoya`だけに対応している。


## サンプルコード

    $ gem install say-japanese


```ruby
require 'say/japanese'

say 'オブジェクト指向スクリプト言語 ルビー'

set_say_as_default :otoya

say 'オブジェクト指向スクリプト言語 ルビー'

say_as :kyoko, 'ルビーとは、'

say_as :otoya, <<EOT
  オープンソースの動的なプログラミング言語で、
  シンプルさと高い生産性を備えています。
  エレガントな文法を持ち、自然に読み書きができます。
EOT
```

- デフォルトの音声はkyoko
- 文字列に改行が入っている場合は`。`に置き換えている

## Otoya

<iframe width="420" height="315" src="//www.youtube.com/embed/2KRD09whqB4?rel=0" frameborder="0" allowfullscreen></iframe>

Lionで追加されたKyoko(女声)につづいてMavericksから追加されたOtoya(男声)。
動画の自己紹介では"Otoya"が"あといや"みたいに聞こえる。

他のvoiceデータの名前からしてOtoyaも名前の方なんだろうけど、
ちょっと苗字っぽいとおもって調べてみた。

[全国の苗字（名字）１１万種](http://www2s.biglobe.ne.jp/~suzakihp/index40.html)によると、`男谷(オトヤ)`さんが実在するらしい。
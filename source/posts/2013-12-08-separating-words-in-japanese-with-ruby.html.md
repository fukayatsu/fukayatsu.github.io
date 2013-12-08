---
title: Rubyで分かち書き
date: 2013-12-08 14:22 JST
tags: ruby, okura, morphological-analysis
---
> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 8日目

ちょっと分かち書きの需要があったので、[todesking/okura](https://github.com/todesking/okura)を使わせてもらうことにした。

```ruby
# Gemfile
source "https://rubygems.org"

# ver 0.0.1のgemだと`Tagger#wakati`が動かなかったのでmasterを指定している
gem "okura", github: 'todesking/okura'
```

```ruby
# sample.rb

require 'okura/serializer'

dict_dir = 'lib/okura-dic' # mecabの辞書を元に生成しておく
tagger   = Okura::Serializer::FormatInfo.create_tagger dict_dir

text = '分かち書き対象のテキストです...慈悲はない...'
p tagger.wakati(text)
```

```shell
$ bundle exec ruby sample.rb
#=> ["BOS/EOS", "分かち書き", "対象", "の", "テキスト", "です", ".", ".", ".", ".", "慈悲", "は", "ない", ".", ".", ".", "BOS/EOS"]
```

## 参考
> [Rubyによる形態素解析エンジンokura 0.0.1をリリースしました](http://d.hatena.ne.jp/gnarl/20120319/1332153697)
バージョン0.0.xのうちは､インタフェースや辞書フォーマットは頻繁に変更される予定です｡
ある程度安定したら0.1.0出します｡

辞書ファイルのコンパイル方法もこちらで。
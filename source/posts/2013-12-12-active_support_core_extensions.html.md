---
title: Active Support Core Extensions
date: 2013-12-12 21:33 JST
tags: advent-calendar-2013, rails, active_support
---

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 12日目


[Active Support Core Extensions — Ruby on Rails Guides](http://edgeguides.rubyonrails.org/active_support_core_extensions.html)を斜め読みした。
普段から使ってるのに、半分も知らなかった。

「へー」と思ったメモ:
### String
- 5.5 inquiry
    - `Rails.env.production?`とかやってるあれ
- 5.8 indent
    - インデント
- 5.10.5 titleize
    - タイトルっぽくする
- 5.10.14 foreign_key
    - foreign_keyっぽくする

### Numeric
- 6.1 Bytes
    - `2.kilobytes   # => 2048`

### Enumerable
- 9.3 many?
    - 1より大きいものは"たくさん"

### Hash
- 11.6 Extracting
    - KVを引き抜くイメージ


他にも時刻、時間関係の拡張が沢山ある。
中には正直英語圏の人しか使わないのではというものもあるけど、
Railsっぽいコードを書くために、使えるところでは使っていきたい。

TODO
- 各メソッドの定義を確認

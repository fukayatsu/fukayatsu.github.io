---
title: faviconを生成するgemを作った
date: 2013-12-28 22:27 JST
tags: favidenticon, gem, identicon, favicon, ruby
---

`rails new`した後に、ちゃんとしたfaviconが決まるまで適当なfaviconを拾ってくるのが面倒だったので、適当に生成できるようにした。

多分ImageMagickが入っていれば動く。windowsではどうなんだろう。

- [fukayatsu/favidenticon](https://github.com/fukayatsu/favidenticon#usage)

```
$ favidenticon g
```

とかやると、カレントディレクトリに`favicon.ico`が生成(上書き)される。


# サンプル

![w50](https://raw.github.com/fukayatsu/favidenticon/master/screenshots/1.png)
![w50](https://raw.github.com/fukayatsu/favidenticon/master/screenshots/2.png)
![w50](https://raw.github.com/fukayatsu/favidenticon/master/screenshots/3.png)
![w50](https://raw.github.com/fukayatsu/favidenticon/master/screenshots/4.png)
![w50](https://raw.github.com/fukayatsu/favidenticon/master/screenshots/5.png)

# thanks
- [chrisbranson/ruby_identicon](https://github.com/chrisbranson/ruby_identicon)
    - identicon生成担当
- [naoty/picon](https://github.com/naoty/picon)
    - インスパイアされた

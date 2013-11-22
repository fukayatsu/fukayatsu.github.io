---
title: "zusaarのgem作った"
date: 2013-03-24 20:48
tags: ruby,rubygem,zusaar
---

<blockquote class="twitter-tweet"><p>いままでずっとZusaarのことZussarだと勘違いしてた</p>&mdash; ふかやつ (@fukayatsu) <a href="https://twitter.com/fukayatsu/status/315701285150158848">March 24, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
gemをpublishする直前に気付いてリネーム祭りをした。
そしてこれからもちょくちょく間違える気がする。

- [zusaar | RubyGems.org | your community gem host](https://rubygems.org/gems/zusaar)
- [fukayatsu/zusaar · GitHub](https://github.com/fukayatsu/zusaar)
- [APIリファレンス｜参加費の決済もできるイベント開催支援サービス「Zusaar」](http://www.zusaar.com/doc/api.html)

そもそも検索系のAPIしかないので、自動でイベント参加とかはできないのが残念。

# 使用例

<script src="https://gist.github.com/fukayatsu/5231578.js"></script>

# その他

### APIのバグ？
APIを叩いた時に、`profile_url`が`http//twitter.com/foobar`みたいな感じで`:`が抜けて返ってきたので、お問い合せフォームから報告しておいた。

今のことろはgemの側で正しいurlに直している。

### followのrate limit
> [POST friendships/create | Twitter Developers](https://dev.twitter.com/docs/api/1.1/post/friendships/create)

には`Rate Limited? No`って書いてあるけど、どうも15分に15回に制限されてるような挙動をする。

それで制限に引っかかると、環境によって`Twitter::Error::ClientError`が発生してハマった。

### 参考にしたgem
> [sferik/twitter · GitHub](https://github.com/sferik/twitter)

attr_reader上書きしてるとことか、faraday gemつかってるとことかいろいろ真似してみた
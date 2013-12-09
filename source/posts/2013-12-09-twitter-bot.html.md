---
title: かにさん(twitter bot)
date: 2013-12-09 22:12 JST
tags: twitter-bot, markov-chain
---

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 9日目

[sferik/twitter](https://github.com/sferik/twitter)のバージョンが5に上がったので、その検証を兼ねてtwitter botを作った。

- [かにさん (kani_acid) on Twitter](https://twitter.com/kani_acid)

<blockquote class="twitter-tweet" lang="en"><p>一瞬でほっこりっていうかにやにやですわ</p>&mdash; かにさん (@kani_acid) <a href="https://twitter.com/kani_acid/statuses/409983296315981824">December 9, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" lang="en"><p>ズズッ、ぷは〜(ほっこりほっこりと家の近くの自販機で買うこのミルクセーキは実は思い出 (&#39;､3_ヽ)ほっこりばーか</p>&mdash; かにさん (@kani_acid) <a href="https://twitter.com/kani_acid/statuses/409922898178998272">December 9, 2013</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p>そんなことなかった！かわいい！ぬいぐるみみたいだ！</p>&mdash; かにさん (@kani_acid) <a href="https://twitter.com/kani_acid/statuses/409885207873851393">December 9, 2013</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p>あーそれとてもいいですねえ（ほっこりかい∩^ω^)⊃━☆゜.*・。</p>&mdash; かにさん (@kani_acid) <a href="https://twitter.com/kani_acid/statuses/409865156286369792">December 9, 2013</a></blockquote>

仕組み的には[しゅうまい君](https://twitter.com/shuumai)と同じで、学習した単語からマルコフ連鎖で文章を生成している。

学習はhome timelineと`ほっこり`で検索した結果が元になっているので、
全体的にtweetがほっこりしている

tweetがfavられることによって単語の重み付けを変化させる機能もつけたが、
いかんせんまだデータが足りない

# Twitter::Streaming::Client
twitter gemはver 5から、Streaming APIを単体で使えるようになった (Experimental)。今回はこんな感じで使っている

```ruby
client = Twitter::Streaming::Client.new do |config|
  config.consumer_key        = "YOUR_CONSUMER_KEY"
  config.consumer_secret     = "YOUR_CONSUMER_SECRET"
  config.access_token        = "YOUR_ACCESS_TOKEN"
  config.access_token_secret = "YOUR_ACCESS_SECRET"
end

client.user do |object|
  case object
  when Twitter::Tweet
    # tweetを学習する
  when Twitter::Streaming::Event
    event = object
    if event.name == :favorite
      # 単語の重みづけを変更する
    elsif event.name == :follow
      # フォローバックする
    end
  end
end
```

## サーバ
最初はherokuに上げようかと思ったけど、単語リストが結構レコード数増えそうなので、 http://rackhub.net/ を使っている。

多分無料でSSHが使えるレンタルサーバもたくさんあるだろうけど、rackhubは作ったり壊したりが楽でよい。


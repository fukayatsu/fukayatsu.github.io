---
title: "issue投げよう"
date: 2012-11-28 00:45
tags: github,issues,gem,action_args,ruby
---

昨日の自分へ


<blockquote class="twitter-tweet"><p>action_argsとactive_adminが競合してる気がするのであとでちゃんと検証してフィードバックとかしたい</p>&mdash; ふかやつ (@fukayatsu) <a href="https://twitter.com/fukayatsu/status/273063544042450944" data-datetime="2012-11-26T13:59:56+00:00">November 26, 2012</a></blockquote>
<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

発端はこれ。
プライベートで作業してるときに、両方のgemを入れてるとactive_adminの管理画面にログインした後に
    wrong number of arguments
とか表示されるのに気づいた。

エラーを追うと、

[active_admin/lib/active_admin/page_controller.rb at master · gregbell/active_admin · GitHub](https://github.com/gregbell/active_admin/blob/eea827a3cfd4c4bab3c3171efaa1d91bf6cb836b/lib/active_admin/page_controller.rb)
```ruby
module ActiveAdmin

  # All Pages controllers inherit from this controller.
  class PageController < BaseController

    # Pages::Page subclasses Page::Base which implements the layout code
    layout false

    actions :index

    def index(options={}, &block)
      render "active_admin/page/index"
    end

    def clear_page_actions!
      active_admin_config.clear_page_actions!
    end
  end
end
```
この11行目がaction_argsと競合しているらしかった。

** というのを[asakusarb/action_args](https://github.com/asakusarb/action_args)のissuesに書けよ俺！ **

`次からそうしますm(_ _)m`

今回はたまたま@a_matsudaさんが最初のtweetを捕捉して頂いたらしく、速攻で修正してくださいました。ありがとうございました!!

<blockquote class="twitter-tweet" data-in-reply-to="273063544042450944" lang="ja"><p>@<a href="https://twitter.com/fukayatsu">fukayatsu</a> 修正してみたので、よければ先っちょで試してみていただけますでしょうか？ <a href="https://t.co/PoleOzgR" title="https://github.com/asakusarb/action_args">github.com/asakusarb/acti…</a> (明日ぐらいにはgemにもすると思いますが)</p>&mdash; Akira Matsudaさん (@a_matsuda) <a href="https://twitter.com/a_matsuda/status/273106258373001217" data-datetime="2012-11-26T16:49:40+00:00">11月 26, 2012</a></blockquote>
<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet" data-in-reply-to="273106258373001217" lang="ja"><p>@<a href="https://twitter.com/a_matsuda">a_matsuda</a> おおお、ありがとうございます！！修正箇所と正常に動作することを確認しました。ちゃんとフィードバックしなくてすみませんm(_ _)m</p>&mdash; ふかやつさん (@fukayatsu) <a href="https://twitter.com/fukayatsu/status/273207043026976768" data-datetime="2012-11-26T23:30:09+00:00">11月 26, 2012</a></blockquote>
<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote class="twitter-tweet" data-in-reply-to="273207043026976768" lang="ja"><p>@<a href="https://twitter.com/fukayatsu">fukayatsu</a> よかったです :) こちらはこのバグにはまったく気づけてなかったところでたまたまさっきのツイートを拝見したので助かりました。ありがとうございました。</p>&mdash; Akira Matsudaさん (@a_matsuda) <a href="https://twitter.com/a_matsuda/status/273214068368744449" data-datetime="2012-11-26T23:58:04+00:00">11月 26, 2012</a></blockquote>
<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


その後、他にも変更が入ってgemのバージョンが`v0.0.3` => `v1.0.0`になったみたいです。

[action_args | RubyGems.org | your community gem host](http://rubygems.org/gems/action_args)


結論



<blockquote class="twitter-tweet"><p>みんなちゃんとissue投げるところからOSSへの貢献をしよう。 <a href="https://twitter.com/search/%23cwt2012">#cwt2012</a> <a href="http://t.co/j6j0dz59" title="http://twitpic.com/bazq7r">twitpic.com/bazq7r</a></p>&mdash; Aki (@nekoruri) <a href="https://twitter.com/nekoruri/status/266028240777388032" data-datetime="2012-11-07T04:04:09+00:00">November 7, 2012</a></blockquote>
<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
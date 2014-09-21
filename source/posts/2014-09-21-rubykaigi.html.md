---
title: RubyKaigi 2014に参加してきた
date: 2014-09-21 17:20 JST
tags: ruby, rubykaigi
---

> [RubyKaigi 2014, 18-20 september](http://rubykaigi.org/2014)

<blockquote class="twitter-tweet" lang="ja"><p><a href="https://twitter.com/hashtag/rubykaigi?src=hash">#rubykaigi</a> へ。話しかけるとesaステッカーをdropします <a href="http://t.co/ngE3qb8BIz">pic.twitter.com/ngE3qb8BIz</a></p>&mdash; fukayatsu (@fukayatsu) <a href="https://twitter.com/fukayatsu/status/512750227619450880">2014, 9月 18</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

入社してまだ1ヶ月経ってないのですが、[会社の方](http://kaizenplatform.in/hiring/engineer.html)にRubyKaigi行ってきていいか聞いたら、速攻でおｋと言われたので3日間楽しんできました。

![](/images/2014-09-21-1411282813_1.png)

# 今回の戦略
- できるだけtweetして後からまとめる

# 聞いてきたセッションの雑感
> [RubyKaigi 2014 | Schedule](http://rubykaigi.org/2014/schedule)

### 1日目
- [CRuby Committers Who's Who in 2014](http://rubykaigi.org/2014/presentation/S-TomoyukiChikanaga)
    - 今回speakerをするCRuby Committerの一言紹介
    - 今回どういう話をするかもあったので、どれを聞くか参考になった
        - smalrubyとかreishとかはこの時知った
- [Building the Ruby interpreter -- What is easy and what is difficult?](http://rubykaigi.org/2014/presentation/S-KoichiSasada)
    - Rubyを実装する上で何が大変かという話
    - "Procが難しかった"
    - "プログラマが幸せなまま並列実行処理を書けるようにするのが難しい"
    - "パフォーマンスと開発しやすさのトレードオフに打ち勝つ"というのが印象的
- [Symbol GC](http://rubykaigi.org/2014/presentation/S-NarihiroNakamura)
    - ある意味一番興味があったセッション
    - RubyでString#to_symとかで作られるsymbolがRuby2.2からはGC対象になる
        - define_methodしたときのsymbolとかはGCされない
    - Symbol.all_symbols.sizeをチェックして、GCされているか調べる
- [Continuous Delivery at GitHub](http://rubykaigi.org/2014/presentation/S-RobertSanheim)
    - Githubのテストコードとアプリのコードの量はほぼ1:1
    - 素早く細かく頻繁にデプロイすることが重要
- [What's wrong with your app?](http://rubykaigi.org/2014/presentation/S-KeikoOda)
- [Non-Linear Pattern Matching against Unfree Data Types in Ruby (Egison Pattern Matching in Ruby)](http://rubykaigi.org/2014/presentation/S-SatoshiEgi)
- [Inside RubyMotion for Android](http://rubykaigi.org/2014/presentation/S-LaurentSansonetti)
    - NDKが古いとか言われる時は、 Rakefileに`app.api_version = '19'`と書けばおｋ

諸事情により後半のセッションはあまり聞けず & パーティは参加できず。残念(´・ω・｀)

### 2日目

esaのTシャツを着てステッカーを配ったりしてた

- [Coming soon...](http://rubykaigi.org/2014/presentation/S-YukihiroMatzMatsumoto)
    - Ruby 3.0でやりたい3つのこと(みんなが飽きないように燃料投下)
    - Concurrency
    - JIT
    - Static typing
        - メソッドの集合を型で表して推論する感じ
        - 一般的にイメージするような型推論とはちょっと違う
- [Extreme Makeover: Rubygems Edition](http://rubykaigi.org/2014/presentation/S-AndreArko)
    - Rubygems.orgがどういうトラブルをどうやって乗り越えてきたか
    - これからbundlerをどうやって高速化するか
        - indexをplain textにしてCDNに置くようにする
- [Archeology of Ruby: Removed Features (Ruby 考古学 機能編)](http://rubykaigi.org/2014/presentation/S-KazuhiroNISHIYAMA)
    - Rubyにかつて存在したけど取り除かれた機能について
- [<%= link_to "bundle", "update" %> - Make "bundle update" more fun to review](http://rubykaigi.org/2014/presentation/S-KensukeNagae)
    - 蔑ろにされがちな`bundle update`をどうやって自動化するか
    - tachikoma.io の話も
- [MRuby as Development Platform for Payments](http://rubykaigi.org/2014/presentation/S-ThiagoScalone-DanielRodriguez)
    - mrubyを決済プラットフォームで使う話
    - web IDEで開発するらしい
- [The Twelve-factor Ruby 「Ruby を良くするための12のポイント」](http://rubykaigi.org/2014/presentation/S-HiroshiSHIBATA)
    - rubyにどうやって貢献するか、どうやればよりうまく貢献できるか
    - issueにクラッシュログを載せたり、trunkのRubyで試したり、期待する挙動と現実の挙動を併記したり等
- [Scalable deployments - How we deploy Rails app to 100+ hosts in a minute](http://rubykaigi.org/2014/presentation/S-ShotaFukumori)
    - serfを使ってデプロイする仕組みを構築
    - assetsはCI時にビルド、bundle-gemsはmasterにマージされたタイミングで各appサーバ上で実行され、あとはstagingで確認が終わった段階でsymlinkを切り替えてサーバをreloadするだけ
- [Resource Control Architecture scripting with mruby for a Web Server Separating Computer Resources Virtually at Each HTTP Request](http://rubykaigi.org/2014/presentation/S-MATSUMOTORyosuke)
    - ngx_mruby, mod-mrubyの話。両者とも大体同じ感じで書けるらしい
    - 最近ngx_luaを触っていたので発表聞くのが楽しかった
    - OpenRestyのmruby版が欲しい。
- [ServerEngine: a framework for multiprocess servers in Ruby](http://rubykaigi.org/2014/presentation/S-MasahiroNakagawa)
    - Fluentd v11で使われているマルチプロセスサーバについて
    - よさそう
    - sidekiqみたいなやつも作れそうと思った
- [Kids, Ruby, Fun!: Introduction of the Smalruby and the Ruby Programming Shounendan](http://rubykaigi.org/2014/presentation/S-KoujiTakao-NobuyukiHonda)
    - プログラミング教育向けにSmalrubyというビジュアルプログラミング環境を作った話
    - ビジュアル <=> Rubyコードが相互に変更可能なのがすごい
- [Lightning Talks](http://rubykaigi.org/2014/LT)
    - アイデアの期待値の話が一番お気に入り


### 3日目

pplogのTシャツを着てステッカーを配ったりしてた

- [Ohayō Rails (おはよう Rails)](http://rubykaigi.org/2014/ohayo)
    - おっさんたちがRails最高！でもアレとかつらいよねという話
- [Speeding up Rails 4.2](http://rubykaigi.org/2014/presentation/S-AaronPatterson)
    - どうやってviewのレンダリング速度を上げるかという話
    - 計測、計測、計測！
- [Practical meta-programming in Application](http://rubykaigi.org/2014/presentation/S-KyosukeMOROHASHI)
    - Rubyらしいメタプログラミングの使いかた
    - デザインパターンとか、メタプログラミングとかは、手段ではなく目的になってしまうとつらい
- [Reish, an unix shell for rubyist.](http://rubykaigi.org/2014/presentation/S-KeijuIshitsuka)
    - Rubyで動くshell
    - irbみたいな感じだった。irbの作者なので当然かも。
- [Fluentd Hacking Guide (Fluentd ソースコード完全解説)](http://rubykaigi.org/2014/presentation/S-NaotoshiSeo)
    - vimでソースコードを読む感じが参考になった
        - 自分はctagsあまり使えてない
    - このへんから眠さに耐えられなくなりつつあった
- [The role of ruby in the single page app.](http://rubykaigi.org/2014/presentation/S-MatthewWerner)
    - zendeskでどうやってSPAをrailsで作っているか
    - 場合によってはRailsを使った方がSPAよりユーザ体験がよいこともある
    - 最初に返すviewにユーザ情報のjson入れたりするのヨサソウ
- [Walking around ruby forest more deeply](http://rubykaigi.org/2014/presentation/S-YUKITORII)
    - どうやってCRubyのコードを読んでいくか
    - その場でgithub.com/ruby/rubyをcloneして一緒に読んだ(st.cのあたり)
    - Ruby Under the microscope(秋に日本語版がでるらしい)とRHGを読もう
- [tending the ruby ecosystem](http://rubykaigi.org/2014/presentation/S-zzak)
    - 我々はRubygemsの恩恵を受けているのだから、Rubygemsを救おうという話
    - そうすればきっと自分に返ってくる
- [Three Ruby usages - High-level interface, Glue and Embedding - Inside Droonga](http://rubykaigi.org/2014/presentation/S-KouheiSutou)
- [Ruby 2.1 in Production](http://rubykaigi.org/2014/presentation/S-AmanGupta)
    - Githubの開発で使われている便利ツールが五月雨式にでてきた
    - どれも便利そうだし、地道に計測して改善しているのだなということが分かった

# これからチェック
- Hypermedia API界隈
    - [tkawa/hypermicrodata](https://github.com/tkawa/hypermicrodata)
        - [Hypermedia: The Missing Element to Building Adaptable Web APIs in Rai…](http://www.slideshare.net/tkawa1/rubykaigi2014-hypermedia-the-missing-element)
    - [cookpad/garage](https://github.com/cookpad/garage)
- ngx_mruby
- CRubyのコード
- RubyMotion for Android
- 視聴していないセッションのチェック

# 今回良かったこと
- 3日間最初のセッションから参加できた
- 知り合いの知り合いとたくさん話すことが出来た
- ngx_mrubyのモチベーションの高まり
- github.com/ruby/rubyのコードをちょっと読んだ。読み進めるモチベーションが出来た
- HerokuのappをRuby 2.1.3にしたらメモリ使用量が減ったっぽい

# 次回のTry
- 会社のステッカーを配ったりする
- なんか発表する
- 英語をもっと聞き取れるようになる

# See also
- [#rubykaigi - Togetterまとめ](http://togetter.com/li/720658)
- [RubyKaigi 1日目まとめ #RubyKaigi - くりにっき](http://sue445.hatenablog.com/entry/2014/09/18/223445)

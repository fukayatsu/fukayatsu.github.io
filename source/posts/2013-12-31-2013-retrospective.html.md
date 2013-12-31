---
title: 2013の振り返り
date: 2013-12-31 14:29 JST
tags: 2013, retrospective, ruby
---

個人的にどんな一年だったかを雑に振り返ってみる。


今年の始めに書いた[今年はきっとこんな感じの1年になる](http://blog.fukayatsu.com/2013/01/02/guess-my-2013/)は7割ぐらいあたっている感じ。

# GitHub Contributions
![](/images/2013-12-31-a.png)
![](/images/2013-12-31-b.png)

5月 ~ 9月ごろはシステムの引っ越しやリアルの引っ越しが合った時期で、活動が鈍っている。

# 今年作ったもの

## Webサービス
### [Chrome Apps Generator](http://chrome-apps-generator.herokuapp.com/)
WebサービスをChrome App化するサービス

### [みつをる](http://mitsuwo.net/)
手書きっぽい画像を生成するサービス

### [GitAboutMe](http://git-about.me/)
gitで更新するabout.me的なサービス[WIP]
そろそろ閉じる

### アレからアレをアレしてきてアレするサービス
10月ぐらいにオープンして月間PVが6万ぐらい。技術検証を兼ねている。

## 家電制御
- [RubyとLita(chat bot)で自宅のエアコンを操作する](http://blog.fukayatsu.com/2013/08/11/iremocon-and-lita/)
- [寒くて朝起きるのが辛いのでプログラムでなんとかしたい](http://blog.fukayatsu.com/2013/11/25/ruby-and-daily-habit/)
- [Fukayatsu Room Controller (FRC)](http://blog.fukayatsu.com/2013/12/03/frc/)
- [voice-input](http://blog.fukayatsu.com/2013/12/22/voice-input/)

引っ越しを期に一度再構築してhipchat中心の構成にした。
次に作りなおす時はfluentdを使うと思う。

## Chrome Extension / Apps
今年20個弱作って公開制限に達したので、使わなそうなものから非公開にしている。

※ ある程度ユーザ数が多いものを紹介

### [github:status](https://chrome.google.com/webstore/detail/githubstatus/ibhpkjddiffbbmgagacamppmdkhlijpd?utm_source=chrome-ntp-icon)
githubのステータスをアイコンで表示

### [Bootstrap Sample](https://chrome.google.com/webstore/detail/bootstrap-sample/baifdhffdhpckmfbikekfljcaggninhm?utm_source=chrome-ntp-icon)
chrome appをtwitter bootstrapを使って作るサンプル

### [AutoProxy](https://chrome.google.com/webstore/detail/autoproxy/bjbdlacnaiicmclhlmppiejhmbphcblc)
urlごとにproxyを設定する


## RubyGems
気付いたら増えてた。

### [favidenticon](https://rubygems.org/gems/favidenticon)
faviconをcommand lineで生成

### [active_record-deselect](https://rubygems.org/gems/active_record-deselect)
Railsとかでmodelの特定カラム*以外*をselectして取得するためのgem

### [say-japanese](https://rubygems.org/gems/say-japanese)
Macの`say`コマンドのwrapper(日本語音声特化)

### [get_dropbox_access_token](https://rubygems.org/gems/get_dropbox_access_token)

名前の通り。

### [json2yaml](https://rubygems.org/gems/json2yaml)
json と yamlを相互変換するコマンド

### [pebbles-suddenly_death_string](https://rubygems.org/gems/pebbles-suddenly_death_string)

`> 突然の死 <`

### [sakenote](https://rubygems.org/gems/sakenote)
[日本酒アプリSakenote](http://sakenote.com/)のapi client

### [lita-schedule](https://rubygems.org/gems/lita-schedule)
[jimmycuadra/lita](https://github.com/jimmycuadra/lita)にスケジュール機能を追加

### [zusaar](https://rubygems.org/gems/zusaar)
zusaarのapi client

### [pebbles-fujoshi](https://rubygems.org/gems/pebbles-fujoshi)
いったい何がしたかったのか


## Alfred workflow
- [fukayatsu/alfred-suddenly-death](https://github.com/fukayatsu/alfred-suddenly-death)

## Sublime Text 3 plugin
- [fukayatsu/SublimeSuddenDeath](https://github.com/fukayatsu/SublimeSuddenDeath)

## pull request
`middleman`とか`hipchat-rb`とかにバグ修正pull-requestがマージされた。
github中心の生活をして、だんだんそういうのが普通のことになってきたので詳しくは書かない。

# 今年変えたもの
- 住む場所
    - => 会社から徒歩5分
- Sublime Text 2
    - => Sublime Text 3
- 平日の日中に書く言語
    - PHP => Ruby

# 今年参加したイベント

過去記事から抜粋

- [渋谷.rb[:20131218]に行ってきた](http://blog.fukayatsu.com/2013/12/18/shibuya-rb/)
- [#10LISP '00に参加しました](http://blog.fukayatsu.com/2013/08/03/10lisp-00/)
- [5月の渋谷.rbに行ってきた](http://blog.fukayatsu.com/2013/05/15/shibuya-rb/)
- [4月のShibuya.rbの集まりに行ってきた箇条書き](http://blog.fukayatsu.com/2013/04/17/shibuyarb-2013-04-17/)
- [渋谷.rb[:20130320](拡大版)に参加してきた](http://blog.fukayatsu.com/2013/03/21/shibuyarb-20130320/)
- [大江戸Ruby会議03に参加してきた #odrk03](http://blog.fukayatsu.com/2013/03/19/oedo-ruby-kaigi-03/)
- [東京Ruby会議3日目&大和田Ruby会議に参加してました](http://blog.fukayatsu.com/2013/02/10/tkrk10-3rd/)
- [デブサミ2013に行ってきた](http://blog.fukayatsu.com/2013/02/15/devsumi2013/)
- [T2-Study#3を開催しました](http://blog.fukayatsu.com/2013/01/18/t2-study-3/)
- [新年最初のShibuya.rbに参加してきた](http://blog.fukayatsu.com/2013/01/16/shibuya-rb/)
- [東京Ruby会議10に参加してきた](http://blog.fukayatsu.com/2013/01/14/tokyo-ruby-kaigi-10/)

今年前半はイベントに参加することが多くて、後半はイベントにあまり行かずにコード書いてたようだ。

# 来年やること
- [fukayatsu/fukayatsu-gem](https://github.com/fukayatsu/fukayatsu-gem) のテストを通す/テストを追加する
- 今年は小粒なものを作ることが多かったので、「fukayatsuといえばこれ」みたいなプロダクト/プロジェクトを作って長期的に取り組みたい
- もっとコミュニケーション
- もっと低レイヤー

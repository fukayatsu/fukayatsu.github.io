---
title: middleman-blogでちょっとはまったこと
date: 2013-11-23 20:17 JST
tags: middleman,middleman-blog
---

## stylesheetがない
はまったというか、自分で1から書くか[Middleman Directory](http://directory.middlemanapp.com/#/templates/all)にあるやつを使うか迷った。
せっかくなので自分で書いた。

## 日本語のタグが404になる
> [Non ascii tag support by fukayatsu · Pull Request #176 · middleman/middleman-blog](https://github.com/middleman/middleman-blog/pull/176)

ascii以外のタグを考慮してないっぽかったので、pull-req出した


```ruby
# gem "middleman-blog", "~> 3.4.1"
gem "middleman-blog", github: 'fukayatsu/middleman-blog', branch: 'non-ascii-tag'
```
とりあえず今はこんな感じで動かしている

## 日本語のタグページががビルド毎に生成と消滅を繰り返す
調査中

`bundle exec middleman build --no-clean`

でとりあえず対処

## 謎のpre-commit-hookでデプロイ出来ない
自分のローカル環境ではリポジトリが作られると、自動的にmasterブランチにコミット出来ないようなpre-commit-hookが配置される。

今回`middleman-deploy`というgemでデプロイしようとして、
`(blog root)/.git/hooks`は空なのにデプロイ出来なくて数分悩んだ。

結局デプロイ時に自動で作られた`(blog root)/build/.git/hooks`のpre-commit-hookが原因だったというオチ。

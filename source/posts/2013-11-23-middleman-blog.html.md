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

## 濁点を含むタグのページががビルド毎に生成と消滅を繰り返す
mac特有の問題だった。

現象としてはこれが近い
> [カテゴリー名に濁点を含んだ日本語が使えない問題を解決する(Rsyncのiconvオプションを使う) - gam0022.net](http://gam0022.net/blog/2012/08/11/use-rsync-iconv-option/)

対策
> [Support/NFC・NFD問題が解決 at master · Alice-Gits/Support](https://github.com/Alice-Gits/Support/tree/master/NFC%E3%83%BBNFD%E5%95%8F%E9%A1%8C%E3%81%8B%E3%82%99%E8%A7%A3%E6%B1%BA)


`追記: 2013-11-24 2:55`

> [Handle UTF-8-MAC filename on MacOS by fukayatsu · Pull Request #1089 · middleman/middleman](https://github.com/middleman/middleman/pull/1089)
プルリク出した

```
# on build/
$ git config --local core.precomposeunicode true
```

`bundle exec middleman build --no-clean`

一度`tags/*`を全部削除してから`build`でもいいかもしれない。

## 謎のpre-commit-hookでデプロイ出来ない
自分のローカル環境ではリポジトリが作られると、自動的にmasterブランチにコミット出来ないようなpre-commit-hookが配置される。

今回`middleman-deploy`というgemでデプロイしようとして、
`(blog root)/.git/hooks`は空なのにデプロイ出来なくて数分悩んだ。

結局デプロイ時に自動で作られた`(blog root)/build/.git/hooks`のpre-commit-hookが原因だったというオチ。

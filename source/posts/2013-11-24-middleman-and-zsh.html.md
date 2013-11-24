---
title: middleman-and-zsh
date: 2013-11-24 19:53 JST
tags:
---

ブログの記事を書くステップは、今までこんな感じだった。

1. iTerm2を立ち上げる
    - `CMD + SPACE` => `iterm + ENTER` (alfred)
2. blogのリポジトリに移動する
    - `$ cd ~/github/fukayatsu.github.io`
3. 記事を新規作成する
    - `$ bundle exec middleman article middleman-and-zsh`
4. 記事を編集する
    - `$ subl source/posts/2013-11-24-middleman-and-zsh.html.md`
5. 記事をプレビューする
    - `$ middleman`
    - open in browser
6. 記事をコミットする
    - `$ git commit -am 'Add post'`
7. 記事をpushする
    - `$ git push`
8. travis-ciとgithub pagesがよしなにしてくれる

## 今はこうなった
1. iTerm2を立ち上げる
    - `CMD + SPACE` => `iterm + ENTER` (alfred)
2. blogのリポジトリに移動して、記事を作成し、powのプレビューを立ち上げる
    - `$ blog middleman-and-zsh`
3. LiveReloadで確認しながら記事を書く
4. 記事を公開する
    - `$ blog-publish`
5. travis-ciとgithub pagesがよしなにしてくれる

# 作業メモ
## zshの関数

```zsh
function blog() {
  # リポジトリに移動
  cd /Users/fukayatsu/github/fukayatsu.github.io
  if [ $1 ]
  then
    # 新規記事作成
    file=$(bundle exec middleman article $1 | \
      grep 'create\|update' | \
      awk '{print $3}')

    # ファイル名からプレビュー用url生成
    url=$(echo $file | \
      sed -e 's/source\/posts/http:\/\/fk.dev/' | \
      sed -e 's/\.html\.md/\//' | \
      sed -e 's/\(201[0-9]\)-\([0-9][0-9]\)-\([0-9][0-9]\)-/\1\/\2\/\3\//')

    # エディタを開く
    subl $file

    # ブラウザでプレビューを開く
    open $url || echo preview: $url
  fi
}

function blog-publish() {
  # リポジトリに移動
  cd /Users/fukayatsu/github/fukayatsu.github.io

  # コミットしてremoteにpush
  git checkout source
  git commit -am "Update Posts"
  git push origin source

  echo 'done.'
}
```

## pow用のconfig.ru

```ruby
# Make Rack comparable to middleman server by tdreyno · Pull Request #560 · middleman/middleman
# https://github.com/middleman/middleman/pull/560

require 'rubygems'
require 'bundler'
Bundler.setup

require "middleman-core/load_paths"

Middleman.setup_load_paths

require "middleman-core"
require "middleman-core/preview_server"

module Middleman::PreviewServer
  def self.preview_in_rack
    @options = { latency: 0.25 }
    @app = new_app
    start_file_watcher
  end
end

Middleman::PreviewServer.preview_in_rack
run Middleman::PreviewServer.app.class.to_rack_app

```

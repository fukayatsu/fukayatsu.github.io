---
title: active_record-deselectというgemを作った
date: 2013-12-20 09:04 JST
tags: ruby, rails, gem, active_record
---

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) #21

## 背景
`Post`モデルの`body`以外を取得したいというような時に、
`#select`で必要なカラムをすべて明示するのが面倒だった。

(もし似たようなgemがあれば教えて下さい)

## usage
```ruby
# Postモデル
4.0.2 @ 2.0.0 (main)>Post
#=> class Post < ActiveRecord::Base {
              :id => :integer,
            :name => :string,
            :body => :text,
         :user_id => :integer,
    :published_at => :datetime,
      :created_at => :datetime,
      :updated_at => :datetime
}


# body以外のカラムを取得
4.0.2 @ 2.0.0 (main)>Post.deselect(:body).to_sql
#=> "SELECT id, name, user_id, published_at, created_at, updated_at FROM \"posts\""


# selectの取り消し
4.0.2 @ 2.0.0 (main)>Post.select(:id, :name, :body, :user_id).deselect(:body, "user_id").to_sql
#=> "SELECT id, name FROM \"posts\""

4.0.2 @ 2.0.0 (main)>Post.select('posts.id', 'posts.name').deselect(:name).to_sql
#=> "SELECT posts.id FROM \"posts\""


# *** Post.all.to_sql相当になる場合 ***
4.0.2 @ 2.0.0 (main)>Post.select(:id).deselect(:id).to_sql
#=> "SELECT \"posts\".* FROM \"posts\""


# *** deselect後にselectする場合 ***
4.0.2 @ 2.0.0 (main)>Post.deselect(:id, :name).select(:id).to_sql
#=> "SELECT body, user_id, published_at, created_at, updated_at, id FROM \"posts\""
# Post.deselect(:name).to_sql 相当
```

最後の2つの挙動をどうしようか、まだちょっと迷っている

## link
- [deselectの意味・用例｜英辞郎 on the WEB：アルク](http://eow.alc.co.jp/search?q=deselect)
- [fukayatsu/active_record-deselect | GitHub](https://github.com/fukayatsu/active_record-deselect)
- [active_record-deselect | RubyGems.org | your community gem host](https://rubygems.org/gems/active_record-deselect)
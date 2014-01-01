---
title: BundlerでC拡張を含んだgemを作ってテストする
date: 2014-01-01 12:01 JST
tags: ruby, gem, c, bundler
---

<blockquote class="twitter-tweet" lang="en"><p>fukayatsuが来年学ぶべき言語は『C』です。 <a href="http://t.co/pFf1wzHZ5r">http://t.co/pFf1wzHZ5r</a></p>&mdash; ふかやつ (@fukayatsu) <a href="https://twitter.com/fukayatsu/statuses/418011728656363520">December 31, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

ということなのでC拡張を含むgemを初めて作ったのがこちら。

- [fukayatsu/hello_gem_with_extensions](https://github.com/fukayatsu/hello_gem_with_extensions)

```c
#include <stdio.h>
#include <ruby.h>

static VALUE
c_hello(VALUE self, VALUE name_val)
{
  char *name = StringValuePtr(name_val);
  char greet[100];
  sprintf(greet, "Hello, %s", name);
  return rb_str_new2(greet);
}

void
Init_hello_gem_with_extensions(void)
{
  VALUE cHelloGemWithExtensions;

  cHelloGemWithExtensions = rb_const_get(rb_cObject, rb_intern("HelloGemWithExtensions"));

  rb_define_method(cHelloGemWithExtensions, "hello", c_hello, 1);
}
```

C言語側でRubyのHelloGemWithExtensionsクラスにhelloという名前で引数を一つ取るc_helloメソッドを登録している。

```ruby
require 'spec_helper'

describe HelloGemWithExtensions do
  subject { HelloGemWithExtensions.new }
  it { expect(subject.hello('C extension')).to eq "Hello, C extension" }
end
```
それをRubyから呼ぶテスト。簡単ですごい。

# 雑感
- 『Rubyソースコード完全解説』を昨日ちょっと読んでたので、「VALUEってなんだよ」とか思わずに済んだ。
- bundle gem fooとした時に拡張ライブラリ用のディレクトリやファイルを作成するオプションがあると便利そう
- [luislavena/rake-compiler](https://github.com/luislavena/rake-compiler)便利。
    - `spec.add_development_dependency "rake-compiler"`しておく
- compile時に生成されるファイルをgitignoreしておく。
    - [nokogiri/.gitignore at master · sparklemotion/nokogiri](https://github.com/sparklemotion/nokogiri/blob/master/.gitignore)を参考にした
- [jrubyとrubiniusでテストが失敗する](https://travis-ci.org/fukayatsu/hello_gem_with_extensions)けど保留している
    - jrubyの場合はC拡張を読み込むために、"JRUBY_OPTS=-Xcext.enabled=true"が必要らしい


# 参考にしたリンク
Ruby - BundlerでC拡張を含んだgemを公開する - Qiita [キータ]
http://qiita.com/gam0022/items/2ee82e84e5c9f608eb85

Gems with Extensions - RubyGems Guides
http://guides.rubygems.org/gems-with-extensions/

Ruby用拡張ライブラリをCで作る --- Little Penguin
http://members.jcom.home.ne.jp/mitakelp/old/_hellorb.html

Rubyの拡張ライブラリを作ってみよう！ - ser1zw's blog
http://ser1zw.hatenablog.com/entry/20111217/1324133118

『Rubyソースコード完全解説』サポートページ
http://i.loveruby.net/ja/rhg/




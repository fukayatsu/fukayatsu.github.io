---
title: ブログに画像貼り付けるのが面倒くさい問題
date: 2014-01-02 13:11 JST
tags: blog, mac, automator, image
---

[LinCastorを使う](/2013/12/21/blog/)ことによってブログを書くのがかなり楽になったが、
まだスクリーンショット等のデスクトップ上の画像ファイルを記事に埋め込むのが面倒だった。

当初はこれをsublime text 3のプラグインを開発することによって解決しようと思ったのだけど、
実験した結果、ST3上に画像ファイルをドラッグ＆ドロップした時のイベントは拾え無かったので、この方法はひとまず諦めた。


また、Dropboxや類似のサービス(例えばGyazo)のようなものを使えば、スクリーンショットを撮ったと同時にWeb上にアップロードしてURLを取得することができるが、画像を手元で管理しておきたいのでこれも選択肢から外れた。


## Automatorでサービスを作る

結局任意の画像ファイルを特定のフォルダに適当な名前でコピーして、適切なpathをMarkdown形式でクリップボードにコピーできればストレスはかなりは軽減できる。

今回はAutomatorを使った。

![](/images/2014-01-02-1388636648_1.png)

これを選択すると、

`icon.png`を`TIMESTAMP_1.png`のような名前でmiddlemanの`images`フォルダにコピーし、
`![](/images/TIMESTAMP_1.png)`という文字列がクリップボードにコピーされる。


### workflow
こんな感じになった。
![](/images/2014-01-02-1388636935_1.png)


```ruby
require 'fileutils'

BLOG_IMAGE_DIR = '/Users/fukayatsu/github/fukayatsu.github.io/source/images'
TIME_STR       = Time.now.strftime("%Y-%m-%d-%s")

ARGV.each.with_index(1) { |file, i|
    extname = File.extname(file)
    new_file = "#{TIME_STR}_#{i}#{extname}"
    FileUtils.copy(file, "#{BLOG_IMAGE_DIR}/#{new_file}")
    puts "![](/images/#{new_file})"
}
```


## 参考
- [「Automator」で新たなサービスを右クリックメニューに追加する方法 | Mac教信仰中！！](http://taiyaki.main.jp/wordpress/2013/03/08/%E3%80%8Cautomator%E3%80%8D%E3%81%A7%E6%96%B0%E3%81%9F%E3%81%AA%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E5%8F%B3%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%81%AB/)
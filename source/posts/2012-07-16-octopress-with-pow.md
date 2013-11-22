---
title: "octopress with pow"
date: 2012-07-16 00:13
tags: octopress, pow, mac, powder, grabbox
---

![screen shot](http://dl.dropbox.com/u/85825/Screenshots/mv63g2j1-e4e.png "こんなかんじ")


> [OctopressのpreviewをPowでやると便利ですよという話 > marutanmlog](http://marutanm.github.com/blog/2012/01/07/octopress-preview-pow/)

でも言及されているように、octopress + powが良い感じ。

また、powを便利に使うための`powder`というgemがあり、

たとえば、
	gem i powder
	cd path/to/octopress
	powder link

とすれば、`http://octopress.dev`でpreviewできる。

また、`http://hogehoge.dev`でpreviewしたい場合は、
	cd ~/.pow
	mv octopress hogehoge
のようにすればよい。

あとは`rake watch`させておいて、いいかんじになったら`rake deploy`でok


うーん、octopressといい、powといい、使っていて心地良い : )


#### 余談:
screen shotを載せるために[GrabBox](http://grabbox.devsoft.no/)というスクリーンキャプチャをつかってみた。これは`cmd+shift+4`などとした時に、
デスクトップに生成された画像を自動的にDropboxへ移動して、public linkをクリップボードにコピーしてくれる。これはこれで便利。
---
title: "git-about.meをリリースしました"
date: 2013-05-05 12:00
tags: service,git-about.me
---

[GitAboutMe  -  "ABOUT ME" for Git users](http://git-about.me/)

## 使いかた
- [git-about.me](http://git-about.me/) でユーザ名と公開鍵を登録
- git clone, edit file, git push


例: [git-about.me/fukayatsu](http://git-about.me/fukayatsu)

```
$ git clone git@git-about.me:fukayatsu about-fukayatsu
$ cd about-fukayatsu
(edit README.md)
$ git commit -am 'Update README.md'
$ git push origin master
```

- Git版のabout.meです
    - (劣化版github pagesともいう)
- 他のユーザのプロフィールをgit cloneできます
- デザインとか、細かい調整がまだ終わっていない

## 作った理由

- PHP疲れ
- プログラマブルにリポジトリを操作するの面白そう
    - 実際面白かった
- rails周りの開発、運用の経験値を上げたい
    - capstranoを初めてまともに使った

## 使った技術要素

- aws-ec2-micro
- nginx
- unicorn
- ruby 2.0.0-p0
- rails 4.0.0.rc1
- capstrano
- gitolite
- grit
- ムームードメイン


## その他
> [cui-about.meをリリースしました - naoty.to_s](http://naoty.hatenablog.com/entry/2012/07/17/221530)

にインスパイアされました。 thanks! :)
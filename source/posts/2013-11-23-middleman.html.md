---
title: OctopressからMiddlemanに移行した
date: 2013-11-23 15:32 JST
tags: middleman, markdown
---

各記事の[Front-matter](http://jekyllrb.com/docs/frontmatter/)を直すのと、いくつか[Via.Me](http://via.me/)を参照していた画像があったので差し替えた。
その他はだいたいそのまま。


## 動機
- そもそもOctopressのv2.0に、中途半端に2.1ブランチをマージして使っていたので気持ち悪かった
    - 次のバージョンはいつ出るんだろう
- octopressで`rake new_post`, `rake deploy`するのが面倒になってきた
- Middleman便利というのはよく聞くが、実際に使う機会がなかった


## 移行にあたって
- 元の記事URLを踏襲
- デザインは最低限のものを用意
  - できるだけ[GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)のstyleに近くした

## 今後
- DropBox経由で投稿できるようにする
    - 参考: [Hello world - r7kamura blog](http://r7kamura.github.io/2013/11/10/hello-world.html)
- 短めの記事をなるべく毎日書く
- qiitaみたいにcode-blockにファイル名を入れられるようにしたい

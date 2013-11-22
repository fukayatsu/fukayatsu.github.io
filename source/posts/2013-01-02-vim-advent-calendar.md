---
title: "Vimと僕とSublime"
date: 2013-01-02 00:00
tags: vim,advent_calendar,sublime_text_2
---

あけましておめでとうございます。

この記事は
[Vim Advent Calendar 2012 : ATND](http://atnd.org/events/33746)
の33日目の記事です。

前日は、[@tavi4444](https://twitter.com/tavi4444)
さんの[なんでもhjkl for Windows](http://blog.tavi-travelog.net/viewEntry?id=20130101021510)でした。

---

勢いで参加したもののネタが思いつかなかったので、これまでに使ってきたテキストエディタとかについて書こうと思います。

## Vim以前
#### メモ帳時代
![](https://dl.dropbox.com/u/85825/blog/image/20130102/notepad.png)

初めての`hello, world`は中学生の時にJavaAppletで行った記憶があります。
このころは他のテキストエディタとか知りませんでした。

#### 個人的エディタ戦国時代
高校でプログラミング熱が再燃して、C言語でCUIのテトリスとか作ったりしてました。

シンタックスハイライトの便利さに気付き、さくらエディタやTeraPad、EmEditorなどを使っていました。

#### Ginnieとの出会い
![](https://dl.dropbox.com/u/85825/blog/image/20130102/ginnie.png)

[Ginnie - Windows用タブ式MDIテキストエディタ - KNTWARE.NET](http://ginnie.kntware.net/)

しばらくメインのエディタが定まらなかったのですが、最終的にはGinnieというエディタに落ち着きました。

GUI部分も含めてRubyやJavaScriptでプラグインを書けるところが特に気に入っていて、VimでいうQuick-runみたいなプラグインを作ったりしていました。

※ この辺でVimに出会っていれば、また違った人生を送っていたような気がしなくもないです。

#### 強制Emacs事件
大学(工学部)でFortranやC言語の授業があり、それがなぜかSolaris + Emacs縛りでした。
別に他のエディタを使っても怒られはしなかったとは思うのですが、選択肢を与えてくれなかったのはひどいです :-|

今思えば、授業の効率化とかそういう理由なのかもしれませんが。

## Vimとの出会い
<blockquote class="twitter-tweet" lang="ja"><p>vimをつかいこなしてる人はかっこいいなー</p>&mdash; ふかやつさん (@fukayatsu) <a href="https://twitter.com/fukayatsu/status/91837702483345408" data-datetime="2011-07-15T11:53:09+00:00">7月 15, 2011</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

twilogでさかのぼってみたら、ちゃんと使い始めたのは1年半ぐらい前のようでした。
WindowsだけではなくMacとLinuxも触り始めたので、
    すべての環境で使えるオーソドックスなエディタ → Emacsはなんかやだ → Vimだな
という感じでした。

このころからGVimとMacVim使い始めて、同時にdotfilesをgithubで管理するようになって、
直後にアルバイトから社会人になったりしたので**Vimって素晴らしい**

#### vimrcどれよ
[dotfiles/vimrc at af/mbp · fukayatsu/dotfiles · GitHub](https://github.com/fukayatsu/dotfiles/blob/af/mbp/vimrc)

このへんです。このブランチはもう使っていないのですが、
Shougoさんやthincaさんのプラグインには大変お世話になっております。

#### vim-pluginつくったりした
[fukayatsu/vim-diary · GitHub](https://github.com/fukayatsu/vim-diary)

日記を書くときに、前の日のTODOを当日のDONEとかにコピペすることが多かったので、
特定の部分は残して新しい日記を書き始められるようなプラグインです。

このころはmarkdownとかよくわかってなかったので、`#`とかをマークとして使ってしまっています。

#### いろいろVimっぽく操作したくなる
使ってる・使ってたのを軽く紹介します。

- Chrome
    - [Chrome ウェブストア - Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)
        - hjklでの移動やhit a hint、タブの操作など
    - [Chrome Web Store - Edit with Emacs](https://chrome.google.com/webstore/detail/edit-with-emacs/ljobjlafonikaiipfkggjbhkghgicgoh?hl=en-US)
        - 任意のエディタでtextareaを編集できる
- Eclipse
    - [Viable - Vim for Eclipse | Eclipse Plugins, Bundles and Products - Eclipse Marketplace](http://marketplace.eclipse.org/content/viable-vim-eclipse#.UOLSTIlevKw)
        - Vimっぽいkey操作ができる
- Thunderbird
    - [Globs site - External Editor - Usage](http://globs.org/articles.php?pg=2&lng=en)
        - 任意のエディタでメールを編集できる



## Sublime Text 2に浮気
![](https://dl.dropbox.com/u/85825/blog/image/20130102/sublime.png)

サーバ上では相変わらずVimを使いますが、今年の6月ぐらいからローカル環境ではSublimeを使うようになりました。

デフォルトに近い環境でも結構使えるので、ペアプロとかする時にとても良かったです。

あとはプラグインをpythonで変えるのが大きいです。

日本語入力とちょっとだけ相性がわるいですが、もうしばらくは使って行きたいと思います。

### vimユーザ向けの設定
VimユーザがSublime Text 2を快適に使うためには多少設定が必要です。

メニューから
    Preferences > Settings-User(⌘,)
を選択して、以下の様に追加します(Mac向け)。

```
  "ignored_packages": [""],
  "vintage_ctrl_keys": true,
  "vintage_start_in_command_mode": true
```

> [Vintage Mode - Sublime Text 2 Documentation](http://www.sublimetext.com/docs/2/vintage.html)

あとは、[Sublime Package Control](http://wbond.net/sublime_packages/package_control)
を導入して、`VintageEx`を導入するとさらにVimっぽくなります。


あとはコマンドラインからも使いたいので、
    $ ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl
みたいにやっとくとよいです。

> [OS X Command Line - Sublime Text 2 Documentation](http://www.sublimetext.com/docs/2/osx_command_line.html)

## おわりに
サーバ上では変わらずVimを使っておりますし、たとえVimがメインのエディタじゃなくなっても、これからもVim的なエディタでVim的な操作をしていく事に変わりはありません。

ということでVimユーザの皆様、今年もよろしくお願いします。


明日は[@masudaK](https://twitter.com/masudaK)さんです :)

---
#### おまけ

[e-one、銀パソになって再登場](http://pc.watch.impress.co.jp/docs/article/990928/sotec.htm)
初めてプログラミングした時のPC。とてもなつかしい。


[スパルタンVim 2.0のPDF公開 — KaoriYa](http://www.kaoriya.net/blog/2012/09/01)
これ読んでニンジャスレイヤーを読み始めました！
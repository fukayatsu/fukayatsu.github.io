---
title: "Sublime Text 2でGaucheを実行する"
date: 2013-08-11 18:57
tags: gauche, sublime-text-2
---

![](https://dl.dropboxusercontent.com/u/85825/blog/image/20130811/sublime-scm.png)

## 設定方法

[Tools] > [Build System] > [New Build System...]を選び、
以下を`Gauche.sublime-build`のファイル名で保存(ディレクトリは`Packages/User/`)

```json
{
  "cmd": ["gosh", "$file"],
  "selector": "source.lisp",
  "osx": {
    "path": "/usr/local/bin:/opt/local/bin"
  },
  "linux": {
    "path": "/usr/local/bin:/usr/bin"
  }
}
```

### 試しに実行してみる

- `hello.scm`

```scheme
(print "hello, world")

(print (+ 3 3))

```

こんな感じに書いて、

- `Cmd(Ctrl) + B`で実行してみる

うまくいくとこんな感じに表示される

```shell
hello, world
6
[Finished in 0.1s]
```

### 実行しても何も表示されない場合

- [Tools] > [Build System]が`Automatic`もしくは`Gauche`になっているかどうか調べる

- ``Ctrl + ` ``で実行時にエラーが発生してないか調べる

`UnicodeDecodeError: 'ascii' codec can't decode`というエラーの場合は
[Packages/Default/exec.pyを変更する](https://github.com/maltize/sublime-text-2-ruby-tests/issues/116#issuecomment-11103810)ことで回避できた

### 参考

以下のページを参考にさせて頂きました

- [Y.A.M の 雑記帳: Sublime Text 2 で TypeScript をビルドする](http://y-anz-m.blogspot.jp/2012/11/sublime-text-2-typescript.html)

- [UnicodeDecodeError: 'ascii' codec can't decode · Issue #116 · maltize/sublime-text-2-ruby-tests](https://github.com/maltize/sublime-text-2-ruby-tests/issues/116)
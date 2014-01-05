---
title: Homebrewでフォントをインストールする
date: 2014-01-05 09:45 JST
tags: font, homebrew, formula
---

![](/images/2014-01-05-1388885346_1.png)

[半角:全角==1:2な等幅フォントを作る(2013/11/03)](/2013/11/03/merge-fonts/)で、
> TODO
  　generator公開
  　　素材用のフォントを自動的にダウンロードしてフォント生成するやつを作りたい

と書いたが、これをhomebrewのformulaにした。

- [fukayatsu/homebrew-font](https://github.com/fukayatsu/homebrew-font)

# Usage

```
$ brew tap fukayatsu/font
$ brew install scpm
$ cp -f /usr/local/Cellar/scpm/[VERSION]/share/fonts/SCPM*.ttf ~/Library/Fonts/
```

# 感想
初めてhomebrewのformulaを書いたが、 "See also" で挙げているところを参考にしてわりと簡単に出来た。先人に感謝。

fontforgeのスクリプトやhomebrewの作法はまだ深追いしていないので、理解を深めていきたい。
例えば"Usage"の最後の`cp`をformulaに含めていいのかどうかとか迷っている。

zipやtarballをダウンロードして、解凍して、スクリプトを実行して、生成物を配置するまでがさくっと自動化出来るのは気持ちが良い。今年はいくつかformula書くと思う。

# See also
これは便利！Homebrewに追加されたtapコマンドはリポジトリを追加して簡単にフォーミュラを増やせる | Macとかの雑記帳
http://tukaikta.blog135.fc2.com/blog-entry-204.html

brew install ricty | 實松アウトプット
http://sanematsu.wordpress.com/2013/05/11/brew-install-ricty/

sanemat/homebrew-font
https://github.com/sanemat/homebrew-font

MasayukiFukada/CodeMFont
https://github.com/MasayukiFukada/CodeMFont

fukayatsu/homebrew-font
https://github.com/fukayatsu/homebrew-font

fukayatsu/scpm
https://github.com/fukayatsu/scpm




---
title: "半角:全角==1:2な等幅フォントを作る"
date: 2013-11-03 02:13
tags: font
---

普段プログラミングする時は[Sublime Text 3](http://www.sublimetext.com/3)と[Source Code Pro](http://sourceforge.jp/projects/sfnet_sourcecodepro.adobe/)を使っているのだけれど、半角:全角の文字幅が1:2じゃなくて気になる時があった。

ちょっと無理矢理な例だけど、こんな感じ:
![](/images/2013-11-03-a.png)

- 半角スペースが全角文字の半分の幅じゃないので`=>`が揃わない。もやっとする


## [Source Code Pro](http://sourceforge.jp/projects/sfnet_sourcecodepro.adobe/) と [MigMix 1M](http://mix-mplus-ipa.sourceforge.jp/migmix/#diff_migmix1p_migmix2p)の合成

ベース: [MasayukiFukada/CodeMFont](https://github.com/MasayukiFukada/CodeMFont)

#### ベースからの変更点
- Source Code Proの中間フォントに`Scale(70)`を適用
- 記号をあまり改変しないように変更。全角スペースの可視化は残した

![](/images/2013-11-03-b.png)

- Hashのkeyに日本語が入っていても、もやっとしなくなった。
- 半角文字が思ったより横に圧縮されたけど、ちょっと使ってたら慣れた

## Tips
Macではフォントを削除→再生成→再インストールしてもキャッシュを消さないと反映されなかった。

キャッシュ削除コマンド: `$ atsutil databases -removeUser`

## TODO
- generator公開
    - 素材用のフォントを自動的にダウンロードしてフォント生成するやつを作りたい


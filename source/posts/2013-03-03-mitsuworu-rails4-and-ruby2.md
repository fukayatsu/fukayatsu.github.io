---
title: "Rails4とRuby2で簡単なWebサービスを作ってみた"
date: 2013-03-03 16:20
tags: mitsuworu,rails4,ruby2,みつをる
---

作ったのはこれ > [みつをる](http://mitsuwo.net/)

[![1362077672](https://s3-ap-northeast-1.amazonaws.com/mitsuwo/images/cards/1362077672.png)](http://mitsuwo.net/cards/1)

いわゆる縦書ジェネレータ的なやつ。


# 経緯
先週の火曜日に社内chat(hipchat)で[手書きメーカー](http://tegaki-maker.com/)で作成された画像(「えんじにあだもの　あつを」)が流れていて、いまいちそれっぽくなかったので自分で作ることにした。

ちょうどRails 4.0.0.beta1のgemが公開されたタイミングだったので、今後の為に試してみることにした。

# 開発ログ
平日の帰宅後を使って3日程度掛かったのでコミットログを振り返りながら何をしたか書く

## 火曜夜
ドメインの確保と任意のフォントで縦書画像を生成する部分の検証。

- 下準備
    - mitsuwo.netのドメインを取得
    - s3のバケットを確保
- Initial commit
- rails g scaffold card author:string body:text image:string
    - モデル名はとりあえず`card`にした。
    - add mini_magick
    - この時はmini_magickで画像に文字を埋め込めると勘違いしていた
- add RMagick
    - mini_magickと入れ替え
- draw.annotateのテスト
    - 画像に文字列描写できた
- 縦書き対応
    - 一文字ずつ描写してむりやり縦書き対応
    - `ー`を`｜`に置き換えたり

## 水曜夜
プロトタイプ完成まで

- プレビューボタンとダミー画像を追加
- rails g model TmpImage author:string body:text data:binary
    - この時は、プレビュー用の一時的な画像をDBに保存しようとしていた
- delete tmp image model
    - やっぱり別方式でやることにした
- プレビューの実装
    - base64エンコードでjson中に含めてしまうことにした。
    - シンプル
- add aws-sdk gem
    - 公開時にS3にアップロードする

## 木曜夜
本番公開のための準備とデプロイ

- twitter facebookボタンの追加
- meta tagの追加
- add favicon追加
- 本番環境構築
    - AWS
        - EC2 micro
        - S3
        - Route 53
    - nginx
    - unicorn

- 本番デプロイ

## 金曜夜(T2-Study#5)
おまけ

- ビール飲みながら
- hubot scriptを作成
    - 最初jsonでPOSTしようとしたが日本語が含まれているとうまくいかなかった

{% gist 5065136 %}

例えば`hubot mitsuwo 寿司が<br>食べたいのです,名無し`とコマンドを打つと、
結果をhipchatに貼ってくれる。便利。

[![1362299581](https://s3-ap-northeast-1.amazonaws.com/mitsuwo/images/cards/1362299581.png)](http://mitsuwo.net/cards/52)

# まとめ
あんまり複雑なことはしていないので、Rails 4とかRuby 2とかはあまり意識しなかった。

思ったよりも時間が掛かった。半分ぐらいの時間で作れるようになりたい。

nginx・unicorn・RMagickは初めて使ったので、良い経験になった。

自分が必要とするものを作るのはやはり楽しい。
---
title: "getting started with cakephp"
date: 2012-08-03 14:00
tags: cakephp, getting-started
---


今週ぐらいからcakephpをさわり始めたのでどういう感じでアプローチしているかのメモ。

## 前提
- phpの経験は`<?php phpinfo() ?>`だけ
- java, rubyは日常的に使ってた
- railsで簡単なサービスを作ったことはある
- xamppの経験はあんまりない
- 開発環境はMac

## 開発環境
xampp for macを入れる

[apache friends - xampp for mac os x](http://www.apachefriends.org/jp/xampp-macosx.html)


## php
[PHP: PHP マニュアル - Manual](http://php.net/manual/ja/index.php)
をひと通り読む。

- orzってなったところ
  - セミコロン必須
  - 文字列結合が `.`
  - 可変変数の書き方
  - 配列へのpushの書き方 `$array[] = $var;`
  - `array( )`じゃなくて`[ ]`って書きたいけど5.4からかー


## CakePHP
### 公式

[CakePHP: 高速開発 php フレームワーク。 Home](http://cakephp.jp/)

TODO: チュートリアルをやってみる


[コンテンツ — CakePHP Cookbook v2.x documentation](http://book.cakephp.org/2.0/ja/contents.html)

### コーディングスタイル
[コーディング規約 — CakePHP Cookbook v2.x documentation](http://book.cakephp.org/2.0/ja/contributing/cakephp-coding-conventions.html)

TODO: 自動化しましょー

### CakePHP Advent Calendar
CakePHPに限らず、Advent Calendarは新しい技術を身につけようとするときに重宝している。

TODO: これから読む

TODO: CakePHP Advent Calendar 2012に参加する

["CakePHP Advent Calendar 2010を開催！" フォーラム - CakePHP Users in Japan](http://cakephp.jp/modules/newbb/viewtopic.php?viewmode=flat&topic_id=2510&forum=16)

[CakePHP Advent Calendar 2011 : ATND](http://atnd.org/events/22721)

### Mailing list
最新情報とか勉強会の情報とかが流れてきたりするので入っておく。

[CakePHP - Google グループ](https://groups.google.com/forum/?hl=ja&fromgroups#!forum/cake-php)

[fuelphp.jp - Google グループ](https://groups.google.com/forum/?hl=ja&fromgroups#!forum/fuelphp_jp)

### 勉強会
TODO: コミュニティの雰囲気を知りたいので一度参加したい。



--------
こんな感じで既存のコードを改修しつつ勉強しています。

やっぱり動的言語の方が性に合っている気がする :)

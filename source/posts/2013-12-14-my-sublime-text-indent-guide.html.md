---
title: おれのさぶらいむてきすとはインデントが見やすい
date: 2013-12-14 13:05 JST
tags: advent-calendar-2013, sublime-text, settings, indent_guide
---

この記事は、[おれのさぶらいむてきすと Advent Calendar 2013 - Adventar](http://www.adventar.org/calendars/184)の14日目です。

前回は[irohiroki](https://twitter.com/irohiroki)さんの[おれとさぶらいむてきすとの複数選択](http://irohiroki.github.io/blog/2013/12/13/sublime-texts-multiple-selection-and-me/)でした。


(密かに[fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/)の14日目でもあったりします)

## おれとさぶらいむ
去年の夏ぐらいからメインのテキストエディタとしてSublime Text 2を使っていて、
数ヶ月前からはSublime Text 3を使っています。

この記事で使っているカラーテーマは[thinkpixellab/flatland](https://github.com/thinkpixellab/flatland)をforkした[fukayatsu/flatland](https://github.com/fukayatsu/flatland)です。

## さぶらいむてきすとのインデントガイド
Sublime Text のデフォルト設定はこんな感じです。

```js
// Packages/Default/Preferences.sublime-settings

    // Set to false to turn off the indentation guides.
    // The color and width of the indent guides may be customized by editing
    // the corresponding .tmTheme file, and specifying the colors "guide",
    // "activeGuide" and "stackGuide"
    "draw_indent_guides": true,

    // Controls how the indent guides are drawn, valid options are
    // "draw_normal" and "draw_active". draw_active will draw the indent
    // guides containing the caret in a different color.
    "indent_guide_options": ["draw_normal"],
```

インデントの深さごとに、薄い縦線が引かれます。

[![](/images/2013-12-14-a.png)](/images/2013-12-14-a.png)

でもインデントがspace 2とかだと、どのインデントの中にいるのか迷子になることがあります。

---

ユーザ設定で上書きしてやります。
```js
// Packages/User/Preferences.sublime-settings
    "draw_indent_guides": true,
    "indent_guide_options": ["draw_normal", "draw_active"],
```

インデントの種類によって色分けされるようになりました。
[![](/images/2013-12-14-b.png)](/images/2013-12-14-b.png)

---

使っているカラーテーマによってはdraw_active時のインデントガイドの設定がないことがあるので、
そういう場合は自分で色を指定します。

`[カラーテーマ名].tmTheme`の中の`<key>guide</key>`を探して、`activeGuide`と`stackGuide`の設定を追加します。色は適当です。

```xml
<!-- 通常のインデント -->
<key>guide</key>
<string>#444444</string>

<!-- 自分が今いるインデント -->
<key>activeGuide</key>
<string>#aa7b60</string>

<!-- 自分が今いるインデントの親 -->
<key>stackGuide</key>
<string>#607b60</string>
```

[![](/images/2013-12-14-guides.png)](/images/2013-12-14-guides.png)

これでインデントが見やすくなったのではないかと思います。

ちなみにvimだと同様のプラグインとして、
[nathanaelkane/vim-indent-guides](https://github.com/nathanaelkane/vim-indent-guides)が有名なようです。


---

次回は[s12bt](https://twitter.com/s12bt)さんです！
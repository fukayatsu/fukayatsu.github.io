---
title: JavaScript String Replace
date: 2013-12-13 20:51 JST
tags: advent-calendar-2013, javascript
---

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 13日目

今日遭遇したバグの話


```js
'foo bar'.replace("bar", '$$BAZ$$');
// => "foo $BAZ$"
```

`"$$BAZ$$"`が返ってくるのを期待していたコードだったが、
第二引数に`$$`が含まれる場合、`replace`メソッドによって`$$`が`$`に置換されるため、
意図したとおりに動いていなかった。

次のように修正した。

```js
'foo bar'.replace("bar", '$$BAZ$$'.split('$').join('$$'));
// => "foo $$BAZ$$"
```


---
title: sublime text 3でgolangを実行(go run)する
date: 2014-01-03 16:54 JST
tags: golang, sublime-text-3
---

Tools > Build System > New Build System... でこんな感じに設定する。

- Go.sublime-build

```javascript
{
  // "cmd": ["go", "run", $file], // for sublime text 2
  "shell_cmd": "go run $file",
  "selector": "source.go",
}
```

もしくは、[DisposaBoy/GoSublime](https://github.com/DisposaBoy/GoSublime)をインストールする。

これを入れておくとファイル保存時に`go fmt`を自動的に実行してくれたり、
いい感じに入力補完もしてくれて便利。




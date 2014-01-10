---
title: ブログにturbolinksとnprogressを適用した
date: 2014-01-10 21:26 JST
tags: blog, turbolinks, nprogress
---

- [rails/turbolinks](https://github.com/rails/turbolinks)
    - ざっくり言うとページ遷移をajaxに置き換えて高速化してくれる。
    - rails4からの標準機能。
- [rstacruz/nprogress](https://github.com/rstacruz/nprogress)
    - [YouTube風のページローダーを実装する「NProgress.js」 - Tecuration .com](http://tecuration.com/2013/09/nprogress)


プログレスバーの発動タイミングはnprogressのreadmeの例をそのまま使っている↓
```js
$(document).on('page:fetch',   function() { NProgress.start(); });
$(document).on('page:change',  function() { NProgress.done(); });
$(document).on('page:restore', function() { NProgress.remove(); });
```

- [変更の詳細](https://github.com/fukayatsu/fukayatsu.github.io/compare/9e9a51831195d7c8a03cf2500ffa7e2cd576aaab...e7e124020bf24e98c2cfee15b0c34cbe9bdadf1d)

# 雑感
- ページ遷移が速く(感じるように)なって、かなり快適になった。
- turbolinksとnprogressの相性がよい
- 普段からrailsでturbolinksを使っているものの、何故か静的サイトでturbolinksを使うという発想が無かった。

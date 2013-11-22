---
title: "「もうひとつの Scheme 入門」をやってみる#01"
date: 2013-08-09 21:40
tags: scheme gauche
---

この前[10LISP '00](http://connpass.com/event/2933/)で話題に挙がった[もうひとつの Scheme 入門](http://www.shido.info/lisp/idx_scm.html)をやっていこうと思います。


# 1. Scheme 処理系のインストール

> [Sublime Text 2でGaucheコードを書くために - 飲んだり寝たり](http://nomnel.net/blog/st2-gauche/)

↑ これを参考にしました

# 2. Scheme を電卓代わりに使う
```
gosh> (+ 1 2)
3
gosh> +
#<subr +>
```

MzSchemeだと`+`が評価されると`#<procedure:+>`となるらしいけど、gaucheだと`#<subr +>`となった


## 2.3. 四則演算
```
gosh> (* 2 3 4)
24
gosh> (/ 29 3)
29/3
gosh> (/ 29 3 7)
29/21
gosh> (/ 9 6)
3/2
gosh> (exact->inexact (/ 29 3 7))
1.380952380952381
```

- この`->`ってなんだろ


### 練習問題 1
```
gosh> (* (+ 1 39) (- 53 45))
320

gosh> (+ (/ 1020 39) (* 45 2))
1510/13

gosh> (+ 39 48 72 23 91)
273

gosh> (exact->inexact (/ (+ 39 48 72 23 91) 5))
54.6
```

## 2.4 その他の算術関数

> 商を求めるにはquotient, 余りを求めるには remainder または modulo, 平方根を求めるには sqrt を使います。

```
gosh> (quotient 7 3)
2

gosh> (modulo 7 3)
1

gosh> (sqrt 8)
2.8284271247461903

```

### 練習問題 2

```
gosh> (* 4 (atan 1))
3.141592653589793


gosh> (exp (/ 2 3))
1.9477340410546757

gosh> (expt 3 4)
81

gosh> (log 1000)
6.907755278982137
```



あ、解答ちゃんと載ってた...


# 3. リストを作ろう

### 練習問題 1

```
gosh> (cons "hi" "everybody")
("hi" . "everybody")

gosh> (cons 0 '())
(0)

gosh> (cons 1 (cons 10 100))
(1 10 . 100)

gosh> (cons 1 (cons 10 (cons 100 '())))
(1 10 100)

gosh> (cons #\I  (cons "saw" (cons 3 (cons "girls" '()))))
(#\I "saw" 3 "girls")

#\ってなんだ？


gosh> (cons "Sum of" (cons (cons 1 (cons 2 (cons 3 (cons 4 '())))) (cons "is" (cons 10 '()))))
("Sum of" (1 2 3 4) "is" 10)
```


## 3.3. quote

> ...シンボルやリストなど、評価されると自分自身にならないデータそのものをプログラムに与えるときは quote という命令を使います。

>例えば、(+ 2 3) は評価されると 5 になりますが、(quote (+ 2 3)) とすれば (+ 2 3) そのものを プログラムに与えることができます。

10lispで言ってた評価の抑制ってこれか。確かに評価されても自分自身になるのであればquote要らないな

### 3.3.1. 特殊形式

括弧の中身を全て評価して括弧の外に値を返す関数以外は`特殊形式`というらしい。
quoteとかifとかdefineとか

10lispでやったとこだ!


## 3.4 関数 car と cdr

### 練習問題 2

```
gosh> (car '(0))
0
gosh> (cdr '(0))
()
gosh> (car '((1 2 3) (4 5 6)))
(1 2 3)
gosh> (cdr '(1 2 3 . 4))
(2 3 . 4)
gosh> (cdr (cons 3 (cons 2 (cons 1 '()))))
(2 1)
```

### 3.5. 関数 list

```
gosh> (list)
()
gosh> (list 2)
(2)
gosh> (car '(1 2 3))
1
gosh> (car (list 1 2 3))
1
```

とりあえず今日はここまで
---
title: jquery-and-file-upload
date: 2013-12-10 21:57 JST
tags: advent-calendar-2013, jquery, file-upload
---

> [fukayatsu Advent Calendar 2013](/2013/11/29/advent-calendar-2013/) - 10日目


jQueryでformを作らずにfileをuploadしたかったので、
大体こんな感じのコードを書いた。

```html
<input type="file" id="file_to_upload">
```

```js
var formData = new FormData();
formData.append('file', $('#file_to_upload')[0].files[0]);
formData.append('foo', 'bar');

$.ajax({
  type: 'POST',
  url: '/server/uploader',
  data: formData,
  contentType: false,
  processData: false,
  success: function(data){
    console.log(data);
  }
});
```

注意すべきは`contentType: false`と`processData: false`で、
これらを指定しないとjQueryがデフォルト値を使ってしまってエラーになる。

あと、IE10未満だと`FormData`クラスは使えないようだ。


## 参考
- [Sending multipart/formdata with jQuery.ajax - Stack Overflow](http://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax)



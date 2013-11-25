---
title: 寒くて朝起きるのが辛いのでプログラムでなんとかしたい
date: 2013-11-25 23:18 JST
tags: ruby, lita, hipchat, daily-habit, 家電
---

![使っているリモコン](2013-11-25-remotes.jpg)
（左から、照明・エアコン・電気アンカ用のリモコン）


今年の夏頃に[家電をhipchatから操作したり、スケジューリングできるようした](http://blog.fukayatsu.com/2013/08/11/iremocon-and-lita/)が、サーバのアップデート時に停止したままだったので、復旧するついでに秋冬用にスケジュールを細かく[設定し直した。](https://github.com/fukayatsu/home-lita/commit/c7f4d30d42970c149161cda0c3c8174ba3ef056a)

一部抜粋するとこんな感じ

```ruby
  cron '0   8  * * * Asia/Tokyo',  :wake_up     # 目を覚ます
  cron '30  8  * * * Asia/Tokyo',  :turn_out    # 布団から出る
  cron '30  10 * * * Asia/Tokyo',  :go_out      # 外出
  cron '0   20 * * * Asia/Tokyo',  :back_home   # 帰宅
  cron '0   23 * * * Asia/Tokyo',  :calm_down   # 落ち着く
  cron '25  1  * * * Asia/Tokyo',  :bed_down    # 布団に入る
  cron '30  1  * * * Asia/Tokyo',  :sleep       # 寝る

  def wake_up
    # all on
    exec_command 'lights warm' # 照明をオレンジっぽい光にする
    exec_command 'heater on'   # エアコン(暖房) ON
    exec_command 'pad on'      # 電気あんか ON
  end

  def turn_out
    exec_command 'lights max' # 照明光量 max
  end

  def go_out
    # all off
    exec_command 'lights off'
    exec_command 'heater off'
    exec_command 'pad off'
  end

  def back_home
    exec_command 'lights on'
    exec_command 'heater on'
  end

  def calm_down
    exec_command 'lights warm'
    exec_command 'pad on'
  end

  def bed_down
    exec_command 'lights min' # 照明を常夜灯にする
    exec_command 'heater off'
  end

  def sleep
    exec_command 'lights off'
  end
```

## 雑感
- すべての家電にリモコンつけて欲しい
- 電気アンカは多少不安なので手動でもON/OFFできるようにした
- 照明は意外と細かく色みや光量をコントロールできて面白い
- 数日試したら、寝起きが改善されたか書く

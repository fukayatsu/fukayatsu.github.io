---
title: Grape on Rails and Session
date: 2013-12-02 17:43 JST
tags: advent-calendar-2013, rails, grape, session, cookie
---

> [fukayatsu Advent Aalendar 2013](/2013/11/29/advent-calendar-2013/) - 2日目

[intridea/grape](https://github.com/intridea/grape)でAPIをRailsにmountして使っていて、両方のCookieSessionを共有したかった。
最終的に以下のようなhelper methodを用意することに落ち着いた。

```ruby

# routes.rb
FooBar::Application.routes.draw do
  mount API => "/api"
end
```

```ruby
# api.rb
class API < Grape::API
  format :json

  helpers do
    def session
      env[Rack::Session::Abstract::ENV_SESSION_KEY]
    end
  end

  mount API::V1
end
```

# 余談
> Session is responsible for lazily loading the session from store.
- [ActionDispatch::Request::Session](http://www.rubydoc.info/docs/rails/ActionDispatch/Request/Session)

にあるようにsessionの情報は`Session#[]`や`Session#[]=`の初回呼び出し時にloadされ、
その前に`Session#inspect`が呼ばれると`#<Session [id] not yet loaded>`が返ってくる。

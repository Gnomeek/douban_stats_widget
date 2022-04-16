# douban_stats_widget

## Deploy with Docker
run `docker-compose up`, `localhost:8080/douban/?id=152076608` will show the douban widget

## Preview URL
`https://douban_stats_widget.web.cloudendpoint.cn/?id=152076608`

using following code to embed this widget to your blog, Github readme, and etc.

```html
<img src="https://qce78q.api.cloudendpoint.cn/generateDoubanStatsSvg?id=152076608&type=movie" />
``` 

<img src="https://qce78q.api.cloudendpoint.cn/generateDoubanStatsSvg?id=152076608&type=movie" />

### Query Params
> id: your douban id, i.e. the last int string in this URL https://movie.douban.com/people/152076608

> type: movie(default), book, music

## TODO 

### feel free to submit MR to help me!

- [x] use canvas to render components to img just like github_stats_card
- [ ] add medium size card
- [ ] move API from inspirecloud to Heroku/Vercel 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

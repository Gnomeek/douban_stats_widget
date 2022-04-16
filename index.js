const express = require("express");
const draw = require("./draw.js")
const api = require("./api.js")

const app = express();

app.get("/douban", async (req, res) => {
  if (!("id" in req.query)) {
    res.send("requests without doubanID")
  }
  var id = req.query.id
  var type = "movie"
  if ("type" in req.query) {
    type = req.query.type
  }
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=6000');
  var stats = await api.callDoubanAPI(id)
  var result = await draw(type, id, stats["doubanStats"]);
  res.send(result);
});

app.listen(process.env.PORT || 8080);


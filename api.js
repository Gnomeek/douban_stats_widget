const axios = require("axios")

const agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.114 Safari/537.36"

async function callDoubanAPI(doubanID) {
  var doubanStats = {
    "total_data": {
      "movie": 0,
      "book": 0,
      "music": 0
    }
  }
  var resp = await axios.get(`https://m.douban.com/rexxar/api/v2/user/${doubanID}/archive_annual_list`,
    {
      headers: {
        "Referer": `https://m.douban.com/people/${doubanID}/year_archive/all?dt_dapp=1`,
        "User-Agent": agent
      }
    }
  )
  for (let singleYearData of resp["data"]) {
    var tmp = {
      "movie": singleYearData["total_counts"]["movie"],
      "book": singleYearData["total_counts"]["book"],
      "music": singleYearData["total_counts"]["music"]
    };
    doubanStats[singleYearData["year"]] = tmp;
    doubanStats["total_data"]["movie"] += tmp["movie"];
    doubanStats["total_data"]["book"] += tmp["book"];
    doubanStats["total_data"]["music"] += tmp["music"];
  }
  return {
    "doubanStats": doubanStats,
    "resp": resp["data"]
  };
};

module.exports = {callDoubanAPI}

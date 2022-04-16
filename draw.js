const mapping = {
  "book": {
      "verb": "读",
      "measure": "本"
  },
  "music": {
      "verb": "听",
      "measure": "张"
  },
  "movie": {
      "verb": "看",
    "measure": "部"
  }
}
async function drawSVG(type, id, stats) {
  const result = `<svg width="169" height="169" viewBox="0 0 169 169" fill="none" xmlns="http://www.w3.org/2000/svg"><a href="https://${type}.douban.com/people/${id}/">
    <rect width="169" height="169" rx="14" fill="#60A95C"/>
    <rect width="169" height="169" rx="14" fill="url(#paint0_linear_0_3)" fill-opacity="0.1"/>
    <text fill="white" xml:space="preserve" style="white-space: pre" font-family="PingFang SC" font-size="35" letter-spacing="0px"><tspan x="14" y="48.6">今年${mapping[type]["verb"]}过 </tspan><tspan x="14" y="88.6">${stats["2022"][type]} ${mapping[type]["measure"]}</tspan></text>
    <path d="M14 114H38" stroke="white" stroke-opacity="0.48"/>
    <text fill="white" xml:space="preserve" style="white-space: pre" font-family="PingFang SC" font-size="13" letter-spacing="0px"><tspan x="14" y="147.68">总共${mapping[type]["verb"]}过 ${stats["total_data"][type]} ${mapping[type]["measure"]}</tspan></text>
    <rect x="131" y="131" width="24" height="24" rx="6" fill="white"/>
    <path d="M145.7 144.528H140.353C140.928 145.535 141.452 146.614 141.922 147.764H144.104C144.774 146.672 145.306 145.593 145.7 144.528ZM146.341 143.3V140.91H139.774V143.302H146.341V143.3ZM149 149H137V147.766H140.59C140.151 146.759 139.685 145.888 139.197 145.154L140.12 144.53H138.502V139.653H147.621V144.528H145.923L146.846 145.167C146.41 146.174 145.957 147.04 145.485 147.764H149V149V149ZM148.737 138.22H137.343V137H148.737V138.22Z" fill="#60A95C"/>
    </a>
    <defs>
    <linearGradient id="paint0_linear_0_3" x1="84.5" y1="0" x2="84.5" y2="169" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>`
  return result
};

module.exports = drawSVG;

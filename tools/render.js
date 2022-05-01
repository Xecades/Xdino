const readMD = require("../utils/readMD");
const fs = require("fs-extra");

const data = readMD("./src/posts/article1.md").content;
fs.writeFileSync("./file.html", data, "utf-8");
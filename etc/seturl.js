const process = require("process");
const fs = require("fs");
const os = require("os");
const home = os.homedir();

let url = process.argv[2];
let file = home + "/._WH_URL_";

fs.writeFile(file, url, "utf-8", console.error);

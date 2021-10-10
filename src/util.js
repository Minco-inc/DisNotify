const os = require("os");
const fs = require("fs");

class Util {
	constructor() {
		
	}

	readDefaultUrl() {
		let urlFile = os.homedir() + "/._WH_URL_";
		let url = fs.readFileSync(urlFile, "utf-8");
		return url;
	}
}

module.exports = Util;

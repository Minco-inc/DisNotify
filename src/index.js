const HookCord = require("hookcord");
const Util = require("./util.js");

class DisNotify {
	constructor(config) {
		this.Hook = new HookCord.Hook();

		if (config.id !== undefined && config.token !== undefined) {
			this.Hook.login(config.id, config.token);
		} else if (config.url !== undefined) {
			// let pUrl = new URL(config.url);
			// let idtoken = pUrl.pathname.replace("/api/webhooks/", "").split("/");
			this.Hook.setLink(config.url);
		} else {
			this.Hook.setLink(new Util().readDefaultUrl());
		}

		this.Hook.setPayload({
			content: "@everyone " + config.name,
			embeds: [
				{
					title: config.name,
					description: config.text,
					color: 0x2f3136,
					timestamp: ""
				}
			]
		});
	}

	send() {
		let promise = new Promise((resolve, reject) => {
			this.Hook.fire()
				.then(() => resolve(true))
				.catch(e => reject(e));
		});
		return promise;
	}
}

module.exports = DisNotify;

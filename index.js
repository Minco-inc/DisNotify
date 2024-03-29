const HookCord = require("hookcord");

class DisNotify {
	constructor(config) {
		this.Hook = new HookCord.Hook();

		if (config.id !== undefined && config.token !== undefined) {
			this.Hook.login(config.id, config.token);
		} else if (config.url !== undefined) {
			let pUrl = new URL(config.url);
			let idtoken = pUrl.pathname.replace("/api/webhooks/", "").split("/");
			this.Hook.login(idtoken[0], idtoken[1]);
		} else {
			throw new Error("Error! No URL or ID/Token!");
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
	}
}

module.exports = DisNotify;

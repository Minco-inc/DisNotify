const HookCord = require("hookcord");

class DisNotify {
	constructor(config) {
		this.Hook = new HookCord.Hook();

		this.Hook.login(config.id, config.token);
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

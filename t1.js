var disnotify = require("./index.js")

let nf = new disnotify({
	  url: "https://discord.com/api/webhooks/895948762080501810/tbM-R48W6aIxtlWbkxXpcPEGvQonCW3dyxYYMJOO_wJGa-obRCZ4ss7SE_PJhshfVXnB",
	  name: "Test",
	  text: "The test message!"
});
nf.send();

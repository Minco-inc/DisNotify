# DisNotify
This project allows you to send push notifications with discord. **For web version, visit [here](https://github.com/MincoMK/DisNotify-Web).**

## Requirements
- Discord account
- Discord server with only yourself
- Discord PC
- Latest Node.js and NPM

## Installation
### Code settings
1. Run `npm i disnotify` at your project folder
2. Done! Very short.
### Discord settings
1. Go to server settings, click `Webhooks`
2. Click `Create Webhook` and set name and avatar according to your preference.
3. Copy the webhook url and write it down somewhere.
![Image0](https://support.discord.com/hc/article_attachments/360007455831/2_.jpg)

## Usage
1. Add `const DisNotify = require("disnotify");` to the first line.
2. To construct this class, follow this code.
```js
let notify = new DisNotify({
    url: "<Webhook URL>",
    name: "<Notification Name>"
    text: "<Text>"
});
```
3. To send it, just run `notify.send()`. This returns the Promise.

Example code
```js
const DisNotify = require("disnotify");

let notf = new DisNotify({
    url: "...",
    name: "Minco",
    text: "Notification Test!"
});

notf.send().catch(console.error);
```
This returns:
![Image1](https://i.imgur.com/kG3HXbu.jpg)
### Saving webhook URL
It's annoying to enter the webhook URL every time, right?
And then, simply run this console command once in the project folder!
```bash
npm run seturl <Webhook URL>
```
Then, you can remove `url` option.

## Future Updates
- **Supports for web!** You can make notify you on sign up, etc.
- More options
- Please tell me what to add!

Discord `! [space x30]  !#0123`

Thank you.

# DisNotify
This project allows you to send push notifications with discord.

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
Notice: My project dosen't support HTML `<script>` tag **yet**. (I will update it later) It only supports Node.js

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






Thank you.

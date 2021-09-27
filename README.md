Purx [![NPM version](https://img.shields.io/npm/v/purx.svg?style=flat-square&color=informational)](https://www.npmjs.com/package/purx)
====

A NodeJs Discord Library
----------

You will need NodeJS 10.4+. If you need voice support you will also need Python 2.7 and a C++ compiler. Refer to [the Getting Started section of the docs](https://purx.com/docs) for more details.

```
npm install purx@2.5.9
```

-----------------

```js
const purx = require("purx") // import purx npm

purx.up("start", () => { // if the bot started
    console.log(`Bot Has Started`) // Log "Started!"
})

purx.up("error", (err) => { 
    console.error(err); // or your preferred logger
})

purx.up("newMessage" , (msg) => { // if new message
    if(msg.content === "!ping"){
        purx.msgCreate(msg.channel,purx.botPing())
    }
})

purx.connect("Bot Token") // To Login with your bot
```

------------

- [The website](https://purx.com/) has more details and documentation.
- [The NPM package webpage](https://www.npmjs.com/package/purx) is, well, the webpage for the NPM package.


const Discord = require("discord.js") // (:
const client = new Discord.Client()
 
function msgCreate(channel,msg){
    channel.send(msg)
}

function roleCreate(guild,name,color){
    guild.roles.create({
        data: {
          name: name,
          color: color,
        }
      })
}

const botPing = () => {return Math.round(client.ws.ping)}

const ping = (message) => {
   return new Date().getTime() - message.createdTimestamp
}

function args(msg) {
    return msg.content.split(' ')
}

function channelCreate(guild,name,type){
    guild.channels.create(name, { type: type })
}

function up(event,code){
    if(event == "newMessage") event = "message"
    if(event == "channelCreate") event = "createChannel"
    if(event == "channelPinsUpdate") event = "channelPinsUpdate"
    if(event == "channelUpdate") event = "updateChannel"
    if(event == "clientUserGuildSettingsUpdate") event = "clientUserGuildSettingsUpdate"
    if(event == "clientUserSettingsUpdate") event = "clientUserSettingsUpdate"
    if(event == "remedy") event = "debug"
    if(event == "stop") event = "disconnect"
    if(event == "start") event = "ready"
    // if(code.split(' ').includes(".channel.send"))  { 
    //     throw "channel.send Not found"
    // }
    client.on(event, code)
}
function connect(token) {
    if(!token) return console.error("Please Enter Token")
    client.login(token).catch(() => {
        throw "Error TOKEN_INVALID: An invalid token was provided."
    })
    client.on("error", (err) => {
        
    })
}


module.exports = {
    up,
    connect,
    msgCreate,
    channelCreate,
    roleCreate,
    args,
    ping,
    botPing
}
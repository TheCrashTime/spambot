const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526686313525674015")
setInterval(function() {
channel.send(`Sb7an allh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

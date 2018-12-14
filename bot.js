const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = "! "

client.on('message', message => {
    if (message.content.startsWith(prefix + 'ping')) {
    	message.channel.send('pong! This bot still under development by TeamCo7 Developments (restricted server)! Join public gaming Discord server: https://discord.gg/67gbBKH');
  	}
});

//
client.login(process.env.BOT_TOKEN);

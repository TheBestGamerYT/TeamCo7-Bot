const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong! I am still under Development! So please wait for further progress of my Developers. Join Gaming Discord: https://discord.gg/67gbBKH');
  	}
});

//
client.login(process.env.BOT_TOKEN);

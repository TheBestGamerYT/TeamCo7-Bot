const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
        
client.on('message', message => {
    if (message.content === '!teamco7bot') {
    	message.reply('I am still under Development! :D');
  	}
});

// 
client.login(process.env.BOT_TOKEN);

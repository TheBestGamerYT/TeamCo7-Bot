const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong! I am still under Development! So please wait for further progress of my Development Organization. Join Gaming Discord: https://discord.gg/67gbBKH');
  	}
client.on('message', message => {
    if (message.content === 'botinfo') {
        message.reply('My bot ID: 481540507479048203 | I am still under Development by TeamCo7 Developments (restricted server)') ;
    }
                  
});

//
client.login(process.env.BOT_TOKEN);

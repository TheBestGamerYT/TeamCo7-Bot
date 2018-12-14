const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('ping! Bot is under maintenance update by TeamCo7 Developements, Dept. of FinalSquad Company - Please be patiënt');
  	}
});

// 
client.login(process.env.BOT_TOKEN);



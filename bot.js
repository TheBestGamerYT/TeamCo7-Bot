const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "! "

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content(prefix + 'ping')) {
    	message.reply('pong! Bot is globally under maintenance and is being updated and recoded. Under the authority of FinalSquad Company, Dept. of TeamCo7 Organization & Developments. We advise bot users to please be patiënt');
  	}
});

// 
client.login(process.env.BOT_TOKEN);



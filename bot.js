const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong! Sorry, I am currently still under development by FinalSquad Company, under the authority of Parent Organization: TeamCo7 Gaming Clan!');
    }
client.on('message', message => {
    if (message.content === '!help') {
        message.reply('Sorry, contact FinalSquad Company! Further information can be found at the CEO or Board of Directors!');
        
 	}
});

// 
client.login(process.env.BOT_TOKEN);

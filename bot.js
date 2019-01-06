const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!"

client.on('ready',() => {
  console.log("I\'m Online! Ready to launch!");
  client.user.setActivity('!help | discord.gg/67gbBKH', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : '!help | discord.gg/67gbBKH'}`))
    .catch(console.error);
})

client.on('message', message => {
  if (message.author === client.user) return;
  	if (message.content.startsWith(prefix + 'help')) {
  		message.channel.send({embed: { "plainText": "", "title": "Help message", "description": "Support: \n • !help - Shows this message \n !invite - Invite to bot\'s server. \n • !servers - Displays clan & partnered servers \n \n Clan & Bot: \n• !botinfo - Shows bot information \n • !claninfo - Shows Clan details  ", "color": 53380 }});
 // SUPPORT MESSAGE      
      if (message.content.startsWith(prefix + 'invite')) {
    message.channel.send({embed: { "plainText": "", "title": "Server Invite for Support", "This command still has to be set up!", "color": 53380 }});
    }

  	}
    if (message.content.startsWith(prefix + 'servers')) {
  		message.channel.send({embed: { "plainText": "", "title": "Servers", "description": "Clan: \n • TeamCo7 Clan \n Invite: https://discord.gg/TW9yC4V \n • FS| Softwares \n Invite: https://discord.gg/j39xBQa \n \n Partnered Communities: \n • GoodBoy00's Lounge \n Invite: https://discord.gg/8yyfzYY \n • PrinceRaj 592 \n Invite: https://discord.gg/rGu7F39 \n • TheBestGamerYT \n Invite: https://discord.gg/urSjkJx", "color": 53380 }});
      }
   
  // BOT & CLAN INFO
  
  if (message.content.startsWith(prefix + 'botinfo')) {
    message.channel.send({embed: { "plainText": "", "title": "About TeamCo7 Clan Bot", "description": "Hi! I\'m a bot that\'s serving: \n • TeamCo7 Clan members \n • Allied clans or communities", "color": 53380 }});
    }
   if (message.content.startsWith(prefix + 'claninfo')) {
    message.channel.send({embed: { "plainText": "", "title": "Clan Information", "Established April 2015, by 3 founders: \n Mark Fuljhari, Sven Sokromo & Davis Sokromo", "color": 53380 }});
    }

});
//
client.login(process.env.BOT_TOKEN);

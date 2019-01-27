const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "c7!"

client.on('ready', () => {
  console.log('I am ready!');
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`c7!help | ${client.guilds.size} servers`);
});

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var argresult = args.join(' ');

    if(msg.author.bot) return; //This here means that if message was sent from the other bots EXEPT Akelli, our bot (Akelli) won't sent anything in the chat (thats why return there is e.g return, returns you to somewhere or something) this prevents bot-ception (when multiple bots were to use the same prefix).

  // HELP COMMAND (EMBED MESSAGE: https://embedbuilder.nadekobot.me/)
  	if (msg.content.startsWith(prefix + 'help')) {
      	msg.channel.send({embed: {
  "plainText": "Help Command",
  "title": "Commands: (usage: c7!<command>)",
  "color": 3447003,
  "footer": {
    "text": "© Copyright @teamco7clan",
    "icon_url": "https://cdn.discordapp.com/avatars/481540507479048203/6aaed6c31705efac5eb4906a9605ac14.png?size=2048"
  },
  "thumbnail": "",
  "fields": [
    {
      "name": "» Administration Moderation:",
      "value": "-Development",
      "inline": false
    },
    {
      "name": "»  Music:",
      "value": "-Development",
      "inline": false
    },
    {
      "name": "»  Fun commands:",
      "value": "-Development",
      "inline": false
    },
    {
      "name": "» Information:",
      "value": "help, servers",
      "inline": false
    }
  ]
}
  });
}

    if (msg.content.startsWith(prefix + 'servers')) {
  		msg.channel.send({embed: { "plainText": "", "title": "Servers", "description": "Group: \n • TeamCo7 Clan \n Invite: https://discord.gg/TW9yC4V \n • AkelliBot Lounge \n Invite: https://discord.gg/j39xBQa \n \n Partnered Communities: \n • GoodBoy00's Lounge \n Invite: https://discord.gg/8yyfzYY \n • PrinceRaj 592 \n Invite: https://discord.gg/rGu7F39 \n • TheBestGamerYT: \n Invite: https://discord.gg/urSjkJx", "color": 53380 }});
  	}
  
    if (msg.content.startsWith(prefix + 'about')) {
    msg.channel.send({embed: { "plainText": "", "title": "About TeamCo7 Clan Bot", "description": "Hi! I\'m a bot that\'s serving: \n • TeamCo7 Clan members \n • Allied clans or communities", "color": 53380 }});
    }

   
});
client.login(process.env.BOT_TOKEN);

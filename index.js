const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

//const token = process.env.token;
const token = botconfig.token;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online`);

	bot.user.setActivity("PUBGM", {type: "PLAYING"});
	//bot.user.setGame("on PUBGM!");
})

bot.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageaArray = message.content.split(" ");
	let cmd = messageaArray[0];
	let args = messageaArray.slice(1);

	if (cmd === `${prefix}hello`) {
		return message.channel.send("Hello there!");
	}
})

bot.login(token);
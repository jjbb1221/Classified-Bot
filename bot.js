const Discord = require("discord.js")
const client = new Discord.Client();
const Version = "1.0"
const prefix = (";")
const fs = require("fs");
client.on("ready", () => {
client.user.setPresence({ game: { name: "Hey! ;Cmds", type: "WATCHING" } });
console.log('[BC7] [PROCESS] FREIND BOT Online')
});
const Authorized = ("Lil Curly Redstoneclaw101")
/////////////////////////////////////////////////////////
client.on('message', message => {
	if (message.author.id === "372091741123248139") {
		let msg = message.content;

		if (msg.startsWith("%eval")) {
   		msg = msg.substring("%eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "Eval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})
//////////////////////////
client.on('message', message => {
	if (message.author.id === "372091741123248139") {
		let msg = message.content;

		if (msg.startsWith("%eval")) {
   		msg = msg.substring("%eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "Eval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "Eval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})
///////////////////////////////
client.on('message', message => {
    if (message.content === prefix +"botinfo") {
        message.channel.sendMessage("Developed by RedstoneClaw101 and Lil Curly on 5/21/17");
    }
    });
///////////////////////
client.on('message', message => {
    if (message.content === prefix +'ping') {
        message.channel.sendMessage('**Bringing the ball**')
        .then(msg => {
          msg.edit(`:ping_pong: Pong! (It took: :signal_strength: ${msg.createdTimestamp - message.createdTimestamp}ms to bring the ball!) **Websocket:** ${client.ping}`);
        });
    };
});
///////////////////
client.on('message', message => {
    if (message.content === prefix +'cmds') {
        message.channel.sendMessage("Commands: ;help ;cmds ;ping ;kick ;ban ;unban ;mute ;unmute ;serverinfo ;8ball ;invite ;support")
    }
    });
    ////////////////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "serverinfo")) {
        message.channel.sendMessage("**```ini\n[Server Information]\n" +
            "Server Name = " + message.guild.name + "\n" +
            "Members = " + message.guild.memberCount + "\n" +
            "Owner = " + message.guild.owner.user.username + "\n" +
            "ID = " + message.guild.ownerID + "\n" +
            "Region = " + message.guild.region + "\n" +
            "Icon URL = " + message.guild.iconURL + "\n```**");
    }
    });
    ////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
    ////////////
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
    ////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "help")) {
        message.channel.sendMessage("Welcome to the Kosh Help Hotline. Type stats, cmds, about, or support to continue.")
}
    if (message.content.startsWith("cmds")) {
	message.channel.sendMessage("prefix (;) + help, cmds, ping, kick, ban, unban, mute, unmute, serverinfo, 8ball, invite, support")
}
    if (message.content.startsWith("about")) {
	message.channel.sendMessage("Kosh is the perfect bot for your server. Including fun commands and music for your members while also including moderation for you and your admins. Run ;invite to invite the bot")
}
    if (message.content.startsWith("support")) {
	message.channel.sendMessage("For bot support or to suggest updates, join this server! Server Invite: https://discord.gg/mMTMhuM")
}
    if (message.content.startsWith("stats")) {
        message.channel.sendMessage("Displaying Diagnostics")
        message.channel.sendMessage("==DIAGNOSTICS==")
message.channel.sendMessage(message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Users   :: ${(client.users.size)}
• Node       :: ${process.version}`, {code: 'asciidoc'}))}
    });
    
    /////////////////////
    client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {
        message.channel.send(`= STATISTICS =
      • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
      • Users      :: $client.users.size + "\n" +
      • Node       :: ${process.version}`, {code: 'asciidoc'});
    }
    });
    //////////////////
    client.on('message', message => {  
    if (message.content.startsWith(prefix + "broke")) {
        message.channel.send("It's ok, I am too.. but heres a coin.")
    }
    });
    //////////////////
    client.on("message", message => {
    if (message.content.startsWith(prefix + "8ball")) {
	message.channel.send("I don't feel like doing this...")
    }
    });
///////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "notice")) {
	    let kickChannel = message.guild.channels.find(`name`, "announcements").send("@everyone Kosh Systems is running in this server.")
   
	}
        });
    //////////////
client.login(process.env.TOKEN)
    ///////

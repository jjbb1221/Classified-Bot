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
	if (message.author.id === "315258956421267456") {
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
    if (message.content.startsWith(prefix + "Botinfo")) {
        let bicon = client.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#6100ff")
        .setThumbnail(bicon)
        .addField("Bot Name", client.user.username)
        .addField("Created On", client.user.createdAt);
    
        return message.channel.send(botembed);
      }
    
});
///////////////////////
client.on('message', message => {
    if (message.content === prefix +'Ping') {
        message.channel.sendMessage('**Bringing the ball**')
        .then(msg => {
          msg.edit(`:ping_pong: Pong! (It took: :signal_strength: ${msg.createdTimestamp - message.createdTimestamp}ms to bring the ball!) **Websocket:** ${client.ping}`);
        });
    };
});
///////////////////
client.on('message', message => {
    if (message.content === prefix +'Cmds') {
        var embed = new Discord.RichEmbed();
    embed.setTitle('Cmds')
      embed.setDescription(`Shows Cmds For Kosh`);
      embed.setColor('#009000');
      embed.addField('Cmds: Cmds [Shows This Message] Ping [Shows A Response Time] Eval [Only Authorized People Can Do This] serverinfo [shows server info] Botinfo [Shows  Bot info nothing else] Kick [Kicks a member]');
      embed.addField('Vips: None :(')
      embed.addField('For More Information Please Contact a Owner Of Kosh')
      embed.setFooter("Kosh Systems | V3")
      embed.setTimestamp()
    
      message.channel.sendEmbed(embed);
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
client.on('message', message => {
    if (message.content.startsWith(prefix + "assistant")) {
        message.channel.sendMessage("Senior what would you like me to do?");
}
    if (message.content.startsWith("Stats")) {
        message.channel.sendMessage("Displaying Diagnostics")
        message.channel.sendMessage("==DIAGNOSTICS==")
message.channel.sendMessage(message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Users   :: ${(client.users.size)}
• Node       :: ${process.version}`, {code: 'asciidoc'}))}
    });
    
    /////////////////////
    client.on('message', message => {
    if (message.content.startsWith(prefix + "Stats")) {
        message.channel.send(`= STATISTICS =
      • Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
      • Users      :: $client.users.size + "\n" +
      • Node       :: ${process.version}`, {code: 'asciidoc'});
    }
    });
    //////////////////
    client.on('message', message => {
    if (message.content.startsWith(prefix + "Kick")) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
    //!kick @Twisted Reason

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kicks");
    if(!kickChannel) return message.channel.send("Can't find kicks channel.");




    return;
  }
}
);
///////////////
client.on('message', message => {
    if (message.content.startsWith(prefix + "speach")) {
	    let kickChannel = message.guild.channels.find(`name`, "announcements").send("Hey i am Kosh Say Hi!")

	}
	})


    //////////////
client.login(process.env.TOKEN)
    ///////

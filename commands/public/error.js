Discord.on('message', function (message) {
	if (message.content.startsWith('/')) 		{
		return message.reply('Error: Unknown command!');

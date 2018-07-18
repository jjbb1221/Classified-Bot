Discord.on('message', function (message) {
	if (message.content === 'hi') {
		return message.reply('Glad you stopped by to say hi!');

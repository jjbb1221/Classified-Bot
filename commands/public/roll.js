Discord.on('message', function (message) {
	if (message.content.split('').join('') === '/roll') {
		return message.reply(`U got a ${Math.floor((Math.random() * 6) + 1)}`);

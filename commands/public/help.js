Discord.on('message', function (message) {
			if (message.content === '/help') {
				return message.author.send('Commands: `/help`, `/play`, `/pause`, `/stop`, `/about`, `/thonk`, `/cat`, `/ping`, `/8ball`, `/roll`, `/eval`, `/say`, `/randomcat`');
			  }

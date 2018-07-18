Discord.on('message', function (message) {
	
	if (message.content === '/thonk') {
		
		Discord.users.forEach(g => {
			
			g.send("thonk")

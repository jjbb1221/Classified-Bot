client.on('message', message => {
    if (message.content === prefix +'test') {
        message.channel.sendMessage("Test Complete.Status: Success")
    }
    });

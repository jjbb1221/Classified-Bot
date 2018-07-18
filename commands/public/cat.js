Discord.on('message',  function (message) {
  const cat = request.get('https://aws.random.cat/meow');
   if(message.content === '/cat') {
	cat.then(r => message.reply(r.body.file));

const Command = require('../Command')

module.exports =
class TestCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'koshtest',
      properName: 'Kosh',
      aliases: ['kosh'],
      description: 'Checks to see if commands are online.'
    })
  }

  async fn (msg) {
    let output = 'V2 Commands Status: Online.`

    msg.reply(output)
  }
}

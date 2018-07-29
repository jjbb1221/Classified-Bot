const Command = require('../Command')

module.exports =
class HelpCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'koshhelp',
      properName: 'Kosh',
      aliases: ['rover'],
      description: 'Displays a description of Kosh'
    })
  }

  async fn (msg) {
    let output = `Welcome to Kosh, the perfect bot for Discord.. If you need help, you can join our support server by using the \`${msg.guild.commandPrefix}support\` command. You can run \`${msg.guild.commandPrefix}help\` to see a list of commands. For instructions, please see the README at https://github.com/jjbb1221/Classified-Bot/blob/master/README.md.`

    msg.reply(output)
  }
}

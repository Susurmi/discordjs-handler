module.exports = {
    aliases: ['commands', 'h'],
    description: 'List of all commands and how to use them',
    guildOnly: true,
    execute: async (client, message, args, discord) => {
		    const { commands } = client
        let answer = `I am the bot from the ${message.guild.name} Server, here are my supported commands:\n\n`
        message.delete({ timeout: 250 })

        for (const command of commands) {
            const permissions = command[1].permissions

            if(permissions){
                let hasPermission = true
                if (typeof permissions === 'string') {
                  permissions = [permissions]
                }
        
                for (const permission of permissions) {
                  if (!message.member.hasPermission(permission)) {
                    hasPermission = false
                    break
                  }
                }
        
                if (!hasPermission) {
                  continue
                }
              }

            const mainCommand = command[0]
            const args = command[1].expectedArgs ? `${command[1].expectedArgs}` : ""
            const description = command[1].description

            answer += `**${process.env.PREFIX}${mainCommand} ${args}** = ${description}\n`
        }

        message.member.send(answer)
    }
}
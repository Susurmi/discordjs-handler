const catchErr = require('../../handlers/error_handler')
const prefix = process.env.PREFIX
const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]

module.exports = (discord, client, message) => {
    const { content, member } = message
    const cmd = content.slice(prefix.length).split(/ +/).shift().toLowerCase()
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))
    const args = content.split(/[ ]+/)
    args.shift()

    if(!content.startsWith(prefix) || message.author.bot) return
    if(!command) return

    if(command.guildOnly) {
        if(message.channel.type === 'dm'){
            return message.reply('I can\'t execute that command inside DMs!');
        }
    }

    if(command.permissions) {
        let invalidPerms = []
        for(const perm of command.permissions){
            if(!validPermissions.includes(perm)){
                return console.log(`Invalid Permission ${perm} provided!`)
            }
            if(!member.hasPermission(perm)){
                invalidPerms.push(perm)
            }
        }

        if(invalidPerms.length){
            return message.channel.send(`Missing Permission: "${invalidPerms}"`)
        }
    }
    
    if(!command.expectedArgs){
        if(args.length > 0){
            return message.reply(`Incorrect syntax! Use ${prefix}${cmd}`)
        }
    }

    if(command.expectedArgs){
        if(args.length < command.minArgs || (command.maxArgs !== null && args.length > command.maxArgs)){
                return message.reply(`Incorrect syntax! Use ${prefix}${cmd} ${command.expectedArgs}`)
            }
    }

    if(command){try {
            command.execute(client, message, args, discord)
            .catch(error =>{
                catchErr(client, error, message)
            })
        }catch(error){
            catchErr(client, error, message)
        }
    }
}
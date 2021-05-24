module.exports = {
    name: 'ping', //optional
    aliases: ['pong', 'test'], //optional
    description: 'Answers with Pong!', //required,
    expectedArgs: '', //optional, if not provided the command handler will by default not accept arguments after the command
    minArgs: 0, //required if youre using expectedArgs
    maxArgs: 0, //required if youre using expectedArgs
    guildOnly: false, //optional
    permissions: [], //optional
    execute: async (client, message, args, discord) => { //required (async is optional)
            if(message.channel.type === 'dm'){
                message.channel.send('Pong!')
                return
            }
            message.reply('Pong!')
    }
}
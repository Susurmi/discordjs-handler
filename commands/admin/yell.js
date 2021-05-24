module.exports = {
    name: 'yell', //optional
    aliases: ['scream'], //optional
    description: 'Yells the provided message', //required
    expectedArgs: '<message>', //optional
    minArgs: 1, //required if youre using expectedArgs
    maxArgs: null, //required if youre using expectedArgs // null is handled as infinite arguments
    guildOnly: true, //optional
    permissions: ['ADMINISTRATOR'], //optional
    execute: async (client, message, args, discord) => { //required
        message.delete({ timeout: 250 })
        const text = args.join(' ').toUpperCase()
        await message.channel.send(`@everyone **${text}!**`)
    }
}
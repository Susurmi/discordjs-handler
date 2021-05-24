module.exports = {
    name: 'kick', //optional
    description: 'Kicks a user from the Server', //required,
    expectedArgs: '<@user>', //optional, if not provided the command handler will by default not accept arguments after the command
    minArgs: 1, //required if youre using expectedArgs
    maxArgs: 1, //required if youre using expectedArgs
    guildOnly: true, //optional
    permissions: ['BAN_MEMBERS'], //optional
    execute: async (client, message, args, discord) => { //required (async is optional)
        const target = await message.mentions.users.first()
        const targetMember = await message.guild.members.cache.get(target.id)
        await targetMember.kick()
        message.channel.send(`${target.username} got kicked from the Server.`)
    }
}
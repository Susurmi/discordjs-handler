module.exports = {
    name: 'clearchannel',
    aliases: ['cc', 'wipe'],
    description: 'Deletes provided number (max 100) of messages (that are newer than 2 weeks) in the used channel.', //required
    expectedArgs: '<1-100>',
    minArgs: 1,
    maxArgs: 1,
    guildOnly: true,
    permissions: ['ADMINISTRATOR'],
    execute: async (client, message, args, discord) => {
        if(args > 100){
            args = 100
        }
        message.channel.messages.fetch({ limit: args })
            .then(fetched => {
                const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned)
                message.channel.bulkDelete(notPinned, true)})
            .catch(console.error);
    }
}
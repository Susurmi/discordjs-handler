module.exports = async (client, err, message) => {
    const owner = await client.users.cache.get(process.env.OWNER_ID)
    owner.send('An error occured in the ' + message.channel.name + ' on the ' + message.channel.guild.name + ' Discord Server.');
    owner.send('ERROR ```' + err + '```');
}
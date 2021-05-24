module.exports = (discord, client) => {
    console.log('Bot is ready!')

    client.user.setPresence({
        status: 'online',
        activity: {
          name: `${process.env.PREFIX}help`,
          type: "LISTENING"
        }
      });
}
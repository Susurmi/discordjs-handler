require('dotenv').config()
const discord = require('discord.js')
const client = new discord.Client()
const loadHandlers = ['event_handler', 'command_handler']

client.commands = new discord.Collection()
client.events = new discord.Collection()

loadHandlers.forEach(async (handler) =>{
    await require(`./handlers/${handler}`)(client, discord)
})

client.login(process.env.BOT_TOKEN)
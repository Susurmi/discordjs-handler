require('dotenv').config()
const discord = require('discord.js')
const client = new discord.Client()

client.commands = new discord.Collection()
client.events = new discord.Collection()

const event_handler = require('./handlers/event_handler')(client, discord)
const commandHandler = require('./handlers/command_handler')(client, discord)

client.login(process.env.BOT_TOKEN)
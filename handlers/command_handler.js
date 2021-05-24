const path = require('path')
const fs = require('fs')

module.exports = (client, discord) => {
    const commandFolders = fs.readdirSync('./commands')

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'))
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`)
            const cmd = file.split('.').shift()
            if(command.execute){
                client.commands.set(cmd, command)
                console.log(`Command "${cmd}" registerd!`)
            }
        }
    }   
}
const fs = require('fs')

module.exports = (client, discord) => {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

    for(const file of commandFiles){
        const command = require(`../commands/${file}`)
        if(command.name){
            client.commands.set(command.name, command)
            console.log(`Command "${command.name}" is registerd!`)
        }else{
            continue
        }
    }
}
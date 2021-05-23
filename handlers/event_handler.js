const fs = require('fs')

module.exports = (client, discord) => {
    const loadDir = (dir) => {
        const eventFiles = fs.readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'))
        
        for(const file of eventFiles){
            const event = require(`../events/${dir}/${file}`)
            const eventName = file.split('.')[0]
            client.on(eventName, event.bind(null, discord, client))
        }
    }

    ['client', 'guild'].forEach(e => loadDir(e))
}
module.exports = {
    name: 'ping',
    aliases: ['pong', 'test'],
    description: 'Answers with Pong!',
    async execute(client, message, args, discord){
        try{    
            message.reply('Pong!')
        }catch(e){
            console.log(e)
        }
    }
}
import DiscordJS, { Intents, MessageManager } from 'discord.js'
import WOKCommands from 'wokcommands'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready',()=>{
    console.log('The bot is ready')

    new WOKCommands(client,{
        commandDir: path.join(__dirname,'commands'),
        typeScript: true, 
        testServers: ['712417703016792115'],
    })
})

client.login(process.env.TOKEN)
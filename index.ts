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

    const guildId = '712417703016792115'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if(guild){
        commands = guild.commands
    }else{
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'replies with pong.',
    })

    commands?.create({
        name: 'add',
        description: 'Suma dos numeritos',
        options:[
        {
            name: 'num1',
            description: 'primer numero',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
        },
        {
            name: 'num2',
            description: 'segundo numero',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
        },
    ]
    })
})

client.on('interactionCreate', async (interaction)=>{
    if(!interaction.isCommand()){
        return 
    }
    const {commandName, options} = interaction

    if (commandName === 'ping'){
        interaction.reply({
            content: 'pong',
            ephemeral: true, //only the user who uses the command can see the reply
        })
    }
    else if(commandName === 'add'){
        const num1 = options.getNumber('num1')!  //exclamation at the end means this data is already required and cannot be null
        const num2 = options.getNumber('num2')!

        interaction.reply({
            content: `The sum is ${num1 + num2}`,
            ephemeral: true,
        })
    }
})

client.on('messageCreate',(message)=>{
    if (message.content==='ping'){
        message.reply({
            content: 'pong',
        })
    }
})

client.login(process.env.TOKEN)
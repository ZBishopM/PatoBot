import { ICommand } from "wokcommands";
import DiscordJS, { Intents, MessageManager } from 'discord.js'
export default{
    category: 'Testing',
    description: 'add two numbers',

    slash: 'both',
    testOnly: true,
    options:[{
        name: 'num1',
            description: 'primer numero',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
    },{
        name: 'num2',
            description: 'segundo numero',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
    }],
    callback: ({message, interaction})=>{
        const {commandName, options} = interaction
        const num1 = options.getNumber('num1')!  //exclamation at the end means this data is already required and cannot be null
        const num2 = options.getNumber('num2')!
        
        return `The sum is ${num1+num2}`
    },
} as ICommand
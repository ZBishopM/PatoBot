import { ICommand } from "wokcommands";

export default{
    category: 'Testing',
    description: 'Replies with cuack',

    slash: 'both',
    testOnly: true,
    callback: ({/* message, interaction */})=>{
        /* if(message){
            message.reply('Cuack')
        }
        if(interaction){
            interaction.reply({
                content: 'Cuack',
                ephemeral: true
            })
            
        }
        message.reply('Cuack') */
        return 'Pong'
    },
} as ICommand
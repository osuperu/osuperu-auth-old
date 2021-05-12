import { Command, CommandReturn, COMMAND_TYPES } from '../models/ICommands';

export default <Command>{
    commandEnum: "PING",
    defaultPermission: false,
    name: "ping",
    description: "Ping!",
    options: [
        {
            name: "text",
            description: "Write something!",
            type: COMMAND_TYPES.STRING
        }
    ],
    call({ interaction }): CommandReturn {
        if(interaction.options.length > 0)
            return { message: { content: `Pong! Your message was ${interaction.options[0].value}` }};
        else return { message: { content: "Pong!" }};
    }
}
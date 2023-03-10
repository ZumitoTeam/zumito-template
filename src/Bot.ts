import { ZumitoFramework } from 'zumito-framework';

import dotenv from 'dotenv'
dotenv.config()

 
if (!process.env.TOKEN) {
    throw new Error("Discord Token not found");
} else if (!process.env.CLIENT_ID) {
    throw new Error("Discord Client ID not found");
} else if (!process.env.MONGOURI) {
    throw new Error("Mongo URI not found");
} 

new ZumitoFramework({
    discordClientOptions: {
        intents: 3276799,
        token: process.env.TOKEN!,
        clientId: process.env.CLIENT_ID!,
    },
    defaultPrefix: process.env.BOTPREFIX || "z-",
    mongoQueryString: process.env.MONGOURI!,
    logLevel: parseInt(process.env.LOGLEVEL || "3"),
}, (bot: ZumitoFramework) => { // Callback function when bot is ready
    // Log number of commands loaded
    console.log(`Loaded ${bot.commands.size} commands`);
    // Log number of events loaded
    console.log(`Loaded ${bot.events.size} events`);
    // Log number of modules loaded
    console.log(`Loaded ${bot.modules.size} modules`);
    // Log number of translations loaded
    console.log(`Loaded ${bot.translations.getAll().size} translations`);
    // Log number of models loaded
    console.log(`Loaded ${bot.models.size} models`);
})
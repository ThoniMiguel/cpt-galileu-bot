const fs = require("fs");
module.exports = {
    name:"help2",
    description: "temp help",
    execute(client, msg, args, Discord){
        const commandFiles = fs
        .readdirSync("./commands/")
        .filter((file) => file.endsWith(".js"));

        commandFiles.forEach(file => {
            // console.log(`./${file}`);
            let info = require(`./${file}`);
            console.log(`${info.name} - ${info.description}`);
        });
    
    }
}
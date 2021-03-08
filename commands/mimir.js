module.exports = {
    name: "mimir",
    description: "It shutsdown the bot",
    execute(msg, args){
        msg.channel.send("Hmm... a mimir").then(()=>{
            client.destroy();
        });
    }
}
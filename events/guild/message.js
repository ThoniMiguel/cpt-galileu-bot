module.exports = (Discord, client, msg) =>{
    const prefix = '$';
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    // if(command) command.execute(client, msg, args, Discord);
    try{
        command.execute(client, msg, args, Discord, cmd);
    }catch(err){
        msg.reply("Comando não foi encontrado... tenta denovo ai seu bostão.");
        console.log(`${msg.author.tag} tentou lançar um comando inexistente!`);
    }
}
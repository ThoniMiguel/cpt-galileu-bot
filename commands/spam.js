module.exports = {
  name: "spam",
  description: "Spam some msgs",
  execute(client, msg, args, Discord, cmd) {
    if (args.length == 0) {
      msg.reply("Comando vazio???Quer me fuder porra?!... PIU");
      return;
    } else {
      let message = args.join(" ");
      message = message.substring(0, message.length - 1);
      let number = args[args.length - 1];
      const maxSpams = 5;
      number = parseInt(number);
      if (message.length > 100 || isNaN(number) || number > maxSpams) {
        msg.reply("Comando ta meio errado ai neh... tenta denovo... PIU!");
        console.log(message);
        return;
      } else {
        for (let i = 0; i < number; i++) {
          msg.channel.send(message);
        }
      }
    }
  },
};

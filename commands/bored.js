const { APIMessage } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "bored",
  description: "Return some random activities to do when bored",
  execute(client, msg, args, Discord) {
    api(msg, Discord);
  },
};

function api(msg, Discord) {
  const url = "http://www.boredapi.com/api/activity/";
  fetch(url)
    .then((data) => data.json())
    .then((res) => {
      const newEmbed = new Discord.MessageEmbed()
        .setColor("#0000f2")
        .setTitle("Activity")
        .setDescription("Random activity to do when bored!")
        .addFields(
            {name: "Activity", value: res.activity},
            {name: "Type", value: res.type},
            {name: "Participants", value: res.participants},
            {name: "Price", value: `R$${res.price}`}
            );
      msg.channel.send(newEmbed);
    });
}

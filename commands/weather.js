const { APIMessage } = require("discord.js");
const fetch = require("node-fetch");
const weather = require("weather-js");
module.exports = {
  name: "weather",
  description: "Weather forecast",
  execute(msg, args) {
    weatherFunction(msg, args);
  },
};

function weatherFunction(msg, args) {
  let city = args[0];
  weather.find({ search: city, degreeType: "C" }, (err, result) => {
    if (err) console.log(err);
    if (result.length === 0) {
      msg.reply("Cidade nao encontrada! Ta dando uma de burro é?! PIU");
    } else {
      console.log(result);
    }
  });
}

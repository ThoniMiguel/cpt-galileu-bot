const fetch = require("node-fetch");
module.exports = {
  name: "happy",
  description: "Happy replies!",
  execute(client, msg, args) {
    happy(msg);
  },
};

function happy(msg) {
  let url = "https://www.affirmations.dev/";

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      msg.reply(res.affirmation);
    });
}

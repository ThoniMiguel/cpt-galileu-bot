const Scraper = require("images-scraper");

const google = new Scraper({
  puppeteer: {
    headless: true,
    args:  ['--no-sandbox']
  },
});
module.exports = {
  name: "image",
  description: "Scrape images on the web :)",
  async execute(client, msg, args, Discord, cmd) {
    const imgQuery = args.join(" ");
    if (imgQuery === undefined) {
      return msg.channel.send("Não achei essa imagem ai nao em.... my bad");
    }
    const numberOfImgs = 20;
    const imgResults = await google.scrape(imgQuery, numberOfImgs);
    msg.channel.send(imgResults[randomNumber(0, numberOfImgs-1)].url);
  },
};


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

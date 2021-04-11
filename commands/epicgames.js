const pptr = require("puppeteer");

module.exports = {
    name:"epicgames",
    description:"Returns an img of free games from epic games store",
    async execute(client, msg, args, Discord, cmd){
        let epicGamesFree = "https://www.epicgames.com/store/pt-BR/free-games";

        let browser = null;
        
        try{
            browser = await pptr.launch({ args: ['--no-sandbox'] });
            let page = await browser.newPage();
           
            await page.goto(epicGamesFree, {waitUntil: "networkidle2"});


            let data = await page.evaluate(() => {
                let imgRaw = document.querySelector('div[class="css-1lozana"] > div > img');
                let img = imgRaw.getAttribute("src");

                return {
                    img
                }
            })

            let embed = new Discord.MessageEmbed()
            .setTitle("Jogo gratuito da epic games")
            .setURL(epicGamesFree)
            .setImage(data.img);
            

            msg.channel.send(embed);
        }catch (err){
            console.log("error" + err.message);
            msg.channel.send("pô meu brother... nao foi dessa vez que eu achei")
        }finally{
            await browser.close();    
            console.log(`${msg.author.username} requisitou a img`);
        }
    }
}
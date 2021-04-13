const fetch = require("node-fetch");
module.exports = {
    name:"advice",
    description:"returns random advices",
    async execute(client, msg, args, Discord, cmd){
        let temp = await connectToApi();
        let advice = temp.slip.advice;
        msg.reply(advice);
    }
}



function connectToApi(){
    const url = "https://api.adviceslip.com/advice";
    return fetch(url).then(data => data.json());
}
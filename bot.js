
//ici on précise qu'on aura besoin du module discord.js qui lui appelle l'API de Discord
const Discord = require("discord.js");
//ici on appelle une fonction de l'objet créé au-dessus qui permet de récupérer un objet utilisateur client qui représente le bot
const bot = new Discord.Client();
bot.on("ready", function () {
 //ici on affichera dans le terminal que le bot est bien connecté
 console.log("Carapuce est dans la place !");
});
//la ligne suivante permet d'indiquer à l'objet Discord qui est notre bot afin qu'il puisse se connecter
bot.login("Nzc3MTUwNDQ2NDIyMDY1MTcz.X6_PwQ.LWE7Xq84RUqt7QyN-XoRYQgk7Tg");

//ici on regarde quand le bot est en ligne et qu'il voit passer un message (peu importe le serveur)
bot.on("message", message => {
 //on regarde alors si le contenu du message est strictement égale à "!ping"
 if (message.content === "!ping") {
 //si oui on arrive ici et on envoie, dans le channel d'où provient le message, "Carapong !"
 message.channel.send("Carapong !");
 }
});
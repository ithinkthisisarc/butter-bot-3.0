const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const money = require("discord-money");
const sqlite3 = require('sqlite3');
const client = new Discord.Client();
const db = new sqlite3.Database('./db.sqlite')

var activities = [
  "Nothing.",
  ".onion",
  "C Flat is best lang",
  "sad",
  "usr/bin",
  "glitch.com",
  "Programming on a chromebook",
  "Destiny 2",
  "Mirror's Edge",
  "Cuphead",
  "The Go Playground",
  "Web development",
  "Send complaints to /dev/null",
  "Hating C#",
  "Heroku",
  "Node.js",
  //`${client.guilds.size} guilds`,
];

client.on("ready", () => {
  client.user.setActivity(`${activities[Math.floor(Math.random() * activities.length)]} | %help`);
  console.log("I am ready!");
});

setInterval(() => {
  //This keeps the actual bot alive by pinging itself about every 5 minutes
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
client.on("message", (message) => {/////recognize messages    
  /*
  
  EMOTES / GLOBAL VARIABLES/LIBRARIES

  */
    const heehaw = client.emojis.find(     emoji => emoji.name === "heehaw");
    const oof = client.emojis.find(        emoji => emoji.name === "oof");
    const yehaw = client.emojis.find(      emoji => emoji.name === "yehaw");
    const jazz = client.emojis.find(       emoji => emoji.name === "jazz");
    const lonk = client.emojis.find(       emoji => emoji.name === "lonk");
    const sosig = client.emojis.find(      emoji => emoji.name === "sosig");
    const shook = client.emojis.find(      emoji => emoji.name === "shook");
    const hehehe = client.emojis.find(     emoji => emoji.name === "hehehe");
    const sonic_dab = client.emojis.find(  emoji => emoji.name === "sonic_dab");
    const ok = client.emojis.find(         emoji => emoji.name === "ok-1");
    const hey_gurl = client.emojis.find(   emoji => emoji.name === "hey_gurl");
    const amethyst = client.emojis.find(   emoji => emoji.name === "amethyst");
    const hammerhead = client.emojis.find( emoji => emoji.name === "hammer_head");
    const i_crie_2 = client.emojis.find(   emoji => emoji.name === "i_crie_2");
    const owo = client.emojis.find(        emoji => emoji.name === "owo");
    const angerysad = client.emojis.find(  emoji => emoji.name === "angerysad");
  
    var can_get_money = true;    
    
    // Check for messages and possibly get money
      client.on('message', msg => {
        if (can_get_money == true) {
          var can_get_money =! can_get_money;
          var result = Math.floor((Math.random() * 500) + 1);
          if (result == 1) {
            money.updateBal(message.author.id, 200 /* Value */).then((i) => {
            message.react("💰");
            });
            console.log(`Can Get Money = ${can_get_money}`); 
          };
        } else if (can_get_money == false) {
          var can_get_money = ! can_get_money;
          console.log(`Can Get Money = ${can_get_money}`);
        }
      });
  if (message.guild.id == 495034006203531274) {
    message.channel.send("ERR `GUILD " + 495034006203531274 + "IS BLOCKED`");
  }
  /*
  
  
  CODE
  
  */
  
  if (message.content.toLowerCase().startsWith("%help")) {
    var starter_message = ["Hello dis is buttew", "HI! I'm Butter!!!!!", "Howdy", "Hi welcome to help page", "Hello **" + message.author.username + "**, I've been expecting you.",];
    var rand = starter_message[Math.floor(Math.random() * starter_message.length)];
        message.channel.send({embed: {
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "" + rand,
        description: "\n ---------------------- \n **Chat Commands**\n Ask me questions, tell me your darkest secrets, just talk to me who cares. All you have to do is start your sentence with “`Butter`” and talk away! \n ---------------------- \n **Emotes**\n I’m equipped with lots of emotes, including \n `%cry` \n `%dab` \n `%dance` \n `%slap` \n `%hug` \n `%deny` \n ---------------------- \n **Money Stuff** \n Do `%money` to check your balance \n Do `%coinflip` for a 50% chance at __$500__!!! \n Do `%give @user [amount]` to gift your friends money that you may or may not have. \n ------------------ \n**Misc. Commands** \n Other random commands for you to enjoy! \n `message @user [your message]` sends an anonymous message to tagged user’s dms. For this to properly work, I need administrator permissions. \n Say `butter dm me` and I'll send you a secret message ;3 \n `%user @user` gives information on a user. \n `%create link` creates a link to a message. Use ${message.guild.id}/${message.channel.id}/${message.id} to make it \n%invite` sends an invite link so you can add me to your other servers!\n ---------------------- \n If you ever need help, feel free to dm my parent, @Monarrk#5707" + oof + sosig + jazz,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Made with ❤️ by Monarrk#5707"
        }
      }
    });
  } 
  else if (message.content.toLowerCase().startsWith("butter do")) {
    var answer = Math.random() >= 0.5;
    if (answer == true) {
      message.channel.send("Yes");
    } else if (answer == false) {
      message.channel.send("No");
    };
  } 
  else if (message.content.toLowerCase().startsWith("butter is")) {
    var answer = Math.random() >= 0.5;
    if (answer == true) {
      message.channel.send("Perhaps");
    } else if (answer == false) {
      message.channel.send("Questionable");
    };
  } 
  else if (message.content.toLowerCase().startsWith("butter why")) {
    var answer = Math.floor((Math.random() * 4) + 1);
    if (answer == 1) {
      message.channel.send("Idk");
    }
    if (answer == 2) {
      message.channel.send("That's how it be sometimes");
    }
    if (answer == 3) {
      message.channel.send("Why not?");
    }
    if (answer == 4) {
      message.channel.send("because ¯\_(ツ)_/¯");
    }
  }
  else if (message.content.toLowerCase().startsWith("butter are") || message.content.toLowerCase().startsWith("butter should")) {
    var answer = Math.random() >= 0.5;
    if (answer == true) {
      message.channel.send("Yeah");
    } else if (answer == false) {
      message.channel.send("Nah");
    };
  }
  else if (message.content.toLowerCase().includes("butter sucks" || message.content.toLowerCase().includes("you suck") || message.content.toLowerCase().includes("I hate butter") || message.content.toLowerCase().includes("butter is a bitch"))) {
    message.channel.send("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.");
  }
  else if (message.content.toLowerCase().includes("butter vores" || message.content.toLowerCase().includes("you vore") || message.content.toLowerCase().includes("I hate vore") || message.content.toLowerCase().includes("vore is a bitch"))) {
    message.channel.send("What the vore did you just voring say about me, you little vore? Ill have you know I graduated top of my class in the Navy Vore, and Ive been involved in numerous secret vores on Al-Quaeda, and I have over 300 confirmed vores. I am trained in gorilla vorefare and Im the top vorer in the entire US armed vores. You are nothing to me but just another target. I will vore you the vore out with precision the likes of which has never been seen before on this Earth, mark my voring words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret vore spies across the USA and your IP is being traced right now so you better prepare for the vore, maggot. The vore that wipes out the pathetic little thing you call your sexuality. Youre fucking vored, kid. I can be anywhere, anytime, and I can vore you in over seven hundred ways, and thats just with my bare lips. Not only am I extensively trained in unarmed voring, but I have access to the entire arsenal of the United States Marine Vores and I will use it to its full extent to vore your miserable ass off the face of the continent, you little shit. If only you could have known what holy retribution your little clever comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldnt, you didnt, and now youre paying the price, you goddamn idiot. I will vore fury all over you and you will drown in me. Youre fucking vored, kiddo.");
  }
  else if (message.content.toLowerCase().startsWith("%invite")) {
    message.channel.send({embed: {
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Invite Link",
        description: "https://discordapp.com/api/oauth2/authorize?client_id=481838641988239360&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3Fclient_id%3D481838641988239360%26scope%3Dbot&response_type=code&scope=bot%20messages.read%20guilds",
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Made with ❤️ by Monarrk#5707"
        }
      }
    });
    //message.channel.send("Here's the link my good fellow! https://discordapp.com/api/oauth2/authorize?client_id=481838641988239360&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3Fclient_id%3D481838641988239360%26scope%3Dbot&response_type=code&scope=bot%20messages.read%20guilds");
  }
  else if (message.content.toLowerCase().includes("vore")) {
    message.channel.send("No vowe pwease (unless you're voring me ;3)");
  } 
  else if (message.content.toLowerCase().startsWith("butter dm me")) {
    var responses = ["Hey sweetie", "Mario's full name is Mario Mario", "wah", "Do `%secret` ;)))", "Ily :yellow_heart:", "" + hey_gurl, "yeehaw" + heehaw,];
    var rand = responses[Math.floor(Math.random() * responses.length)];
    message.author.send(rand);
  }
  else if (message.content.toLowerCase().startsWith("%secret")) {
      message.channel.send("What's the password?")
.then(() => {
  message.channel.awaitMessages(response => response.content === 'butter', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send("You asked for it");
        message.author.send("https://i.ytimg.com/vi/nME5mEHCf9Q/maxresdefault.jpg")
        //client.sendMessage(msg.author, "https://i.ytimg.com/vi/nME5mEHCf9Q/maxresdefault.jpg");
    })
    .catch(() => {
      message.channel.send('you did not say the word within the time limit.');
    });
});
    }
  else if (message.content.toLowerCase().startsWith("ily butter")) {
    message.channel.send("ilyt :yellow_heart:")
  }
  else if (message.content.toLowerCase().startsWith("%dance")) {
    var result = Math.floor((Math.random() * 10) + 1);
    if (result == 1) {
      message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481930426680606752/953.gif?width=327&height=300");
    }
    else if (result == 2) {
      message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481930282455400458/tumblr_nsq6y6h1bI1s5wdc4o1_500.gif?width=400&height=209");
    }
    else if (result == 3) {
      message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481929732934336512/uoJ4gKqYHQbWXh9x.gif?width=301&height=301"); 
    }
    if (result == 4) {
      message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481928937417605166/giphy.gif?width=400&height=225");  
    }
    else if (result == 5) {
  message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481928246523330560/lAFVp8hmbIeediu0BULsZp3SDSwupDFwCxFwnDex-pU.gif");  
    }
    else if (result == 6) {
      message.channel.send("https://youtu.be/E3EHzHly0TM");  
    }
    else if (result == 7) {
      message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481931233367162900/peridot_dancing_gif_by_kylethegifter-da9gpm8.gif?width=312&height=301");  
    }
    else if (result == 8) {
      message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481930991703687169/tenor.gif?width=400&height=225");
    }
    else if (result == 9) {
      message.channel.send("https://media.discordapp.net/attachments/444526830888943627/481930148594319380/215926.gif?width=400&height=226");
    }
    else if (result == 10) {
      message.channel.send("https://images-ext-2.discordapp.net/external/-_id2p5P-bWPo9wdb0CoCPxtmzfCa-2F-7-lv0rgWhg/https/cdn.discordapp.com/attachments/442332414224891904/482184777894592512/sinned.gif");
    }
  }
  else if (message.content.toLowerCase().startsWith("%dab")) {
    var dabs = ["https://media.giphy.com/media/3oKIPftfxXPwJFkvba/giphy.gif", "https://media.giphy.com/media/xUOxeYSR1YW5C3xggU/giphy.gif", "https://i.kym-cdn.com/photos/images/original/001/144/709/5c7.png", "https://media1.tenor.com/images/d81af8d4f0a919c7b40e050de47e6eaf/tenor.gif?itemid=8063187", "https://media.giphy.com/media/l0K4mbH4lKBhAPFU4/giphy.gif", "https://thumbs.gfycat.com/TotalBleakBarasinga-size_restricted.gif", "https://media.giphy.com/media/26BoCmMxp5z6UVpuw/giphy.gif", "https://orig00.deviantart.net/a8fb/f/2018/020/e/4/dab__gif__by_rainbow_draws-dc0m80q.gif", "https://media.giphy.com/media/rECzMG557PSMg/giphy.gif", "https://i.gifer.com/7QFT.gif", "http://gifimage.net/wp-content/uploads/2018/06/yeet-gif-5.gif",];
    var rand = dabs[Math.floor(Math.random() * dabs.length)];
    message.channel.send(rand);
  }
  else if (message.content.toLowerCase().startsWith("butter no")) {
    message.channel.send("you aren't the boss of me");
  }
  else if (message.content.toLowerCase().startsWith("butter please")) {
    message.channel.send("Beg " + hehehe);
  }
  else if (message.content.toLowerCase().startsWith("%message ")) {
    message.mentions.members.first().sendMessage("Someone sent you the message: " + message.content.split("%message").pop());
    message.delete();
    console.log("I tried to delete" + message.content);
    message.channel.send("It has been done");
  }
  else if (message.content.toLowerCase().includes("clusterfuck")) {
    message.channel.send("Haha, clusterfuck sounds like butterfuck");
  }
  /*else if (message.content.toLowerCase().startsWith("%textbox")) {
            $.getJSON("http://gsx2json.com/api?id=1EBlSRxWg6FUnvIGSqzLe4Gd_wmtaxSEd9R-0BZ1xJP0&sheet=1", function(data) {
            var randomItem = data.rows[Math.floor(Math.random() * data.rows.length)];
            // $.each(data.rows, function(idx, item) {
               message.channel.send(randomItem.whadyawannasay + "\n At the time" + randomItem.timestamp + "\n visit textboxwebsite.bitballoon.com to submit your own message!");
               console.log(randomItem.whadyawannasay)

                //console.log(item);
            // })
            });
  }*/
  else if (message.content.toLowerCase().startsWith("%hug")) {
    var response = ["https://media.giphy.com/media/o9JyGjnOqpeVy/giphy.gif", "https://media.giphy.com/media/wbrgtEbP1GPNS/giphy.gif", "https://media.giphy.com/media/14aBJO7py75MD6/giphy.gif", "https://media.giphy.com/media/Z35IRzsNpSAlq/giphy.gif", "https://media.giphy.com/media/f4HpCDvF84oh2/giphy.gif", "https://78.media.tumblr.com/437a5582ad0e323c1a5423e603c81fb1/tumblr_ok59fsHvNW1uxpq8mo1_500.gif", "https://media.giphy.com/media/1rQQjM3XCoYBq/giphy.gif", "http://i.imgur.com/ZMcNqcI.gif",];
    message.channel.send(response[Math.floor(Math.random() * response.length)]);
  }
  else if (message.content.toLowerCase().startsWith("%deny")) {
    var response = ["http://www.reactiongifs.com/r/fpdnw.gif", "https://i.imgur.com/Mq5sVd7.gif",];
    message.channel.send(response[Math.floor(Math.random() * response.length)]);
  }
  else if (message.content.toLowerCase().startsWith("%cry")) {
    var response = ["https://media0.giphy.com/media/d2lcHJTG5Tscg/giphy.gif", "https://media.giphy.com/media/2WxWfiavndgcM/200.gif", "http://gif-finder.com/wp-content/uploads/2014/11/Michaelscottfacepalm1.gif", "https://media1.tenor.com/images/51302798cf651e8196578b362136ce86/tenor.gif?itemid=5351570", "http://gifimage.net/wp-content/uploads/2017/10/cry-gif-12.gif", "https://thumbs.gfycat.com/WiltedWeeBettong-small.gif", "https://i.imgur.com/0xAW6Ig.gif", "https://vignette.wikia.nocookie.net/littlewitch/images/a/ad/Akko_cry.gif/revision/latest?cb=20160809161116", "https://78.media.tumblr.com/7342adf24bb257c28e0ef15b05745a13/tumblr_ok63yiEn8q1um1k26o1_500.gif", "https://i.imgur.com/OXZel3p.gif", "http://media.tumblr.com/tumblr_lqh7j6HRLm1qhy2rd.gif",];
    rand = response[Math.floor(Math.random() * response.length)];
    message.channel.send("" + rand);
  }
  else if (message.content.toLowerCase().startsWith("%slap")) {
    var response = ["https://media.giphy.com/media/t1CsJ1o1sdOHm/giphy.gif", "https://media.giphy.com/media/Y6MPxbvvSvD6E/giphy.gif", "https://media.tenor.com/images/81a40655941df29f50e9227450ba5b8b/tenor.gif", "https://media1.tenor.com/images/a8d17b059c246f18f1db40d17394fd1d/tenor.gif?itemid=9176943", "https://metrouk2.files.wordpress.com/2017/05/slap.gif", "https://vignette.wikia.nocookie.net/prettylittleliars/images/2/22/Mona_slap.gif/revision/latest?cb=20160831210817", "http://likegif.com/wp-content/uploads/2012/10/slap-gif-16.gif", "https://vignette.wikia.nocookie.net/doctorwhogeneral/images/4/4c/Slap.gif/revision/latest?cb=20150303012430",];
    rand = response[Math.floor(Math.random() * response.length)];
    message.channel.send("" + rand);
  }
  else if (message.content.toLowerCase().startsWith("%user")) {
    var mentioned_user = cut_string(message.content, "%user ");
    if (mentioned_user == undefined) {
      var mentioned_user = message.author;
      var user = message.author;
    }
    message.channel.send(`Profile for **${message.mentions.members.first()}**:\n -------------------------------- \n **User:** ${message.mentions.members.first()} \n **Id:** ${message.mentions.members.first().id} \n **User Avatar URL:** <${message.mentions.members.first().user.avatarURL}> \n **Is a Bot:** ${message.mentions.members.first().user.bot} \n **Created At:** ${message.mentions.members.first().user.createdAt}  \n **Token:** ${message.mentions.members.first().user.token} \n --------------------------------`);
  }
  else if (message.content.toLowerCase().startsWith("%textbox view")) {
    
  }
  else if (message.content.toLowerCase().startsWith("%create link")) {
    var guild_id;
    var channel_id;
    var message_id;
    var link_starter = message.content.split("%create link ").pop();
    var link = create_link(link_starter);
    message.channel.send(`Link to message: ${link}`);
    console.log(`Link var == ${link}`);
  }
  else if (message.content.toLowerCase().includes("loss")) {
    message.channel.send("| || \n|| |_");
  }
  else if (message.content.toLowerCase().includes("%emote")) {
    var em = message.content.split("%emote ").pop();
    console.log(em)
    if (em == "help") {
      message.channel.send(`Emotes are: \n Heehaw: ${heehaw} \n Yehaw: ${yehaw} \n Amethyst: ${amethyst} \n Oof: ${oof} \n Shook: ${shook} \n Lonk: ${lonk} \n Hey_gurl: ${hey_gurl} \n Hehehe: ${hehehe} \n Sonic_dab: ${sonic_dab}`);
    }
    else if (em.toLowerCase() == "heehaw") {
      message.channel.send("" + heehaw);
    }
    else if (em.toLowerCase() == "yehaw") {
      message.channel.send("" + yehaw);
    }
    else if (em.toLowerCase() == "amethyst") {
      message.channel.send("" + amethyst)
    }
    else if (em.toLowerCase() == "oof") {
      message.channel.send("" + oof);
    }
    else if (em.toLowerCase() == "shook") {
      message.channel.send("" + shook);
    }
    else if (em.toLowerCase() == "lonk") {
      message.channel.send("" + lonk);
    }
    else if (em.toLowerCase() == "hey_gurl") {
      message.channel.send("" + hey_gurl);
    }
    else if (em.toLowerCase() == "hehehe") {
      message.channel.send("" + hehehe);
    }
    else if (em.toLowerCase() == "sonic_dab") {
      message.channel.send("" + sonic_dab);
    }
    else {
      message.channel.send(`No emote **${message.content}** found`);
    }
  }
  else if (message.content.toLowerCase().startsWith("%eval ")) {
    if (message.author.id == process.env.ADMINID) {
      var exe = "error";
      var error = "Unable to send message";
      exe = cut_string(message.content.toLowerCase(), "%eval ");
      var result = eval(exe);
      console.log(`exe == ${exe}; result == ${result}`);
      try {
        if (result == undefined) {
          result = oof + "no result :)";
        }
        pprint("`result:` " + result);
      } catch(error) {
        pprint(error);
      }
    } else{
      pprint("You do not have permission to eval");
    }
  }
  else if (message.content.toLowerCase().startsWith("%cha ")) {
    if (message.author.id = process.env.ADMINID) {
      var s = message.content.toLowerCase().split("%cha ").pop();
      client.user.setActivity(s + " | %help");
    } else {
      pprint("You don't have permission to change activity :/");
    }
  }
  
  
  else if (message.content.toLowerCase().startsWith("butter ")) {
    var response = [":pensive:", "yeet", "https://media.giphy.com/media/A4R8sdUG7G9TG/giphy.gif", "https://i.imgflip.com/1irowp.jpg", "coward", "" + sosig, "" + oof, "" + yehaw, "" + heehaw, "" + lonk, "" + hey_gurl, "" + hehehe, "hehehe", "Ok idc",];
    var rand = response[Math.floor(Math.random() * response.length)];
    message.channel.send(rand);
  }

  /*
  
                                     MONEY

  */
          if (message.content.toLowerCase().startsWith("%money")) {
 
            money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
                message.channel.send(`**Balance:** ${i.money}`);
            })
 
 
        }
 
        // Example: Adding Money To A User
        if (message.content.toLowerCase().startsWith(process.env.SECRET)) {
          if (message.author.id == "441342061275381763") {
 
            money.updateBal(message.author.id, 1000 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                message.channel.send(`**You got** __$1000__!\n**New Balance:** ${i.money}`);
            })
          } else {
            pprint("You do not have permission to add money :/");
          }
        }
 
        // Example: Removing Money From A User
        if (message.content.toLowerCase().startsWith("%delete")) {
 
            money.updateBal(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the bal $500 lower.
                message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
            })
 
        }
        if (message.content.toLowerCase().startsWith("%coinflip")) {
          var result = Math.random() >= 0.5;
          console.log(result);
          if (result == true) {
            money.updateBal(message.author.id, 500 /* Value */).then((i) => {
              message.channel.send(`**Did you win?:** __${result}__\n**You got** __$500__!\n**New Balance:** ${i.money}`);
            })
          } else if (result == false) {
                money.updateBal(message.author.id, -500 /* Value */).then((i) => {
                  message.channel.send(`**Did you win?:** __${result}__\n**You lost** __$500__ :(\n**New Balance:** ${i.money}`);
                })
          } else if (result != Boolean) {
            message.channel.send("`Error`, failed to generate boolean, result was `" + result + "`");
          }
        }
        if (message.content.toLowerCase().startsWith("%steal ")) {
          var can_steal = Math.random() >= 0.5;
          console.log(`can_steal = ${can_steal}`);
          if (can_steal == false) {
            money.updateBal(message.author.id, -1000).then((i) => {
              message.channel.send("You were caught! You lose $1000");
            })
          } else if (can_steal == true) {
            money.updateBal(message.author.id, 500).then((i) => {
              message.channel.send();
            })
            money.updateBal(message.mentions.members.first().id, -500).then((i) => {
              message.channel.send(`You stole __$500__ from ${message.mentions.members.first()}!`);
            })
          } else if (can_steal != Boolean) {
            message.channel.send(`Err, failed to generate Boolean. can_steal var == ${can_steal}`); 
          }
        }
        if (message.content.toLowerCase().startsWith("%give ")) {
          if (message.author.id == message.mentions.members.first().id ) {
            message.channel.send("You can't give money to yourself!!!");
          } 
          else if (message.author.id != message.mentions.members.first().id) {
                var number_as_string = message.content.split("%give " + message.mentions.members.first()).pop();
                console.log("number_as_string is " + number_as_string);
                var number_from_message = Number(number_as_string);
                console.log("number_from_message is " + number_from_message);
                if (isNaN(number_from_message)) {
                  message.channel.send("value is Not a Number");
                } else if (typeof number_from_message == 'number') {
                  console.log("message.mentions.members.first() is: " + message.mentions.members.first());
                  if (number_from_message == 0) {
                    message.channel.send(`Please enter a value more than 0 ${oof}`);
                  } 
                  else if (number_from_message < 0) {
                    message.channel.send(`Please enter a value over 0 ${yehaw}`);
                  }
                  else if (number_from_message != 0 && number_from_message > 0) {
                    money.updateBal(message.mentions.members.first().id, number_from_message).then((i) => {
                    message.channel.send(`**You gave ${message.mentions.members.first()}** __$${number_from_message}__ \n **New balance of ${message.mentions.members.first()}:** __${i.money}__`);
                      money.updateBal(message.author.id, -number_from_message);
                    })
                  }
                }
          }
        }
        if (message.content.toLowerCase().startsWith(process.env.NUKE)) {
          if (message.author.id == "441342061275381763") {
                var number_as_string = message.content.split(process.env.NUKE + message.mentions.members.first()).pop();
                console.log("number_as_string is " + number_as_string);
                var number_from_message = Number(number_as_string);
                console.log("number_from_message is " + number_from_message);
                if (isNaN(number_from_message)) {
                  message.channel.send("value is Not a Number");
                } else if (typeof number_from_message == 'number') {
                  console.log("message.mentions.members.first() is: " + message.mentions.members.first());
                  if (number_from_message == 0) {
                    message.channel.send(`Please enter a value more than 0 ${oof}`);
                  } 
                  else if (number_from_message != 0) {
                    money.updateBal(message.mentions.members.first().id, -number_from_message).then((i) => {
                    message.channel.send(`**You Nuked ${message.mentions.members.first()}** __$${number_from_message}__ \n **New balance of ${message.mentions.members.first()}:** __${i.money}__`);
                      money.updateBal(message.author.id, -number_from_message);
                    })
                  }
                }
          } else {
            pprint(message.channel, "You don't have permission to nuke people");
          }
        }
  if (message.content.toLowerCase().startsWith("%dice")) {
    message.channel.send("Enter number to bet on 1-10")
    .then(() => {
    message.channel.awaitMessages(response, {
      max: 1,
      time: 30000,
      errors: ['time'],
    })
    .then((collected) => {
      var b = collected.content;
      console.log(`b == ${b}`);
      var numb = Number(b);
      console.log(`numb == ${numb}`);
      if (numb > 10) {
        message.channel.send(`Number is too high, you inputted ${numb}`);
      } else if (numb < 0) {
        message.channel.send(`Number too low, you inputted ${numb}`);
      } else {
        var result = Math.floor(Math.random() * 11);
        if (result == numb) {
          money.updateBal(message.author.id, 2000).then((i) => {
            message.channel.send(`**You earned** __$2000__!`);
          })
        } else if (result != numb) {
          money.updateBal(message.author.id, -100).then((i) => {
            message.channel.send(`You lost __$100__ :(`);
          })
        }
      }
      
      
      })
      .catch(() => {
        message.channel.send('You did not type a command within the time limit.');
        console.log(client.uptime);
      });
  });
  }
  /*
  
  SECRET TEST COMMANDS
  
  */
  if (message.content.toLowerCase().startsWith("%emte")) {
    var emotes = [heehaw, yehaw, oof, jazz, lonk, sosig, shook, sonic_dab, hehehe, hey_gurl, ok, amethyst, hammerhead, i_crie_2, owo, angerysad, ];
    message.channel.send(emotes);
  }
  else if (message.content.toLowerCase().startsWith("%cmdte")) {
    message.author.sendMessage("You typed " + message.content.split("%cmdte").pop());
  }
  else if (message.content.toLowerCase().startsWith("%delte")) {
    message.delete();
    console.log("I tried to delete" + message.content);
  }
  else if (message.content.toLowerCase().startsWith("%jsonte")) {
    $.getJSON("http://gsx2json.com/api?id=1EBlSRxWg6FUnvIGSqzLe4Gd_wmtaxSEd9R-0BZ1xJP0&sheet=1", function(data) {
      message.channel.send("The rows are: " + data.rows[Math.floor(Math.random() * data.rows.length)]);
    });
  }
  else if (message.content.toLowerCase().startsWith("%jste")) {
    var numb = Math.floor(Math.random(1, 9) * 10);
    message.channel.send(numb);
  }
  else if (message.content.toLowerCase().startsWith("%rete")) {
    message.react("🤔");   
  }
  else if (message.content.toLowerCase().startsWith("%chidte")) {
    message.channel.send("`Channel Id:`" + message.channel.id);   
  }
  else if (message.content.toLowerCase().startsWith("%meidte")) {
    message.channel.send("`Message Id:`" + message.id);  
  }
  else if (message.content.toLowerCase().startsWith("%guidte")) {
    message.channel.send("`Guild Id`" + message.channel.guild.id);
  }
  else if (message.content.toLowerCase().startsWith("%melite")) {
    message.channel.send(`The link to your last message: https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`);
  }
  else if (message.content.toLowerCase() === "%test") {
          message.channel.send("What would you like to test?")
            .then(() => {
              message.channel.awaitMessages(response => response.content === 'uptime', {
                max: 1,
                time: 30000,
                errors: ['time'],
              })
              .then((collected) => {
                  message.channel.send(client.uptime);
                })
                .catch(() => {
                  message.channel.send('You did not type a command within the time limit.');
                  console.log(client.uptime);
                });
            });
  }
  function pprint(msg) {
    message.channel.send(msg);
  }
});

function create_link(link_end) {
  var link = `https://discordapp.com/channels/${link_end}`
  return link;
}

function cut_string(string, split) {
  var new_string = string.split(split).pop();
  return new_string;
}


client.login(process.env.TOKEN);

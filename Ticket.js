const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
	
var prefix2 = '!';
	const setc = {}
const setrole = {}
client.on("message", async message => {
	var prefix = "!";
         const nos = new Discord.RichEmbed()
     .setColor("22BF41");
    if(message.content.toLowerCase().startsWith(prefix + `setcategory`)){
    if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
        const category = setc[message.guild.id].category
        let newcategory = message.content.split(' ').slice(1).join(' ');
        let thiscategory = message.guild.channels.find('name', newcategory);
                let fltrc = message.guild.channels.filter(m => m.name === newcategory).type !== 'category';
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
    let thisrole = message.member.roles.find("name", srole);
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`${srole}\`\` to yourself.`)  
     .setColor("22BF41");
    if(!thisrole) return message.channel.send(d11x1xx);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setcategory <name>\`\``)  
     .setColor("22BF41");
    if(!newcategory) return message.channel.send(NOTX1);
          const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this category \`\`${newcategory}\`\``)  
     .setColor("22BF41");
        if(!thiscategory) return message.channel.send(CANT);
    const filtr = new Discord.RichEmbed()
     .setDescription(`:x: This not a category \`\`${newcategory}\`\``)  
     .setColor("22BF41");
        if(fltrc) return message.channel.send(filtr);
      setc[message.guild.id].category = newcategory
          const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets category has been set to \`\`${newcategory}\`\``)  
     .setColor("22BF41");
    message.channel.send(D1);
       
    }
});
 
 
client.on("message", async message => {
	var prefix = "!";
         const nos = new Discord.RichEmbed()
     .setColor("22BF41");
  
    if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
    if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
        const role = setrole[message.guild.id].role
        let newrole = message.content.split(' ').slice(1).join(' ');
        let thisrole = message.guild.roles.find('name', newrole);
        let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
         const d11x1x42x = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)  
     .setColor("22BF41");
     if(!permission) return message.channel.send(d11x1x42x);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setrole <name>\`\``)  
     .setColor("22BF41");
    if(!newrole) return message.channel.send(NOTX1);
          const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this role \`\`${newrole}\`\``)  
     .setColor("22BF41");
        if(!thisrole) return message.channel.send(CANT);
      setrole[message.guild.id].role = newrole 
          const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets role has been set to \`\`${newrole}\`\``)  
     .setColor("22BF41");
    message.channel.send(D1);
       
    }
});
 
client.on("message", async message => {
	var prefix = "!";
     const nos = new Discord.RichEmbed()
     .setColor("22BF41");
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
  if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
    const category = setc[message.guild.id].category
    const scategory = setc[message.guild.id].category
   let thiscategory = message.guild.channels.find('name', scategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' ');
   let ticketnumber = 0000;
    if(!subject[0]){
            ticketnumber++;
                 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor("22BF41");          
        if (!thisrole) return message.channel.send(rerole);
              const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
    if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
    if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
    if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
    if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
        ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
   
       
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`)
     .addField('Subject' , `No subject has been given`)
     .setColor("22BF41")
     .setFooter(`Developer || By GoMGoM` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 
    }
   
 if(subject[0]){
            ticketnumber++;
 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor("22BF41");          
        if (!thisrole) return message.channel.send(rerole);
              const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
    if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
    if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
    if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
    if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
           ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
       
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`)
     .addField('Subject' , subject)
     .setColor("22BF41")
     .setFooter(`Develore || By GoMGoM ||` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 
      }  
}
 
 var prefix = "!";
if(message.content.toLowerCase().startsWith(prefix + `close`)) {   
    let team = message.member.roles.find("name", "Support Team");
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`? Élite » Team\`\` to yourself.")  
     .setColor("22BF41");
    if(!team) return message.channel.send(d11x1xx);
         const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor("22BF41");
    if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
     const yes = new Discord.RichEmbed()
     .setDescription(`:x: Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor("22BF41");
 
    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '!close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
       .catch(() => {
          const yesw = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out, the ticket was not closed.`)  
     .setColor("22BF41");
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
 
});

client.on('ready', () => {
client.user.setGame(`!new'ḾŘ ẒỂẒФ`);
});


client.login(process.env.BOT_TOKEN);

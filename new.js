const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Недостаточно прав на использование команды!')
    let embed = new Discord.RichEmbed() // встроенное сообщение
        .setTitle("Новости сервера")
        .setAuthor("Union Role Play", "https://cdn.discordapp.com/attachments/541587486858805258/562008190158372864/green.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00bf00)
        .setDescription('Друзья, тем кто заполнял заявку на ЗАТ были отправлены приглашения на почту, те кто его не получил, не отчаивайтесь, мы будем добирать людей из числа ранее опрошенных, и именно Ваша заявка пройдет отбор!')
        .setFooter('Marten`s Bot Beta', 'https://cdn.discordapp.com/attachments/541587486858805258/562008190158372864/green.png')
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        
    await message.channel.send(embed) // отправка в канал
    await message.delete()
}

module.exports.help = {
name: 'new'
}
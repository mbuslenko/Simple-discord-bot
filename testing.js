const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ATTACH_FILES")) return message.channel.send('Недостаточно прав на использование команды')

    let embed = new Discord.RichEmbed() // встроенное сообщение
        .setTitle("Новости дня")
        .setAuthor("Weazel News", "https://cdn.discordapp.com/attachments/541587486858805258/553049908257488916/-.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00bf00)
        .setDescription(message.content)
        .setFooter('Автор: ${messa', "https://cdn.discordapp.com/attachments/541587486858805258/562008190158372864/green.png")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        
        await message.delete()
        await message.channel.send(embed) // отправка в канал
}

module.exports.help = {
    name: 'testing' // название команды
}

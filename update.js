const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed() // встроенное сообщение
        .setTitle("✅ UPDATE", 'https://discord.gg/nKF2Y9X')
        .setAuthor("Marten`s Bot", "https://cdn.discordapp.com/attachments/541587486858805258/553049908257488916/-.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00bf00)
        .setDescription('Bot was updated to public version v 2.1.2')
        .addField('Что нового:', '_Багфикс #news_')
        .setFooter('Marten`s Bot Beta', "https://cdn.discordapp.com/attachments/541587486858805258/562008190158372864/green.png")
        .setThumbnail('https://developer.nvidia.com/sites/default/files/akamai/homepage/DevZone_Icon_Green_Deep_Learning.png')
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        
    await message.channel.send(embed) // отправка в канал
    await message.delete()
}

module.exports.help = {
    name: 'update' // название команды
}
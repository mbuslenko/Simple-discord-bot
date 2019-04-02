const Discord = require('discord.js') // подключение discord.js к файлу

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed() // встроенное сообщение
        .setTitle("✅ TEIRA CLAN ✅")
        .setAuthor("Weazel", "https://cdn.discordapp.com/attachments/541587486858805258/553049908257488916/-.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00bf00)
        .setDescription('На горе растут цветочки Голубой да аленький, Ни за что не променяю Хуй большой на маленький!')
        .setFooter('лучший клан на свете', "https://cdn.discordapp.com/attachments/541587486858805258/562008190158372864/green.png")
        .setImage('https://cdn.discordapp.com/attachments/465241888207667200/478740437692317706/20180811_192014.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/541587486858805258/562008190158372864/green.png')
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        
    await message.channel.send(embed) // отправка в канал
}

module.exports.help = {
    name: 'TEIRA' // название команды
}
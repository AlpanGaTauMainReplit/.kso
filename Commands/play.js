const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Untuk memulai musik'),
    execute(interaction) {
        if(interaction.member.voice.channel) return interaction.reply({content: 'Mantap', ephmeral: true})
        else return interaction.reply({content: 'Kamu belum masuk voice', ephmeral: true});
    }, 
};
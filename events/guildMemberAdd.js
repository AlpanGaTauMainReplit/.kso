const {guildId, channelIdJoin} = require('../config.json');

module.exports = {
    name: 'guildMemberAdd',
    description: 'Untuk mendeteksi jika ada member yang masuk di server',
	execute(member) {
	    if(member.guild.id === guildId){
            const channelJoin = member.guild.channels.cache.get(channelIdJoin);
            const messageJoin= `**<@${member.id}>\`\`\`\nðŸŽŠ Selamat Datang ${member.user.username} ðŸŽŠ\nðŸŽŠ Jangan Lupa Baca Rules ðŸŽŠ\nðŸŽŠ Semoga Betah Disini Yaa ðŸŽŠ\`\`\`**`;
            channelJoin.send(messageJoin);
            member.roles.add('910459788385722404');
            console.log(`${member.user.username} Telah masuk ke server`);
        };
	},
};

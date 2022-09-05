const Command = require('../../structures/interactions/command')
const Embed = require('../../structures/builders/embed')

module.exports = new Command({
    name: 'status',
    async callback (client, interaction) {
        const botPing = client.ws.ping

        await interaction.reply({
            content: null,
            embeds: [
                new Embed(client,{
                    author: {
                        name: interaction.member.username,
                        iconURL: interaction.member.avatarURL({})
                    },
                    title: `:space_invader: Status check...`,
                    description: `We're getting some information about our server or Discord WebSocket service. So, there is your bot's information :grin:`,
                    fields: [
                        {
                            name: `:ping_pong: Bot Latency (WebSocket ping)`,
                            value: `**${botPing}**ms`
                        }
                    ]
                }).build()
            ],
            ephemeral: true
        })
    }
})

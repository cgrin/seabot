import { SlashCommandBuilder } from "@discordjs/builders";
import { Message, MessageEmbed } from "discord.js";
import { Command } from "../models/Command";
import { ServerInfo, Strings, AppConfiguration, Config, Emoji } from "../utils/constants";
import { replaceMentions, toSarcasticCase } from "../utils/helpers";

export const pingCommand: Command = {
    name: 'ping',
    help: 'ping',
    description: 'ping',
    execute: (message) => message.channel.send('pong!'),
    slashCommandDescription: () => {
        return new SlashCommandBuilder()
            .setName('ping')
            .setDescription('ping')
    },
    executeSlashCommand: (interaction) => {
        interaction.reply('pong!')
    }
}
export const teaCommand: Command = {
    name: 'tea',
    help: 'tea',
    description: 'ask for tea',
    execute: (message) => message.channel.send(Strings.teapot),
    slashCommandDescription: () => {
        return new SlashCommandBuilder()
            .setName('tea')
            .setDescription('ask for tea')
    },
    executeSlashCommand: (interaction) => {
        interaction.reply(Strings.teapot)
    }
}

export const coffeeCommand: Command = {
    name: 'coffee',
    help: 'coffee',
    description: 'ask for coffee',
    execute: (message) => message.channel.send(Strings.coffee),
    slashCommandDescription: () => {
        return new SlashCommandBuilder()
            .setName('coffee')
            .setDescription('ask for coffee')
    },
    executeSlashCommand: (interaction) => {
        interaction.reply(Strings.coffee)
    }
}

export const valheimServerCommand: Command = {
    description: 'show valheim server info',
    help: 'valheim',
    name: 'valheim',
    execute: (message) => message.channel.send(
        `**Valheim Dedicated Server Information**:
        server: \`${ServerInfo.Valheim.serverName}\`
        ip: \`${ServerInfo.Valheim.ipAddress}\`
        password: \`${ServerInfo.Valheim.access}\`
        `
    ),
    slashCommandDescription: () => {
        return new SlashCommandBuilder()
            .setName('valheim')
            .setDescription('show valheim server info')
    },
    executeSlashCommand: (interaction) => {
        interaction.reply(
            `**Valheim Dedicated Server Information**:
            server: \`${ServerInfo.Valheim.serverName}\`
            ip: \`${ServerInfo.Valheim.ipAddress}\`
            password: \`${ServerInfo.Valheim.access}\`
            `
        )
    }
}

export const botInfoCommand: Command = {
    description: 'show seabot info',
    help: 'status',
    name: 'status',
    execute: (message) => {
        const process_uptime = Math.floor(process.uptime());
        const { client } = message;
        const { uptime } = client;
        const { versions, arch } = process;
        message.channel.send({
            embeds: [
                new MessageEmbed({
                    title: 'SEABot Status',
                    description: 'Latest release and uptime info',
                    fields: [
                        {
                            name: 'Version info',
                            value: `Node: ${versions.node}, V8: ${versions.v8}, OpenSSL: ${versions.openssl}`,
                            inline: false
                        },
                        {
                            name: 'Release number',
                            value: `${AppConfiguration.BOT_RELEASE_VERSION}`,
                            inline: true
                        },
                        {
                            name: 'Release Description',
                            value: `${AppConfiguration.BOT_RELEASE_DESCRIPTION}`,
                            inline: true
                        },
                        {
                            name: 'Release Commit',
                            value: `${AppConfiguration.BOT_RELEASE_COMMIT}`,
                            inline: true
                        },
                        {
                            name: 'Architecture',
                            value: `${arch}`,
                            inline: true
                        },
                        {
                            name: 'Release Method',
                            value: `${AppConfiguration.BOT_RELEASE_REASON}`,
                            inline: true
                        },
                        {
                            name: 'Process Uptime',
                            value: `${(process_uptime / 60 / 60).toFixed(2)} hours`,
                            inline: true
                        },
                        {
                            name: 'Client Uptime',
                            value: `${(uptime! / 60 / 60).toFixed(2)} hours`,
                            inline: true
                        },
                    ]
                })
            ]
        });
    },
    slashCommandDescription: () => {
        return new SlashCommandBuilder()
            .setName('status')
            .setDescription('show useless seabot info')
    },
    executeSlashCommand: (interaction) => {
        const process_uptime = Math.floor(process.uptime());
        const { client } = interaction;
        const { uptime } = client;
        const { versions, arch } = process;
        interaction.reply({
            embeds: [
                new MessageEmbed({
                    title: 'SEABot Status',
                    description: 'Latest release and uptime info',
                    fields: [
                        {
                            name: 'Version info',
                            value: `Node: ${versions.node}, V8: ${versions.v8}, OpenSSL: ${versions.openssl}`,
                            inline: false
                        },
                        {
                            name: 'Release number',
                            value: `${AppConfiguration.BOT_RELEASE_VERSION}`,
                            inline: true
                        },
                        {
                            name: 'Release Description',
                            value: `${AppConfiguration.BOT_RELEASE_DESCRIPTION}`,
                            inline: true
                        },
                        {
                            name: 'Release Commit',
                            value: `${AppConfiguration.BOT_RELEASE_COMMIT}`,
                            inline: true
                        },
                        {
                            name: 'Architecture',
                            value: `${arch}`,
                            inline: true
                        },
                        {
                            name: 'Release Method',
                            value: `${AppConfiguration.BOT_RELEASE_REASON}`,
                            inline: true
                        },
                        {
                            name: 'Process Uptime',
                            value: `${(process_uptime / 60 / 60).toFixed(2)} hours`,
                            inline: true
                        },
                        {
                            name: 'Client Uptime',
                            value: `${(uptime! / 60 / 60).toFixed(2)} hours`,
                            inline: true
                        },
                    ]
                })
            ]
        });
    },
    
}

export const sarcasmText: Command = {
    name: 'sarcasm',
    help: 'sarcasm text',
    description: 'make text sArCaStIc',
    execute: (message, args) => {
        const content = replaceMentions(message).replace(`${Config.prefix}sarcasm `, '');
        message.channel.send(`${Emoji.stupidsponge} ${toSarcasticCase(content)} ${Emoji.stupidsponge}`);
    },
    slashCommandDescription: () => {
        return new SlashCommandBuilder()
            .setName('sarcasm')
            .setDescription('make text sArCaStIc')
            .addStringOption(option => {
                return option.setName('text')
                .setDescription('text to sArCaStIcIzE')
                .setRequired(true)
            })
    },
    executeSlashCommand: (interaction) => {
        const string = interaction.options.getString('text') ?? null;
        string && interaction.reply(`${Emoji.stupidsponge} ${toSarcasticCase(string)} ${Emoji.stupidsponge}`);
    }
}

export const whoopsCommand: Command = {
    description: 'whoops',
    name: 'whoops',
    help: 'whoops my butt :butt: -> whoops my butt fell out :butt:',
    execute: (message: Message, args?: string[]) => {
        const emoji = args?.pop();
        if (!emoji) return;
        const text = args?.join(' ');
        if (!text || text === '') return;
        message.channel.send(Strings.whoops(text, emoji));
    },
    slashCommandDescription: () => {
        return new SlashCommandBuilder()
            .setName('whoops')
            .setDescription('whoops my emoji fell out')
            .addStringOption(option => {
                return option
                    .setName('object')
                    .setDescription('what fell out (include `my`, `the`, etc)')
                    .setRequired(true);
            })
            .addStringOption(option => {
                return option
                    .setName('emote')
                    .setDescription('what does it look like (emote / ascii)')
                    .setRequired(true);
            });
    },
    executeSlashCommand: (interaction) => {
        const emoji = interaction.options.getString('emote', true);
        const object = interaction.options.getString('object', true);
        interaction.reply(Strings.whoops(object, emoji));
    }
}
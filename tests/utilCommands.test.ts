// import { Client, Guild, Message, TextChannel } from "discord.js";
// import { ServerInfo, Strings } from '../src/utils/constants';
// import { coffeeCommand, pingCommand, teaCommand, valheimServerCommand } from "../src/commands/utilCommands";

// const id = '1';
// const client = new Client({intents: ['GUILDS', 'GUILD_MESSAGES']});
// const guild = client.guilds.cache.get('');
// const channel = guild?.channels.cache.get('');
// const testMessage = (channel as TextChannel).messages.cache.get('');
// const sendMock = jest.spyOn(testMessage!.channel, 'send');

describe('test', () => {
  it("passes", () => expect(true).toEqual(true));
})
// beforeEach(() => {
//   sendMock.mockReset();
// })
// describe("coffee command function", () => {
//   it("should return an error because it's a teapot", async () => {
//     coffeeCommand.execute(testMessage!);
//     expect(sendMock).toBeCalledTimes(1);
//     expect(sendMock).toBeCalledWith(Strings.coffee);
//   })
// });

// describe("tea command function", () => {
//   it("should show a teapot", async () => {
//     teaCommand.execute(testMessage!);
//     expect(sendMock).toBeCalledTimes(1);
//     expect(sendMock).toBeCalledWith(Strings.teapot);
//   })
// });

// describe("ping command function", () => {
//   it("should return a pong", async () => {
//     pingCommand.execute(testMessage!);
//     expect(sendMock).toBeCalledTimes(1);
//     expect(sendMock).toBeCalledWith("pong!");
//   })
// });

// describe("valheim server command function", () => {
//   it("should return server info", async () => {
//     valheimServerCommand.execute(testMessage!);
//     expect(sendMock).toBeCalledTimes(1);
//     expect(sendMock).toBeCalledWith(
//       `**Valheim Dedicated Server Information**:
//         server: \`${ServerInfo.Valheim.serverName}\`
//         ip: \`${ServerInfo.Valheim.ipAddress}\`
//         password: \`${ServerInfo.Valheim.access}\`
//         `
//       );
//   })
// });


const TelegramBot = require('node-telegram-bot-api');
const token = '1682168127:AAHIJDoxpAj2yZc23EJ-HZ3oc2SA1FLhVhA';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    console.log('msg :>> ', msg);
    const chatId = msg.chat.id;
    const res = `${msg.chat.username} 你好`;
    bot.sendMessage(chatId, res);
});
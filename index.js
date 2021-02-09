const TelegramBot = require('node-telegram-bot-api');
const token = '1682168127:AAHIJDoxpAj2yZc23EJ-HZ3oc2SA1FLhVhA';

const bot = new TelegramBot(token, { polling: true });

// 587290206 me - bot

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const res = `${msg.from.username} 你好`;
    bot.sendMessage(chatId, msg);
    bot.sendMessage(chatId, `${msg.from.first_name} 傳訊息`, {
        reply_markup: {
            one_time_keyboard: true,
            keyboard: [['我要訂餐']]
        }
    });
    bot.sendMessage(chatId, 'ttttttt', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '阿正萬事屋', url: 'https://ah-zheng.com'}]
            ]
        }
    });
});

bot.onText(/\/test/, (msg) => {
    const chatId = msg.chat.id;
    const res = 'test';
    bot.sendMessage(chatId, res);
});

bot.onText(/\/chatinfo/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
        <code>
            id: ${msg.chat.id}
            title: ${msg.chat.title}
            name: ${msg.chat.first_name}
        </code>
    `, {
        parse_mode: 'html'
    });
});

bot.on('message', (msg) => {
    if (msg.text.toString() === '我要訂餐') {
        bot.sendMessage(msg.chat.id, '請問要吃啥？')
    }
    if (msg.text.toString() === 'location') {
        bot.sendLocation(msg.chat.id, 24.164013322287058, 120.63768283651885)
    }
});
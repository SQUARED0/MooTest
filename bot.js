const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_TOKEN'; // Замініть на токен вашого бота
const bot = new TelegramBot(token, { polling: true });

// Команда для запуску гри
bot.onText(/\/start/, (msg) => {
    bot.sendGame(msg.chat.id, 'YOUR_GAME_SHORT_NAME');
});

// Обробка callback для гри
bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const options = {
        chat_id: msg.chat.id,
        message_id: msg.message_id,
        game_short_name: 'YOUR_GAME_SHORT_NAME'
    };

    bot.answerCallbackQuery(callbackQuery.id);
    bot.editMessageGame(options);
});

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN || null;
if (!token) {
  throw new Error('There is no token in env variable!');
}
const bot = new TelegramBot(token, {polling: true});

const mainMenu = require('./main-menu');

bot.onText(/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Главное меню', mainMenu);
});

bot.on('callback_query', (msg) => {
  switch (msg.data) {
    case 'rules':
      const rulesMessage = "Здесь должны быть правила";
      if (rulesMessage !== msg.message.text) {
        bot.editMessageText(rulesMessage, Object.assign({
          message_id: msg.message.message_id,
          chat_id: msg.message.chat.id
        }, mainMenu));
      } else {
        bot.answerCallbackQuery(msg.id);
      }
      break;

    case 'registration':
      break;

    case 'advertise':
      break;
  }
});

bot.on('polling_error', (error) => {
  console.log(error);
});

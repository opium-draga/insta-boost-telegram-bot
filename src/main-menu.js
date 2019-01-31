module.exports = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'Правила', callback_data: 'rules'}],
      [{text: 'Регистрация аккаунта', callback_data: 'registration'}],
      [{text: 'Рекламировать пост', callback_data: 'advertise'}]
    ]
  })
};
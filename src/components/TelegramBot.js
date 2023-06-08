const TelegramBot= require('node-telegram-bot-api');

const token=process.env.TELEGRAM_TOKEN;

const bot=new TelegramBot(token,{polling:true});

bot.onText(/\/start/,function(msg,match){

    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);

});

bot.onText(/\/help/,function(msg,match){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
});

bot.on('message',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
});

//Send photo

bot.on('photo',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendPhoto(msg.chat.id,msg.photo[0].file_id);
});
//Send video
bot.on('video',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendVideo(msg.chat.id,msg.video.file_id);
});

//Send audio

bot.on('audio',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendAudio(msg.chat.id,msg.audio.file_id);
});

//Send document

bot.on('document',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendDocument(msg.chat.id,msg.document.file_id);
});

//Send sticker

bot.on('sticker',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendSticker(msg.chat.id,msg.sticker.file_id);
});

bot.on('location',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendLocation(msg.chat.id,msg.location.latitude,msg.location.longitude);
});

//Send contact

bot.on('contact',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendContact(msg.chat.id,msg.contact.phone_number);
});

bot.on('new_chat_members',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatMembers(msg.chat.id,msg.new_chat_members);
});

bot.on('left_chat_member',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatMembers(msg.chat.id,msg.left_chat_member);
});

bot.on('new_chat_title',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.setChatTitle(msg.chat.id,msg.new_chat_title);
});

bot.on('new_chat_photo',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatPhoto(msg.chat.id,msg.new_chat_photo);
});

bot.on('delete_chat_photo',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.deleteChatPhoto(msg.chat.id);
});

bot.on('group_chat_created',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('supergroup_chat_created',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('channel_chat_created',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('migrate_to_chat_id',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('migrate_from_chat_id',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('pinned_message',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('unpinned_message',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('new_chat_members',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('left_chat_member',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});

bot.on('new_chat_title',function(msg){
    bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}`);
    bot.sendChatAction(msg.chat.id,'typing');
});


exports.bot=bot;
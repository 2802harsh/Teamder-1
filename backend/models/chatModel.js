const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const chatSchema = new mongoose.Schema({
    users: Array,
    messages: Array,
    ts:Date
});

chatSchema.plugin(findOrCreate);

const Chat = new mongoose.model("Chat", chatSchema);

module.exports = Chat;



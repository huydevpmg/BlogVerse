const Conversation = require("../models/conversation.model.js");
const Message = require("../models/message.model.js");
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id.toString();
    console.log("Sender ID ", senderId, " and Receiver ID ", receiverId);

    const conversation = await Conversation.findOne({
      //find include all these fields
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId]
      });
    }

    console.log(message);

    const newMessage = new Message({
      senderId,
      receiverId,
      message
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    Promise.all([conversation.save(), newMessage.save()]);
    // OPtimize by using Promise.all
    // await conversation.save();
    // await newMessage.save();

    res.status(201).json({ message: "Message send successfully", newMessage });
  } catch (error) {
    console.log("Error in sendMessage controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: userChatToId } = req.params;
    const senderId = req.user._id.toString();

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userChatToId] }
    }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) res.status(200).json([]);

    const message = conversation.messages;

    res.status(200).json(message);
  } catch (error) {
    console.log("Error in sendMessage controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  sendMessage,
  getMessage
};

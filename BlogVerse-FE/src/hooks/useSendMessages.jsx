import useConversationStore from "../store/useConversation";
import toast from "react-hot-toast";
import axios from "axios";
axios.defaults.withCredentials = true;

export const useSendMessages = () => {
  const { messages, setMessages, selectedConversation } =
    useConversationStore();
  const sendMessages = async (message) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/v1/api/message/sendMessage/${selectedConversation._id}`,
        { message },
      );

      setMessages([...messages, response.data.newMessage]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return sendMessages;
};

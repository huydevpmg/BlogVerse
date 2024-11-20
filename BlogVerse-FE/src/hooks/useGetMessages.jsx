import { useEffect } from "react";
const API_URL = "http://localhost:8000/v1/api/message/getMessage";
import toast from "react-hot-toast";
import axios from "axios";
import { useConversationStore } from "./../store/useConversation";

export const useGetMessages = () => {
  const { messages, setMessages, selectedConversation } =
    useConversationStore();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/${selectedConversation._id}`,
        );
        setMessages(response.data);
      } catch (error) {
        toast.error("Failed to fetch messages" + error.message);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { messages };
};

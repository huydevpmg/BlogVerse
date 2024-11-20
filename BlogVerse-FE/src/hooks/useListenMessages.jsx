import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversationStore from "../store/useConversation";

export const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversationStore();
  console.log("messages", messages);
  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (newMessage) => {
        setMessages([...messages, newMessage]);
        console.log(messages);
      });

      return () => {
        socket.off("newMessage");
      };
    }
  }, [socket, setMessages, messages]); // No need to depend on messages state./ No need to depend on messages state [messages, setMessages, socket]);
};

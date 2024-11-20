import Message from "./Message";
import { useGetMessages } from "./../../hooks/useGetMessages";
import { useEffect, useRef } from "react";
import { useListenMessages } from "./../../hooks/useListenMessages";
const Messages = () => {
  const { messages } = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="flex-1 overflow-auto bg-slate-300 px-4">
      {messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;

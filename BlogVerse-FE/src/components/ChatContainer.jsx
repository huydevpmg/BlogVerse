import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { useAuthStore } from "../store/useAuthStore";
import MessageSkeleton from "./skeleton/MessageSkeleton";
import { formatMessageTime } from "./../utils/date";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (!selectedUser?._id) return;

    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages?.length > 0) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex flex-1 flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  if (!Array.isArray(messages)) {
    console.error("Invalid messages format:", messages);
    return <div>Error loading messages.</div>;
  }

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
      {messages.map((message) => (
  <div
    key={message._id}
    className={`chat ${
      message.senderId === authUser._id ? "chat-end" : "chat-start"
    }`}
    ref={messageEndRef}
  >
    <div className="avatar chat-image">
      <div className="w-10 h-10 rounded-full border">
        <img
          src={
            message.senderId === authUser._id
              ? authUser.profilePic || "/avatar.png"
              : selectedUser.profilePic || "/avatar.png"
          }
          alt="profile pic"
        />
      </div>
    </div>
    <div className="chat-header mb-1">
      <time className="ml-1 text-xs opacity-50">
        {formatMessageTime(message.createdAt)}
      </time>
    </div>

    {/* Message Content */}
    <div className="chat-content flex flex-col gap-1">
      

      {message.image && (
        <div className="rounded-xl">
          <img
            src={message.image}
            alt="Attachment"
            className="rounded-md max-w-full sm:max-w-md"
          />
        </div>
      )}

      {message.text && (
        <div className="bg-gray-100 text-gray-800 rounded-xl p-3 max-w-xs sm:max-w-md break-words">
          <p>{message.text}</p>
        </div>
      )}
    </div>
  </div>
))}

      </div>

      <MessageInput />
    </div>
  );
};
export default ChatContainer;

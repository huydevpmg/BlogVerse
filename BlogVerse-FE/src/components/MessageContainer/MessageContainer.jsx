import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useConversationStore } from "./../../store/useConversation";
import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
function MessageContainer() {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);
  console.log(isOnline);
  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl md:min-w-[700px]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex flex-col rounded-t-3xl bg-slate-400 px-4 py-2">
            <span className="text-xl text-white">
              {selectedConversation.name}
            </span>
            <span className="italic">
              {isOnline ? "Online 🟢" : "Offline 🔴"}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-slate-950">
      <div className="flex flex-col px-4 text-center font-semibold text-gray-200 sm:text-lg md:text-xl">
        <p>Welcome, $Name</p>
        <p>Select a chat to start messaging.... 👀</p>
      </div>
    </div>
  );
};

export default MessageContainer;

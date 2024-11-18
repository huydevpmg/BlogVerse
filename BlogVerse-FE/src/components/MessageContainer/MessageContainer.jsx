import Messages from "./Messages";
import MessageInput from "./MessageInput";
function MessageContainer() {
  const noChatSelected = true;

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex flex-col rounded-t-3xl bg-slate-400 px-4 py-2">
            <span className="text-xl text-white">John Done</span>
            <span className="italic">Online🟢</span>
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

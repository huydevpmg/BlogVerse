import { SendHorizontal } from "lucide-react";

const MessageInput = () => {
  return (
    <form className="flex">
      <div className="relative flex w-full flex-row">
        <input
          type="text"
          className="rounded-lg-border focus:border-white-500 focus:ring-slate-400-500 block h-11 w-full rounded-b-3xl border border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-lg text-white placeholder-gray-400 placeholder:text-black focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 flex h-8 w-9 -translate-y-1/2 transform items-center justify-center rounded-full bg-blue-400"
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

/* eslint-disable react/prop-types */
import { useConversationStore } from "./../../store/useConversation";
import { useAuthStore } from "./../../store/AuthStore";
import { extractTime } from "../../utils/date";

const Message = ({ message }) => {
  const { user } = useAuthStore();
  const { selectedConversation } = useConversationStore();
  const fromMe = message.senderId?.toString() === user._id?.toString();
  console.log(message);
  console.log(fromMe);
  const chatClassName = fromMe ? "justify-end" : "items-start";
  const profilePic = fromMe
    ? user.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-300" : "bg-gray-100";
  console.log(message);
  return (
    <>
      <div className={`my-4 flex gap-2.5 ${chatClassName}`}>
        {!fromMe && (
          <img
            className="h-8 w-8 rounded-full"
            src={profilePic}
            alt="Jese image"
          />
        )}
        <div
          className={`flex w-full max-w-[320px] flex-col rounded-xl border-gray-200 p-4 dark:bg-gray-700 ${bubbleBgColor} `}
        >
          <div className="flex items-center rtl:space-x-reverse"></div>
          <p className="text-sm font-normal text-gray-900 dark:text-white">
            {message.message}
          </p>
          <span className="pfont-normal pt-2 text-xs text-gray-500 dark:text-gray-400">
            {extractTime(message.createdAt)}
          </span>
        </div>
        {fromMe && (
          <img
            className="h-8 w-8 rounded-full"
            src={profilePic}
            alt="Jese image"
          />
        )}
      </div>
    </>
  );
};

export default Message;

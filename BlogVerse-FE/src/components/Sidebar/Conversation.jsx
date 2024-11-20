/* eslint-disable react/prop-types */
import useConversationStore from "./../../store/useConversation";

const Conversation = ({ conversation, emoji }) => {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`${isSelected ? "bg-sky-500" : ""} my-2 flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:rounded-2xl hover:bg-slate-700`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="w-24">
          <img
            className="w-10 rounded-full"
            src={conversation.profilePic}
            alt="user avt"
          />
        </div>

        <div className="flex flex-1 flex-row gap-3">
          <p className="text-xl font-bold text-slate-100">
            {conversation.name}
          </p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </>
  );
};

export default Conversation;

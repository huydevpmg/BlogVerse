import Conversation from "./Conversation";
import useGetConversations from "./../../hooks/useGetConversations";
import { getRandomEmoji } from "./../../utils/emojis";
const Conversations = () => {
  const { conversations } = useGetConversations();
  return (
    <div className="flex flex-col overflow-auto py-2">
      {conversations.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
        />
      ))}
    </div>
  );
};

export default Conversations;

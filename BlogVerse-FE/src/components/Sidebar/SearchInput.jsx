import { Search } from "lucide-react";
import { useState } from "react";
import { useConversationStore } from "./../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversationStore();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("Cannot find user");
    }
  };
  return (
    <div className="relative my-3 flex w-full">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex items-center gap-2"
      >
        <input
          className="rounded-lg-border focus:border-white-500 focus:ring-slate-400-500 w-full rounded-3xl border-gray-700 bg-gray-800 bg-opacity-50 px-6 py-2 text-white placeholder-gray-400 focus:ring-2"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="flex h-10 w-12 items-center justify-center rounded-full bg-gray-700 text-white transition duration-75 ease-linear hover:bg-zinc-300 hover:text-black">
          <Search className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;

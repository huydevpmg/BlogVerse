import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users } from "lucide-react";
import SidebarSkeleton from "./skeleton/SidebarSkeleton";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="flex h-full w-20 flex-col border-r border-base-300 transition-all duration-200 lg:w-60 bg-gray-200">
      <div className="w-full border-b-2 border-black p-5 bg-white">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="hidden font-medium lg:block">Contacts</span>
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden items-center gap-2 lg:flex">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">
            ({Array.isArray(onlineUsers) ? onlineUsers.length - 1 : 0} online)
          </span>
        </div>
      </div>

      <div className="w-full overflow-y-auto pb-3">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`flex w-full items-center gap-3 p-3 transition-colors hover:bg-white ${selectedUser?._id === user._id ? "bg-white ring-1 border-y-0 border-black" : ""} `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 rounded-full object-cover"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 ring-2 ring-zinc-900" />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden min-w-0 text-left lg:block">
              <div className="truncate font-medium">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="py-4 text-center text-zinc-500">No online users</div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;

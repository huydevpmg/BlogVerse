import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";
function Sidebar() {
  return (
    <div className="flex flex-col rounded-3xl border-r border-slate-500 bg-slate-500 p-4">
      <SearchInput />
      <div className="mt-0 h-hsmall w-full bg-slate-300"></div>
      <Conversations />
      <div className="mt-0 h-hsmall w-full bg-slate-300"></div>
      <LogoutBtn />
    </div>
  );
}

export default Sidebar;

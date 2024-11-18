function Conversation() {
  return (
    <div className="my-2 flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:rounded-2xl hover:bg-slate-700">
      <div className="w-24">
        <img
          className="w-10 rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>

      <div className="flex flex-1 flex-row gap-3">
        <p className="text-xl font-bold text-slate-100">Gia Huy</p>
        <span className="ml-5 text-xl">🤣</span>
      </div>
    </div>
  );
}

export default Conversation;

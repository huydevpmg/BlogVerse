const Message = () => {
  return (
    <>
      <div className="my-4 flex items-start gap-2.5">
        <img
          className="h-8 w-8 rounded-full"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          alt="Jese image"
        />
        <div className="flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl border-gray-200 bg-gray-100 p-4 dark:bg-gray-700">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">
            That&apos;s awesome. I think our users will really appreciate the
            improvements.
          </p>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
    </>
  );
};

export default Message;

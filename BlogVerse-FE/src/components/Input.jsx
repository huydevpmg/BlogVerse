/* eslint-disable react/prop-types */

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon className="size-5 text-sky-300" />
      </div>
      <input
        {...props}
        className="rounded-lg-border focus:border-white-500 focus:ring-slate-400-500 w-full border-gray-700 bg-gray-800 bg-opacity-50 py-2 pl-10 pr-3 text-white placeholder-gray-400 transition duration-200 focus:ring-2"
      />
    </div>
  );
};

export default Input;

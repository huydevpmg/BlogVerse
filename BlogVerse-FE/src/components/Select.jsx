/* eslint-disable react/prop-types */
function Select({ icon: Icon, value, onChange }) {
  return (
    <div className="relative mb-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {Icon && <Icon className="size-5 text-sky-300" />}
      </div>
      <select
        className="focus:border-white-500 focus:ring-slate-400-500 w-full rounded-lg border border-gray-700 bg-gray-800 bg-opacity-50 py-2 pl-10 pr-3 text-gray-400 placeholder-gray-400 transition duration-200 focus:ring-2"
        value={value}
        onChange={onChange}
      >
        <option
          value=""
          className="bg-slate-50 bg-opacity-50 text-white"
          disabled
          hidden
        >
          Select gender
        </option>
        <option value="male" className="bg-gray-800 bg-opacity-50 text-white">
          Male
        </option>
        <option
          value="female"
          className="bg-slate-200 bg-transparent bg-opacity-50 text-white"
        >
          Female
        </option>
      </select>
    </div>
  );
}

export default Select;

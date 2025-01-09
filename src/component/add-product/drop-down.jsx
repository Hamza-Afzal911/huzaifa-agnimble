import React from "react";

export const DropDown = ({
  label,
  value,
  handleChange,
  data,
  placeholder,
  name,
  width,
  hasQuestion = true,
  hasAsterisk = true,
}) => {
  return (
    <>
      <label className="block text-sm font-semibold text-gray-500">
        {label}
        {hasQuestion && (
          <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
            ?
          </span>
        )}
        {hasAsterisk && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={` dark:bg-[#30323F] dark:border-[#373746] mt-2 p-2 border border-[#ced4da] rounded ${width} focus:outline-none text-gray-500`}
      >
        <option>{placeholder}</option>
        {data.map((item, index) => {
          return <option value={item.value}>{item?.label}</option>;
        })}
      </select>
    </>
  );
};

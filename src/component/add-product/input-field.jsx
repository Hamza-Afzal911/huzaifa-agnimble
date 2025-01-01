import React from "react";

export const InputField = ({ label, placeholder, hasQuestion=true, hasAsterisk=true, width }) => {
  return (
    <>
      <label className="block text-sm font-semibold text-gray-500 pl-1">
        {label}
     {hasQuestion &&  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
          ?
        </span>}  
        {hasAsterisk &&  <span className="text-red-500 ml-1">*</span>}
      </label>
     
      <input
        type="text"
        name="Supplier Name"
        className={`dark:bg-[#30323F] dark:border-[#373746] mt-2 p-2 border border-[#ced4da] rounded ${width} focus:outline-none placeholder:text-gray-500`}
        placeholder={placeholder}
      />
    </>
  );
};

import React from "react";

export const Steppers = ({isDarkMode, currentStep}) => {
    
  return (
    <>
      <div className="grid grid-cols-3 ">
        {/* Step 1 */}
        <div
          className={`flex items-center pl-3 ${
            currentStep >= 1
              ? "text-green-500 dark:text-green-400"
              : "text-gray-500 dark:text-gray-400"
          } ${currentStep === 1 ? "bg-[#DEE4FB] dark:bg-[#353C5D] p-3" : ""}`}
        >
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentStep === 1
                ? "bg-green-500 dark:bg-[#5A74E8] text-white dark:text-[white]"
                : "text-green-500 border dark:text-[#5A74E8] border-green-500 dark:border-[#5A74E8]"
            } font-bold  ${
              isDarkMode ? "bg-[#32344D]  text-[#5A74E8] border-[#5A74E8]" : ""
            } `}
          >
            1.
          </div>
          <span className="ml-2 text-sm text-black dark:text-[#F6F6F6]">
            Product Info
          </span>
        </div>

        {/* Step 2 */}
        <div
          className={`flex items-center pl-3 ${
            currentStep >= 2 ? "text-green-500" : "text-gray-500"
          } ${currentStep === 2 ? "bg-[#DEE4FB] dark:bg-[#353C5D] p-3" : ""} `}
        >
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentStep === 2
                ? "bg-green-500 dark:bg-[#5A74E8] text-white dark:text-[white]"
                : " text-green-500 border dark:text-[#5A74E8] border-green-500 dark:border-[#5A74E8]"
            } font-bold ${
              isDarkMode ? "bg-[#32344D] text-[#5A74E8] border-[#5A74E8] " : ""
            }`}
          >
            2.
          </div>
          <span className="ml-2 text-sm text-black dark:text-[#F6F6F6]">
            Shipping and Delivery
          </span>
        </div>

        {/* Step 3 */}
        <div
          className={`flex items-center pl-3 ${
            currentStep >= 3 ? "text-green-500" : "text-gray-500"
          } ${currentStep === 3 ? "bg-[#DEE4FB] dark:bg-[#353C5D] p-3" : ""} ${
            isDarkMode ? "" : ""
          }`}
        >
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentStep === 3
                ? "bg-green-500 dark:bg-[#5A74E8] text-white dark:text-[white]"
                : " text-green-500 border dark:text-[#5A74E8] border-green-500 dark:border-[#5A74E8]"
            } font-bold ${
              isDarkMode ? "bg-[#32344D] text-[#5A74E8] border-[#5A74E8] " : ""
            }`}
          >
            3.
          </div>
          <span className="ml-2 text-sm text-black dark:text-[#F6F6F6]">
            Price and Inventory
          </span>
        </div>
      </div>
    </>
  );
};

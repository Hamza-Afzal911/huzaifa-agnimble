import React, { useState, useEffect } from "react";
import { InputField } from "../../component/add-product";

const Step3Form = () => {
  const [showFields, setShowFields] = useState(false);
  const [showDiscountCard, setShowDiscountCard] = useState(false);
  const [extraFieldSets, setExtraFieldSets] = useState([]); // Track the sets as an array
  const [error, setError] = useState(""); // State for error message
  const [popupIndex, setPopupIndex] = useState(null); // Track which set has the discount popup

  const handleAddDiscountClick = () => {
    setShowDiscountCard(true); // Show the popup when clicked
  };

  const closeDiscountCard = () => {
    setShowDiscountCard(false); // Close the popup
  };

  const handlePlusClick = () => {
    if (extraFieldSets.length < 3) {
      setExtraFieldSets([
        ...extraFieldSets,
        { id: extraFieldSets.length + 1 }, // Add a new set with a unique ID
      ]);
      setError(""); // Reset any previous error
    } else {
      setError("You can add only up to 3 sets of extra fields."); // Show error if more than 3 sets
    }
  };

  const handleMinusClick = (index) => {
    // Remove the set at the given index
    setExtraFieldSets(extraFieldSets.filter((_, i) => i !== index));
  };

  // Hide error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000); // 3 seconds delay
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handlePopupOpen = (index) => {
    setPopupIndex(index); // Open the discount popup for the specific set
  };

  const handlePopupClose = () => {
    setPopupIndex(null); // Close the discount popup
  };

  return (
    <div className="relative border dark:border-gray-500 mt-10 pt-14 p-5 h-screen">
      <span className="absolute -top-4 left-5 bg-white dark:bg-[#2A2E3A] px-1 text-lg text-black dark:text-gray-500">
        Product
      </span>
      <div className="flex space-x-4 pt-6">
        <div className="flex-1">
          <InputField label={"Product ID/SKU"} width={"w-full"} />
        </div>
        <div className="flex-1">
          <InputField label={"Lot/Batch Number"} width={"w-full"} />
        </div>
      </div>

      {/* Toggle Section at the End */}
      <div className="pt-6">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-4">
            Enable Auction (Optional)
          </span>
          <div
            className={`relative inline-block w-14 h-7 cursor-pointer rounded-full ${
              showFields ? "bg-green-500" : "bg-gray-600"
            } transition-colors`}
            onClick={() => setShowFields((prev) => !prev)}
          >
            <span
              className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                showFields ? "translate-x-8" : "translate-x-1"
              }`}
            ></span>
          </div>
        </div>

        {showFields && (
          <div className="pt-2 dark:border-gray-500 p-5">
            <div className="flex space-x-4 pt-6">
              <div className="flex-1">
                <InputField
                  label={"Auction Start Date and Time "}
                  width={"w-full"}
                  placeholder={"Add unit of measure"}
                  hasAsterisk={false}
                />
              </div>
              <div className="flex-1">
                <InputField
                  label={"Auction End Date and Time "}
                  width={"w-full"}
                  placeholder={"Weight per packaging typeIn KG e.g., 5"}
                  hasAsterisk={false}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex-1">
                <InputField
                  label={"Starting Price"}
                  width={"w-full"}
                  placeholder={"Length (Optional) e.g., 10"}
                  hasAsterisk={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5 fields with 2 buttons in the same line */}
      <div className="flex space-x-4 pt-6">
        <div className="flex-1">
          <InputField
            label={"Min Bag per purchase"}
            width={"w-full"}
            placeholder={"Add Min Bag per purchase"}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Max Bag per purchase"}
            width={"w-full"}
            placeholder={"Add Max Bag per purchase"}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Selling Price Per LB (PKR)"}
            width={"w-full"}
            placeholder={"Add Selling Price"}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Cost Price Per LB (PKR) (Optional)"}
            width={"w-full"}
            placeholder={"Add Cost Price"}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Discount Price Per LB (PKR) (Optional)"}
            width={"w-full"}
            placeholder={"Add Discount Price"}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
        {/* Add buttons here */}
        <div className="flex items-center space-x-1">
          <button
            className="bg-[#34C38F] text-white px-4 py-2 mt-7 rounded-md"
            onClick={handleAddDiscountClick} // Main function to show the popup
          >
            Add Discount price
          </button>
          <button
            className="bg-[#34C38F] text-white px-4 py-2 mt-7 rounded-md"
            onClick={handlePlusClick} // Call function to show extra fields
          >
            +
          </button>
        </div>
      </div>

      {/* Show Error Message if more than 3 sets added */}
      {error && (
        <div className="text-red-500 mt-4">
          <p>{error}</p>
        </div>
      )}

      {/* Display Extra Fields */}
      {extraFieldSets.map((set, index) => (
        <div className="flex space-x-4 pt-6" key={set.id}>
          <div className="flex-1">
            <InputField
              label={``}
              width={"w-full"}
              placeholder={`Min Quantity`}
              hasAsterisk={false}
              hasQuestion={false}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={``}
              width={"w-full"}
              placeholder={`Max Quantity`}
              hasAsterisk={false}
              hasQuestion={false}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={``}
              width={"w-full"}
              placeholder={`price`}
              hasAsterisk={false}
              hasQuestion={false}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={``}
              width={"w-full"}
              placeholder={`Purchase Price`}
              hasAsterisk={false}
              hasQuestion={false}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={``}
              width={"w-full"}
              placeholder={`Discount Price`}
              hasAsterisk={false}
              hasQuestion={false}
            />
          </div>

          {/* Add two buttons in each set */}
          <div className="flex space-x-1 mt-2">
            <button
              className="bg-[#34C38F] text-white px-4 py-2 rounded-md"
              onClick={() => handlePopupOpen(index)} // Open discount popup for the specific set
            >
              Add Discount price
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleMinusClick(index)} // Remove this specific set
            >
              -
            </button>
          </div>

          {/* Show Popup only for the selected set */}
          {popupIndex === index && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <div className="bg-white dark:bg-[#2A2E3A] p-3 rounded-lg shadow-lg w-[520px]">
                <div className="border-b border-gray-800">
                  <div>
                    <InputField
                      label={"Discount Price"}
                      width={"w-full"}
                      placeholder={"Enter discount percentage"}
                    />
                  </div>
                  <div className="mt-4">
                    <InputField
                      label={"Start Date"}
                      width={"w-full"}
                      placeholder={"Enter discount amount"}
                    />
                  </div>
                  <div className="mt-4 mb-6">
                    <InputField
                      label={"End Date"}
                      width={"w-full"}
                      placeholder={"Enter discount amount"}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    className="bg-[#353747] text-white px-4 py-2 rounded-lg"
                    onClick={handlePopupClose} // Close the popup
                  >
                    Cancel
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Popup modal (for main discount button) */}
      {showDiscountCard && !popupIndex && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white dark:bg-[#2A2E3A] p-3 rounded-lg shadow-lg w-[520px]">
            <div className="border-b border-gray-800">
              <div>
                <InputField
                  label={"Discount Price"}
                  width={"w-full"}
                  placeholder={"Enter discount percentage"}
                />
              </div>
              <div className="mt-4">
                <InputField
                  label={"Start Date"}
                  width={"w-full"}
                  placeholder={"Enter discount amount"}
                />
              </div>
              <div className="mt-4 mb-6">
                <InputField
                  label={"End Date"}
                  width={"w-full"}
                  placeholder={"Enter discount amount"}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="bg-[#353747] text-white px-4 py-2 rounded-lg"
                onClick={closeDiscountCard} // Close the popup
              >
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
       <div className="relative border dark:border-gray-500 mt-10 pt-14 p-5">
      <span className="absolute -top-4 left-5 bg-white dark:bg-[#2A2E3A] px-1 text-lg text-black dark:text-gray-500">
      Quantity in each Warehouses
      </span>
       <div className="flex space-x-4 pt-6">
                <div className="flex-1">
                  <InputField
                    label={"No of Bags"}
                    width={"w-full"}
                    placeholder={"0"}
                  />
                </div>
                <div className="flex-1">
                  <InputField
                    label={"Pocket Size in LB"}
                    width={"w-full"}
                    placeholder={"0"}
                  />
                </div>
                <div className="flex-1">
                  <InputField
                    label={"Total Weight in LB"}
                    width={"w-full"}
                    placeholder={"see total weight here"}
                  />
                </div>
              </div>
     </div>
    </div>
  );
};

export default Step3Form;

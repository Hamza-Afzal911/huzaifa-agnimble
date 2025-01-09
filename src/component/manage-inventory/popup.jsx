import React, { useState } from "react";
import { DropDown, InputField } from "../add-product";

const Country = [{ id: 1, label: "Pushpa Raj", Value: "Pushpa Raj" }];
const City = [{ id: 1, label: "Pushpa Raj", Value: "Pushpa Raj" }];
const State = [{ id: 1, label: "Pushpa Raj", Value: "Pushpa Raj" }];

export function Popup({ handleClosePopup }) {
  const [formData, setFormData] = useState({ Country, State, City });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-lg font-semibold mb-4">Add New Warehouse</h2>
        <form>
        <div className="flex items-center space-x-4 mt-6">
        <div className="flex-1">
          <InputField
            label={"Warehouse Name"}
            width={"w-full"}
            placeholder={"Warehouse Name"}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Product loction"}
            width={"w-full"}
            placeholder={"Product loction"}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Address"}
            width={"w-full"}
            placeholder={"Warehouse Address"}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
      </div>
          <div className="flex items-center space-x-4 mt-6">
          <div className="flex-1">
          <DropDown
            label={"Country"}
            width={"w-full"}
            placeholder={"Select Country"}
            value={formData?.Country}
            handleChange={handleChange}
            data={Country}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
        <div className="flex-1">
          <DropDown
            label={"State"}
            width={"w-full"}
            placeholder={"Select State"}
            name={"category"}
            value={formData?.City}
            handleChange={handleChange}
            data={City}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
        <div className="flex-1">
          <DropDown
            label={"City"}
            width={"w-full"}
            placeholder={"Select City"}
            name={"commodityType"}
            value={formData?.State}
            handleChange={handleChange}
            data={State}
            hasAsterisk={false}
            hasQuestion={false}
          />
        </div>
          </div>
          <div className="pt-4">
        <InputField
          label={"Post Code"}
          placeholder={"Post Code"}
          hasAsterisk={false}
          hasQuestion={false}
        />
      </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClosePopup}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#2eb679] text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

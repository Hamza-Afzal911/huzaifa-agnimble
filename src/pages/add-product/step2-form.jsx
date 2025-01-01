import React, { useState } from "react";
import { InputField, DropDown } from "../../component/add-product";

const Step2Form = ({ formData, handleChange, PackagingTypes, WeightUnit, UnitOfMeasure }) => {
  const [showFields, setShowFields] = useState(false);

  return (
    <div className="h-screen">
      <div className="relative border dark:border-gray-500 mt-10 pt-14 p-5">
        <span className="absolute -top-4 left-5 bg-white dark:bg-[#2A2E3A] px-1 text-lg text-black dark:text-gray-500">
          Product
        </span>

        <DropDown
          label={"Packaging Type (Bag or Box)"}
          width={"w-1/2"}
          placeholder={"Select Packaging Type"}
          name={"PackagingTypes"}
          value={formData?.PackagingTypes}
          handleChange={handleChange}
          data={PackagingTypes}
        />
        <div className="flex space-x-4 pt-6">
          <div className="flex-1">
            <DropDown
              label={"Weight Unit"}
              width={"w-full"}
              placeholder={"KG"}
              name={"WeightUnit"}
              value={formData?.WeightUnit}
              handleChange={handleChange}
              data={WeightUnit}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={"Weight per packaging typeIn KG"}
              width={"w-full"}
              placeholder={"Weight per packaging typeIn KG e.g., 5"}
              name={"WeightPerPackagingTypeInKg"}
              value={formData?.WeightPerPackagingTypeInKg}
              handleChange={handleChange}
              hasQuestion={false}
            />
          </div>
        </div>
        <div className="flex space-x-4 pt-6">
          <div className="flex-1">
            <InputField
              label={"Quantity in KG of each Pallet (Optional) "}
              width={"w-full"}
              placeholder={"Quantity of each Pallet e.g., 50"}
              name={"QuantityInKgOfEachPallet"}
              value={formData?.QuantityInKgOfEachPallet}
              handleChange={handleChange}
              hasAsterisk={false}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={"Quantity in KG of each Container (Optional)"}
              width={"w-full"}
              placeholder={"Quantity of each Container e.g., 5"}
              name={"QuantityInKgOfEachContainer"}
              value={formData?.QuantityInKgOfEachContainer}
              handleChange={handleChange}
              hasAsterisk={false}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 pt-6">
          <div className="flex-1">
            <InputField
              label={"Length (Optional)"}
              width={"w-full"}
              placeholder={"Length (Optional) e.g., 10"}
              hasAsterisk={false}
            />
          </div>

          <div className="flex-1">
            <InputField
              label={"Width (Optional)"}
              width={"w-full"}
              placeholder={"Select Product Category"}
              name={"category"}
              value={formData?.category}
              handleChange={handleChange}
              hasAsterisk={false}
            />
          </div>

          <div className="flex-1">
            <InputField
              label={"Height (Optional)"}
              width={"w-full"}
              placeholder={"Select Commodity Type"}
              name={"commodityType"}
              value={formData?.commodityType}
              handleChange={handleChange}
              hasAsterisk={false}
            />
          </div>
        </div>
      </div>

      {/* Toggle Section at the End */}
      <div className="pt-6">
        <div className="flex items-center">
          <span className="text-sm font-medium mr-4">
            Do You Offer Product Sample?
          </span>
          <div
            className={`relative inline-block w-14 h-7 cursor-pointer rounded-full ${
              showFields ? "bg-green-500" : "bg-red-500"
            } transition-colors`}
            onClick={() => setShowFields((prev) => !prev)}
          >
            {/* Text inside the toggle */}
            <span
              className={`absolute inset-0 flex items-center justify-between px-2 text-white font-medium text-xs`}
            >
              <span className={`${showFields ? "opacity-100" : "opacity-0"}`}>
                Yes
              </span>
              <span className={`${showFields ? "opacity-0" : "opacity-100"}`}>
                No
              </span>
            </span>

            {/* Toggle Knob */}
            <span
              className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                showFields ? "translate-x-8" : "translate-x-1"
              }`}
            ></span>
          </div>
        </div>

        {showFields && (
          <div className="pt-6 relative border dark:border-gray-500 mt-10 p-5">
          <span className="absolute -top-4 left-5 bg-white dark:bg-[#2A2E3A] px-1 text-lg text-black dark:text-gray-500">
            Sample
          </span>
            <div className="flex space-x-4 pt-6">
              <div className="flex-1">
                <DropDown
                  label={"Unit of Measure (Optional)"}
                  width={"w-full"}
                  placeholder={"Add unit of measure"}
                  name={"UnitOfMeasure"}
                  value={formData?.UnitOfMeasure}
                  handleChange={handleChange}
                  data={UnitOfMeasure}
                />
              </div>
              <div className="flex-1">
                <InputField
                  label={"Weight per packaging typeIn KG"}
                  width={"w-full"}
                  placeholder={"Weight per packaging typeIn KG e.g., 5"}
                  name={"WeightPerPackagingTypeInKg"}
                  value={formData?.WeightPerPackagingTypeInKg}
                  handleChange={handleChange}
                  hasQuestion={false}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex-1">
                <InputField
                  label={"Length (Optional)"}
                  width={"w-full"}
                  placeholder={"Length (Optional) e.g., 10"}
                  hasAsterisk={false}
                />
              </div>

              <div className="flex-1">
                <InputField
                  label={"Width (Optional)"}
                  width={"w-full"}
                  placeholder={"Select Product Category"}
                  name={"category"}
                  value={formData?.category}
                  handleChange={handleChange}
                  hasAsterisk={false}
                />
              </div>

              <div className="flex-1">
                <InputField
                  label={"Height (Optional)"}
                  width={"w-full"}
                  placeholder={"Select Commodity Type"}
                  name={"commodityType"}
                  value={formData?.commodityType}
                  handleChange={handleChange}
                  hasAsterisk={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2Form;

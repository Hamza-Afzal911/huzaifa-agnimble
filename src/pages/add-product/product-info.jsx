import React, { useState } from "react";
import { Steppers } from "../../component/add-product";
import Step1Form from "./step1-form";
import Step2Form from "./step2-form";
import Step3Form from "./step3-form";

const categoryData = [{ id: 1, label: "Mango", value: "Mango" }];
const commodityType = [{ id: 1, label: "HuzifaCake", Value: "HuzifaCake" }];
const productVisibility = [
  { id: 1, label: "Iftikhar khan", Value: "Iftikhar khan" },
];
const productType = [{ id: 1, label: "Pushpa Raj", Value: "Pushpa Raj" }];
const PackagingTypes = [{ id: 1, label: "Rocky bhai", Value: "Rocki bhai" }];
const WeightUnit = [{ id: 1, label: "1", Value: "1" }];
const UnitOfMeasure = [{ id: 1, label: "2", Value: "2" }];

export function ProductInfo({ isDarkMode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    category: "",
    commodityType: "",
    processingMethod: "",
    countryOfOrigin: "",
    hsCode: "",
    certifications: "",
    productVisibility: "",
    productType: "",
    cropYear: "",
    harvestMonths: "",
    processedMonths: "",
    PackagingTypes: "",
    WeightUnit: "",
    WeightPerPackagingTypeInKg: "",
    QuantityInKgOfEachPallet: "",
    QuantityInKgOfEachContainer: "",
    UnitOfMeasure: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    // Handle form submission logic here (e.g., send data to backend)
  };

  return (
    <div className={` ${isDarkMode ? "bg-[#2D313E]" : "bg-[#f5f6f8]"}`}>
      <div className={`p-5`}>
        <h2 className="text-xl font-semibold pt-5">Add Product</h2>
        <div
          className={`mt-6  shadow-md rounded-lg p-6 ${
            isDarkMode ? "bg-[#2A2E3A]" : "bg-white"
          }`}
        >
          {/* Stepper Container with Gray Background */}
          <div
            className={` rounded-md ${
              isDarkMode ? "bg-[#32344D]" : "bg-[#EEF1FD]"
            }`}
          >
            <Steppers currentStep={currentStep} isDarkMode={isDarkMode} />
          </div>

          {/* Step 1 Form */}
          {currentStep === 1 && (
            <Step1Form
              formData={formData}
              handleChange={handleChange}
              categoryData={categoryData}
              commodityType={commodityType}
              productVisibility={productVisibility}
              productType={productType}
            />
          )}

          {/* Step 2 Form */}
          {currentStep === 2 && (
            <Step2Form
              formData={formData}
              handleChange={handleChange}
              PackagingTypes={PackagingTypes}
              WeightUnit={WeightUnit}
              UnitOfMeasure={UnitOfMeasure}
            />
          )}

          {/* Step 3 Form */}
          {currentStep === 3 && (
            <Step3Form formData={formData} handleChange={handleChange} />
          )}
          {/* Navigation Buttons - Aligned to the Right */}
          <div className="flex justify-end mt-6 space-x-4">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className="px-4 py-2 bg-[#86D8B7] dark:bg-[#4B5BAC] text-white rounded-md"
            >
              Previous
            </button>
            <button
              onClick={currentStep === 3 ? handleSubmit : handleNextStep}
              className={`px-4 py-2 ${
                currentStep === 3 ? "bg-[#34C38F]" : "bg-[#34C38F]"
              } dark:bg-[#5A74E8] text-white rounded-md`}
            >
              {currentStep === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#FFFFFF] dark:bg-[#2A2E3A] border border-t-slate-200 dark:border-[#353747] p-4 w-full">
        <p>© 2020 -2024, AGnimble.</p>
        <p>Your Procurement Hub</p>
      </div>
    </div>
  );
}

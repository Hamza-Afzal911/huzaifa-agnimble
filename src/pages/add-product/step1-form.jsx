import React from "react";
import { InputField, DropDown, ProductDescription, YouTubeVideoUrl } from "../../component/add-product";

const Step1Form = ({
  formData,
  handleChange,
  categoryData,
  commodityType,
  productVisibility,
  productType,
}) => {
  return (
    <div>
      <div className="pt-6">
        <InputField
          label={"Supplier Name"}
          width={"w-full"}
          padding={"p-2"}
          placeholder={"Enter Supplier Name"}
          hasQuestion={false}
        />
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <div className="flex-1">
          <InputField
            label={"Product Name"}
            width={"w-full"}
            placeholder={"Add Product Name"}
          />
        </div>
        <div className="flex-1">
          <DropDown
            label={"Commodity Category"}
            width={"w-full"}
            placeholder={"Select Product Category"}
            name={"category"}
            value={formData?.category}
            handleChange={handleChange}
            data={categoryData}
          />
        </div>
        <div className="flex-1">
          <DropDown
            label={"Commodity Type"}
            width={"w-full"}
            placeholder={"Select Commodity Type"}
            name={"commodityType"}
            value={formData?.commodityType}
            handleChange={handleChange}
            data={commodityType}
          />
        </div>
      </div>

      <div className="flex space-x-4 pt-6">
        <div className="flex-1">
          <InputField
            label={"Processing Method"}
            width={"w-full"}
            placeholder={"Add Processing Method"}
            name={"processingMethod"}
            value={formData?.processingMethod}
            handleChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Country of Origin"}
            width={"w-full"}
            placeholder={"Select country of origin"}
            name={"countryOfOrigin"}
            value={formData?.countryOfOrigin}
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="flex space-x-4 pt-6">
        <div className="flex-1">
          <InputField
            label={"HS Code"}
            width={"w-full"}
            placeholder={"xxxx.xx.xxxx"}
            name={"hsCode"}
            value={formData?.hsCode}
            handleChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Certifications"}
            width={"w-full"}
            placeholder={""}
            name={"certifications"}
            value={formData?.certifications}
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="flex space-x-4 pt-6">
        <div className="flex-1">
          <DropDown
            label={"Product Visibility"}
            width={"w-full"}
            placeholder={"Private"}
            name={"productVisibility"}
            value={formData?.productVisibility}
            handleChange={handleChange}
            data={productVisibility}
          />
        </div>
        <div className="flex-1">
          <DropDown
            label={"Product Type"}
            width={"w-full"}
            placeholder={"Raw Farm Product"}
            name={"productType"}
            value={formData?.productType}
            handleChange={handleChange}
            data={productType}
          />
        </div>
      </div>

      <div className="flex space-x-4 pt-6">
        <div className="flex-1">
          <InputField
            label={"Crop Year"}
            width={"w-full"}
            placeholder={""}
            name={"cropYear"}
            value={formData?.cropYear}
            handleChange={handleChange}
            hasQuestion={false}
          />
        </div>
        <div className="flex-1">
          <InputField
            label={"Harvest Months"}
            width={"w-full"}
            placeholder={""}
            name={"harvestMonths"}
            value={formData?.harvestMonths}
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="flex space-x-4 pt-6">
        <div className="flex-1">
          <InputField
            label={"Processed Months"}
            width={"w-1/2"}
            placeholder={""}
            name={"processedMonths"}
            value={formData?.processedMonths}
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full mx-auto mt-8">
        <ProductDescription
          label={"Product Description"}
          placeholder={
            "Add your product description e.g., features, specifications, benefits"
          }
        />
      </div>

      <div className="w-full mx-auto mt-8">
        <ProductDescription
          label={"Product Specifications (Optional)"}
          placeholder={
            "Add your product specifications e.g., dimensions, weight, material"
          }
        />
      </div>

      <div className="w-full mx-auto mt-10">
        <YouTubeVideoUrl />
      </div>
    </div>
  );
};

export default Step1Form;

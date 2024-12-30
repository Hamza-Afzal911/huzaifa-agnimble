import React, { useState } from "react";

function AddProduct() {
  const [currentStep, setCurrentStep] = useState(1);
  const [files, setFiles] = useState([]);
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
  });

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files)); // Store the selected files in state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  return (
    <div className="p-8  bg-[#f5f6f8]">
      <h2 className="text-xl font-semibold">Add Product</h2>
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        {/* Stepper Container with Gray Background */}
        <div className="bg-[#EEF1FD] rounded-md">
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Step 1 */}
              <div
                className={`flex items-center pr-[400px] pl-3 ${
                  currentStep >= 1 ? "text-green-500" : "text-gray-500"
                } ${currentStep === 1 ? "bg-[#DEE4FB] p-3" : ""}`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentStep === 1
                      ? "bg-green-500 text-white "
                      : " text-green-500 border border-green-500"
                  } font-bold`}
                >
                  1.
                </div>
                <span className="ml-2 text-sm text-black">Product Info</span>{" "}
                {/* Name to the right */}
              </div>
            </div>

            <div className="flex items-center">
              {/* Step 2 */}
              <div
                className={`flex items-center pl-5 pr-[403px] ${
                  currentStep >= 2 ? "text-green-500" : "text-gray-500"
                } ${currentStep === 2 ? "bg-[#DEE4FB] p-3" : ""}`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentStep === 2
                      ? "bg-green-500 text-white "
                      : "bg-gray-300 text-green-500 border border-green-500"
                  } font-bold`}
                >
                  2.
                </div>
                <span className="ml-2 text-sm text-black">
                  Shipping and Delivery
                </span>{" "}
                {/* Name to the right */}
              </div>
            </div>

            <div className="flex items-center">
              {/* Step 3 */}
              <div
                className={`flex items-center pl-5 pr-[360px] ${
                  currentStep >= 3 ? "text-green-500" : "text-gray-500"
                } ${currentStep === 3 ? "bg-[#DEE4FB] p-3" : ""}`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    currentStep === 3
                      ? "bg-green-500 text-white "
                      : "bg-gray-300 text-green-500 border border-green-500"
                  } font-bold`}
                >
                  3.
                </div>
                <span className="ml-2 text-sm text-black">
                  Price and Inventory
                </span>{" "}
                {/* Name to the right */}
              </div>
            </div>
          </div>
        </div>

        {/* Step 1 Form */}
        {currentStep === 1 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 pt-6 pl-1">
              Supplier Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="Supplier Name"
              className="mt-2 p-2 border border-[#ced4da] rounded w-full focus:outline-none placeholder:text-[#74788D]"
              placeholder="Enter product name"
            />
            <div className="flex items-center space-x-4 mt-6">
              {/* Left Text Input */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700">
                  Product Name
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  className="mt-2 p-2 border border-[#ced4da] rounded w-full placeholder:text-[#74788D] focus:outline-none "
                  placeholder="Add product name"
                />
              </div>

              {/* Center Text Input */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700">
                  Commodity Category
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-2 p-2 border border-[#ced4da] rounded w-full focus:outline-none text-[#74788D]"
                >
                  <option>Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>

              {/* Right Dropdown */}
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700">
                  Commodity Type
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  name="category"
                  className="mt-2 p-2 border border-[#ced4da] rounded w-full focus:outline-none text-[#74788D]"
                >
                  <option value="">Select Commodity Type</option>
                  <option value="electronics"></option>
                  <option value="clothing"></option>
                  <option value="furniture"></option>
                </select>
              </div>
            </div>

            <div class="flex space-x-4 pt-6">
              <div class="flex-1">
                <label
                  for="field1"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Processing Method
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="field1"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none placeholder:text-[#74788D]"
                  placeholder="Add Processing Method"
                />
              </div>
              <div class="flex-1">
                <label
                  for="field2"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Country of Origin
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="field2"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none placeholder:text-[#74788D]"
                  placeholder="select Country of Origin"
                />
              </div>
            </div>
            <div class="flex space-x-4 pt-6">
              <div class="flex-1">
                <label
                  for="field1"
                  class="block text-sm font-semibold text-gray-700"
                >
                  HS Code
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="field1"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none placeholder:text-[#74788D]"
                  placeholder="xxxx.xx.xxxx"
                />
              </div>
              <div class="flex-1 ">
                <label
                  for="field2"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Certifications
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="field2"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none"
                />
              </div>
            </div>
            <div class="flex space-x-4 pt-6">
              <div class="flex-1">
                <label
                  for="field1"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Product Visibility
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="field1"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none text-[#74788D]"
                >
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                  <option value="restricted">Restricted</option>
                </select>
              </div>
              <div class="flex-1">
                <label
                  for="field2"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Product Type
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="field2"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none text-[#74788D]"
                >
                  <option value="physical">Raw Farm Product</option>
                  <option value="digital">Digital</option>
                  <option value="subscription">Subscription</option>
                </select>
              </div>
            </div>

            <div class="flex space-x-4 pt-6">
              <div class="flex-1">
                <label
                  for="field1"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Crop Year
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="field1"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none"
                />
              </div>
              <div class="flex-1">
                <label
                  for="field2"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Harvest Months
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="field2"
                  class="w-full p-2 border border-[#ced4da] rounded mt-2 focus:outline-none"
                />
              </div>
            </div>
            <div class="flex space-x-4 pt-6">
              <div class="flex-1 ">
                <label
                  for="field1"
                  class="block text-sm font-semibold text-gray-700"
                >
                  Processed Months
                  <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                    ?
                  </span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="field1"
                  class="p-2 w-1/2 border border-[#ced4da] rounded mt-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="w-full mx-auto mt-8">
              <label
                htmlFor="product-description"
                className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
              >
                Product Description
                <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                  ?
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="border h-[300px] border-[#ced4da] bg-[#F5F6F8] rounded-md shadow-sm">
                <div className="flex items-center space-x-2 px-3 py-2 border-b border-[#ced4da]">
                  <select
                    className="text-sm text-gray-700 bg-[#F5F6F8] border-none focus:ring-0 focus:outline-none"
                    defaultValue="Paragraph"
                  >
                    <option value="Paragraph">Paragraph</option>
                    <option value="Heading">Heading</option>
                    <option value="List">List</option>
                  </select>
                  <button className="text-gray-700 hover:text-black">
                    <strong>B</strong>
                  </button>
                  <button className="text-gray-700 italic hover:text-black">
                    <em>I</em>
                  </button>
                  <button className="text-gray-700 hover:text-black">🔗</button>
                  <button className="text-gray-700 hover:text-black">1️⃣</button>
                  <button className="text-gray-700 hover:text-black">📑</button>
                  <button className="text-gray-700 hover:text-black">❮❯</button>
                </div>
                <textarea
                  id="product-description"
                  rows="5"
                  className="w-full px-3 py-2 text-sm border-none focus:ring-0 focus:outline-none resize-none placeholder:text-md placeholder:text-gray-600 h-[257px] rounded-b-md"
                  placeholder="Add your product description e.g., features, specifications, benefits"
                ></textarea>
              </div>
            </div>
            <div className="w-full mx-auto mt-8">
              <label
                htmlFor="product-description"
                className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
              >
                Product Description
                <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                  ?
                </span>
              </label>
              <div className="border h-[300px] border-[#ced4da] bg-[#F5F6F8] rounded-md shadow-sm">
                <div className="flex items-center space-x-2 px-3 py-2 border-b border-[#ced4da]">
                  <select
                    className="text-sm text-gray-700 bg-[#F5F6F8] border-none focus:ring-0 focus:outline-none"
                    defaultValue="Paragraph"
                  >
                    <option value="Paragraph">Paragraph</option>
                    <option value="Heading">Heading</option>
                    <option value="List">List</option>
                  </select>
                  <button className="text-gray-700 hover:text-black">
                    <strong>B</strong>
                  </button>
                  <button className="text-gray-700 italic hover:text-black">
                    <em>I</em>
                  </button>
                  <button className="text-gray-700 hover:text-black">🔗</button>
                  <button className="text-gray-700 hover:text-black">1️⃣</button>
                  <button className="text-gray-700 hover:text-black">📑</button>
                  <button className="text-gray-700 hover:text-black">❮❯</button>
                </div>
                <textarea
                  id="product-description"
                  rows="5"
                  className="w-full px-3 py-2 text-sm border-none focus:ring-0 focus:outline-none resize-none placeholder:text-gray-600 h-[257px] rounded-b-md"
                  placeholder="Add your product description e.g., features, specifications, benefits"
                ></textarea>
              </div>
            </div>

            <div className="w-full mx-auto mt-10">
              {/* YouTube Video URL Input */}
              <label
                htmlFor="youtube-url"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                YouTube Video URL (Optional)
                <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                  ?
                </span>
              </label>
              <input
                type="text"
                id="youtube-url"
                placeholder="Add your YouTube video URL"
                className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <div className="mt-6">
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-gray-700 mb-2"
                ></label>
                <label
                  htmlFor="file-upload"
                  className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-md h-56 cursor-pointer"
                >
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V10m0 0V4m0 6h6m6 6V4m0 6h-6m-6 6v-6m0 0h6"
                      />
                    </svg>
                    <p className="text-xl text-gray-700 font-semibold">
                      Upload your files here.
                    </p>
                  </div>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
                <div className="mt-4">
                  {files.length > 0 && (
                    <div>
                      <h3 className="text-gray-700 font-semibold">
                        Selected Files:
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        {files.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 Form */}
        {currentStep === 2 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Product Price
            </label>
            <input
              type="text"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="Enter product price"
            />
          </div>
        )}

        {/* Step 3 Form */}
        {currentStep === 3 && (
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Product Description
            </label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              className="mt-2 p-2 border border-gray-300 rounded w-full"
              placeholder="Enter product description"
            />
          </div>
        )}
        {/* Navigation Buttons - Aligned to the Right */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={handlePrevStep}
            disabled={currentStep === 1}
            className="px-4 py-2 bg-[#86D8B7] text-white rounded-md"
          >
            Previous
          </button>
          <button
            onClick={handleNextStep}
            className="px-4 py-2 bg-[#34C38F] text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;

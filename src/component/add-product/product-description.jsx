import React from 'react'

export const ProductDescription = ({label, placeholder}) => {
  return (
    <>
      <label
                htmlFor="product-description"
                className=" text-sm font-medium text-gray-700 mb-1 flex items-center"
              >
                {label}
                <span class="inline-flex items-center justify-center w-4 h-4 border border-green-500  text-green-500 text-sm font-bold rounded-full ml-2">
                  ?
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="border h-[300px] border-[#ced4da] bg-[#F5F6F8] dark:bg-[#353747] dark:border-[#353747] rounded-md shadow-sm">
                <div className="flex items-center space-x-2 px-3 py-2 border-b border-[#ced4da] dark:border-b-[#353747]">
                  <select
                    className="text-sm text-gray-700 bg-[#F5F6F8] dark:bg-[#353747] border-none focus:ring-0 focus:outline-none"
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
                  className="dark:bg-[#2C2E3B] w-full px-3 py-2 text-sm border-none focus:ring-0 focus:outline-none resize-none placeholder:text-md placeholder:text-gray-600 h-[257px] rounded-b-md"
                  placeholder={placeholder}
                ></textarea>
              </div>
    </>
  )
}



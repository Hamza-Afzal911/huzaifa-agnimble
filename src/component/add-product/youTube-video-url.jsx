import React, { useState } from "react";

export const YouTubeVideoUrl = () => {
  const [files, setFiles] = useState([]);
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };
  return (
    <>
      <label
        htmlFor="youtube-url"
        className="block text-sm font-medium text-gray-700 mb-2 "
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
        className="dark:bg-[#30323F] dark:border-[#373746] block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      <div className="mt-6">
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700 mb-2"
        ></label>
        <label
          htmlFor="file-upload"
          className="flex justify-center items-center border-2 border-dashed border-gray-300 dark:border-gray-600  rounded-md h-56 cursor-pointer"
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
              <h3 className="text-gray-700 font-semibold">Selected Files:</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

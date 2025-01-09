import React from "react";
import truck from "../../photos/truck.svg";
import box from "../../photos/box.svg";
import borderOut from "../../photos/border-out.svg";
import trophy from "../../photos/trophy.svg";

function CardItem({
  isDarkMode,
  Heading,
  title,
  description,
  Padding,
  showImage,
  imageSrc,
  backgroundColor,
}) {
  return (
    <div
      className={`flex flex-col items-start ${Padding} rounded-lg shadow-md ${
        isDarkMode ? "bg-[#2d313e]" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <p className="text-left text-2xl font-semibold ">{Heading}</p>
        {showImage && imageSrc && (
          <div className={`rounded-full p-3 ${backgroundColor}`}>
            <img src={imageSrc} alt="Icon" className="w-8 h-8" />
          </div>
        )}
      </div>
      <p className="text-left text-xs text-gray-600 pt-1 pb-5">{title}</p>
      <p
        className="text-left"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

export function Card({
  isDarkMode,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  title1,
  title2,
  title3,
  title4,
  description1,
  description2,
  description3,
  description4,
  Padding,
  showImage,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      <CardItem
        Padding={Padding}
        isDarkMode={isDarkMode}
        Heading={Heading1}
        title={title1}
        description={description1}
        showImage={showImage} // Pass the flag to show image
        imageSrc={truck}      // Pass truck image
        backgroundColor={"bg-[#A7FFDF]"}
      />
      <CardItem
        Padding={Padding}
        isDarkMode={isDarkMode}
        Heading={Heading2}
        title={title2}
        description={description2}
        showImage={showImage} // Pass the flag to show image
        imageSrc={box}        // Pass box image
        backgroundColor={"bg-[#68809A]"}
      />
      <CardItem
        Padding={Padding}
        isDarkMode={isDarkMode}
        Heading={Heading3}
        title={title3}
        description={description3}
        showImage={showImage} // Pass the flag to show image
        imageSrc={borderOut}  // Pass border-out image
        backgroundColor={"bg-[#FFF2E1]"}
      />
      <CardItem
        Padding={Padding}
        isDarkMode={isDarkMode}
        Heading={Heading4}
        title={title4}
        description={description4}
        showImage={showImage} // Pass the flag to show image
        imageSrc={trophy}     // Pass trophy image
        backgroundColor={"bg-[#E6EDFC]"}
      />
    </div>
  );
}

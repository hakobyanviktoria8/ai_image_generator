import React from "react";

export const Header = () => {
  return (
    <header className="p-5 sticky top-0 bg-white z-50 shadow-md space-x-2 ">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-gray-500 font-bold text-xl mb-2">
          AI Image Generator
        </h1>
        <h2 className="text-xs">
          Powered by DALL-E 2, Chat GPT & Microsoft Azure!
        </h2>
      </div>
    </header>
  );
};

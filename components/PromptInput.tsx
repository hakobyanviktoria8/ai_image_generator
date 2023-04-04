"use client";
import React, { useState } from "react";

export const PromtInput = () => {
  const [input, setInput] = useState("");

  return (
    <div className="m-10">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt..."
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button
          type="submit"
          disabled={!input}
          className={`p-4 font-bold ${
            input
              ? "bg-gray-500 text-white transition-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-4 bg-gray-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Use Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-gray-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
};

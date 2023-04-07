"use client";

import React, { useState } from "react";
import useSWR from "swr";
import fetchSuggestionChatGPT from "@/lib/fetchSuggestionChatGPT";

export const PromtInput = () => {
  const [input, setInput] = useState("");
  const {
    data: suggestion,
    isLoading,
    mutate,
    isValidating,
  } = useSWR("/api/suggestion", fetchSuggestionChatGPT, {
    revalidateOnFocus: false,
  });

  const submitPrompt = async (useSuggestion?: boolean) => {
    const inputPrompt = input;
    console.log(11111111111111, inputPrompt);
    setInput("");

    // p => prompt to send API
    const p = useSuggestion ? suggestion : inputPrompt;

    const res = await fetch("/api/generateImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: p }),
    });

    const data = await res?.json();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitPrompt();
  };

  const loading = isLoading || isValidating;

  return (
    <div className="m-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            (loading && "Loading suggestion...") ||
            suggestion ||
            "Enter a prompt..."
          }
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
          onClick={mutate}
        >
          New Suggestion
        </button>
      </form>

      {input && (
        <p className="pt-2 pl-2 font-bold text-gray-500">
          Suggestion:{" "}
          <span className=" font-light">
            {loading ? "Chat GPT is thinking..." : suggestion}
          </span>
        </p>
      )}
    </div>
  );
};

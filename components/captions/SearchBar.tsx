"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  popularSuggestions?: string[];
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search captions, categories, platforms (e.g. travel, attitude, gym, hinglish)...",
  className = "",
  popularSuggestions = ["Travel", "Attitude", "Love", "Funny", "Motivation", "Gym", "Hinglish"],
}: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
  };

  return (
    <div className={`w-full space-y-3 ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-zinc-400">
          <Search className="w-5 h-5" />
        </div>

        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-xs transition-all"
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3.5 p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Search Suggestions (Hidden on mobile to prevent stacked chip clutter) */}
      <div className="hidden sm:flex flex-wrap items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
        <span className="font-semibold text-zinc-700 dark:text-zinc-300">Quick searches:</span>
        {popularSuggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => handleSuggestionClick(s)}
            className={`px-2.5 py-1 rounded-lg border transition-colors ${
              value.toLowerCase() === s.toLowerCase()
                ? "bg-indigo-50 dark:bg-indigo-950 border-indigo-300 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 font-semibold"
                : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

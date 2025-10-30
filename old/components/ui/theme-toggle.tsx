"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid hydration mismatch

  const current = theme === "system" ? `system (${resolvedTheme})` : theme;

  return (
    <div className="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-sm">
      <span className="text-xs text-gray-600 dark:text-gray-400">Theme: {current}</span>
      <button
        aria-label="Use light theme"
        className={`rounded p-1 ${resolvedTheme === "light" ? "bg-gray-200" : ""}`}
        onClick={() => setTheme("light")}
        title="Light"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        aria-label="Use dark theme"
        className={`rounded p-1 ${resolvedTheme === "dark" ? "bg-gray-800 text-white" : ""}`}
        onClick={() => setTheme("dark")}
        title="Dark"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        aria-label="Use system theme"
        className={`rounded p-1 ${theme === "system" ? "ring-1 ring-gray-400" : ""}`}
        onClick={() => setTheme("system")}
        title="System"
      >
        <Laptop className="h-4 w-4" />
      </button>
    </div>
  );
}
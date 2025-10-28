"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm bg-background text-foreground hover:bg-primary/10"
    >
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"} Mode</span>
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {isDark ? (
          <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 0 0 21.64 13z" />
        ) : (
          <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm8-5a1 1 0 0 1 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1zM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm12.95 5.54a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41zM5.64 6.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 0 1 6.35 8.88l-.71-.71a1 1 0 0 1 0-1.41zm12.02-.71a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0zM6.35 16.95a1 1 0 1 1-1.41 1.41l-.71-.71a1 1 0 1 1 1.41-1.41l.71.71z" />
        )}
      </svg>
    </button>
  );
}
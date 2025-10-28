'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = (mounted ? resolvedTheme : theme) === 'dark'

  return (
    <Button
      variant="outline"
      size="sm"
      className="border-border bg-transparent hover:bg-input"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
      <span className="ml-2 hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </Button>
  )
}
"use client"

import { getProject, getAllProjects } from "./storage"
import type { PageData, Property } from "./schemas"

export function getActivePageData(idParam?: string): PageData | null {
  // Prefer explicit id, fall back to most recent project, else default template
  const id = idParam || (getAllProjects().slice().sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0]?.id ?? null)
  if (id) {
    const proj = getProject(id)
    if (proj) return proj
  }
  return null
}

export function getAllProperties(page: PageData): Property[] {
  const listings = page.sections.filter((s) => s.type === "listings") as Extract<typeof page.sections[number], { type: "listings"}>[]
  return listings.flatMap((s) => s.properties)
}
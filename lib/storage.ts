import type { PageData } from "./schemas"

const STORAGE_KEY = "real-estate-projects"

export interface StoredProject {
  id: string
  name: string
  templateId: string
  createdAt: string
  updatedAt: string
}

export function saveProject(pageData: PageData): void {
  try {
    const projects = getAllProjects()
    const existingIndex = projects.findIndex((p) => p.id === pageData.id)

    const projectMeta: StoredProject = {
      id: pageData.id,
      name: pageData.name,
      templateId: pageData.templateId,
      createdAt: existingIndex >= 0 ? projects[existingIndex].createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    if (existingIndex >= 0) {
      projects[existingIndex] = projectMeta
    } else {
      projects.push(projectMeta)
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    localStorage.setItem(`project:${pageData.id}`, JSON.stringify(pageData))
  } catch (error) {
    console.error("Failed to save project:", error)
  }
}

export function getProject(id: string): PageData | null {
  try {
    const data = localStorage.getItem(`project:${id}`)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error("Failed to get project:", error)
    return null
  }
}

export function getAllProjects(): StoredProject[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error("Failed to get projects:", error)
    return []
  }
}

export function deleteProject(id: string): void {
  try {
    const projects = getAllProjects().filter((p) => p.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    localStorage.removeItem(`project:${id}`)
  } catch (error) {
    console.error("Failed to delete project:", error)
  }
}

export function duplicateProject(id: string): PageData | null {
  try {
    const original = getProject(id)
    if (!original) return null

    const newId = `${original.templateId}-${Date.now()}`
    const duplicated: PageData = {
      ...original,
      id: newId,
      name: `${original.name} (Copy)`,
      updatedAt: new Date().toISOString(),
    }

    saveProject(duplicated)
    return duplicated
  } catch (error) {
    console.error("Failed to duplicate project:", error)
    return null
  }
}

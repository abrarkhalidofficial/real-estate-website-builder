"use client";

import { create } from "zustand";
import type { PageData, Section } from "./schemas";
import { saveProject, loadProject } from "./storage";

type BuilderState = {
  pageData: PageData | null;
  setPageData: (data: PageData) => void;
  updateSections: (sections: Section[]) => void;
  setTheme: (theme: PageData["theme"]) => void;
  saveCurrent: () => void;
  loadById: (id: string) => void;
};

export const useBuilderStore = create<BuilderState>((set, get) => ({
  pageData: null,
  setPageData: (data) => set({ pageData: data }),
  updateSections: (sections) => {
    const current = get().pageData;
    if (!current) return;
    set({ pageData: { ...current, sections, updatedAt: new Date().toISOString() } });
  },
  setTheme: (theme) => {
    const current = get().pageData;
    if (!current) return;
    set({ pageData: { ...current, theme } });
  },
  saveCurrent: () => {
    const current = get().pageData;
    if (!current) return;
    saveProject(current.id, current, current.name);
  },
  loadById: (id) => {
    const data = loadProject<PageData>(id);
    if (data) set({ pageData: data });
  },
}));
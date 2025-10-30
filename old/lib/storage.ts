// Client-only LocalStorage helpers with safe guards
const LS_INDEX_KEY = "projects:index";
const LS_LAST_KEY = "projects:lastId";

export type StoredIndexItem = { id: string; name?: string; updatedAt?: string };

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function saveProject(id: string, data: unknown, name?: string) {
  if (!isBrowser()) return;
  const updatedAt = new Date().toISOString();
  window.localStorage.setItem(`projects:${id}`, JSON.stringify(data));

  const raw = window.localStorage.getItem(LS_INDEX_KEY);
  const index: StoredIndexItem[] = raw ? JSON.parse(raw) : [];
  const existingIdx = index.findIndex((i) => i.id === id);
  const item = { id, name, updatedAt };
  if (existingIdx >= 0) index[existingIdx] = { ...index[existingIdx], ...item };
  else index.push(item);
  window.localStorage.setItem(LS_INDEX_KEY, JSON.stringify(index));
  window.localStorage.setItem(LS_LAST_KEY, id);
}

export function loadProject<T = unknown>(id: string): T | null {
  if (!isBrowser()) return null;
  const raw = window.localStorage.getItem(`projects:${id}`);
  return raw ? (JSON.parse(raw) as T) : null;
}

export function getProjectsIndex(): StoredIndexItem[] {
  if (!isBrowser()) return [];
  const raw = window.localStorage.getItem(LS_INDEX_KEY);
  return raw ? (JSON.parse(raw) as StoredIndexItem[]) : [];
}

export function getLastProjectId(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(LS_LAST_KEY);
}
// =========================================================================
// 🌟 Offline LocalStorage Name Favorites Store
// =========================================================================

import { NameRecord } from "@/data/namesData";

const NAMES_FAVORITES_KEY = "unitoolkit_saved_names";
export const NAMES_FAVORITES_CHANGE_EVENT = "unitoolkit_names_favorites_change";

export function getFavoriteNames(): NameRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(NAMES_FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error reading saved names from localStorage", err);
    return [];
  }
}

export function isNameFavorite(id: string): boolean {
  const list = getFavoriteNames();
  return list.some((item) => item.id === id);
}

export const isNameFavorited = isNameFavorite;

export function toggleFavoriteName(name: NameRecord): boolean {
  if (typeof window === "undefined") return false;
  const list = getFavoriteNames();
  const index = list.findIndex((item) => item.id === name.id);
  let isNowSaved = false;

  if (index >= 0) {
    list.splice(index, 1);
    isNowSaved = false;
  } else {
    list.unshift(name);
    isNowSaved = true;
  }

  try {
    localStorage.setItem(NAMES_FAVORITES_KEY, JSON.stringify(list));
    window.dispatchEvent(new Event(NAMES_FAVORITES_CHANGE_EVENT));
  } catch (err) {
    console.error("Error saving name to localStorage", err);
  }

  return isNowSaved;
}

export function removeFavoriteName(id: string): void {
  if (typeof window === "undefined") return;
  const list = getFavoriteNames().filter((item) => item.id !== id);
  try {
    localStorage.setItem(NAMES_FAVORITES_KEY, JSON.stringify(list));
    window.dispatchEvent(new Event(NAMES_FAVORITES_CHANGE_EVENT));
  } catch (err) {
    console.error("Error removing name from localStorage", err);
  }
}

export function clearAllFavoriteNames(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(NAMES_FAVORITES_KEY);
    window.dispatchEvent(new Event(NAMES_FAVORITES_CHANGE_EVENT));
  } catch (err) {
    console.error("Error clearing favorite names", err);
  }
}

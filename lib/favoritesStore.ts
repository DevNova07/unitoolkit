"use client";

import { Caption } from "@/lib/types";

const FAVORITES_KEY = "captionpro_favorites_v1";
export const FAVORITES_CHANGE_EVENT = "captionpro_favorites_updated";

export function getFavorites(): Caption[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error reading favorites from localStorage", e);
    return [];
  }
}

export function isFavorite(captionText: string): boolean {
  const list = getFavorites();
  return list.some((item) => item.text.trim().toLowerCase() === captionText.trim().toLowerCase());
}

export function toggleFavorite(caption: { text: string; category?: string; platform?: string }): boolean {
  if (typeof window === "undefined") return false;
  try {
    const list = getFavorites();
    const existingIndex = list.findIndex(
      (item) => item.text.trim().toLowerCase() === caption.text.trim().toLowerCase()
    );

    let isAdded = false;
    if (existingIndex >= 0) {
      list.splice(existingIndex, 1);
      isAdded = false;
    } else {
      const newCaption: Caption = {
        id: `fav-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        text: caption.text,
        category: (caption.category as Caption["category"]) || "attitude",
        platform: (caption.platform as Caption["platform"]) || "all",
        language: "en",
        style: "aesthetic",
        tone: "confident",
        length: "short",
        likes: 1,
      };
      list.unshift(newCaption);
      isAdded = true;
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGE_EVENT, { detail: { list } }));
    return isAdded;
  } catch (e) {
    console.error("Error toggling favorite", e);
    return false;
  }
}

export function saveMultipleCaptions(captions: string[]): number {
  if (typeof window === "undefined") return 0;
  try {
    const list = getFavorites();
    let addedCount = 0;

    captions.forEach((text) => {
      const trimmed = text.trim();
      if (trimmed && !list.some((item) => item.text.trim().toLowerCase() === trimmed.toLowerCase())) {
        list.unshift({
          id: `fav-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          text: trimmed,
          category: "attitude",
          platform: "all",
          language: "en",
          style: "aesthetic",
          tone: "confident",
          length: "short",
        });
        addedCount++;
      }
    });

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGE_EVENT, { detail: { list } }));
    return addedCount;
  } catch (e) {
    console.error("Error saving multiple captions", e);
    return 0;
  }
}

export function removeFavorite(id: string): void {
  if (typeof window === "undefined") return;
  try {
    const list = getFavorites().filter((item) => item.id !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGE_EVENT, { detail: { list } }));
  } catch (e) {
    console.error("Error removing favorite", e);
  }
}

export function clearAllFavorites(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(FAVORITES_KEY);
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGE_EVENT, { detail: { list: [] } }));
  } catch (e) {
    console.error("Error clearing favorites", e);
  }
}

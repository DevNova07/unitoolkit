"use client";

import { useEffect, useState } from "react";
import { Check, Bookmark, AlertCircle, Sparkles, Heart, Share2 } from "lucide-react";

export type ToastType = "success" | "favorite" | "error" | "sparkle" | "heart" | "share";

interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

export function showToast(message: string, type: ToastType = "success") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("captionpro_show_toast", {
        detail: { id: Date.now().toString(), message, type },
      })
    );
  }
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (e: CustomEvent<ToastMessage>) => {
      const newToast = e.detail;
      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 2400);
    };

    const listener: EventListener = (e) => handleToast(e as CustomEvent<ToastMessage>);
    window.addEventListener("captionpro_show_toast", listener);
    return () => window.removeEventListener("captionpro_show_toast", listener);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium shadow-xl backdrop-blur-md transition-all duration-300 transform translate-y-0 opacity-100 border bg-zinc-900/95 text-white border-zinc-700/60 dark:bg-zinc-100/95 dark:text-zinc-900 dark:border-zinc-300/60"
        >
          {toast.type === "success" && <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />}
          {toast.type === "sparkle" && <Sparkles className="w-4 h-4 text-amber-400 dark:text-amber-600 fill-current" />}
          {toast.type === "heart" && <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />}
          {toast.type === "share" && <Share2 className="w-4 h-4 text-sky-400 dark:text-sky-600" />}
          {toast.type === "favorite" && <Bookmark className="w-4 h-4 text-indigo-400 dark:text-indigo-600 fill-current" />}
          {toast.type === "error" && <AlertCircle className="w-4 h-4 text-rose-400 dark:text-rose-600" />}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

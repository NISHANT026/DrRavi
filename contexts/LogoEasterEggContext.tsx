'use client';

import { createContext, useCallback, useContext, useRef, useState } from 'react';

const CLICKS_REQUIRED = 5;
const OVERLAY_DURATION_MS = 5000;

type LogoEasterEggContextValue = {
  registerLogoClick: () => void;
  closeOverlay: () => void;
  showOverlay: boolean;
};

const LogoEasterEggContext = createContext<LogoEasterEggContextValue | null>(null);

export function LogoEasterEggProvider({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const countRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeOverlay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowOverlay(false);
  }, []);

  const registerLogoClick = useCallback(() => {
    countRef.current += 1;
    if (countRef.current >= CLICKS_REQUIRED) {
      countRef.current = 0;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setShowOverlay(true);
      timeoutRef.current = setTimeout(closeOverlay, OVERLAY_DURATION_MS);
    }
  }, [closeOverlay]);

  return (
    <LogoEasterEggContext.Provider value={{ registerLogoClick, closeOverlay, showOverlay }}>
      {children}
    </LogoEasterEggContext.Provider>
  );
}

export function useLogoEasterEgg() {
  const ctx = useContext(LogoEasterEggContext);
  if (!ctx) return null;
  return ctx;
}

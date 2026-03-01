'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type MobileMenuContextValue = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const setOpenStable = useCallback((open: boolean) => setOpen(open), []);
  return (
    <MobileMenuContext.Provider value={{ isOpen, setOpen: setOpenStable }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu(): MobileMenuContextValue {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) {
    return {
      isOpen: false,
      setOpen: () => {},
    };
  }
  return ctx;
}

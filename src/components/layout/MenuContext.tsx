"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { MotionConfig } from "motion/react";

type MenuState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MenuContext = createContext<MenuState | null>(null);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return (
    <MenuContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const value = useContext(MenuContext);
  if (!value) {
    throw new Error("useMenu must be used within MenuProvider");
  }
  return value;
}

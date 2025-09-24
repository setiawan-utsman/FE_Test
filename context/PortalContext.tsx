"use client";

import { createContext, useContext, useState } from "react";

type PortalContextType = {
  bgImage: string;
  setBgImage: (img: string) => void;
};

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error("usePortal must be used inside <PortalProvider>");
  }
  return context;
}

export function PortalProvider({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState("/assets/image/tree.jpg");

  return (
    <PortalContext.Provider value={{ bgImage, setBgImage }}>
      {children}
    </PortalContext.Provider>
  );
}
"use client";
import { createContext, useContext, useState } from "react";

type LaporanLalinContextType = {
  paramsFilter: any;
  setParamsFilter: (data: any) => void;
};

const LaporanLalinContext = createContext<LaporanLalinContextType | undefined>(
  undefined
);
export function useLaporanLalin() {
  const context = useContext(LaporanLalinContext);
  if (!context) {
    throw new Error(
      "useLaporanLalin must be used inside <LaporanLalinProvider>"
    );
  }
  return context;
}

export function LaporanLalinProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [paramsFilter, setParamsFilter] = useState<any>();
  return (
    <LaporanLalinContext.Provider value={{ paramsFilter, setParamsFilter }}>
      {children}
    </LaporanLalinContext.Provider>
  );
}

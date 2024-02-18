"use client";
import { DataType } from "@/types/type";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext<DataType[]>([]);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    fetch("/api/getList")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

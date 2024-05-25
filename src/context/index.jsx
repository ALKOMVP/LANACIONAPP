"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(1);

export function AppWrapper({ children }) {
  let [page, setPage] = useState(1);
  return (
    <AppContext.Provider value={{ page, setPage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

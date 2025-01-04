"use client";
import { createContext, useContext, useState } from "react";

// Create Context
const CsvDataContext = createContext();

// Provide Context to App
export const CsvDataProvider = ({ children }) => {
  const [csvData, setCsvData] = useState([]);
  return (
    <CsvDataContext.Provider value={{ csvData, setCsvData }}>
      {children}
    </CsvDataContext.Provider>
  );
};

// Use Context Hook
export const useCsvData = () => useContext(CsvDataContext);

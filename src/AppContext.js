// AppContext.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [unit, setUnit] = useState("celsius");
  const [units, setUnits] = useState("metric");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "celsius" ? "fahrenheit" : "celsius"));
    setUnits((prevUnits) => (prevUnits === "metric" ? "imperial" : "metric"));
  };

  return (
    <AppContext.Provider value={{ unit, units, toggleUnit }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

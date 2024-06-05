import { createContext, useContext } from "react";

// Crear el contexto
const DashboardContext = createContext();

// Hook personalizado para usar el contexto
const useDashboardContext = () => useContext(DashboardContext);

export { DashboardContext, useDashboardContext };

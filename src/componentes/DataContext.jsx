import React, { createContext, useContext, useState } from "react";
import data from "../../datos.json"; // Importa los datos desde el archivo JSON.

const DataContext = createContext(); // Crea el contexto global.

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }) => {
  const [globalData] = useState(data); // Almacena los datos importados en el estado global.

  return (
    <DataContext.Provider value={globalData}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider; // Exporta el componente DataContextProvider.

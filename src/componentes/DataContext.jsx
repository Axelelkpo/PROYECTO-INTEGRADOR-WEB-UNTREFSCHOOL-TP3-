import React, { createContext, useContext, useState } from "react";
import data from "../../datos.json";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }) => {
  const [globalData] = useState(data);
  return (
    <DataContext.Provider value={globalData}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;

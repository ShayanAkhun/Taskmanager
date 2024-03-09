"use client";

import React, { Children, createContext, useContext, useState } from "react";
import themes from "./themes";

export const GlobalContext = useContext();
export const GlobalUpdateContext = useContext();

export const GlobalProvider = ({ Children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>{Children}</GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
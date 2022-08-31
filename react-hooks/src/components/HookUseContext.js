import { createContext } from "react";

export const SomeContext = createContext();

export const MyContext = ({ children }) => {
  const contextValue = "Testing value";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};

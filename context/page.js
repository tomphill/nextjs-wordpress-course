import { createContext, useContext } from "react";

const PageContext = createContext();

export const PageWrapper = ({ value, children }) => {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  return useContext(PageContext);
};

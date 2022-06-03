import { useState, createContext, useEffect } from "react";

const ProductsContext = createContext({});

const ContextProvider = ({children}) => {
  const [show, setShow]  = useState(false);
  useEffect(() => {
    console.log(show, "show");
  }, [show]);
  const value = { show, setShow };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ContextProvider, ProductsContext };
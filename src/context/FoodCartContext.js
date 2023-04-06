import { createContext, useContext, useState } from "react";

const FoodCartContext = createContext(null);

function FoodProvider({ children }) {
  const [foodCartData, setFoodCartData] = useState(null);
  return (
    <FoodCartContext.Provider
      value={{
        foodCartData,
        setFoodCartData,
      }}
    >
      {children}
    </FoodCartContext.Provider>
  );
}

export { FoodCartContext, FoodProvider };

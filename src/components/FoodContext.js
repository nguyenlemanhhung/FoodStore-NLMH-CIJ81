import { createContext, useContext, useState } from "react";

const FoodContext = createContext(null);

function FoodProvider({ children }) {
  const [foodData, setFoodData] = useState(null);
  return (
    <FoodContext.Provider
      value={{
        foodData,
        setFoodData,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export { FoodContext, FoodProvider };

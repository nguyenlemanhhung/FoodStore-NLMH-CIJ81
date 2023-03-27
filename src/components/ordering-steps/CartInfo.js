import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { FoodContext } from "../FoodContext";

// function totalPrice(foodData) {
//   return foodData
//     .map((food) => food.quantity * food.price)
//     .reduce((sum, i) => sum + i, 0);
// }
// console.log("totalPrice", totalPrice(foodData));

export default function CartInfo() {
  const { foodData, setFoodData } = useContext(FoodContext);

  const reduceQuantity = (item) => {
    const existingItem = foodData.find((food) => food.id === item.id);

    if (existingItem.quantity === 1) {
      setFoodData(() => foodData.filter((food) => food.id !== item.id));
    } else {
      setFoodData(() =>
        foodData.map((food) =>
          food.id === item.id ? { ...food, quantity: food.quantity - 1 } : food
        )
      );
    }
  };

  const incQuantity = (item) => {
    console.log("item click:", item);
    setFoodData(() =>
      foodData.map((food) =>
        food.id === item.id ? { ...food, quantity: food.quantity + 1 } : food
      )
    );
  };
  return (
    <Box sx={{ width: "100%" }}>
      {foodData &&
        foodData.map((item) => (
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  textAlign: "start",
                }}
              >
                <img
                  style={{
                    width: "50px",
                    backgroundColor: "#00ffc855",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  src={item.image}
                />

                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={() => reduceQuantity(item)}
                  size="small"
                  sx={{
                    color: "#555",
                    "&:hover": {
                      backgroundColor: "#FFEBE4",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <span
                  style={{
                    border: "1px solid #faaf00",
                    padding: "10px",
                    fontWeight: "bold",
                    margin: "0 5px",
                    borderRadius: "5px",
                  }}
                >
                  {item.quantity}
                </span>
                <IconButton
                  onClick={() => incQuantity(item)}
                  size="small"
                  sx={{
                    color: "#555",
                    "&:hover": {
                      backgroundColor: "#FFEBE4",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    color: "#faaf00",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  $
                </span>
                {item.price * item.quantity}
              </Box>
            </Box>
          </Stack>
        ))}
    </Box>
  );
}

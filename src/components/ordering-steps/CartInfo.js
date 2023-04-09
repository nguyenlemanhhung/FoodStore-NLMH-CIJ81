import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { FoodCartContext } from "../../context/FoodCartContext";

// function totalPrice(foodData) {
//   return foodData
//     .map((food) => food.quantity * food.price)
//     .reduce((sum, i) => sum + i, 0);
// }
// console.log("totalPrice", totalPrice(foodData));

export default function CartInfo() {
  const { foodCartData, setFoodCartData } = useContext(FoodCartContext);
  // console.log("foodCartData", foodCartData);
  const reduceQuantity = (item) => {
    const existingItem = foodCartData.find((food) => food.id === item.id);

    if (existingItem.quantity === 1) {
      setFoodCartData(() => foodCartData.filter((food) => food.id !== item.id));
    } else {
      setFoodCartData(() =>
        foodCartData.map((food) =>
          food.id === item.id ? { ...food, quantity: food.quantity - 1 } : food
        )
      );
    }
  };

  const incQuantity = (item) => {
    // console.log("item click:", item);
    setFoodCartData(() =>
      foodCartData.map((food) =>
        food.id === item.id ? { ...food, quantity: food.quantity + 1 } : food
      )
    );
  };
  return (
    <Box className="list-container">
      <Box className="list-order" sx={{ width: "100%", overflow: "auto" }}>
        {foodCartData &&
          foodCartData.map((item, idx) => (
            <Stack spacing={2} sx={{ mb: 2 }} key={idx}>
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
              <Typography
                sx={{
                  fontSize: "12px",
                  marginTop: "5px !important",
                }}
              >
                {item.note ? `- Note: ${item.note}` : null}
              </Typography>
            </Stack>
          ))}
      </Box>

      <Box
        className="bill"
        sx={{
          height: "25px",
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        <h3
          style={{
            backgroundColor: "#e0edee",
            margin: "0",
            padding: "10px",
            color: "#FAAF00",
          }}
        >
          <span style={{ marginRight: "50px", color: "#000" }}>Total:</span>
          <span
            style={{
              color: "#7a7a7a",
              fontSize: "16px",
              marginRight: "5px",
            }}
          >
            $
          </span>
          {foodCartData
            .map((food) => food.quantity * food.price)
            .reduce((sum, i) => sum + i, 0)}
        </h3>
      </Box>
    </Box>
  );
}

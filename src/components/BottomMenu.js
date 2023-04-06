import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { FoodCartContext } from "./FoodCartContext";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HomeIcon from "@mui/icons-material/Home";

export default function BottomMenu() {
  const [value, setValue] = useState(0);
  const { foodCartData } = useContext(FoodCartContext);
  const totalQuantityInCart = (foodData) => {
    if (foodCartData) {
      return foodCartData
        .map((food) => food.quantity)
        .reduce((sum, i) => sum + i, 0);
    }
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        borderRadius: "10px",
      }}
      elevation={3}
    >
      <Box
        sx={{
          width: "500px ",
          minWidth: "350px",
          borderRadius: "10px",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <Fab
            sx={{
              position: "absolute",
              top: "-30px",
              zIndex: "1000",
              backgroundColor: "#faaf00",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            <Badge
              badgeContent={
                foodCartData ? `${totalQuantityInCart(foodCartData)}` : 0
              }
              color="error"
            >
              <ShoppingBasketIcon />
            </Badge>
          </Fab>
          <BottomNavigationAction
            label="Wallet"
            icon={<AccountBalanceWalletIcon />}
          />
          <BottomNavigationAction
            label="Setting"
            icon={<ManageAccountsIcon />}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
}

import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { FoodCartContext } from "../context/FoodCartContext";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HomeIcon from "@mui/icons-material/Home";

export default function BottomMenu({ handleDrawer }) {
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
    <>
      <Fab
        onClick={handleDrawer}
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "1000",
          backgroundColor: "#faaf00",
          color: "#fff",
          border: "4px solid #ceecff",
          borderRadius: "10px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#faaf00",
          },
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
      <Box
        sx={{
          width: "100% ",
          maxWidth: "500px",
          borderRadius: "10px",
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          overflow: "hidden",
        }}
      >
        <BottomNavigation
          // showLabels={true}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          {/* <Fab
            sx={{
              position: "absolute",
              top: "-30px",
              zIndex: "1000",
              backgroundColor: "#faaf00",
              color: "#fff",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#faaf00",
              },
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
          </Fab> */}
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
    </>
    // <Paper
    //   sx={{
    //     position: "fixed",
    //     bottom: 0,
    //     left: "50%",
    //     transform: "translateX(-50%)",
    //     zIndex: 1000,
    //     borderRadius: "10px",
    //   }}
    //   elevation={3}
    // >
    //   <Box
    //     sx={{
    //       width: "500px ",
    //       minWidth: "350px",
    //       borderRadius: "10px",
    //     }}
    //   >
    //     <BottomNavigation
    //       // showLabels={true}
    //       value={value}
    //       onChange={(event, newValue) => {
    //         setValue(newValue);
    //       }}
    //     >
    //       <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    //       <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    //       <Fab
    //         sx={{
    //           position: "absolute",
    //           top: "-30px",
    //           zIndex: "1000",
    //           backgroundColor: "#faaf00",
    //           color: "#fff",
    //           borderRadius: "10px",
    //           "&:hover": {
    //             backgroundColor: "#fff",
    //             color: "#faaf00",
    //           },
    //         }}
    //       >
    //         <Badge
    //           badgeContent={
    //             foodCartData ? `${totalQuantityInCart(foodCartData)}` : 0
    //           }
    //           color="error"
    //         >
    //           <ShoppingBasketIcon />
    //         </Badge>
    //       </Fab>
    //       <BottomNavigationAction
    //         label="Wallet"
    //         icon={<AccountBalanceWalletIcon />}
    //       />
    //       <BottomNavigationAction
    //         label="Setting"
    //         icon={<ManageAccountsIcon />}
    //       />
    //     </BottomNavigation>
    //   </Box>
    // </Paper>
  );
}

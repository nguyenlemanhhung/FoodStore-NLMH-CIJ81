import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Category from "./Category";
import { FoodCartContext } from "./FoodCartContext";
import Stack from "@mui/material/Stack";
import FoodCard from "./FoodCard";

function Foods() {
  const [foods, setFoods] = useState();

  const getData = () => {
    fetch("https://641ab895c152063412df56eb.mockapi.io/api/v1/food")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setFoods(data);
        setFoodFilter(data);
      });
  };
  useEffect(() => {
    getData();
    setFoodFilter();
  }, []);

  const [foodFilter, setFoodFilter] = useState();

  const [categoriesOfFood, setCategoriesOfFood] = useState([
    {
      id: 1,
      isActive: true,
      type: "all",
      name: "All",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
    },
    {
      id: 2,
      isActive: false,
      type: "burger",
      name: "Burger",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
    },
    {
      id: 3,
      isActive: false,
      type: "pizza",
      name: "Pizza",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizzaslice.png?alt=media&token=c91c0c7e-ffa9-41be-ba84-c3b45c79d483",
    },
    {
      id: 4,
      isActive: false,
      type: "hotdog",
      name: "Hotdog",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
    },
    {
      id: 5,
      isActive: false,
      type: "taco",
      name: "Taco",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
    },
    {
      id: 6,
      isActive: false,
      type: "snack",
      name: "Snack",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
    },
    {
      id: 7,
      isActive: false,
      type: "drink",
      name: "Drink",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
    },
  ]);

  const handleFilterFoodByCategory = (item) => {
    setCategoriesOfFood(() =>
      categoriesOfFood.map((category) => {
        let isActive = false;
        if (item.id === category.id) {
          isActive = true;
          console.log("is completed:", isActive);
        }
        return { ...category, isActive };
      })
    );

    const listFoodFilter = foods.filter((e) => e.type === item.type);
    setFoodFilter(listFoodFilter);
  };

  const { foodCartData, setFoodCartData } = useContext(FoodCartContext);

  const [foodCart, setFoodCart] = useState([]);

  const handleAddCart = (item) => {
    const checkExistingItem = foodCart.find((e) => e.id === item.id);
    console.log("check item in cart:", checkExistingItem);
    if (checkExistingItem) {
      setFoodCart(() =>
        foodCart.map((food) =>
          food.id === item.id ? { ...food, quantity: food.quantity + 1 } : food
        )
      );
    } else {
      const data = {
        id: item.id,
        name: item.name,
        type: item.type,
        price: item.price,
        image: item.image,
        quantity: 1,
      };
      setFoodCart(() => [...foodCart, data]);
    }
  };
  useEffect(() => {
    if (foodCart.length > 0) {
      setFoodCartData(foodCart);
    }
  }, [foodCart]);

  return (
    <Box>
      <Box
        sx={{
          position: "sticky",
          top: "70px",
          zIndex: 100,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#52616B",
            fontWeight: "700",
          }}
        >
          Menu Category
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{ overflowX: "auto", padding: "20px 10px" }}
        >
          {categoriesOfFood.map((item, index) => (
            <Category
              key={index}
              item={item}
              handleFilterFoodByCategory={handleFilterFoodByCategory}
            />
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <Grid container columnSpacing={{ xs: 3, md: 4, lg: 5 }}>
          {foodFilter &&
            foodFilter.map((item, idx) => (
              <FoodCard
                key={idx}
                handleAddCart={handleAddCart}
                item={item}
                idx={idx}
              />
            ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Foods;
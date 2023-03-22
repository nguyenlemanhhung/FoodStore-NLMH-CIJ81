import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import FoodData from "./FoodData";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const categories = [
  {
    id: 1,
    itemId: "buger01",
    name: "Burger",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2",
  },
  {
    id: 2,
    itemId: "pizza01",
    name: "Pizza",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizzaslice.png?alt=media&token=c91c0c7e-ffa9-41be-ba84-c3b45c79d483",
  },
  {
    id: 3,
    itemId: "hotdog01",
    name: "Hotdog",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fhdog1.png?alt=media&token=658e67d8-9284-4ba4-93ad-778dad99ce9c",
  },
  {
    id: 4,
    itemId: "taco01",
    name: "Taco",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Ftaco1.png?alt=media&token=b78c8e68-c1a6-4e43-8c43-6ef9f23aa59f",
  },
  {
    id: 5,
    itemId: "snack01",
    name: "Snack",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fsnack1.png?alt=media&token=d670617e-4bfc-4693-aa8c-211db9f9d706",
  },
  {
    id: 6,
    itemId: "drink01",
    name: "Drink",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7",
  },
];

function Categories() {
  const [rating, setRating] = React.useState(4);
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: "#52616B",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Menu Category
        </Typography>
        <Stack direction="row" spacing={4}>
          {categories.map((item) => (
            <Button
              sx={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                display: "inline-block",
                color: "#52616B",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                "&:hover": {
                  backgroundColor: "#FFEBE4",
                  color: "#FC6011",
                },
              }}
            >
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                }}
                src={item.imgSrc}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                {item.name}
              </Typography>
            </Button>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 3, md: 4, lg: 5 }}
          // spacing={{ xs: 2, md: 3, lg: 6 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {FoodData.map((item, id) => (
            <Grid key={id} xs={6} md={4} lg={3} item sx={{ marginTop: "80px" }}>
              <Card
                sx={{
                  borderRadius: "10px",
                  padding: "30px 10px 10px",
                  position: "relative",
                  overflow: "unset",
                  backgroundColor: "#fff",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                }}
              >
                <Checkbox
                  size="small"
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "#faaf00" }} />}
                  sx={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                />
                <IconButton
                  aria-label="add to shopping cart"
                  size="small"
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "#faaf00",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    "&:hover": {
                      backgroundColor: "#faaf00",
                      color: "#fff",
                    },
                  }}
                >
                  <AddShoppingCartIcon fontSize="small" />
                </IconButton>
                <img
                  src={item.imgSrc}
                  style={{
                    width: "auto",
                    height: "70px",
                    position: "absolute",
                    left: "50%",
                    top: "-50px",
                    transform: "translateX(-50%)",
                    zIndex: "10",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#000",
                    fontWeight: "700",
                  }}
                >
                  {item.name}
                </Typography>
                <Rating
                  size="small"
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  sx={{
                    marginY: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#000",
                    fontWeight: "700",
                  }}
                >
                  <span
                    style={{
                      color: "#faaf00",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginRight: "2px",
                    }}
                  >
                    $
                  </span>

                  {item.price}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Categories;

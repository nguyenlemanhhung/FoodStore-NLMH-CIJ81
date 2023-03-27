import React from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Ratings from "./Ratings";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Tooltip from "@mui/material/Tooltip";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FoodContainer = styled(motion.div)({
  borderRadius: "10px",
  padding: "10px 20px",
  position: "relative",
  overflow: "unset",
  backgroundColor: "#f2f0f4",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  justifyContent: "end",
  "&:hover": {
    backgroundColor: "#fff",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
});

function FoodCard(props) {
  const { handleAddCart, item, idx } = props;
  return (
    <Grid
      item
      key={idx}
      xs={12}
      sm={6}
      md={6}
      lg={4}
      sx={{ marginTop: "80px" }}
    >
      <FoodContainer whileHover={{ y: -5 }}>
        <Tooltip title="Add to favorites" placement="bottom" arrow>
          <Checkbox
            // size="small"
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "#faaf00" }} />}
            sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
            }}
          />
        </Tooltip>
        <Tooltip
          title="Add Cart"
          placement="top"
          arrow
          sx={{ backgroundColor: "red" }}
        >
          <IconButton
            onClick={() => handleAddCart(item)}
            aria-label="add to shopping cart"
            // size="small"
            sx={{
              marginBottom: "20px",
              // position: "absolute",
              // top: "10px",
              // right: "10px",
              color: "#faaf00",
              backgroundColor: "#FFF",
              borderRadius: "50%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              "&:hover": {
                backgroundColor: "#faaf00",
                color: "#fff",
              },
            }}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Tooltip>
        <img
          src={item.image}
          style={{
            maxWidth: "150px",
            height: "100px",
            position: "absolute",
            left: "30px",
            top: "-40px",
            // left: "50%",
            // top: "-50px",
            // transform: "translateX(-50%)",
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
        <Ratings />
        <Typography
          sx={{
            fontSize: "16px",
            color: "#000",
            fontWeight: "700",
          }}
        >
          <span
            style={{
              color: "#faaf00",
              fontSize: "14px",
              fontWeight: "bold",
              marginRight: "2px",
            }}
          >
            $
          </span>

          {item.price}
        </Typography>
      </FoodContainer>
    </Grid>
  );
}

export default FoodCard;

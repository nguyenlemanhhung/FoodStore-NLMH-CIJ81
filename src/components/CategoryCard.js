import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CategoryContainer = styled(motion.button)({
  padding: "5px",
  border: "none",
  borderRadius: "30px",
  backgroundColor: "#FFEBE4",
  color: "#FC6011",
  display: "inline-block",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  "&:hover": {
    backgroundColor: "#FC6011",
    color: "#fff",
  },
});

function CategoryCard(props) {
  const { handleFilterFoodByCategory, item } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: item.isActive === true ? "#FC6011" : "#FFEBE4",
        borderRadius: "30px",
        padding: "5px 10px 5px 5px",
        color: item.isActive === true ? "#fff" : "#FC6011",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "&:hover": {
          backgroundColor: "#FC6011",
          color: "#fff",
        },
      }}
      onClick={() => handleFilterFoodByCategory(item)}
    >
      <img
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          padding: "5px",
        }}
        src={item.imgSrc}
      />
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "700",
          padding: "10px 0",
          marginLeft: "5px",
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
}

export default CategoryCard;

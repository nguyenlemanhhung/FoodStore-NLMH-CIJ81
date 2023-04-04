import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

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

function Category(props) {
  const { handleFilterFoodByCategory, item, key } = props;

  return (
    <CategoryContainer
      sx={
        item.isActive === true
          ? { backgroundColor: "#FC6011", color: "#fff" }
          : {}
      }
      whileHover={{ scale: 1.1 }}
      onClick={() => handleFilterFoodByCategory(item)}
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
          fontSize: "12px",
          fontWeight: "700",
          padding: "10px 0",
        }}
      >
        {item.name}
      </Typography>
    </CategoryContainer>
  );
}

export default Category;

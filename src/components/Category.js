import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

const CategoryContainer = styled(motion.button)({
  padding: "10px",
  border: "none",
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
});

function Category(props) {
  const { handleFilterFoodByCategory, item, key } = props;

  return (
    <CategoryContainer
      sx={
        item.isActive === true
          ? { backgroundColor: "#FFEBE4", color: "#FC6011" }
          : {}
      }
      whileHover={{ scale: 1.2 }}
      onClick={() => handleFilterFoodByCategory(item)}
    >
      <img
        style={{
          width: "50px",
          height: "50px",
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
    </CategoryContainer>
  );
}

export default Category;

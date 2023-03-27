import React from "react";
import Rating from "@mui/material/Rating";

function Ratings() {
  const [rating, setRating] = React.useState(4);
  return (
    <Rating
      size="small"
      name="simple-controlled"
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
      sx={{
        marginY: "5px",
      }}
    />
  );
}

export default Ratings;

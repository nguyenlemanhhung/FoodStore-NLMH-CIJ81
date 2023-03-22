import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function CartInfo() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <img
              style={{
                width: "50px",
                backgroundColor: "#00ffc855",
                padding: "10px",
                borderRadius: "10px",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0"
            />

            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              Burger Bistro
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
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
                border: "2px solid #faaf00",
                padding: "10px",
                fontWeight: "bold",
                margin: "0 5px",
                borderRadius: "5px",
              }}
            >
              1
            </span>
            <IconButton
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
            }}
          >
            <span
              style={{
                color: "#faaf00",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              $
            </span>
            20
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

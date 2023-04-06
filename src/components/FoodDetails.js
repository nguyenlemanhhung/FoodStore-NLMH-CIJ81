import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FoodDetails({
  handleCloseDialog,
  open,
  details,
  foodCartData,
  handleAddCart,
}) {
  const [note, setNote] = useState(null);

  const [quantity, setQuantity] = useState(1);
  console.log(foodCartData);
  if (!details) {
    return null;
  }
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <IconButton
          onClick={handleCloseDialog}
          aria-label="close"
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", margin: 0, padding: "20px" }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              background: "linear-gradient(110deg, #fff 55%, #FAAF00  45%)",
            }}
          >
            <img style={{ width: "100%" }} src={details.image} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                color: "#fc6f11",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {details.name}
            </Typography>
            <TextField
              fullWidth
              label="Note"
              multiline
              rows={3}
              onChange={(e) => setNote(e.target.value)}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  Quantity
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid  #c2c2c2",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <IconButton
                    onClick={() =>
                      setQuantity(quantity === 1 ? 1 : quantity - 1)
                    }
                    size="small"
                    sx={{
                      color: "#555",
                      borderRadius: 0,
                      backgroundColor: "#c2c2c2",
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <span
                    style={{
                      padding: "0 10px",
                      fontWeight: "bold",
                    }}
                  >
                    {quantity}
                  </span>
                  <IconButton
                    onClick={() => setQuantity(quantity + 1)}
                    size="small"
                    sx={{
                      color: "#555",
                      borderRadius: 0,
                      backgroundColor: "#faaf00",
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                {details.price * quantity}$
              </Typography>
            </Box>
            <Button
              onClick={() => handleAddCart(details, quantity, note)}
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "#fc6f11",
                color: "#fc6f11",
                backgroundColor: "#FFEBE4",
                "&:hover": {
                  backgroundColor: "#fc6f11",
                  borderColor: "#fc6f11",
                  color: "#fff",
                },
              }}
              startIcon={<ShoppingBasketIcon />}
            >
              Add cart
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

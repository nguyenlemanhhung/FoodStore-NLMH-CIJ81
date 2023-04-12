import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { FoodCartContext } from "../../context/FoodCartContext";
import { styled } from "@mui/material/styles";

const InfoItem = styled(Typography)({
  padding: "5px 0",
});
const InfoTitle = styled("span")({
  fontSize: "14px",
  fontWeight: "bold",
  marginRight: "10px",
});

export default function ReviewOrder({ customerInfo }) {
  const { foodCartData } = useContext(FoodCartContext);
  console.log("foodCartData", foodCartData);
  console.log("customer info: ", customerInfo);
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Box
        className="review-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box sx={{ width: "100%", overflow: "auto" }}>
          {foodCartData &&
            foodCartData.map((item, idx) => {
              return (
                <Stack spacing={2} sx={{ mb: 2 }} key={idx}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "start",
                      }}
                    >
                      <img
                        style={{
                          width: "50px",
                          backgroundColor: "#00ffc855",
                          padding: "10px",
                          borderRadius: "10px",
                        }}
                        src={item.image}
                      />

                      <Typography
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          border: "1px solid #faaf00",
                          padding: "10px",
                          fontWeight: "bold",
                          margin: "0 5px",
                          borderRadius: "5px",
                        }}
                      >
                        {item.quantity}
                      </span>
                    </Box>
                    <Box
                      sx={{
                        fontWeight: "bold",
                        color: "#000",
                        fontSize: "16px",
                      }}
                    >
                      <span
                        style={{
                          color: "#faaf00",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        $
                      </span>
                      {item.price * item.quantity}
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      marginTop: "5px !important",
                    }}
                  >
                    {item.note ? `- Note: ${item.note}` : null}
                  </Typography>
                </Stack>
              );
            })}
          <Box
            sx={{
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Customer Info
            </Typography>
            <Stack>
              <InfoItem>
                <InfoTitle>Name:</InfoTitle>
                {customerInfo.name}
              </InfoItem>
              <InfoItem>
                <InfoTitle>Phone:</InfoTitle>
                {customerInfo.phone}
              </InfoItem>
              <InfoItem>
                <InfoTitle>Address:</InfoTitle>
                {customerInfo.address}
              </InfoItem>
            </Stack>
          </Box>
        </Box>

        <Box
          className="bill"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          <h3
            style={{
              border: "1px solid #054f7a",
              borderRadius: "10px",
              margin: "0",
              padding: "10px",
              color: "#FAAF00",
            }}
          >
            <span style={{ marginRight: "50px", color: "#000" }}>Total:</span>
            <span
              style={{
                color: "#7a7a7a",
                fontSize: "16px",
                marginRight: "5px",
              }}
            >
              $
            </span>
            {foodCartData
              .map((food) => food.quantity * food.price)
              .reduce((sum, i) => sum + i, 0)}
          </h3>
        </Box>
      </Box>
    </Box>
  );
}

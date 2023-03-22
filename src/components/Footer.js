import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import NearMeIcon from "@mui/icons-material/NearMe";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
}));

export default function Footer() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#666",
        padding: "30px 0",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={5} lg={4} sx={{ textAlign: "center" }}>
            <img
              style={{
                width: "100px",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
            />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <NearMeIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>

          <Grid container xs={12} md={7} lg={8} spacing={4}>
            <Grid xs={6} lg={3}>
              <Item>
                <Typography variant="h6">About Us</Typography>

                <Box sx={{ pl: 2 }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                    inventore consectetur
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Typography variant="h6">Quick link</Typography>
                <Box sx={{ pl: 2, display: "flex", flexDirection: "column" }}>
                  <Link href="#" underline="none">
                    {"Link 1"}
                  </Link>
                  <Link href="#" underline="none">
                    {"Link 2"}
                  </Link>
                  <Link href="#" underline="none">
                    {"Link 3"}
                  </Link>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Typography variant="h6">About Us</Typography>
                <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                  <li>Link 3.1</li>
                  <li>Link 3.2</li>
                  <li>Link 3.3</li>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6} lg={3}>
              <Item>
                <Box
                  id="category-d"
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}
                >
                  Category D
                </Box>
                <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                  <li>Link 4.1</li>
                  <li>Link 4.2</li>
                  <li>Link 4.3</li>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ margin: "20px 0" }} />
      <Box>
        <Stack direction="row" spacing={2}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}

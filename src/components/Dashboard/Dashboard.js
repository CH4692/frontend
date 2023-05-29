import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Chart from "./Chart/Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import AddIcon from "@mui/icons-material/Add";
import {
  getAllFavoriteStores,
  getFavoriteStore,
  getAllTopGainerStores,
  getTopGainerStore,
  getAllTopProducts,
  getTopProduct,
  getAllTopSeasons,
  getAllProducts,
} from "../../data";
import CustomToolTipContentProducts from "./CustomToolTipContentProducts";
import CustomToolTipContentStores from "./CustomToolTipContentStores";
import CustomToolTipContentGainers from "./CustomToolTipContentGainers";
import CustomToolTipContentSeason from "./CustomToolTipContentSeason";
import { IconButton, SvgIcon } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            <IconButton
              sx={{
                fontSize: "48px",
                boxShadow: "0px 1px 15px 0px rgba(0,0,0,0.5)",
              }}
            >
              <AddIcon sx={{ color: "white", fontSize: "28px" }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits title={"Total Income"} text={"300091213.23€"} />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits
                    title={"Top Product"}
                    text={getTopProduct.name}
                    info={getTopProduct.category}
                    info2={getTopProduct.size}
                    info3={`ordered ${getTopProduct.amountOfOrder} times`}
                  />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits
                    title={"Favorite Store"}
                    text={`${getFavoriteStore.city}, ${getFavoriteStore.state}`}
                    info={`${getFavoriteStore.amountOfOrder} orders`}
                  />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposits
                    title={"Top Gainer Store"}
                    text={`${getTopGainerStore.city}, ${getTopGainerStore.state}`}
                    info3={`Sales of ${getTopGainerStore.totalIncome} €`}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 400,
                  }}
                >
                  <Chart
                    title={"Products/Orders "}
                    data={getAllTopProducts}
                    dataKey={"name"}
                    dataKeyBar={"amountOfOrder"}
                    tooltip={<CustomToolTipContentProducts />}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 400,
                  }}
                >
                  <Chart
                    title={"Store/Orders "}
                    data={getAllFavoriteStores}
                    dataKey={"city"}
                    dataKeyBar={"amountOfOrder"}
                    tooltip={<CustomToolTipContentStores />}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 400,
                  }}
                >
                  <Chart
                    title={"Store/Sales "}
                    data={getAllTopGainerStores}
                    dataKey={"city"}
                    dataKeyBar={"totalIncome"}
                    tooltip={<CustomToolTipContentGainers />}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 400,
                  }}
                >
                  <Chart
                    title={"Month/Sales "}
                    data={getAllTopSeasons}
                    dataKey={"year"}
                    dataKeyBar={"total"}
                    tooltip={<CustomToolTipContentSeason />}
                  />
                </Paper>
              </Grid>

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders rows={getAllProducts} title={"All Products"} />
                </Paper>
              </Grid>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

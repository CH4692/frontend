import React, { useState, useEffect } from "react";
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
import axios from "axios";
import ReactLoading from "react-loading";
import CustomToolTipContentProducts from "./CustomToolTipContentProducts";
import CustomToolTipContentStores from "./CustomToolTipContentStores";
import CustomToolTipContentGainers from "./CustomToolTipContentGainers";
import CustomToolTipContentSeason from "./CustomToolTipContentSeason";
import { IconButton } from "@mui/material";
import Modal from "../UI/Modal";
import NewProduct from "./NewProduct";
import AnalysisMap from "./AnalysisMap";

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

/**
 * This contains the Bar contents of the Admin Page
 */
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

const defaultTheme = createTheme();

/**
 * This contains the Admin Dashboards and all components it provides
 * @returns
 */
const Dashboard = () => {
  const [allFavoriteStores, setAllFavoriteStores] = useState();
  const [favoriteStore, setFavoriteStore] = useState();
  const [allTopGainer, setAllTopGainer] = useState();
  const [topGainer, setTopGainer] = useState();
  const [allTopProducts, setAllTopProducts] = useState();
  const [topProduct, setTopProduct] = useState();
  const [allTopSeasons, setAllTopSeasons] = useState();
  const [allProducts, setAllProducts] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [stores, setStores] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const link = {
    topStore: "http://localhost:8080/api/v1/analysis/top-store",
    topStores: "http://localhost:8080/api/v1/analysis/all/top-stores",
    topGainer: "http://localhost:8080/api/v1/analysis/top-gainer",
    topGainers: "http://localhost:8080/api/v1/analysis/all/top-gainers",
    topProduct: "http://localhost:8080/api/v1/analysis/top-product",
    topProducts: "http://localhost:8080/api/v1/analysis/all/top-products",
    all: "http://localhost:8080/api/v1/products/all",
    topSeasons: "http://localhost:8080/api/v1/analysis/all/top-seasons",
    totalIncome: "http://localhost:8080/api/v1/analysis/all/total-income",
    allStores: "http://localhost:8080/api/v1/stores/all",
  };

  useEffect(() => {
    async function fetchData() {
      const favStore = axios.get(
        "http://localhost:8080/api/v1/analysis/top-store"
      );
      const allFavStores = axios.get(
        "http://localhost:8080/api/v1/analysis/all/top-stores"
      );
      const topGainer = axios.get(
        "http://localhost:8080/api/v1/analysis/top-gainer"
      );
      const allTopGainer = axios.get(
        "http://localhost:8080/api/v1/analysis/all/top-gainers"
      );
      const topProduct = axios.get(
        "http://localhost:8080/api/v1/analysis/top-product"
      );
      const allTopProducts = axios.get(
        "http://localhost:8080/api/v1/analysis/all/top-products"
      );
      const allProducts = axios.get(
        "http://localhost:8080/api/v1/products/all"
      );
      const allTopSeasons = axios.get(
        "http://localhost:8080/api/v1/analysis/all/top-seasons"
      );
      const totalIncome = axios.get(
        "http://localhost:8080/api/v1/analysis/all/total-income"
      );
      const getAllStores = axios.get("http://localhost:8080/api/v1/stores/all");
      // waiting for allthethings in parallel
      const result = (
        await Promise.all([
          favStore,
          allFavStores,
          topGainer,
          allTopGainer,
          topProduct,
          allTopProducts,
          allProducts,
          allTopSeasons,
          totalIncome,
          getAllStores,
        ])
      ).map((r) => {
        switch (r.config.url) {
          case link.topStores:
            setAllFavoriteStores(r.data);
            break;
          case link.topStore:
            setFavoriteStore(r.data);

            break;
          case link.topGainer:
            setTopGainer(r.data);

            break;
          case link.topGainers:
            setAllTopGainer(r.data);

            break;
          case link.topProduct:
            setTopProduct(r.data);

            break;
          case link.topProducts:
            setAllTopProducts(r.data);

            break;
          case link.all:
            setAllProducts(r.data);

            break;
          case link.topSeasons:
            setAllTopSeasons(r.data);

            break;
          case link.totalIncome:
            setTotalIncome(r.data);
            break;
          case link.allStores:
            setStores(r.data);
            break;
          default:
        }
        return;
      });
    }
    fetchData();
  }, []);

  if (
    (allFavoriteStores ||
      favoriteStore ||
      allTopGainer ||
      topGainer ||
      allTopProducts ||
      topProduct ||
      allProducts ||
      allTopSeasons ||
      totalIncome) === undefined
  ) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1 style={{ display: "block" }}>Your Data is loading...</h1>
        <ReactLoading
          type={"bars"}
          color={"#2196f3"}
          height={100}
          width={100}
        />
      </div>
    );
  }

  const showOpenHandler = () => {
    setIsOpen(true);
  };

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/products/${id}`);
  };

  const hideOpenHandler = () => {
    setIsOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {isOpen && (
        <Modal onClose={hideOpenHandler}>
          <NewProduct />
        </Modal>
      )}
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
              onClick={showOpenHandler}
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
                  <Deposits title={"Total Income"} text={`${totalIncome} €`} />
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
                    text={topProduct.name}
                    info={topProduct.category}
                    info2={topProduct.size}
                    info3={`ordered ${topProduct.amountOfOrder} times`}
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
                    text={`${favoriteStore.city}, ${favoriteStore.state}`}
                    info={`${favoriteStore.amountOfOrder} orders`}
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
                    text={`${topGainer.city}, ${topGainer.state}`}
                    info3={`Sales of ${topGainer.totalIncome.toFixed(2)} €`}
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
                    data={allTopProducts}
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
                    data={allFavoriteStores}
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
                    data={allTopGainer}
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
                    data={allTopSeasons}
                    dataKey={"year"}
                    dataKeyBar={"total"}
                    tooltip={<CustomToolTipContentSeason />}
                  />
                </Paper>
              </Grid>

              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders
                    rows={allProducts}
                    title={"All Products"}
                    deleteHandler={deleteHandler}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ display: "flex", flexDirection: "column" }}>
                  <AnalysisMap stores={stores} />
                </Paper>
              </Grid>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;

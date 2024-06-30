import { Box, Grid, Stack, Typography } from "@mui/material"
import SideNav from "../components/sideNav/SideNav"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Dash.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { CreditCard, ShoppingBag } from "@mui/icons-material";
import AccordianDashboard from "../components/Accordian/AccordianDashboard";
import BarChart from "../components/charts/BarChart";
import CountUp from "react-countup";


const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                    <CardContent>
                      <div className="card-icon">
                        <CreditCard />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                        $<CountUp end={500} delay={0.4} duration={1} />
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#ccd1d1" }}>
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient-light">
                    <CardContent>
                      <div className="card-icon">
                        <ShoppingBag />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                        $<CountUp end={900} delay={0.4} duration={1} />
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#ccd1d1" }}>
                        Total Order
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={1}>
                  <Card sx={{ minWidth: 345, height: 70 }} >
                    <CardContent className="colorful">
                      <Stack spacing={1} direction="row">
                        <div className="small-card-contents ">
                          <div className="card-icon">
                            <StorefrontIcon />
                          </div>
                          <div className="padding-all">
                            <span className="price-title">$<CountUp end={20} delay={0.4} duration={1} />k</span>
                            <br />
                            <span className="price-sub-title">This month Income</span>
                          </div>
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 345, height: 70 }} >
                    <CardContent>
                      <Stack spacing={1} direction="row">
                        <div className="small-card-contents">
                          <div className="card-icon" style={{ color: 'black' }}>
                            <StorefrontIcon />
                          </div>
                          <div className="padding-all">
                            <span className="price-title">$<CountUp end={203} delay={0.4} duration={1} />k</span>
                            <br />
                            <span className="price-sub-title">Total Income</span>
                          </div>
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} >
                <Card sx={{ height: 60 + "vh" }} >
                    <CardContent >
                      <h2>Popular Products</h2>
                      <div className="padding-all">
                        <span className="price-title">Popular Products</span>
                      </div>
                      <AccordianDashboard />
                    </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Home
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import SideNav from '../components/sideNav/SideNav'
import { CreditCard, ShoppingBag } from '@mui/icons-material'
import GeoChart from '../components/charts/GeoChart'
import PieChart from '../components/charts/PieChart'
import HbarChart from '../components/charts/HbarChart'
import CountUp from 'react-countup'

const Analytics = () => {
    return (
        <>
            <div style={{ background: "linear-gradient(150deg,#ecf1f1 0%,rgb(233,237,254) 100%)", height: "100vh" }}>
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Stack spacing={2} direction="row">
                                        <Card sx={{ minWidth: 49 + "%", height: 130 }} className="gradient">
                                            <CardContent>
                                                <div className="card-icon">
                                                    <CreditCard />
                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                                    $<CountUp end={500} delay={0.4} duration={1} />
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: "#ccd1d1" }}>
                                                    This Month Earning
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ minWidth: 49 + "%", height: 130 }} className="gradient-light">
                                            <CardContent>
                                                <div className="card-icon">
                                                    <ShoppingBag />
                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                                    $<CountUp end={900} delay={0.4} duration={1} />
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: "#ccd1d1" }}>
                                                    This Month Order
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                    <Stack spacing={2} direction="row">
                                        <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradient">
                                            <CardContent>
                                                <div className="card-icon">
                                                    <CreditCard />
                                                </div>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                                    $<CountUp end={700} delay={0.4} duration={1} />
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
                                                    $<CountUp end={1200} delay={0.4} duration={1} />
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: "#ccd1d1" }}>
                                                    Total Order
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }} >
                                    <CardContent>
                                        <HbarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Box height={20} />
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }} >
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 40 + "vh" }} >
                                    <CardContent>
                                        <PieChart />
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

export default Analytics
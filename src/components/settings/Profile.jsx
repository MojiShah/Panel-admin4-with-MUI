import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Profile() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box sx={{ p: 4 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Mojtaba Charchian
                                    </Typography>
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 40,
                                            width: 40,
                                            borderRadius: "50%",
                                            maxHeight: { xs: 100, md: 120 },
                                            maxWidth: { xs: 100, md: 120 },
                                        }}
                                        alt="Moji Profile"
                                        src="img/Me.jpeg"
                                    />
                                </Stack>
                            </Box>
                            <Divider />
                            <Box sx={{ p: 1.5 }}>
                                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                                    <EmailIcon />
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        mojtabaCharchian@gmail.com
                                    </Typography>
                                </Stack>
                            </Box>
                            <Divider />
                            <Box sx={{ p: 1.5 }}>
                                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                                    <SmartphoneIcon />
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        (+98) 9357061374
                                    </Typography>
                                </Stack>
                            </Box>
                            <Divider />
                            <Box sx={{ p: 1.5 }}>
                                <Stack direction="row" justifyContent="flex-start" alignItems="center">
                                    <LocationOnIcon />
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        Tehran,Iran
                                    </Typography>
                                </Stack>
                            </Box>

                        </CardContent>
                    </Card>


                </Grid>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    About me
                                </Typography>
                                <Divider />
                                <Typography sx={{ p: 1.5 }} variant="body2" color="text.secondary">
                                    I'm Mojtaba Charchian. I'm an Electronic engineer and Microwave and antenna designer. But math problems solving and Programming are my favors.
                                </Typography>
                            </Box>

                            <Box sx={{ p: 2.5 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Details
                                </Typography>
                                <Divider />
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{p:1.5}}>
                                    <Typography variant="h6" sx={{ fontSize: 14, ml: 1.5 }}>
                                        Full Name:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        Mojtaba Charchian
                                    </Typography>
                                </Stack>
                                <Divider />
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{p:1.5}}>
                                    <Typography variant="h6" sx={{ fontSize: 14, ml: 1.5 }}>
                                        Father's Name:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        Sr. Sohrab Charchian
                                    </Typography>
                                </Stack>
                                <Divider />
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{p:1.5}}>
                                    <Typography variant="h6" sx={{ fontSize: 14, ml: 1.5 }}>
                                        Address:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        Babol, Mazandaran
                                    </Typography>
                                </Stack>
                                <Divider />
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{p:1.5}}>
                                    <Typography variant="h6" sx={{ fontSize: 14, ml: 1.5 }}>
                                        Zip code:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        89990
                                    </Typography>
                                </Stack>
                                <Divider />
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ p: 1.5 }}>
                                    <Typography variant="h6" sx={{ fontSize: 14, ml: 1.5 }}>
                                        Website:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, ml: 1.5 }} color="text.secondary">
                                        https://rfmoji.com
                                    </Typography>
                                </Stack>
                                
                            </Box>
                        
                        </CardContent>
                    </Card>


                </Grid>
            </Grid>
        </Box>
    );
}
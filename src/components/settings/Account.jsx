import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Card, CardContent, Divider, MenuItem, Stack, TextField, Typography } from '@mui/material';



export default function Account() {
    const [category, setCategory] = React.useState('Super Admin');
    const [location, setLocation] = React.useState('Iran');

    const handleCategoryChange = e => setCategory(e.target.value);
    const handleLocationChange = e => setLocation(e.target.value);

    const Options = [
        {
            value: 'Super Admin',
            label: 'Super Admin',
        },
        {
            value: 'Admin',
            label: 'Admin',
        },
        {
            value: 'Vip Users',
            label: 'Vip Users',
        },
        {
            value: 'Common user',
            label: 'Common user',
        },
    ];

    const locations = [
        {
            value: 'Iran',
            label: 'Iran',
        },
        {
            value: 'Spain',
            label: 'Spain',
        },
        {
            value: 'USA',
            label: 'USA',
        },
        {
            value: 'China',
            label: 'China',
        },
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2" >
                                General Setting
                            </Typography>
                            <Divider />
                            <Box sx={{ p: 1 , display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
                                <Stack sx = {{m:1}} direction="row" justifyContent="space-evenly" alignItems="center">
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Username"
                                        defaultValue="RFMoji"
                                        sx={{ width: "48%", m: 1 }}
                                    />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Account Email"
                                        defaultValue="rfmoji@gmail.com"
                                        sx={{ width: "48%", m: 1 }}
                                    />
                                </Stack>
                                <Stack  direction="row" justifyContent="space-evenly" alignItems="center">
                                    
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="User Type"
                                        sx={{ width: "47%" }}
                                        value={category}
                                        onChange={handleCategoryChange}
                                    >
                                        {Options.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        label="Location"
                                        sx={{ width: "47%" }}
                                        value={location}
                                        onChange={handleLocationChange}
                                    >
                                        {locations.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Stack>
                            </Box>
                            
                            
                        </CardContent>
                    </Card>


                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2" >
                                Contact Information
                            </Typography>
                            <Divider />
                            <Box sx={{ p: 1.5 }}>
                                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Contact-phone"
                                        defaultValue="+98-9999999999"
                                        sx={{ width: "48%", m: 1 }}
                                    />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Email"
                                        defaultValue="rfmoji@gmail.com"
                                        sx={{ width: "48%", m: 1 }}
                                    />
                                </Stack>
                            </Box>

                            <Stack sx={{ m: 1 }} direction="row" justifyContent="space-evenly" alignItems="center">
                                <TextField
                                    id="outlined-read-only-input"
                                    label="Profile-URL"
                                    defaultValue="https://rfmoji.com"
                                    sx={{ width: "96%", m: 1 }}
                                />
                            </Stack>
                            <Box sx={{ p: 1, textAlign: "center" }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={3}
                                    defaultValue="Address"
                                    sx={{ width: "96%" }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
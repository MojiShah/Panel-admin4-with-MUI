import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { useState } from "react";

const Password = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowCurrentPassword = () => setShowCurrentPassword((show) => !show);
    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownCurrentPassword = event => event.preventDefault();
    const handleMouseDownNewPassword = event => event.preventDefault();
    const handleMouseDownConfirmPassword = event => event.preventDefault();

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center"}}>
            <Box sx={{ width: "60%", textAlign: "center" }}>
                <EnhancedEncryptionIcon color="error" fontSize="large"/>
                <FormControl fullWidth sx={{ margin: "16px 0", width: '77ch' }} variant="filled">
                    <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showCurrentPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowCurrentPassword}
                                    onMouseDown={handleMouseDownCurrentPassword}
                                    edge="end"
                                >
                                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl fullWidth sx={{ margin: "32px 0", width: '77ch' }} variant="filled">
                    <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showNewPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowNewPassword}
                                    onMouseDown={handleMouseDownNewPassword}
                                    edge="end"
                                >
                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl fullWidth sx={{ margin: "32px 0", width: '77ch' }} variant="filled">
                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button
                    size="medium"
                    variant="contained"
                    sx={{ width: "60%", marginTop: 3 }}

                >
                    Reset Password
                </Button>
            </Box>
        </Box>
    )
}

export default Password
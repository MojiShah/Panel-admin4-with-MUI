import { Box, Button, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import { useState, useEffect } from "react"
import PaidIcon from '@mui/icons-material/Paid'
import { db } from "../../firebase/Firebase.config"
import { addDoc, collection, getDocs } from "firebase/firestore"
import Swal from "sweetalert2"
import { useProductStore } from "../../store/ProductStore"


const AddProduct = ({ closeEvent }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const setRows = useProductStore(state => state.setRows);
    const empCollectionRef = collection(db, "products");

    const Options = [
        {
            value: 'Mobile',
            label: 'Mobile',
        },
        {
            value: 'Laptop',
            label: 'Laptop',
        },
        {
            value: 'Electronics',
            label: 'Electronics',
        },
        {
            value: 'Headphone',
            label: 'Headphone',
        },
    ];

    const handleNameChange = e => setName(e.target.value);
    const handlePriceChange = e => setPrice(e.target.value);
    const handleCategoryChange = e => setCategory(e.target.value);

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const createUser = async () => {
        await addDoc(empCollectionRef, {
            name: name,
            price: Number(price),
            category: category,
            date: String(new Date())
        });
        getUsers();
        closeEvent();
        Swal.fire("Submitted!", "Your file has been submitted.", "success");
    };

    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Add Product
            </Typography>
            <IconButton style={{ position: "absolute", top: "0", right: "0" }}
                onClick={closeEvent}
            >
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%" }}
                        value={name}
                        onChange={handleNameChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        type="number"
                        InputProps={{
                            startAdornment: (
                                < InputAdornment position="start">
                                    <PaidIcon />
                                </InputAdornment>)
                        }}
                        size="small"
                        sx={{ minWidth: "100%" }}
                        value={price}
                        onChange={handlePriceChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-basic"
                        label="Category"
                        variant="outlined"
                        size="small"
                        select
                        sx={{ minWidth: "100%" }}
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        {Options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                        <Button
                            variant="contained"
                            onClick={createUser}
                        >
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default AddProduct
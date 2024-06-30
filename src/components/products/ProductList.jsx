import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Autocomplete, Box, Button, Divider, Modal, Stack, TextField, Typography } from '@mui/material';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/Firebase.config';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Swal from 'sweetalert2';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct'
import { useProductStore } from "../../store/ProductStore"
import Skeleton from '@mui/material/Skeleton';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

// const columns = [
//     { id: 'name', label: 'Name', minWidth: 170 },
//     { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//     {
//         id: 'population',
//         label: 'Population',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'size',
//         label: 'Size\u00a0(km\u00b2)',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toLocaleString('en-US'),
//     },
//     {
//         id: 'density',
//         label: 'Density',
//         minWidth: 170,
//         align: 'right',
//         format: (value) => value.toFixed(2),
//     },
// ];

// function createData(name, code, population, size) {
//     const density = population / size;
//     return { name, code, population, size, density };
// }

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];

export default function ProductList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(9);
    // const [rows, setRows] = useState([]);
    const [formId, setFormId] = useState("");
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const setRows = useProductStore(state => state.setRows);
    const rows = useProductStore(state => state.rows);
    const empCollectionRef = collection(db, "products");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);


    useEffect(() => {
        getUsers();
    }, []);

    // useEffect(() => {
    //     console.log('rows', rows);
    //     console.log('rows Slice',
    //         rows.slice(page * rowsPerPage + rowsPerPage, rows.length));
    // }, [rows])

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                deleteApi(id);
            }
        });
    };

    const deleteApi = async (id) => {
        const userDoc = doc(db, "products", id);
        await deleteDoc(userDoc);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getUsers();
    };

    const filterData = (v) => {
        if (v) {
            setRows([v]);
        } else {
            setRows([]);
            getUsers();
        }
    };

    const editData = (id, name, price, category) => {
        const data = { id, name, price, category };
        setFormId(data);
        handleEditOpen();
    }

    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 450 }}>
                        <AddProduct closeEvent={handleClose} />
                    </Box>
                </Modal>
                <Modal
                    open={editOpen}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 450 }}>
                        <EditProduct closeEvent={handleEditClose} fid={formId} />
                    </Box>
                </Modal>

            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden', p: 2 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ padding: "20px" }}
                >
                    Products List
                </Typography>
                <Divider />
                <Box height={10} />
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={rows}
                        sx={{ width: 300 }}
                        onChange={(e, v) => filterData(v)}
                        getOptionLabel={(rows) => rows.name || ""}
                        renderInput={(params) => (
                            <TextField {...params} size="small" label="Search Products" />
                        )}
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
                        Add
                    </Button>
                </Stack>
                <Box height={10} />
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Name
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Price
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Category
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Date
                                </TableCell>
                                <TableCell align="left" style={{ minWidth: "100px" }}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>

                                            <TableCell key={100 * Math.random()} align="left">
                                                {row.name}
                                            </TableCell>
                                            <TableCell key={100 * Math.random()} align="left">
                                                {row.price}
                                            </TableCell>
                                            <TableCell key={100 * Math.random()} align="left">
                                                {row.category}
                                            </TableCell>
                                            <TableCell key={100 * Math.random()} align="left">
                                                {row.date}
                                            </TableCell>
                                            <TableCell align="left">
                                                <Stack spacing={2} direction="row">
                                                    <EditIcon
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "blue",
                                                            cursor: "pointer",
                                                        }}
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            editData(row.id,
                                                                row.name,
                                                                row.price,
                                                                row.category)}
                                                    />
                                                    <DeleteIcon
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "darkred",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() => {
                                                            deleteUser(row.id);
                                                        }}
                                                    />
                                                </Stack>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {
                rows.length == 0 &&
                (<>
                    <Paper sx={{width:"98%",overflow:"hidden",padding:"12px"}}>
                        <Box height={20} />
                        <Skeleton variant='rectangular' width='100%' height={30}/>
                        <Box height={40} />
                        <Skeleton variant='rectangular' width='100%' height={60}/>
                        <Box height={20} />
                        <Skeleton variant='rectangular' width='100%' height={60}/>
                        <Box height={20} />
                        <Skeleton variant='rectangular' width='100%' height={60}/>
                        <Box height={20} />
                        <Skeleton variant='rectangular' width='100%' height={60}/>
                        <Box height={20} />
                        <Skeleton variant='rectangular' width='100%' height={60}/>
                        <Box height={20} />
                    </Paper>
                </>)
            }
        </>
    );
}

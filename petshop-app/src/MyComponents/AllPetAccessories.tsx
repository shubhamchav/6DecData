import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import '../App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

}));

export default function AllPetAccessories() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/petAccessories/getAllAccessories').then((response) => {
            console.log("response")
            setUsers(response.data);
            console.log(users);
        });
    }, []);

    const navigate = useNavigate();


    const deletePetAccessories = (itemId: any) => {
        axios.delete(`http://localhost:8080/petAccessories/deletePetAccessories/${itemId}`).then((response) => {
            console.log("pet deleted")
            console.log(users);
            toast("Pet accessories details deleted successfully!");
            navigate('/allpetAccessories');
        });
    }

    const editPetAccessories = (itemId: any) => {
        localStorage.setItem("itemId", itemId);
        navigate(`/editPetAccessories/${itemId}`);

    }

    const styleTable = {
        width: 900
    }

    return (
        <div className='tableContainer'>
            <h1>All Pet Accessories</h1>
            <Button href="/addPetAccessories" variant="contained" color="success" style={{ 'marginBottom': '10px' }} >Add Pet Accessories</Button>
            <TableContainer component={Paper} style={styleTable} >
                <Table aria-label="customized table" className='userTable'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell>Item Name</StyledTableCell>
                            <StyledTableCell>Item Categeory</StyledTableCell>
                            <StyledTableCell>Item Price</StyledTableCell>
                            <StyledTableCell>Item Quantity</StyledTableCell>
                            <StyledTableCell>Edit</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.itemName}>
                                <StyledTableCell><img src={require('E:/PetShopBackend29Nov/PetShop/Images/' + user.itemImage)} /></StyledTableCell>
                                <StyledTableCell component="th" scope="row">{user.itemName}</StyledTableCell>
                                <StyledTableCell>{user.itemCategory}</StyledTableCell>
                                <StyledTableCell>{user.itemPrice}</StyledTableCell>
                                <StyledTableCell>{user.itemQuantity}</StyledTableCell>
                                <StyledTableCell><Button variant='text' color='success' onClick={() => editPetAccessories(user.itemId)}><EditIcon /></Button></StyledTableCell>
                                <StyledTableCell><Button variant='text' color='error' onClick={() => deletePetAccessories(user.itemId)}><DeleteIcon /></Button><ToastContainer /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <br />
            <div>
                <Button href="/admin" variant="contained" color="success">Back</Button>
            </div>
        </div>
    );
}

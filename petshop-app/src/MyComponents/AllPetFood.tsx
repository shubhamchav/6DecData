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

export default function AllPets() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/petFood/getAllFood').then((response) => {
            console.log("response")
            setUsers(response.data);
            console.log(users);
        });
    }, []);

    const navigate = useNavigate();


    const deletePetFood = (foodId: any) => {
        axios.delete(`http://localhost:8080/petFood/deletePetFood/${foodId}`).then((response) => {
            console.log("pet deleted")
            console.log(users);
            toast("Pet food details deleted successfully!");
            navigate('/allpetfood');
        });
    }

    const editPetFood = (foodId: any) => {
        localStorage.setItem("foodId",foodId);
        navigate(`/editPetFood/${foodId}`);

    }

    const styleTable = {
        width: 900
    }

    return (
        <div className='tableContainer'>
            <h1>All Pet Foods</h1>
            <Button href="/addPetFood" variant="contained" color="success" style={{'marginBottom':'10px' }} >Add Pet Food</Button>
            <TableContainer component={Paper} style={styleTable} >
                <Table aria-label="customized table" className='userTable'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Image</StyledTableCell>
                            <StyledTableCell>Food Name</StyledTableCell>
                            <StyledTableCell>Categeory</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell>Quantity(Kg)</StyledTableCell>
                            <StyledTableCell>Edit</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.foodName}>
                               <StyledTableCell><img src={require('E:/PetShopBackend29Nov/PetShop/Images/'+user.foodImage)}/></StyledTableCell>
                                <StyledTableCell component="th" scope="row">{user.foodName}</StyledTableCell>
                                <StyledTableCell>{user.foodCategory}</StyledTableCell>
                                <StyledTableCell>{user.foodPrice}</StyledTableCell>
                                <StyledTableCell>{user.foodQuantity}</StyledTableCell>
                                <StyledTableCell><Button variant='text' color='success' onClick={() => editPetFood(user.foodId)}><EditIcon /></Button></StyledTableCell>
                                <StyledTableCell><Button variant='text' color='error' onClick={() => deletePetFood(user.foodId)}><DeleteIcon /></Button><ToastContainer /></StyledTableCell>
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

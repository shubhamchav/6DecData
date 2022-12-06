
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import '../App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, Route, useNavigate } from 'react-router-dom';
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

export default function AllPetCategories() {
    const [users, setUsers] = useState<any[]>([]);
    const [cats, setCats] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/petCategory/getAllPetCategory').then((response) => {
            console.log("response")
            setUsers(response.data);

            console.log(response.data);
        });
    }, []);

    const navigate = useNavigate();

    const deletePetCategory = (categoryId: number) => {
        axios.delete(`http://localhost:8080/petCategory/deletePetCategory/${categoryId}`).then((response) => {
            console.log("pet deleted")
            console.log(users);
            toast("Pet category details deleted successfully!");
            navigate('/allpetCategories');
        });
    }

    const editPetCategory = (categoryId: any) => {
        localStorage.setItem("categoryId",categoryId);
        navigate(`/editPetCategory/${categoryId}`);

    }


    const styleTable = {
        width: 1200
    }

    return (
        <div className='tableContainer'>
            <h1>All Pet Categories</h1>
            <Button href="/addpetCategory" variant="contained" color="success" style={{'marginBottom':'10px' }} >Add Pet Category</Button>
            <TableContainer style={styleTable} >
                <Table aria-label="customized table" className='userTable'>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Category Image</StyledTableCell>
                            <StyledTableCell>Category Name</StyledTableCell>
                            <StyledTableCell>Edit</StyledTableCell>
                            <StyledTableCell>Delete</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <StyledTableRow key={user.categoryName}>
                                <StyledTableCell><img src={require('E:/PetShopBackend29Nov/PetShop/Images/'+user.categoryImage)}/></StyledTableCell>
                                <StyledTableCell component="th" scope="row">{user.categoryName}</StyledTableCell>
                                <StyledTableCell><Button variant='text' color='success' onClick={() => editPetCategory(user.categoryId)}><EditIcon /></Button></StyledTableCell>
                                <StyledTableCell><Button variant='text' color='error' onClick={() => deletePetCategory(user.categoryId)}><DeleteIcon /></Button><ToastContainer /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table><br />
                <Button href="/admin" variant="contained" color="success">Back</Button>
                
            </TableContainer>
            
        </div>
    );
}


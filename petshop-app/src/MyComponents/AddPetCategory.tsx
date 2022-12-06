
import { Box, CssBaseline, Typography, Grid, TextField, TextareaAutosize, createTheme, Container, Button, FormControlLabel, Radio, RadioGroup, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FormLabel, ThemeProvider } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {

}

const theme = createTheme();

export default function AddPetCategory({ }: Props) {

    
    const [isSubmit, setIsSubmit] = useState(false);

    const categoryId = localStorage.getItem('categoryId');

    const [checkcategoryName, setcategoryName] = useState('');
    const [checkcategoryImage, setcategoryImage] = useState('');  

    const [token] = useState(sessionStorage.getItem("token_ADMIN"));
    useEffect(() => {
        if (token == null) {
            navigate("/home");
        }
      },[])


    const handlecategoryNameChange = (e: any) => {
        setcategoryName(e.target.value);
    }
    const handlecategoryImageChange = (e: any) => {
        console.log(e.target.files[0]);
        setcategoryImage(e.target.files[0]);
    }
    
    const navigate = useNavigate();
   

    const handleSubmit = (e:any) => {
        // debugger
         e.preventDefault();
         toast("Pet category details added successfully!");

        const data = new FormData();
        
        data.append('categoryName', checkcategoryName);
        data.append('categoryImage', checkcategoryImage);

        console.log(data);
        setIsSubmit(true);

        axios.post("http://localhost:8080/petCategory/addPetCategory", data).then((res: { data: any }) => {
            console.log("Response" + res.data);
            
            navigate("/allpetCategories");
            
        });
    }
    return (
        <Box padding={10}>
            <Outlet />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5">
                            Add Pet
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    className='form-control'
                                        required
                                        fullWidth
                                        id="categoryName"
                                        label="Category Name"
                                        name="categoryName"
                                        value={checkcategoryName}
                                        onChange={handlecategoryNameChange}
                                        autoComplete="family-name"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petName}</p> */}
                                </Grid>
                                <Grid item xs={12}>                      
                                       <input
                                        className='form-control'
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            name="categoryImage"
                                            // value={checkpetImage}
                                            onChange={handlecategoryImageChange}
                                            // hidden
                                        />

                                        {/* Upload File */}
                                    {/* </Button> */}

                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Add
                            </Button>
                            <ToastContainer />

                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
        </Box>
    )
}


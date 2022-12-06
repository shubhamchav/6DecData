
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

export default function AddPetAccessories({ }: Props) {

    
    const [isSubmit, setIsSubmit] = useState(false);

    //const petId = localStorage.getItem('petId');

    

    const [checkitemName, setitemName] = useState('');
    const [checkitemCategory, setitemCategory] = useState('');
    const [checkitemPrice, setitemPrice] = useState('');
    const [checkitemQuantity, setitemQuantity] = useState('');
    const [checkitemImage, setitemImage] = useState('');
    const [token] = useState(sessionStorage.getItem("token_ADMIN"));
    useEffect(() => {
        if (token == null) {
            navigate("/home");
        }
      },[])

    const handleitemNameChange = (e: any) => {
        setitemName(e.target.value);
    }
    const handleitemCategoryChange = (e: any) => {
        setitemCategory(e.target.value);
    }
    const handleitemPriceChange = (e: any) => {
        setitemPrice(e.target.value)
    }
    const handleitemQuantityChange = (e: any) => {
        setitemQuantity(e.target.value);
    }
    const handleitemImageChange = (e: any) => {
        console.log(e.target.files[0]);
        setitemImage(e.target.files[0]);
    }

    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        // debugger
         e.preventDefault();
         toast("Pet accessories details added successfully!");

        const data = new FormData();
        
        data.append('itemName', checkitemName);
        data.append('itemCategory', checkitemCategory);
        data.append('itemPrice', checkitemPrice);
        data.append('itemQuantity', checkitemQuantity);
        data.append('itemImage', checkitemImage);

    
        console.log(data);
        setIsSubmit(true);
    
        axios.post("http://localhost:8080/petAccessories/addPetAccessories", data).then((res: { data: any }) => {
            console.log("Response" + res.data);
            navigate("/allpetAccessories");
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
                            Add Pet Accessories
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                            <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Accessories category</InputLabel>
                                        <Select
                                        className='form-control'
                                            name="itemCategory"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={checkitemCategory}
                                            label="category"
                                            onChange={handleitemCategoryChange}
                                        >
                                            <MenuItem value={""}>Select item Category</MenuItem>
                                            <MenuItem value={"DogAccessories"}>Dog Accessories</MenuItem>
                                            <MenuItem value={"CatAccessories"}>Cat Accessories</MenuItem>
                                            <MenuItem value={"BirdAccessories"}>Bird Accessories</MenuItem>
                                            <MenuItem value={"FishAccessories"}>Fish Accessories</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    className='form-control'
                                        required
                                        fullWidth
                                        id="itemName"
                                        label="Accessories Name"
                                        name="itemName"
                                        value={checkitemName}
                                        onChange={handleitemNameChange}
                                        autoComplete="family-name"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petName}</p> */}
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                    className='form-control'
                                        required
                                        fullWidth
                                        id="itemPrice"
                                        label="Accessories Price"
                                        name="itemPrice"
                                        value={checkitemPrice}
                                        onChange={handleitemPriceChange}
                                        autoComplete="family-name"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    className='form-control'
                                        minRows={3}
                                        style={{ width: 500 }}
                                        name="itemQuantity"
                                        placeholder="item Quantity"
                                        id="itemQuantity"
                                        label="Accessories Quantity"
                                        value={checkitemQuantity}
                                        onChange={handleitemQuantityChange}
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petDescription}</p>*/}
                                </Grid>
                                <Grid item xs={12}>
                                    {/* <Button
                                        variant="contained"
                                        component="label"

                                    > */}
                                        <input
                                        className='form-control'
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            name="itemImage"
                                            // value={checkpetImage}
                                            onChange={handleitemImageChange}
                                            // hidden
                                        />

                                        {/* Upload File */}
                                    {/* </Button> */}

{/* <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="petImage"
                                        label="petImage"
                                        name="petImage"
                                        value={checkpetImage}
                                        onChange={handlepetImageChange}
                                        autoComplete="petImage"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petPrice}</p> 
                                </Grid> */}
                                    {/* <button type="submit">
                            
                                        Upload
                                        <input type="file" onChange={handlepetImageChange} /></button> */}

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


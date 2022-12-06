
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

export default function AddPet({ }: Props) {

    
    const [isSubmit, setIsSubmit] = useState(false);

    const petId = localStorage.getItem('petId');

    const [checkpetName, setpetName] = useState('');
    const [checkgender, setgender] = useState('');
    const [checkpetPrice, setpetPrice] = useState('');
    const [checkpetImage, setpetImage] = useState('');
    const [checkcategoryId, setcategoryId] = useState('');
    const [checkpetDescription, setpetDescription] = useState('');
    const [token] = useState(sessionStorage.getItem("token_ADMIN"));
    useEffect(() => {
        if (token == null) {
            navigate("/home");
        }
      },[])

    const handlepetNameChange = (e: any) => {
        setpetName(e.target.value);
    }
    const handlegenderChange = (e: any) => {
        setgender(e.target.value);
    }
    const handlepetPriceChange = (e: any) => {
        setpetPrice(e.target.value)
    }

    const handlecategoryIdChange = (e: any) => {
        setcategoryId(e.target.value);
    }
    const handlepetImageChange = (e: any) => {
        console.log(e.target.files[0]);
        setpetImage(e.target.files[0]);
    }
    

    const handlepetDescriptionChange = (e: any) => {
        setpetDescription(e.target.value);
    }

    
    const navigate = useNavigate();
   

    const handleSubmit = (e:any) => {
        // debugger
         e.preventDefault();
         toast("Pet details added successfully!");
        

        const data = new FormData();
        
        data.append('categoryId', checkcategoryId);
        data.append('petName', checkpetName);
        data.append('gender', checkgender);
        data.append('petPrice', checkpetPrice);
        data.append('petImage', checkpetImage);
        data.append('petDescription', checkpetDescription);


        console.log(data);
        setIsSubmit(true);

        axios.post("http://localhost:8080/pet/addPet", data).then((res: { data: any }) => {
            console.log("Response" + res.data);
            navigate("/allpets");
            
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
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Pet category</InputLabel>
                                        <Select
                                        className='form-control'
                                            name="categoryId"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={checkcategoryId}
                                            label="category"
                                            onChange={handlecategoryIdChange}
                                        >
                                            <MenuItem value={0}>Select Pet</MenuItem>
                                            <MenuItem value={1}>Dog</MenuItem>
                                            <MenuItem value={2}>Cat</MenuItem>
                                            <MenuItem value={3}>Bird</MenuItem>
                                            <MenuItem value={4}>Fish</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    className='form-control'
                                        required
                                        fullWidth
                                        id="petName"
                                        label="Pet Name"
                                        name="petName"
                                        value={checkpetName}
                                        onChange={handlepetNameChange}
                                        autoComplete="family-name"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petName}</p> */}
                                </Grid>
                                <Grid container item sx={{ mt: 0 }}>
                                    <FormLabel id="radio-label" sx={{ mt: 2 }}>Gender  </FormLabel>
                                    <FormControl sx={{ ml: 5 }} >
                                        <RadioGroup
                                        className='form-control'
                                            row
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="gender"
                                            value={checkgender}
                                        >

                                            <FormControlLabel sx={{ mt: 1, mb: 0 }} value="FEMALE" control={<Radio />} onChange={handlegenderChange} label="Female" />
                                            <FormControlLabel sx={{ mt: 1, mb: 0 }} value="MALE" control={<Radio />} onChange={handlegenderChange} label="Male" />

                                        </RadioGroup>
                                    </FormControl>

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                    className='form-control'
                                        required
                                        fullWidth
                                        id="petPrice"
                                        label="Price"
                                        name="petPrice"
                                        value={checkpetPrice}
                                        onChange={handlepetPriceChange}
                                        autoComplete="email"
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                    className='form-control'
                                        minRows={3}
                                        style={{ width: 500 }}
                                        name="petDescription"
                                        placeholder="Pet Description"
                                        id="petDescription"
                                        value={checkpetDescription}
                                        onChange={handlepetDescriptionChange}
                                    />
                                    {/* <p className="ErrorClass">{formErrors.petDescription}</p>*/}
                                </Grid>
                                <Grid item xs={12}>                      
                                       <input
                                        className='form-control'
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            name="petImage"
                                            // value={checkpetImage}
                                            onChange={handlepetImageChange}
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



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

export default function EditPetFood({ }: Props) {


  const [isSubmit, setIsSubmit] = useState(false);
  const foodId = localStorage.getItem('foodId');

  //const petId = localStorage.getItem('petId');



  const [checkfoodId, setfoodId] = useState('');
  const [checkfoodName, setfoodName] = useState('');
  const [checkfoodCategory, setfoodCategory] = useState('');
  const [checkfoodPrice, setfoodPrice] = useState('');
  const [checkfoodQuantity, setfoodQuantity] = useState('');
  const [checkfoodImage, setfoodImage] = useState('');

  const handlefoodIdChange = (e: any) => {
    setfoodId(e.target.value);
  }

  const handlefoodNameChange = (e: any) => {
    setfoodName(e.target.value);
  }
  const handlefoodCategoryChange = (e: any) => {
    setfoodCategory(e.target.value);
  }
  const handlefoodPriceChange = (e: any) => {
    setfoodPrice(e.target.value)
  }
  const handlefoodQuantityChange = (e: any) => {
    setfoodQuantity(e.target.value);
  }
  const handlefoodImageChange = (e: any) => {
    console.log(e.target.files[0]);
    setfoodImage(e.target.files[0]);
  }

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    // debugger
    e.preventDefault();
    toast("Pet food details edited successfully!");

    const data = new FormData();

    data.append('foodId', checkfoodId);
    data.append('foodName', checkfoodName);
    data.append('foodCategory', checkfoodCategory);
    data.append('foodPrice', checkfoodPrice);
    data.append('foodQuantity', checkfoodQuantity);
    data.append('foodImage', checkfoodImage);


    console.log(data);
    setIsSubmit(true);

    axios.put(`http://localhost:8080/petFood/updatePetFood/${foodId}`, data).then((res: { data: any }) => {
      console.log("Response" + res.data);
      
      navigate("/allpetfood");
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
              Edit Pet Food
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    className='form-control'
                    required
                    fullWidth
                    id="foodId"
                    label="Food Id"
                    name="foodId"
                    value={foodId}
                    onChange={handlefoodIdChange}
                    autoComplete="family-name"
                  />
                  {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Food category</InputLabel>
                    <Select
                      className='form-control'
                      name="foodCategory"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={checkfoodCategory}
                      label="category"
                      onChange={handlefoodCategoryChange}
                    >
                      <MenuItem value={""}>Select Food Category</MenuItem>
                      <MenuItem value={"DogFood"}>Dog Food</MenuItem>
                      <MenuItem value={"CatFood"}>Cat Food</MenuItem>
                      <MenuItem value={"BirdFood"}>Bird Food</MenuItem>
                      <MenuItem value={"FishFood"}>Fish Food</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className='form-control'
                    required
                    fullWidth
                    id="foodName"
                    label="Food Name"
                    name="foodName"
                    value={checkfoodName}
                    onChange={handlefoodNameChange}
                    autoComplete="family-name"
                  />
                  {/* <p className="ErrorClass">{formErrors.petName}</p> */}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    className='form-control'
                    required
                    fullWidth
                    id="foodPrice"
                    label="Food Price"
                    name="foodPrice"
                    value={checkfoodPrice}
                    onChange={handlefoodPriceChange}
                    autoComplete="family-name"
                  />
                  {/* <p className="ErrorClass">{formErrors.petPrice}</p> */}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className='form-control'
                    minRows={3}
                    style={{ width: 500 }}
                    name="foodQuantity"
                    placeholder="Food Quantity"
                    id="foodQuantity"
                    label="Food Quantity"
                    value={checkfoodQuantity}
                    onChange={handlefoodQuantityChange}
                  />
                  {/* <p className="ErrorClass">{formErrors.petDescription}</p>*/}
                </Grid>
                <Grid item xs={12}>
                  <input
                    className='form-control'
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    name="foodImage"
                    onChange={handlefoodImageChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Edit
              </Button>
              <ToastContainer />

            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </Box>
  )
}

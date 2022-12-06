import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Paper,
  Typography,
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import SimpleImageSlider from 'react-simple-image-slider'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { StorePetCateogry } from '../MyComponents/StorePetCateogry'
import { Link, Navigate, useNavigate } from 'react-router-dom'
type Props = {}

const images = [
  {
    url:
      'https://cdn.shopify.com/s/files/1/1788/4235/articles/PPF-Blog-FelineTransitioning-Blog-Banner_2800x420.jpg?v=1590000174',
  },
  {
    url:
      'https://th.bing.com/th/id/R.ab2cad50e6088746c12bb6f6759ff6d7?rik=soKlqPReOMWP%2fg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fwestie_dog-1920x1080.jpg&ehk=1mKpcv%2bv9dB7SDSMH9gKlu%2bzWFjmB809UbLNiXAooDA%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    url:
      'https://th.bing.com/th/id/R.603f427267e6db5c9a2166673adddd93?rik=BAad27YV%2f3MgCg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-rfq7e5EocW4%2fToBydjwh2OI%2fAAAAAAAAABU%2fq7wLqsf1xLw%2fs1600%2fExotic%2bbirds%2bin%2bflight1.png&ehk=D7SlrdULOLDlUs4KGbWYFgpMRugpdOLGccHfhsqvgDU%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    url:
      'https://th.bing.com/th/id/R.60c3b8d1819b871f536d60e774a3cbeb?rik=Kvd5P6BZI1FmKA&riu=http%3a%2f%2fimagebank.biz%2fwp-content%2fuploads%2f2014%2f10%2f187572.jpg&ehk=en81dZzsFEX9KFZbWPITdnaDzMBBef94rhzAdYYNWuw%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    url:
      'https://th.bing.com/th/id/OIP.hbaRuOnAkzWU1Jr0E7TagQHaE6?pid=ImgDet&rs=1',
  },
  {
    url:
      'https://th.bing.com/th/id/OIP.0ym7BjR9J3vk7zBbtrCwlgHaE7?pid=ImgDet&w=1280&h=853&rs=1',
  },
  {
    url:
      'https://th.bing.com/th/id/OIP.kvYsfUHAAQlEVW3Z3_EEWwHaEK?pid=ImgDet&rs=1',
  },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Home({ }: Props) {
  const [petCategories, setPetCategories] = useState<any[]>([])
  const [petAccessories, setPetAccessories] = useState<any[]>([])
  const [petFoods, setPetFoods] = useState<any[]>([])

  const [token] = useState(sessionStorage.getItem("token_ADMIN"));
    useEffect(() => {
        if (token == null) {
            navigate("/home");
        }
        else{
          navigate("/admin");
        }
      },[])
  

  useEffect(() => {

    const token = localStorage.getItem('userEmail');

    if (token) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }

    axios
      .get('http://localhost:8080/petCategory/getAllPetCategory')
      .then((response) => {
        setPetCategories(response.data)
        console.log(response.data)
      })
  }, [])

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const DisplayData = petCategories.map((petCategory) => {
    return (
      <tr>
        <td>
          <StorePetCateogry {...petCategory} />
        </td>
      </tr>
    )
  })

  const fetchDogFoods = () => {

    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate('/dogFood')
    }
    else {
      navigate('/login')
    }


  }

  const fetchCatFoods = () => {

    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate('/catFood')
    }
    else {
      navigate('/login')
    }


  }

  const fetchFishFoods = () => {


    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate('/fishFood')
    }
    else {
      navigate('/login')
    }

  }

  const fetchBirdFoods = () => {

    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate('/birdFood')
    }
    else {
      navigate('/login')
    }

  }

  const fetchDogAccessories = () => {
    navigate('/dogAccessories')

  }

  const fetchCatAccessories = () => {
    navigate('/catAccessories')

  }

  const fetchFishAccessories = () => {
    navigate('/fishAccessories')

  }

  const fetchBirdAccessories = () => {
    navigate('/birdAccessories')

  }

  return (
    <Box>
      <SimpleImageSlider
        width="100%"
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      {/* //////////////////////////// PET CATEGEORY ////////////////////////////////// */}
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          <p id='petCategoryId'></p>
          Pet Categeory
        </Typography>
        <Container>
          <table className="table">
            <tbody className="ShowPetCategory">{DisplayData}
            </tbody>
          </table>
        </Container>

        <br />
        <br />

        {/* //////////////////////////FOOD CATEGEORY////////////////////////////// */}
        <Typography variant="h4" gutterBottom>
        <p id='petFoodsId'></p>
          Pet Foods
        </Typography>
        <br></br>
        <Grid container rowSpacing={0.5}>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.KJNxO6BXmw0ygwHq2MUcLQHaE7?pid=ImgDet&rs=1"
                    alt="Dog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dog
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of dogs their food and the
                      accessories which will give you all the things in very
                      affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchDogFoods()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://image.shutterstock.com/image-photo/accessories-cat-on-wooden-background-260nw-515237152.jpg"
                    alt="Cat"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of cats their food and the
                      accessories which will give you all the things in very
                      affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchCatFoods()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.2vEhR5HMbsl-Nqizgj_E9AHaFj?pid=ImgDet&rs=1"
                    alt="Aquerium Pets"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Fish
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of fish their food and
                      the accessories which will give things in very affordable
                      price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchFishFoods()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.h38HSFleXZuyyuKARxYmUAHaHa?pid=ImgDet&rs=1"
                    alt="Birds"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Birds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of birds their food and the
                      accessories which will give you all the things in very
                      affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchBirdFoods()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        </Grid>
        <br />
        <br />
        {/* //////////////////////////// ACCESSORIES CATEGEORY ////////////////////////////////// */}
        <Typography variant="h4" gutterBottom>
        <p id='petAccessoriesId'></p>
          Pet Accessories
        </Typography>
        <br></br>
        <Grid container rowSpacing={0.5}>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.KJNxO6BXmw0ygwHq2MUcLQHaE7?pid=ImgDet&rs=1"
                    alt="Dog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Dog
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of dogs their food and the
                      accessories which will give you all the things in very
                      affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchDogAccessories()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ paddingRight: 0.5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://image.shutterstock.com/image-photo/accessories-cat-on-wooden-background-260nw-515237152.jpg"
                    alt="Cat"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Cat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of cats their food and the
                      accessories which will give you all the things in very
                      affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchCatAccessories()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.2vEhR5HMbsl-Nqizgj_E9AHaFj?pid=ImgDet&rs=1"
                    alt="Aquerium Pets"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Fish
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of fish their food and
                      the accessories which will give things in very affordable
                      price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchFishAccessories()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://th.bing.com/th/id/OIP.h38HSFleXZuyyuKARxYmUAHaHa?pid=ImgDet&rs=1"
                    alt="Birds"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Birds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have different breads of birds their food and the
                      accessories which will give you all the things in very
                      affordable price.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button onClick={() => fetchBirdAccessories()}>Shop now</button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Item>
          </Grid>
        </Grid>
        <Box display={'flex'} sx={{ paddingTop: 5 }}>
          <Card sx={{ maxWidth: 1260 }}>
            <Typography variant="h4" >
              Best Quality Pet Products
            </Typography>
            <br />
            <Typography color={'#827f85'}>
              Best online pet store for all your pet supplies and pet products.
              Buy pet essentials online at Pawsindia. Shop For Interactive pet
              toys, dog foods, dog toys, cat toys & Much more.Free and Fast
              shipining in All Over India. We care about the well-being of all
              pets, and as a socially conscious company, asiapets.in proudly
              sponsors a donations program to help animals in need. We also
              offer a selection of safe supplements, toys, and supplies.
            </Typography>
          </Card>

          <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://th.bing.com/th/id/R.bec9cc8b9cdbe891f18888067f36b5ab?rik=EFFcls8fldWACg&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2f0%2f3%2f3%2f88562.jpg&ehk=C2H0OR6d%2fTTLkpVemqqcK7SmFGEfrK4m2gxl13JPRWQ%3d&risl=&pid=ImgRaw&r=0"
            />
          </Card>
        </Box>
      </Box>
    </Box>
  )
}


import '../App.css'
import { useEffect, useState } from 'react'
import { display } from '@mui/system'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Paper,
  styled,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



type StorePetCateogryProps = {
  categoryId: number
  categoryName: string
  categoryImage: string
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export function StorePetCateogry({
  categoryId,
  categoryName,
  categoryImage,
}: StorePetCateogryProps) {
  // const { hideStoreItem,  } = useShoppingCart()

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const petCategory = {
    categoryId: categoryId,
    categoryName: categoryName,
    categoryImage: categoryImage,
  }
  const Style: any = {
    width: 300,
  }

  useEffect(() => {
    const token = localStorage.getItem('userEmail');

    if (token) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }

  })

  const fetchPets = () => {
    if (isLoggedIn) {
      navigate(`/pet/${categoryId}`)
    }
    else {
      navigate('/login')
    }

  }

  return (
    <Box className="mainContainer1">
      <Card>
        <CardMedia
          component="img"
          image={require('E:/PetShopBackend29Nov/PetShop/Images/' +
            categoryImage)}
          style={Style}
        // variant="top"
        // src={petImage}
        // height="200px"
        // style={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="div">
            <div className="price">{categoryName}</div>
            <Typography variant="body2" color="text.secondary">
              We have different breads of dogs their food and the
              accessories which will give you all the things in very
              affordable price.
            </Typography>
            <CardActions>
              <button className='petCategoryShowNow' onClick={() => fetchPets()}>Shop now</button>
            </CardActions>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

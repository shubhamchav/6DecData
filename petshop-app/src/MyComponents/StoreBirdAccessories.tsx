
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import FavoriteIcon from '@mui/icons-material/Favorite'
import '../App.css';
import { useState } from "react";
import { display } from "@mui/system";
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios";
import { Bounce } from "react-awesome-reveal";




type StoreBirdAccessoriesProps = {


  itemId: number
  itemName: string
  itemCategory: string
  itemPrice: number
  itemImage: string
  itemQuantity: number

}

export function StoreBirdAccessories({ itemId, itemName, itemCategory, itemPrice, itemImage, itemQuantity }: StoreBirdAccessoriesProps) {

  // const { hideStoreItem,  } = useShoppingCart()

  const petFood ={
    itemId: itemId,
    itemName : itemName,
    itemCategory : itemCategory,
    itemPrice :itemPrice,
    itemImage: itemImage,
    itemQuantity: itemQuantity,
  }


  const {
    getItemQuantity,
    // getItemLike,
    increaseCartQuantity,
    wishlistIncrease,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()



  const quantity = getItemQuantity(itemId);
  const token = localStorage.getItem("userEmail");

  const Style: any = {
    width: 300
  }

  const like = 0;

  const handleFavourite = (id : any) => {
   
    const list ={
      id: id,
      sessionToken: token,
    }
    console.log("Favourite items"); 
    console.log(petFood); 
    axios.post(`http://localhost:8080/favouriteList/addToFavouriteList/${id}/${token}`, list).then((res: { data: any }) => {
     
    console.log(res.data);
      alert("favourite added successfully")
  });
  wishlistIncrease(id);
    
  }

  return (

    <Box className="mainContainer">
      <Bounce>
      <Card >
        <CardMedia
          component="img"
          image={require('E:/PetShopBackend29Nov/PetShop/Images/'+itemImage)}
          style={Style}
        // variant="top"
        // src={petImage}
        // height="200px"
        // style={{ objectFit: "cover" }}
        />
        <CardContent >

          <Typography variant="body2" color="text.secondary">
            <div className="price">Item name:  {itemName}</div>
            <div className="price">Item cateogry:  {itemCategory}</div>
            <div className="price">Item price:  {formatCurrency(itemPrice)}</div>
            <div className="price">Item quantity:  {itemQuantity}</div>
          </Typography>
          <div className="buttonDiv">
            <div className="row">
              {quantity === 0 ? (
                <Button className="row" onClick={() => increaseCartQuantity(itemId)} variant="contained" >
                  <AddShoppingCartSharpIcon style={{ "color": "white" }}></AddShoppingCartSharpIcon>
                </Button>

              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="btn-add-delete"
                    style={{ gap: ".5rem" }}
                  >
                    <Button onClick={() => decreaseCartQuantity(itemId)} variant="text" size="large"><RemoveIcon /></Button>
                    <div>
                      <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button onClick={() => increaseCartQuantity(itemId)} variant="text" size="large"><AddIcon /></Button>

                    <br />
                    <Button
                      onClick={() => removeFromCart(itemId)}
                      variant="contained"
                      size="medium"
                      color="error"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="row">
          {like === 0 && (
            <Button className='favouriteDiv' onClick={() => handleFavourite(itemId)}  variant="text" size="large" color='error'>
           <FavoriteIcon></FavoriteIcon>
            </Button>
          )}

        </div>
          </div>
        </CardContent>

      </Card>
      </Bounce>
    </Box>

  )
}
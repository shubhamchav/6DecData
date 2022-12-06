import axios from "axios"
import { useEffect, useState } from "react"
import { Stack } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import Button from '@mui/material/Button';

type StoreFavouriteItemProps = {
  petId: number
  petName: string
  petPrice: number
  petImage: string
}

export function StoreFavouriteItem({ petId, petName, petPrice, petImage }: StoreFavouriteItemProps) {

  const pet ={
    petId: petId,
    petName : petName,
    petPrice : petPrice,
    petImage :petImage,
  }
console.log(petId);
  const [pets, setPets] = useState<any[]>([]);
  const userEmail = localStorage.getItem("userEmail")
  return (
    <div>
      <div>
        <img
          src={require('E:/PetShopBackend29Nov/PetShop/Images/'+petImage)}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {petName}{" "}


          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {/* {formatCurrency(item.petPrice)} */}
          </div>
        </div>
        <div className="outerDiv">
          <div className="innerDiv">
            <Button
              variant="contained"
              size="large"
              color="error"
              //onClick={() => removeFavourite(item.petId)}
              className="shoppingcartbtn"
            >
              Remove
            </Button></div>
          <div>
            <Button
              variant="contained"
              size="large"
              color="success"
              //onClick={() => increaseCartQuantity(item.petId)}
              className="shoppingcartbtn"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
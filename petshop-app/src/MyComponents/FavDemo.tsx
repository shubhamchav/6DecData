import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";
import { StoreDogAccessories } from "./StoreDogAccessories";
import { StoreFavouriteItem } from "./StoreFavouriteItem";

export function FavDemo() {

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };


  //const favItems = [''];

  const [favItems , setFavItems] = useState<any[]>([]);
  const email = localStorage.getItem("userEmail");

  useEffect(() => {
    axios.get(`http://localhost:8080/favouriteList/getFavouriteList/${email}`,config).then((response) => {
      console.log("Hello");
      for(let i = 0; i < response.data.length; i++){
        for(let j=0 ; j < response.data[i].pets.length; j++){
          //console.log(response.data[i].pets[j]);
          favItems.push(response.data[i].pets[j]);
          
        }
        
      }
      setFavItems(favItems);
      console.log(favItems);
      //console.log(response.data);
      
     
    });
    
  }, []);
  const DisplayData = favItems.map((favItem) => {
    for(let k=0; k<favItems.length/2 ; k++){
    return (
      <tr>
        <td>
          <StoreFavouriteItem {...favItem} />
        </td>
      </tr>
    )
    }
  })

  return (
    <Container>

      <table className="table" >
        <tbody className="ShowDogs">
          {DisplayData}
        </tbody>
      </table>

    </Container>
  )
}
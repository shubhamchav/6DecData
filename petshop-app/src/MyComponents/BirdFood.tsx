import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";
import { StoreBirdFood } from "./StoreBirdFood";

export function BirdFood() {
  const [birdFoods, setBirdFoods] = useState<any[]>([]);

  type foodCategoryType = {
    foodCategory: string;
  };

  const { foodCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petFood/findByFoodCategory/BirdFood').then((response) => {
      setBirdFoods(response.data);

    });
  }, []);

  const DisplayData = birdFoods.map((birdFood) => {
    return (
      <tr>
        <td>
          <StoreBirdFood {...birdFood} />
        </td>
      </tr>
    )
  })
  console.log(birdFoods);
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
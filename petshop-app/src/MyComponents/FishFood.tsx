import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";
import { StoreFishFood } from "./StoreFishFood";

export function FishFood() {
  const [fishFoods, setFishFoods] = useState<any[]>([]);

  type foodCategoryType = {
    foodCategory: string;
  };

  const { foodCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petFood/findByFoodCategory/FishFood').then((response) => {
      setFishFoods(response.data);

    });
  }, []);

  const DisplayData = fishFoods.map((fishFood) => {
    return (
      <tr>
        <td>
          <StoreFishFood {...fishFood} />
        </td>
      </tr>
    )
  })
  console.log(fishFoods);
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
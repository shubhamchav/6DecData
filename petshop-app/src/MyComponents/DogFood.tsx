import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";

export function DogFood() {
  const [dogFoods, setDogFoods] = useState<any[]>([]);

  type foodCategoryType = {
    foodCategory: string;
  };

  const { foodCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petFood/findByFoodCategory/DogFood').then((response) => {
      setDogFoods(response.data);

    });
  }, []);

  const DisplayData = dogFoods.map((dogFood) => {
    return (
      <tr>
        <td>
          <StoreDogFood {...dogFood} />
        </td>
      </tr>
    )
  })
  console.log(dogFoods);
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
import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";
import { StoreCatFood } from "./StoreCatFood";

export function CatFood() {
  const [catFoods, setCatFoods] = useState<any[]>([]);

  type foodCategoryType = {
    foodCategory: string;
  };

  const { foodCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petFood/findByFoodCategory/CatFood').then((response) => {
      setCatFoods(response.data);

    });
  }, []);

  const DisplayData = catFoods.map((catFood) => {
    return (
      <tr>
        <td>
          <StoreCatFood {...catFood} />
        </td>
      </tr>
    )
  })
  console.log(catFoods);
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
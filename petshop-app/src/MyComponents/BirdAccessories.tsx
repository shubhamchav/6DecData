import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";
import { StoreDogAccessories } from "./StoreDogAccessories";
import { StoreCatAccessories } from "./StoreCatAccessories";
import { StoreFishAccessories } from "./StoreFishAccessories";
import { StoreBirdAccessories } from "./StoreBirdAccessories";

export function BirdAccessories() {
  const [birdAccessories, setBirdAccessories] = useState<any[]>([]);

  type itemCategoryType = {
    itemCategory: string;
  };

  const { itemCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petAccessories/findByItemCategory/BirdAccessories').then((response) => {
      setBirdAccessories(response.data);

    });
  }, []);

  const DisplayData = birdAccessories.map((birdAccessory) => {
    return (
      <tr>
        <td>
          <StoreBirdAccessories {...birdAccessory} />
        </td>
      </tr>
    )
  })
  console.log(birdAccessories);
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
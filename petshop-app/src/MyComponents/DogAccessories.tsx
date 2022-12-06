import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";
import { StoreDogAccessories } from "./StoreDogAccessories";

export function DogAccessories() {
  const [dogAccessories, setDogAccessories] = useState<any[]>([]);

  type itemCategoryType = {
    itemCategory: string;
  };

  const { itemCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petAccessories/findByItemCategory/DogAccessories').then((response) => {
      setDogAccessories(response.data);

    });
  }, []);

  const DisplayData = dogAccessories.map((dogAccessory) => {
    return (
      <tr>
        <td>
          <StoreDogAccessories {...dogAccessory} />
        </td>
      </tr>
    )
  })
  console.log(dogAccessories);
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
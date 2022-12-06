import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StoreDogFood} from "./StoreDogFood";
import { StoreDogAccessories } from "./StoreDogAccessories";
import { StoreCatAccessories } from "./StoreCatAccessories";

export function CatAccessories() {
  const [catAccessories, setCatAccessories] = useState<any[]>([]);

  type itemCategoryType = {
    itemCategory: string;
  };

  const { itemCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petAccessories/findByItemCategory/CatAccessories').then((response) => {
      setCatAccessories(response.data);

    });
  }, []);

  const DisplayData = catAccessories.map((catAccessory) => {
    return (
      <tr>
        <td>
          <StoreCatAccessories {...catAccessory} />
        </td>
      </tr>
    )
  })
  console.log(catAccessories);
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
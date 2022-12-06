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

export function FishAccessories() {
  const [fishAccessories, setFishAccessories] = useState<any[]>([]);

  type itemCategoryType = {
    itemCategory: string;
  };

  const { itemCategory } = useParams() as any;


  useEffect(() => {
    axios.get('http://localhost:8080/petAccessories/findByItemCategory/FishAccessories').then((response) => {
      setFishAccessories(response.data);

    });
  }, []);

  const DisplayData = fishAccessories.map((fishAccessory) => {
    return (
      <tr>
        <td>
          <StoreFishAccessories {...fishAccessory} />
        </td>
      </tr>
    )
  })
  console.log(fishAccessories);
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
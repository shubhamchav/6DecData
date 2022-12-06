import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Pet() {
  const [pets, setPets] = useState<any[]>([]);

  type categoryIdType = {
    categoryId: number;
  };

  const{categoryId} = useParams() as any;


  useEffect(() => {
    axios.get(`http://localhost:8080/petCategory/findByCategoryId/${categoryId}`).then((response) => {
      setPets(response.data.pets);

    });
  }, []);

  const DisplayData = pets.map((pet) => {
    return (
      <tr>
        <td>
          <StoreItem {...pet} />
        </td>
      </tr>
    )
  })
  console.log(pets);
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
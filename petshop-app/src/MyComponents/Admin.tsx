import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AllPetFood from './AllPetFood';
import AllPets from './AllPets';
import AllUsers from './AllUsers';
import '../App.css';
import AllPetAccessories from './AllPetAccessories';
import axios from 'axios';
import AllPetCategories from './AllPetCategories';


type Props = {}

export default function Admin({ }: Props) {

  const navigate = useNavigate();

  const [showUser, setShowUser] = useState(true);
  const [ShowPetCategory, setShowCategory] = useState(false);
  const [showPets, setShowPets] = useState(false);
  const [showPetFood, setShowPetFood] = useState(false);
  const [showPetAccessories, setShowPetAccessories] = useState(false);

 const [token,setToken]=useState(sessionStorage.getItem("token_ADMIN"));
 axios.defaults.headers.common["Authorization"]="Bearer "+token;




  useEffect(() => {
    //const token = localStorage.getItem('userEmail');
    let header={
      headers:{
        Authorization:"Bearer"+token,
      },
    };

    var loggedin = false;
    if (token == null) {
      loggedin = true;
    }
    if (loggedin == true) {
      navigate('/home');
    }

  })

  const formWidth = {
    width: 400
  }

  const showUserData = () => {
    setShowUser(true);
    setShowCategory(false);
    setShowPets(false);
    setShowPetFood(false);
    setShowPetAccessories(false);
  }

  const showAllPetCategoryData = () =>{
    setShowUser(false);
    setShowCategory(true);
    setShowPets(false);
    setShowPetFood(false);
    setShowPetAccessories(false);
  }

  const showAllPetsData = () => {
    setShowUser(false);
    setShowCategory(false);
    setShowPets(true);
    setShowPetFood(false);
    setShowPetAccessories(false);
  }

  const showAllPetFoodData = () => {
    setShowUser(false);
    setShowCategory(false);
    setShowPets(false);
    setShowPetFood(true);
    setShowPetAccessories(false);
  }

  const showAllPetAccessoriesData = () => {
    setShowUser(false);
    setShowCategory(false);
    setShowPets(false);
    setShowPetFood(false);
    setShowPetAccessories(true);
  }


  return (
    <>
      <div className="outerDiv">
        <div className="mainContainer" style={formWidth} >
          <table>
            <tr >
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showUserData}>All Users</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showAllPetCategoryData}>All Pet Categories</Button>
              </td>
            </tr>

            <tr>
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showAllPetsData}>All Pets</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showAllPetFoodData}>All Pet Foods</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button className='rows' variant="contained" size="large" fullWidth onClick={showAllPetAccessoriesData}>All Pet Accessories</Button>
              </td>
            </tr>
          </table>



        </div>
        <div>
          {showUser && <AllUsers />}
          {ShowPetCategory && <AllPetCategories />}
          {showPets && <AllPets />}
          {showPetFood && <AllPetFood />}
          {showPetAccessories && <AllPetAccessories />}
        </div>
      </div>
    </>

  )
}
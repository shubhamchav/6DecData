import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Pet } from './MyComponents/Pet'
import Home from './MyComponents/Home'
import Login from './MyComponents/Login'
import Logout from './MyComponents/Logout'
import Navbar from './MyComponents/Navbar'
import Order from './MyComponents/Order'
import OrderNext from './MyComponents/OrderNext'
import { ShoppingCart } from './MyComponents/ShoppingCart'
import AllUsers from './MyComponents/AllUsers'
import AllPets from './MyComponents/AllPets'
import AllPetFood from './MyComponents/AllPetFood'
import EditPet from './MyComponents/EditPet'
import { DogFood } from './MyComponents/DogFood'
import { CatFood } from './MyComponents/CatFood'
import { FishFood } from './MyComponents/FishFood'
import { BirdFood } from './MyComponents/BirdFood'
import { DogAccessories } from './MyComponents/DogAccessories'
import { CatAccessories } from './MyComponents/CatAccessories'
import { FishAccessories } from './MyComponents/FishAccessories'
import { BirdAccessories } from './MyComponents/BirdAccessories'
import AddPetFood from './MyComponents/AddPetFood'
import AddPetAccessories from './MyComponents/AddPetAccessories'
import AllPetAccessories from './MyComponents/AllPetAccessories'
import Register from './MyComponents/Register'
import EditPetFood from './MyComponents/EditPetFood'
import EditPetAccessories from './MyComponents/EditPetAccessories'
import AddPetCategory from './MyComponents/AddPetCategory'
import AllPetCategories from './MyComponents/AllPetCategories'
import EditPetCategory from './MyComponents/EditPetCategory'
import AddPet from './MyComponents/AddPet'
import { FavDemo } from './MyComponents/FavDemo'
import Admin from './MyComponents/Admin'



export default function MainRoutes() {

  const Test = () => (
    <h1>Page Not Found 404 Error</h1>
  )
  return (
      <ShoppingCartProvider>
        <Routes>
            <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Navigate replace to="home"/>}/>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/pet/:categoryId' element={<Pet/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/logout' element={<Logout/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/shoppingCart' element={<ShoppingCart isOpen={true}/>}></Route>
                {/* <Route path='/cart' element={<Store/>}></Route> */}
                <Route path='/order' element={<Order isOpen={true}/>}></Route>
                <Route path='/orderNext' element={<OrderNext/>}></Route>
                <Route path='/admin' element={<Admin/>}></Route>
                <Route path='/allusers' element={<AllUsers/>}></Route>
                <Route path='/allpetCategories' element={<AllPetCategories/>}></Route>
                <Route path='/allpets' element={<AllPets/>}></Route>
                <Route path='/allpetfood' element={<AllPetFood/>}></Route>
                <Route path='/allpetAccessories' element={<AllPetAccessories/>}></Route>
                <Route path='/favourites' element={<FavDemo/>}></Route>
                <Route path='/addpet' element={<AddPet/>}></Route>
                <Route path='/addpetCategory' element={<AddPetCategory/>}></Route>
                <Route path='/addPetFood' element={<AddPetFood/>}></Route>
                <Route path='/addPetAccessories' element={<AddPetAccessories/>}></Route>
                <Route path='/editPet/:petId' element={<EditPet/>}></Route>
                <Route path='/editPetFood/:foodId' element={<EditPetFood/>}></Route>
                <Route path='/editPetAccessories/:itemId' element={<EditPetAccessories/>}></Route>
                <Route path='/editPetCategory/:categoryId' element={<EditPetCategory/>}></Route>
                <Route path='/dogFood' element={<DogFood/>}></Route>
                <Route path='/catFood' element={<CatFood/>}></Route>
                <Route path='/fishFood' element={<FishFood/>}></Route>
                <Route path='/birdFood' element={<BirdFood/>}></Route>
                <Route path='/dogAccessories' element={<DogAccessories/>}></Route>
                <Route path='/catAccessories' element={<CatAccessories/>}></Route>
                <Route path='/fishAccessories' element={<FishAccessories/>}></Route>
                <Route path='/birdAccessories' element={<BirdAccessories/>}></Route>
                
            </Route>
            
            <Route path='*' element={<Test />}/>
        </Routes>
        </ShoppingCartProvider>
  )
}

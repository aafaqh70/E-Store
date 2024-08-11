import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/header'
import Product from './components/product/product'
import { Routes, Route } from "react-router-dom";
import Show from './components/Collection/show'
import Edit from './components/product/edit'
import Add from './components/product/Add'
import Body from './components/Body/Body'


function App() {
  return(
    <>
    
    <Routes>
      <Route path='/' element = {<Body />} />
      <Route path='/collection' element = {<Show /> } />
      <Route path='/product' element = {<Product />} />
      <Route path='/product/edit' element = {<Edit />} />
      <Route path='/product/new' element = {<Add />} />
    </Routes>

    </>
  )
  
}

export default App

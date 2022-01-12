import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'animate.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import HeaderNavbar from './components/Header/HeaderNavbar'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import BrandPage from './components/BrandPage/BrandPage'
import BrandSeriesPage from './components/BrandSeriesPage/BrandSeriesPage'
import AddCars from './components/AddDB/AddCars'
import AddVideos from './components/AddDB/AddVideos'
import AddBrands from './components/AddDB/AddBrands'
import SeeAllCar from './components/SeeAllCar/SeeAllCar'
import GlobalStyle from './components/Global/GlobalStyle'
import { useStore } from '../src/components/Store'


function App() {
  const [state] = useStore()
  const [brand, setBrand] = useState('')
  useEffect(() => {
    state.brands && state.brands.map(brand => brand.brand.toLowerCase().split('-').join('') === state.brand && setBrand(state.brand))
  })

  return (
    <div>
      <Router>
        <GlobalStyle>
        <HeaderNavbar brand={brand}/>
        <Routes>
            <Route path="/v8supercars" element={<Homepage/>} />
            <Route path="/" element={<Homepage/>} />
            <Route path={'/' + state.brand} element={<BrandPage/>} />
            <Route path={'/' + state.series} element={<BrandSeriesPage/>} />
            <Route path="/addCars" element={<AddCars/>} />
            <Route path="/addVideos" element={<AddVideos/>} />
            <Route path="/addBrands" element={<AddBrands/>} />
            <Route path="/viewall" element={<SeeAllCar/>} />
            <Route path={'/:slug'} element={<Homepage/>} />

        </Routes>
        <Footer />
        </GlobalStyle>
      </Router>
    </div>
  );
}

export default App;

import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About_us'
import { Route, Routes } from 'react-router-dom'

import ProductPage from './Pages/cloths_section/ProductPage'
import AddAllClothsCategory from './Pages/adminPages/AddAllClothsCategory'
import ProductCard from './component/productcard/ProductCard'
import ProductDetailsView from './Pages/cloths_section/ProductDetailsView'

function App() {


  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/all-varieties/:category' element={<ProductPage />} />
        <Route path='/admin/add-cloths' element={<AddAllClothsCategory />} />
        <Route path='/clothscard' element={<ProductCard />} />
        <Route path='/details/product/:id' element={<ProductDetailsView />} />

      </Routes >

    </>
  )
}

export default App

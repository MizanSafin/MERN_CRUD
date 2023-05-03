import { Stack } from '@mui/material';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';

import Products from './pages/products';
import ProductForm from './pages/form';
import ProductDetails from './pages/productDetails/Product';


function App() {
  
  return (
    <>
     <Stack>
       <Navbar/>
       <Routes>
           <Route path='/' element={<ProductForm />} />
           <Route path='/products' element={<Products/>} />
           <Route path='/products/:productId' element={<ProductDetails/>}/>
       </Routes>
    </Stack>
    </>
  );
}

export default App;

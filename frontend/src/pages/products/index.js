import {  Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import ProductItem from '../../productItem/ProductItem'

function Products() {
   const {products,setProducts} = useContext(Context)
  
   
  return (
     <Stack>
        <Typography>
            {products && products.length > 0 ? products.map((product,index) => <ProductItem product={product} key={index}/>) :null}
        </Typography>
     </Stack>
  )
}

export default Products;
import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import { Card, CardContent, Typography } from '@mui/material';

function ProductDetails() {
  const {productDetails}     = useContext(Context)
  const {productName,productCreator,productTitle,productDescription,productPrice,productRating} = productDetails
  return (
    <>
        <Card>
         <CardContent>
           <Typography>{productName}</Typography>
           <Typography>{productCreator}</Typography>
            <Typography>{productTitle}</Typography>
           <Typography>{productDescription}</Typography>
           <Typography>{productPrice}</Typography>
           <Typography>{productRating}</Typography> 
           
         </CardContent>
        
      </Card>
    </>
  )
}

export default ProductDetails;
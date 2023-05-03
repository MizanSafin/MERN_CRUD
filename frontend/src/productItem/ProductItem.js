import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { Context } from '../context/Context';

function ProductItem({product}) {
    const {getProductDetailsById,deleteSingleProduct,editSingleProduct} = useContext(Context)
    const {productName,productCreator,_id} = product;
  return (
        <>
         <Card>
         <CardContent>
           <Typography>{productName}</Typography>
           <Typography>{productCreator}</Typography>
            {/* <Typography>{productTitle}</Typography>
           <Typography>{productDescription}</Typography>
           <Typography>{productPrice}</Typography>
           <Typography>{productRating}</Typography>  */}
           
         </CardContent>
         <CardActions>
             <Button onClick={()=>getProductDetailsById(_id)}>Details</Button>
             <Button onClick={()=>editSingleProduct(product)}>Edit</Button>
             <Button onClick={()=>deleteSingleProduct(_id)}>Delete</Button>
         </CardActions>
      </Card>
    </>
  )
}

export default ProductItem
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../context/Context'

const formFeilds = [
    {
      id:  "productName",
      type:"text",
      label:"Product Name"
    },
    {
      id:  "productCreator",
      type:"text",
      label:"Product Creator"
    },
    {
      id:  "productTitle",
      type:"text",
      label:"Product Title"
    },
    {
        id:  "productDescription",
        type:"text",
        label:"Product Description"
    },
    {
        id:  "productPrice",
        type:"text",
        label:"Product Price"  
    },
    {
        id:  "productRating",
        type:"text",
        label:"Product Rating" 
    }
]

function ProductForm() {
    const {form,setForm,saveDataToDB,isEdit} = useContext(Context)
  return (
     <Paper component={"form"} onSubmit={saveDataToDB}>
        <Typography>
            Product form
        </Typography>
        {
            formFeilds.map((field)=>{
                return (
                    <Box key={field
                    .id}>
                        <Typography>{field.label}</Typography>
                        <TextField name={field.id} id={field.id} type={field.type}  value={form[field.id]}
                        onChange={(event)=>
                        setForm({...form,[event.target.name]: field.id === "productPrice" || field.id === "productRating"  ? parseInt(event.target.value):event.target.value})
                        }
                        />
                    </Box>
                )
            })
        }
        <Box>
            <Button type='submit'>{isEdit ? "Edit this product" : "Add new Product"}</Button>
            <Button>Cancel</Button>
        </Box>
     </Paper>
  )
}

export default ProductForm
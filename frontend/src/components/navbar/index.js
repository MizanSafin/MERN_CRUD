import { Box, Stack } from '@mui/material'
import React from 'react'
import {Link}  from "react-router-dom"
function Navbar() {
  return (
     <Stack>
       <Box>
             <Link to={"/"}>
             Home
             </Link>
             <Link to={"/products"}>
             Products
             </Link>
       </Box>
     </Stack>
  )
}

export default Navbar
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const Context = createContext(null);


const initialState ={
    productName:"",
    productCreator:"",
    productTitle:"",
    productDescription:"",
    productPrice:"",
    productRating:""
  }
const GlobalContext = ({children})=>{

  const [form ,setForm] = useState(initialState);
  const [isDataSaved ,setIsDataSaved] = useState(false)
  const [products,setProducts]=useState([]);
  const [isEdit ,setIsEdit] = useState(false)
  const [productDetails,setProductDetails] = useState(null)
  const navigate =useNavigate();
  const location = useLocation()
  const saveDataToDB = async(e)=>{
        e.preventDefault();
        const apiResponse =await fetch(isEdit? `http://localhost:3003/products/${form._id}`: "http://localhost:3003/products",{
        method:isEdit? "PATCH" : "POST",
        headers:{"content-type":'application/json'},
        body:JSON.stringify(form)
        }
        )
        const result = await apiResponse.json();
        if(result){
          setIsDataSaved(true)
        }
        console.log(result);
  }
 
  


  const getProductsList = async()=>{
    const apiRes = await fetch(`http://localhost:3003/products`);
    const result =await apiRes.json();
    if(result && result.length > 0){
     setProducts(result)
    }
 }
  const getProductDetailsById = async(productId)=>{
    console.log(productId);
     const apiRes = await fetch(`http://localhost:3003/products/${productId}`);
     const result = await  apiRes.json();
     if(result){
      setProductDetails(result);
      navigate(`/products/${productId}`) 
     }
     
  }

  const deleteSingleProduct = async(id)=>{
    const apiResponse=await fetch(`http://localhost:3003/products/${id}`,{
      method:"delete"
    })
    console.log(apiResponse);
    if(apiResponse.ok){
      getProductsList()
    }
  }
  const editSingleProduct = async(singleItem)=>{
      setForm(singleItem);
      navigate("/")
      setIsEdit(true)
  }
  useEffect(()=>{
    if(isDataSaved){
      setForm(initialState);
      navigate("/products")
    }
 },[isDataSaved,navigate])
  useEffect(()=>{
    if(location.pathname === "/products"){
      setIsDataSaved(false)
      getProductsList()
      setIsEdit(false)
      setForm(initialState)
    }
    
  },[setProducts,location])
  return (
    <Context.Provider value={{form ,setForm ,products,setProducts,saveDataToDB,getProductDetailsById,productDetails,deleteSingleProduct,editSingleProduct,isEdit }}>
        {children}
     </Context.Provider>
  )
    
}

export default GlobalContext ;
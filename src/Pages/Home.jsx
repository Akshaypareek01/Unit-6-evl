import { Box, Button ,Image,Text} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export const Home = () => {
  const {handelLogin,handelLogout,getData,Data,handlecurrProduct} =useContext(AuthContext);

 

  // const handelClick=()=>{
  //   // handelLogout();
  //   console.log("in");
  //    <Navigate to="/moviedetails" />
  // }

  const navigate = useNavigate();
// const handleNavigate = () => {
//   navigateToDetails('/moviedetails');

// }

  useEffect( ()=>{
    getData()
   
  },[])

  const handleProductDetail = (productDetails) => {
    console.log(productDetails)
    
    handlecurrProduct(productDetails)
    navigate(`/moviedetails/${productDetails.id}`)
}

  return (
    // <Box>Home


    //   {/* <Button onClick={handelClick}>LogOut</Button> */}
    // </Box>
<Box w="30%" m="auto"  >
  {Data.map((items)=>{
      return(
        <Box key={items.id} p="30px" m="20px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Image w="50px" src={items.poster_path} alt="image"/>
          <Text>{items.title}</Text>
          <Text color="crimson">Release date:- {items.release_date}</Text>
          
          <hr />
          <Button onClick={() => handleProductDetail(items)}>more details</Button>
        </Box>
        
      )
  })}
</Box>



  )
}

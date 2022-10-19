// import { Box,Text,Image, Button } from '@chakra-ui/react';
// import React, { useContext, useState } from 'react'
// import { useEffect } from 'react';
// import { AuthContext } from '../Context/AuthContext';

// export const Product = () => {

//   const {getData} =useContext(AuthContext);

//   const [Data, setData] = useState([])

//   const [page,setpage]=useState(1);

//   const GetDataItems=async(page)=>{
//     try{
//       const data= await getData(page);
//       setData(data);
//        console.log(data)
//     }
//     catch(err){
//       console.log("err=>",err)
  
//     }
//   }

// useEffect( ()=>{
//   GetDataItems(page)
 
// },[])

// const handelPagechange=(changeBy)=>{
//   setpage(page+changeBy);
// }

//   return (
//     <Box w="80%" m="auto" mt="80px">
//       <Box  m="auto" mt="40px" mb="40px" display="flex" justifyContent="center">
//      <Button disabled={page===1} onClick={()=>handelPagechange(-1)} size="20px">Prev</Button>
//       <Button size="20px" >{page}</Button>
//       <Button size="20px"   onClick={()=>handelPagechange(1)}>Next</Button>
//      </Box>
//       <Box w="30%" m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
//         {Data.map((items)=>{
//             return(
//               <Box key={items.id} p="30px" border="1px solid red">
//                 <Image w="50px" src={items.img1} alt="image"/>
//                 <Text>{items.title}</Text>
//                 <Text color="crimson">Price {items.actual_price}</Text>
//                 <Text>Hello Akshay</Text>
//                 <hr />
//               </Box>
              
//             )
//         })}
//       </Box>

     
      
//     </Box>
//   )
// }

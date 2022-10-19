import { Box ,Text,Button} from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';

export const ShowBookedMovie = () => {
    const {getData2,Data2} =useContext(AuthContext);
    useEffect( ()=>{
        getData2()
       
      },[])

      const handleProductCancel=()=>{
        console.log("cancel ticket")
      }
  return (
    <Box>
        {Data2.map((items)=>{
      return(
        <Box key={items.id} p="30px" m="20px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          
          <Text>{items.movie_id}</Text>
          <Text color="crimson">Release date:- {items.name}</Text>
          <Text color="crimson">Release date:- {items.seat}</Text>
          <hr />
          <Button onClick={() => handleProductCancel(items)}>Cancel</Button>
        </Box>
        
      )
  })}
    </Box>
    
  )
}

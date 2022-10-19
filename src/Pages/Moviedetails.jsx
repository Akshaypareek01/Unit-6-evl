import { Box ,Image,Text,Button} from '@chakra-ui/react';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export const Moviedetails = () => {
    const {currProduct} =useContext(AuthContext);
    console.log(currProduct)

    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate('/');
    
    }

    const navigateToDetails = useNavigate();
    const handleNavigate2 = () => {
      navigateToDetails('/showBookedMovie');
    
    }
  return (
    <Box>
        <Box display="Flex"  p="20px">
            <Box  mr="100px">
                <Image h="500px"src={currProduct.poster_path} alt="img"/>
                <Text>{currProduct.title}</Text>
            </Box>
            <Box  mt="80px">
                <Text mb="10px" color="crimson">Release Data:-{currProduct.release_date}</Text>
                <Text mb="10px" w="50%">Overview :- {currProduct.overview}</Text>
                <Text mb="10px">vote_average :- {currProduct.vote_average}</Text>
                <Text mb="10px">popularity :- {currProduct.popularity}</Text>

                <Box  >
                <Button mr="30px">Book Tickets</Button>
                <Button mr="30px" onClick={handleNavigate2}>Show Booking Details</Button>
                <Button mr="30px" onClick={handleNavigate}>Go to Home Page</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

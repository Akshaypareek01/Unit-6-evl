import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Flex w='70%' alignItems='center' gap='2' m="auto" mt="10px">
  <Box p='2'>
    <Heading size='xl' color="teal">Book Movie</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Link to='/'><Button colorScheme='teal'>Home</Button></Link>
    <Link to='/products'><Button colorScheme='teal'>Product</Button></Link>
    <Link to='/bookings'><Button colorScheme='teal'>Bookings</Button></Link>
    <Link to='/login'><Button colorScheme='teal'>Log in</Button></Link>
  
    
    
  </ButtonGroup>
</Flex>
  )
}

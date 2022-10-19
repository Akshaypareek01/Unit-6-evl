import React, { useContext } from 'react'
import { Box, Button, ButtonGroup, Flex, Heading, Input, InputGroup, InputRightElement, Spacer, Stack,Text } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
export const Login = () => {

  const [show, setShow] = React.useState(false)
  const handleshow = () => setShow(!show)

  const navigateToDetails = useNavigate();


  const {isAuth,handelLogin,handelLogout} =useContext(AuthContext);

  const [userDetails,setuserDetails] = React.useState({email:"",password:""})
  const {email,password} =userDetails;

  const handelClick=()=>{
    // console.log(userDetails)
    // const {email,password} =userDetails;
    
    // if(email==="akshay96102!@gmail.com" && password==="akshay0111"){
    //   console.log("user Allowed")
    //   handelLogin()
      
    //     navigateToDetails('/');

    fetch(`https://reqres.in/api/login`,{
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {'Content-Type': 'application/json'}
    })
    .then(()=>handelLogin())
    .catch(()=>handelLogout())

      
  };
  
if(isAuth){
  return <Navigate to="/" />
}
  
 


  const handelChange=(e)=>{
    const {name,value} = e.target;
    setuserDetails({
     ...userDetails,
      [name]:value
    })
  }

  return (
    <Box w="70%" h="500px" m="auto" display="flex" justifyContent="center" alignItems="center">
    <Box w="40%" p="50px" m="auto"  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px">
      <Text color="teal" ml="40%" mb="30px" fontSize="20px">Login</Text>
      <Stack spacing={3}>
         <Input placeholder='Email' type="email"  size='xs' name="email" value={email}  onChange={handelChange} />


         <InputGroup size='xs'>
      <Input
        pr='4.5rem'
        name='password'
        type={show ? 'text' : 'password'}
        value={password}
        placeholder='Enter password'
        onChange={handelChange}
      />
      <InputRightElement width='4.5rem'>
        <Button h='auto' size="xs" onClick={handleshow}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
      </Stack>


      <Box mt="20px">
      <Button size="xs" ml="40%" colorScheme='teal' onClick={handelClick}>Login</Button>
      </Box>
      
    </Box>
    </Box>
  )
}

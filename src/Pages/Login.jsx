import React, { useContext, useState } from 'react'
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import Navbar from '../Components/Navbar'
import { getToken } from '../Redux/action'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContextApi/ContextProvider'

const Login = () => {

    const { token, setToken, LoginAuth, setLoginAuth } = useContext(AuthContext);


    const [Inp, setInp] = useState({})
    const handleInp = (e) => {
        setInp({ ...Inp, [e.target.name]: e.target.value })
    }

    const nevigate = useNavigate();
    const handleLogin = async () => {
        try {
            const res = await fetch(`http://localhost:4000/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Inp)
            })
            const ans = await res.json();
            setToken(ans.token)
            setLoginAuth(res.ok)
            console.log(LoginAuth);
            nevigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    const handleLogOut = ()=>{
        setToken("Empty") ;
        setLoginAuth(false) ;
        console.log(token) ;
    }
    return (
        <Box bg={'white'} >
            <Navbar />
            <Box w={['100%', '60%','60%', '40%']} m={'auto'} mt={'10vh'} >
                <Box px={10} >
                    <Text fontSize={30} fontWeight={700}color={'gray'} >Admin Email :</Text>
                    <Input border={'1px solid gray'} type='email' name='email' required onChange={(e) => handleInp(e)} />
                </Box>
                <Box px={10} my={5}>
                    <Text fontSize={30} fontWeight={700}color={'gray'} >Admin Password :</Text>
                    <Input border={'1px solid gray'} type='text' name='password' required onChange={(e) => handleInp(e)} />
                </Box>
                <Flex p={5} w={'fit-content'}m={'auto'} >
                    <Box mr={10}>
                        <Button fontSize={20} onClick={handleLogin} color={'#f17a1f'} border={'1px solid #f17a1f'} bg={'none'} >
                            Login
                        </Button>
                    </Box>
                    <Box>
                        <Button onClick={handleLogOut} color={'#f17a1f'} border={'1px solid #f17a1f'} bg={'none'} >
                            Logout
                        </Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Login

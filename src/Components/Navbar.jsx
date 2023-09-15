import React, { useEffect, useState } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Input, InputGroup, InputRightAddon, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const dispatch = useDispatch() ;
    const [Serch,setSerch] = useState("") ;
    const[btn,setBtn] = useState("Search") ;
    const handleSearchBtn=(e)=>{
        if( btn === "Search"){
            const payload = {
                Serch
            }
            dispatch(searchMovies(payload)) ;
            setBtn("Reset") ;
        }
        else{
            const payload = {
                Serch:""
            }
            dispatch(searchMovies(payload)) ;
            document.getElementById("SerchInp").value = "" ;
            setBtn("Search") ;
        }
     }

    const [toggleSearch, setToggleSearch] = useState(false);
    const handleSearch = () => {
        if (toggleSearch === false) {
            setToggleSearch(true);
        }
        else {
            setToggleSearch(false);
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()

    const nevigate = useNavigate() ;
    const handleCreateMovies = ()=>{
        nevigate("/createMovies/upload")
    }
    return (
        <Box bg={'#4285f4'}boxShadow='xl'>
            <Flex w={['100%', '100%', '100%', '80%']} m={'auto'} >
                <Box onClick={onOpen} color={'white'} display={['box', 'box', 'box', 'none']} my={2} p={1} mx={3} fontSize={30} border={'2px solid white'} >
                    <GiHamburgerMenu />
                </Box>
                <Spacer />
                <Box onClick={()=>handleCreateMovies()} minH={'6vh'} >
                    <Image src='https://downloadhub.photos/wp-content/uploads/2017/03/downhub.png' />
                </Box>
                <Spacer />
                <Flex display={['none', 'none', 'none', 'flex']} color={'white'} my={'auto'} fontSize={15} fontWeight={600} >
                    <Box mx={3} >
                        <Text>HOME</Text>
                    </Box>
                    <Box mx={3}>
                        <Text>300MB Movies</Text>
                    </Box>
                    <Box mx={3}>
                        <Text>Bollywood Movies</Text>
                    </Box>
                    <Box mx={3}>
                        <Text>Dual Audio & Dubbed</Text>
                    </Box>
                </Flex>
                <Spacer />
                <Flex display={['none', 'flex', 'flex', 'flex']} maxW={'30vw'} my={'auto'}>
                    <Input id='SerchInp' onChange={(e)=>setSerch(e.target.value)} borderRadius={0} placeholder='Search here..' bg={'white'} />
                    <Button onClick={(e)=>handleSearchBtn(e)} color={'white'} borderRadius={'none'} bg={'#f17a1f'}>{btn}</Button>
                </Flex>
                <Box onClick={handleSearch} color={'white'} display={['box', 'none', 'none', 'none']} my={2} p={1} mx={3} fontSize={30} border={'2px solid white'} >
                    <BiSearchAlt2 />
                </Box>
            </Flex>
            <Box>
                {
                    toggleSearch ? (
                        <Flex mx={5} display={['flex', 'none', 'none', 'none']} maxW={'100%'} my={'auto'} py={1}>
                            <Input id='SerchInp' onChange={(e)=>setSerch(e.target.value)} borderRadius={0} placeholder='Search here..' bg={'white'} />
                    <Button onClick={(e)=>handleSearchBtn(e)} color={'white'} borderRadius={'none'} bg={'#f17a1f'}>{btn}</Button>
                        </Flex>
                    ) : ""
                }
            </Box>
            <>
                <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                        <DrawerCloseButton fontSize={15} mt={2} border={'1px solid black'} />
                        <DrawerBody>
                            <Box fontSize={20} fontWeight={600} >
                                <Box m={3} >
                                    <Text>HOME</Text>
                                </Box>
                                <Box m={3}>
                                    <Text>300MB Movies</Text>
                                </Box>
                                <Box m={3}>
                                    <Text>Bollywood Movies</Text>
                                </Box>
                                <Box m={3}>
                                    <Text>Dual Audio & Dubbed</Text>
                                </Box>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>
        </Box>
    )
}

export default Navbar

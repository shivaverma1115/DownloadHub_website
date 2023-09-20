import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Input, InputGroup, InputRightAddon, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContextApi/ContextProvider';
const Navbar = () => {
    const { serchbox, setSearchBox , setBtn} = useContext(AuthContext);


    const [toggleSearch, setToggleSearch] = useState(false);
    const handleSearch = () => {
        if (toggleSearch === false) {
            setToggleSearch(true);
            setBtn(false)
        }
        else {
            setToggleSearch(false);
            setBtn(true)
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()

    const nevigate = useNavigate();
    const handleCreateMovies = () => {
        nevigate("/adminPage")
    }
    const handleLogin = () => {
        nevigate("/login")
    }
    const handleHome = () => {
        setBtn(false) ;
        setSearchBox("");
        nevigate("/")
    }
    return (
        <Box bg={'#4285f4'} boxShadow='xl'>
            <Flex w={['100%', '100%', '100%', '80%']} m={'auto'} >
                <Box onClick={onOpen} color={'white'} display={['box', 'box', 'box', 'none']} my={2} p={1} mx={3} fontSize={30} border={'2px solid white'} >
                    <GiHamburgerMenu />
                </Box>
                <Spacer />
                <Box onClick={() => handleCreateMovies()} minH={'6vh'} >
                    <Image src='https://downloadhub.singles/wp-content/uploads/2017/03/downhub.png' />
                </Box>
                <Spacer />
                <Flex display={['none', 'none', 'none', 'flex']} color={'white'} my={'auto'} fontSize={15} fontWeight={600} >
                    <Box cursor={'pointer'} mx={3} onClick={handleHome}  >
                        <Text>HOME</Text>
                    </Box>
                    <Box mx={3}>
                        <Text>300MB Movies</Text>
                    </Box>
                    <Box mx={3}>
                        <Text>Bollywood Movies</Text>
                    </Box>
                    <Box cursor={'pointer'} mx={3} onClick={handleLogin} >
                        <Text>Admin Login</Text>
                    </Box>
                </Flex>
                <Spacer />
                <Flex onClick={() => handleHome()} display={['none', 'flex', 'flex', 'flex']} maxW={'30vw'} my={'auto'}>
                    <Input onChange={(e) => setSearchBox(e.target.value)} borderRadius={0} placeholder='Search here..' bg={'white'} />
                    <Button color={'white'} borderRadius={'none'} bg={'#f17a1f'}>Search</Button>
                </Flex>
                <Box onClick={handleSearch} color={'white'} display={['box', 'none', 'none', 'none']} my={2} p={1} mx={3} fontSize={30} border={'2px solid white'} >
                    <BiSearchAlt2 />
                </Box>
            </Flex>
            <Box>
                {
                    toggleSearch ? (
                        <Flex mx={5} display={['flex', 'none', 'none', 'none']} maxW={'100%'} my={'auto'} py={1}>
                            <Input onChange={(e) => setSearchBox(e.target.value)} borderRadius={0} placeholder='Search here..' bg={'white'} />
                            <Button color={'white'} borderRadius={'none'} bg={'#f17a1f'}>Search</Button>
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
                        <DrawerBody fontSize={20} color={'gray'} >
                            <Box py={2} fontWeight={700}px={5} cursor={'pointer'} mx={3} onClick={handleHome}  >
                                <Text>HOME</Text>
                            </Box>
                            <Box py={2} fontWeight={700}px={5} mx={3}>
                                <Text>300MB Movies</Text>
                            </Box>
                            <Box py={2} fontWeight={700}px={5} mx={3}>
                                <Text>Bollywood Movies</Text>
                            </Box>
                            <Box py={2} fontWeight={700}px={5} cursor={'pointer'} mx={3} onClick={handleLogin} >
                                <Text>Admin Login</Text>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>
        </Box>
    )
}

export default Navbar

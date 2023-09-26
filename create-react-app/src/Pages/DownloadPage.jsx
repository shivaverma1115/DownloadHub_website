import React, { useContext } from 'react'
import { Box, Button, Flex, Spacer, Text, WrapItem, useToast } from "@chakra-ui/react"
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdAssignmentInd } from 'react-icons/md';
import { BiLogInCircle } from 'react-icons/bi';

import movie_url from "../Movies/Client Promo Video.mp4"
import { AuthContext } from '../AuthContextApi/ContextProvider';
import Navbar from '../Components/Navbar';

const DownloadPage = () => {
    const toast = useToast()
    const {Ele} = useContext(AuthContext) ;
    const { Title, Year, File_Size,movie_drive_link } = Ele ;

    const handledownload = ()=>{
        toast({
            title: 'Your movie is downloading',
            status: 'success',
            duration: 10000,
            isClosable: true,
        })
    }

    return (
        <Box minH={'100vh'} >
            <Navbar/>
            {/* <Flex color={'white'} bg={'#3d5b99'} px={5}>
                <Box fontSize={30} my={'auto'}><AiOutlineCloudDownload /></Box>
                <Text fontWeight={100} p={3} fontSize={20} >UPLOADHUB</Text>
                <Spacer />
                <Flex pt={2} display={['none', 'none', 'flex']} >
                    <Box mx={5} color={'white'} bg={'#3d5b99'}>
                        <Box fontSize={20} w={'fit-content'} m={'auto'}><BiSupport /></Box>
                        <Text fontWeight={600} fontSize={15} >Support</Text>
                    </Box>
                    <Box mx={5} color={'white'} bg={'#3d5b99'}>
                        <Box fontSize={20} w={'fit-content'} m={'auto'}><RiMoneyDollarCircleLine /></Box>
                        <Text fontWeight={600} fontSize={15} >Earn Money</Text>
                    </Box>
                    <Box mx={5} color={'white'} bg={'#3d5b99'}>
                        <Box fontSize={20} w={'fit-content'} m={'auto'}><MdAssignmentInd /></Box>
                        <Text fontWeight={600} fontSize={15} >Sign in</Text>
                    </Box>
                    <Box mx={5} color={'white'} bg={'#3d5b99'}>
                        <Box fontSize={20} w={'fit-content'} m={'auto'}><BiLogInCircle /></Box>
                        <Text fontWeight={600} fontSize={15} >Sign up</Text>
                    </Box>
                </Flex>
            </Flex> */}
            <Flex bg={'white'} display={['box', 'flex', 'flex']} border={'1px solid gray'} p={5} w={'50%'} m={'auto'} my={40} >
                <Box>
                    <Box fontSize={60}><AiOutlineCloudDownload /></Box>
                    <Text>{Title}</Text>
                    <Text>Uploaded on {Year}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Text>Downloaded</Text>
                    <Text>291</Text>
                </Box>
                <Spacer />
                <Box>
                    <Text>Size</Text>
                    <Text>{File_Size}</Text>
                </Box>
            </Flex>
            <WrapItem boxShadow='xl' m={'auto'} w={'fit-content'} >
                <Button onClick={()=>handledownload()} p={10} fontSize={'40px'} colorScheme='green'>
                    <a download href= {movie_drive_link} >
                        Download Here
                    </a>
                </Button>
            </WrapItem>
        </Box>
    )
}

export default DownloadPage

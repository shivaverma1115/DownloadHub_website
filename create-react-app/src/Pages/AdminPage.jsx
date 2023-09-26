import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react';
import Navbar from '../Components/Navbar'
import CreateMovie from './CreateMovie';
import { Link } from 'react-router-dom';


const AdminPage = () => {
    const links = [
        { title: "(1) Create Movies", path: "/adminPage" },
    ]
    return (
        <Box bg={'white'}>
            <Navbar />
            <Flex display={['box','box','box','box','flex']} w={['100%','100%','80%']} m={'auto'} pt={'2vh'}>
                <Box w={['100%','100%','80%']} m={'auto'} mt={'0vh'} px={5} >
                    <Text fontSize={25} fontWeight={800} >Create a new product</Text>
                    <br />
                    <Text px={'10vh'} fontSize={15} fontWeight={700} color={'gray'} >Dashboard / Create Movie</Text>
                    <Box >
                        <Text fontSize={20} fontWeight={700}>Details</Text>
                        <Text color={'gray'} fontSize={13} fontWeight={400}>Title,short description,images...</Text>
                    </Box>
                    <Box w={'100%'} m={'auto'} fontSize={25} fontWeight={700} mt={[0,0,'10vh']} >
                        {links.map((ele, i) => {
                            return <Link key={i} to={ele.path}><Text p={5}>{ele.title}</Text></Link>
                        })}
                    </Box>
                </Box>
                <Spacer />
                <CreateMovie />
            </Flex>
        </Box>
    )
}

export default AdminPage

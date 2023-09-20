import React, { useContext } from 'react'
import { FaHotjar } from 'react-icons/fa';
import { Box, Text } from "@chakra-ui/react";
import Buttons from './Buttons';
import Information from './Information';
import Movies from './Movies';
import Navbar from '../Components/Navbar';
import Pagination from './Pagination';
import { AuthContext } from '../AuthContextApi/ContextProvider';

const Home = () => {
  const {btn} = useContext(AuthContext) ;
  return (
    <Box>
      <Navbar />
      {
        btn ? (
          <Box w={'fit-content'} m={'auto'} >
            <Buttons />
          </Box>
        ) : ""
      }
      <Information inform1={"This Is Our Official Website All other Are Fake Real Url Is "} inform2={" downloadhub.photos"} />
      <Information inform1={<FaHotjar />} inform2={"Latest Movies"} />
      <Box w={'fit-content'} m={'auto'}>
        <Movies templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} />
      </Box>
      <Box>
        <Pagination />
      </Box>
      <Box bg={'#4285f4'}>
        <Text display={['box', 'box', 'Flex', 'Flex']} fontWeight={500} fontSize={18} bg={'#4285f4'} w={'fit-content'} m={'auto'} my={4} p={2} color={'white'} textAlign={'center'}  >
          2023 @ DownloadHub.singles All Rights Reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Home

import React from 'react'
import { FaHotjar } from 'react-icons/fa';
import { Box } from "@chakra-ui/react";
import Buttons from './Buttons';
import Information from './Information';
import Movies from './Movies';
const Home = () => {
  return (
    <Box>
      <Box w={'fit-content'}m={'auto'} >
      <Buttons />
      </Box>
      <Information inform1={"This Is Our Official Website All other Are Fake Real Url Is "} inform2={" downloadhub.photos"} />
      <Information inform1={<FaHotjar />} inform2={"Latest Movies"} />
      <Box w={['90%','90%','90%','70%']} m={'auto'}>
        <Movies />
      </Box>
    </Box>
  )
}

export default Home

import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom"

const Information = ({ inform1, inform2, inform2Color }) => {
    return (
        
        <Flex display={['box', 'box', 'Flex', 'Flex']} fontWeight={700} fontSize={15} bg={'#4285f4'} w={['80%', '80%', '80%', '60%']} m={'auto'} my={4} p={2} >
            <Box color={'white'}>{inform1}</Box>
            <Box ml={2} my={'auto'}>
                <Link>{inform2}</Link>
            </Box>
        </Flex>
    )
}

export default Information

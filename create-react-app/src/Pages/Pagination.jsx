import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../AuthContextApi/ContextProvider';

const Pagination = () => {
    const {page, setPage} = useContext(AuthContext) ;
    return (
        <Flex fontWeight={700} fontSize={20} w={'fit-content'} m={'auto'} >
            <Button isLoading={page === 1} spinner='none' m={10} color={'#f17a1f'} border={'1px solid #f17a1f'} bg={'none'} onClick={() => setPage(page - 1)} >Prev</Button>
            <Text my={'auto'}>{page}</Text>
            <Button isLoading={page === 2} spinner={'none'} m={10} color={'#f17a1f'} border={'1px solid #f17a1f'} bg={'none'} onClick={() => setPage(page + 1)}>Next</Button>
        </Flex>
    )
}

export default Pagination

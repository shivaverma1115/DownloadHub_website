import { Box, Button, Flex, Grid, GridItem, Skeleton, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContextApi/ContextProvider';

const Movies = ({ templateColumns }) => {
    const {Movies,isLoading,Ele, setEle,page, setPage} = useContext(AuthContext) ;

    const nevigate = useNavigate();
    const handleMovieDetails = (ele) => {
        nevigate("/movieDetails");
        setEle(ele) ;
    }

    return (
        <>

            <Grid templateColumns={templateColumns} gap={5}>
                {
                    Movies.map((ele, i) => {
                        return (
                            <GridItem onClick={() => handleMovieDetails(ele)} overflow={'hidden'} key={i} w={'20vh'} bg={'black'} cursor={'pointer'} >
                                <Box>
                                    {isLoading ? (
                                        <Skeleton height='35vh' />
                                    ) : (
                                        <Box h={'35vh'} w={'100%'} fontWeight={500}
                                            _hover={{ transform: 'scale(1.3)', opacity: "70%", transition: 'transform .3s' }}
                                            bgRepeat={'no-repeat'}
                                            bgSize={'cover'}
                                            bgImage={ele.Poster}>
                                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                                            <Box bgImage={'https://img.freepik.com/premium-vector/gradient-transparent-background-dark-shadow-vertical-pattern-vector-illustration_53562-14943.jpg'} w={'fit-content'} textAlign={'center'} mx={'auto'} opacity={'100%'} overflow={'hidden'} maxH={'9vh'} color={'white'}>{ele.Title}</Box>
                                        </Box>
                                    )}
                                </Box>
                            </GridItem>
                        )
                    })
                }
            </Grid>

            <Flex fontWeight={700} fontSize={20} w={'fit-content'}m={'auto'} >
                <Button isLoading={page===1}spinner='none' m={10} color={'#f17a1f'} border={'1px solid #f17a1f'} bg={'none'} onClick={() => setPage(page - 1)} >Prev</Button>
                <Text my={'auto'}>{page}</Text>
                <Button isLoading={page===2}spinner={'none'} m={10} color={'#f17a1f'} border={'1px solid #f17a1f'} bg={'none'} onClick={() => setPage(page + 1)}>Next</Button>
            </Flex>
        </>
    )
}

export default Movies

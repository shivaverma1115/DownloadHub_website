import { Box, Grid, GridItem, Skeleton } from '@chakra-ui/react';
import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContextApi/ContextProvider';

const Movies = ({ templateColumns }) => {
    const { Movies, isLoading, setEle } = useContext(AuthContext);

    const nevigate = useNavigate();
    const handleMovieDetails = (ele) => {
        nevigate("/movieDetails");
        setEle(ele);
        window.scrollTo(0,0) ;
    }
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1] ;
    console.log(isLoading) ;
    return (
        <>
            {isLoading?(
                <Grid templateColumns={templateColumns} gap={5}>
                {
                    arr.map((ele, i) => {
                        return (
                            <GridItem overflow={'hidden'} key={i} w={'20vh'} bg={'black'} >
                                <Box>
                                    {isLoading ? (
                                        <Skeleton height='35vh' />
                                    ) : (
                                        <Box h={'35vh'} w={'100%'} fontWeight={500}
                                            _hover={{ transform: 'scale(1.3)', opacity: "70%", transition: 'transform .3s' }}
                                            bgRepeat={'no-repeat'}
                                            bgSize={'cover'}>
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
            ):(
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
            )}
        </>
    )
}

export default Movies

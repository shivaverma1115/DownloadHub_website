import { Box, Flex, Grid, GridItem, Skeleton, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails, getMoviesFailer, getMoviesRequest, getMoviesSuccess } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

const Movies = ({ templateColumns }) => {
    const dispatch = useDispatch();
    const Serch = useSelector((state) => state.Serch.Serch) || "";
    const fetchData = async () => {
        try {
            dispatch(getMoviesRequest())
            const res = await fetch(`https://downloadhubbackened.vercel.app/movies?title=${Serch}&limit=12`);
            const ans = await res.json();
            dispatch(getMoviesSuccess(ans))
        } catch (err) {
            dispatch(getMoviesFailer());
        }
    }

    useEffect(() => {
        fetchData();
    }, [Serch])

    let movies = useSelector((store) => store.movies);
    const isLoading = useSelector((store) => store.isLoading);

    const [curr, setCurr] = useState(1);
    const [perPage, setPerPage] = useState(12);

    const lastPostIndex = curr * perPage;
    const firstPostIndex = lastPostIndex - perPage;
    // let currmovies = movies.slice(firstPostIndex, lastPostIndex)

    if( isLoading ){
        movies = [1,2,3,4,5,6,7,8,9,1,1,1,1]
    }

    // let pages = [];
    // for (var i = 1; i <= Math.ceil(movies.length / perPage); i++) {
    //     pages.push(i);
    // }

    const nevigate = useNavigate();
    const handleMovieDetails = (ele) => {
        nevigate("/movieDetails");
        dispatch(getMovieDetails(ele));
    }

    return (
        <>
            
                    <Grid templateColumns={templateColumns} gap={5}>
                        {
                            movies.map((ele, i) => {
                                return (
                                    <GridItem onClick={() => handleMovieDetails(ele)} overflow={'hidden'} key={i} w={'20vh'} bg={'black'} cursor={'pointer'} >
                                        <Box>
                                            {isLoading?(
                                                <Skeleton height='35vh' />
                                            ):(
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

            {/* <Flex w={'fit-content'} m={'auto'}>
                <Flex w={'fit-content'} m={'auto'} my={10}>
                    {
                        pages.map((ele, i) => {
                            return <Text cursor={'pointer'} onClick={() => setCurr(i + 1)} key={i} border={"2px solid #f17a1f"} color={'#f17a1f'} mx={5} fontSize={20} fontWeight={500} px={7} py={0.7}>
                                {ele}
                            </Text>
                        })
                    }
                </Flex>
            </Flex> */}
        </>
    )
}

export default Movies

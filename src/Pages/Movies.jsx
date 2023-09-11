import { Box, Button, Flex, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesFailer, getMoviesRequest, getMoviesSuccess } from '../Redux/action';

const Movies = () => {
    const dispatch = useDispatch();
    const Serch = useSelector((state) => state.Serch.Serch) || "";
    const fetchData = async () => {
        try {
            dispatch(getMoviesRequest())
            const res = await fetch(`https://downlord-hub-mongo-db-33ir.vercel.app/movies?title=${Serch}`);
            const ans = await res.json();
            dispatch(getMoviesSuccess(ans.movies))
        } catch (err) {
            dispatch(getMoviesFailer());
        }
    }

    useEffect(() => {
        fetchData();
    }, [Serch])

    const movies = useSelector((store) => store.movies);

    const [curr, setCurr] = useState(1);
    const [perPage, setPerPage] = useState(12);

    const lastPostIndex = curr * perPage;
    const firstPostIndex = lastPostIndex - perPage;
    const currmovies = movies.slice(firstPostIndex, lastPostIndex)

    let pages = [] ;
    for ( var i = 1 ;i <= Math.ceil(movies.length/perPage);i++){
        pages.push(i) ;
    }
    console.log(pages) ;
    
    return (
        <>
            <Grid templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)']} gap={5}>
                {
                    currmovies.map((ele, i) => {
                        return (
                            <GridItem key={i} w={'100%'} maxH={'100%'} overflow={'hidden'} bg={'black'} cursor={'pointer'} >
                                <Box w={'fit-content'} m={'auto'}>
                                    <Img _hover={{ transform: "scale(1.3)", opacity: "70%" }} transition={'transform 0.3s'}
                                        src={ele.Poster}
                                    />
                                    <Text position={'relative'} top={'-2vh'} w={'90%'} mx={'auto'} fontWeight={700} color={'white'}>
                                        {ele.Title}
                                    </Text>
                                </Box>
                            </GridItem>
                        )
                    })
                }
            </Grid>
            <Flex w={'fit-content'} m={'auto'}>
                <Flex w={'fit-content'} m={'auto'} my={10}>
                    {/* <Button _hover={{bg:"none"}} borderRadius={'none'} color={'#f17a1f'} border={"2px solid #f17a1f"} bg={'white'} onClick={() => setCurr(curr - 1)} my={'auto'} colorScheme='blue'>Prev</Button>
                    <Button _hover={{bg:"none"}} borderRadius={'none'} color={'#f17a1f'} border={"2px solid #f17a1f"} bg={'white'} onClick={() => setCurr(curr + 1)} isLoading={false} my={'auto'} colorScheme='blue'>Next</Button> */}
                    {
                        pages.map((ele,i)=>{
                            return <Text key={i} border={"2px solid #f17a1f"} fontSize={20} fontWeight={700} px={7} mx={5} py={0.7}>{ele}</Text>
                        })
                    }
                </Flex>
            </Flex>
        </>
    )
}

export default Movies

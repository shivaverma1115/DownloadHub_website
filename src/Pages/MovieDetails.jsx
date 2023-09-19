import { Box, Flex, Grid, GridItem, Image, Img, Spacer, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import Information from './Information'
import Movies from './Movies';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../AuthContextApi/ContextProvider';

const MovieDetails = () => {
    const { Ele, LoginAuth, token , setPage} = useContext(AuthContext);
    const {  Title, Poster, Directed, Year, Type, Languages, Film_Stars, Movie_Quality, File_Size, Story_line, big_img, movie_drive_link } = Ele


    const nevigate = useNavigate();
    const handleSingleDownlord = () => {
        nevigate('/generateLink')
    }
    const handleEdit = () => {
        nevigate('/adminPage/edit')
    }
    
    const handleDelete = async () => {
        const { _id, user_id } = Ele
        try {
            const res = await fetch(`https://downlordhubmongodb-production.up.railway.app/movies/${_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                // body: JSON.parse(user_id)
            })
            .then((res)=>console.log(res))
            .then(()=>nevigate("/"))
            .then(()=>setPage(1))
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Box minH={'93vh'}>
            <Navbar />
            <Information
                inform1={"This Is Our Official Website All other Are Fake Real Url Is"}
                inform2={"downloadhub.singles"}
            />
            <Flex w={['100%', '100%', '100%', '100%', '70%']} m={'auto'} display={['box', 'box', 'box', 'box', 'flex']} >
                <Box w={['100%', '100%', '100%', '100%', '70%']} p={5}>
                    <Text color={'white'} fontWeight={700} p={2} bg={'#4285f4'} >{Title}</Text>
                    <Flex>
                        <Text color={'white'} fontWeight={700} p={2} bg={'#4285f4'} px={5} my={5} w={'fit-content'} >{Year}</Text>
                        {LoginAuth ? (
                            <>
                                <Spacer />
                                <Text color={'white'} fontWeight={700} p={2} bg={'black'} px={5} my={5} w={'fit-content'} onClick={handleEdit} >Edit</Text>
                                <Spacer />
                                <Text color={'white'} fontWeight={700} p={2} bg={'red'} px={5} my={5} w={'fit-content'} onClick={(_id, user_id) => handleDelete(_id, user_id)} >Delete</Text>
                            </>
                        ) : ""}
                    </Flex>
                    <Box p={2} bg={'white'} textAlign={'center'}>
                        <Text py={5} fontSize={20} fontWeight={600}>{Title}</Text>
                        <Box border={'1px solid black'} p={3} boxShadow='dark-lg' w={'fit-content'} m={'auto'} >
                            <Img src={Poster} />
                        </Box>
                        <Box w={'fit-content'} m={'auto'} mt={5} >
                            <Img src={'https://imgshare.info/images/2020/01/06/ef902427ce8bd0e7beb6433610582ac6.png'} />
                        </Box>
                        <Flex px={5} mt={10} fontWeight={500} >
                            <Text color={'#f17a1f'} mr={3} >Show:</Text>
                            <Text color={'gray'}>{Title}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >IMDB Ratings:</Text>
                            <Text color={'gray'}>7.5 / 10</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >Creators:</Text>
                            <Text color={'gray'}>{Film_Stars}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >Released Date:</Text>
                            <Text color={'gray'}>{Year}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >Directed By:</Text>
                            <Text color={'gray'}>{Directed}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >Languages:</Text>
                            <Text color={'gray'}>{Languages}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >Film Stars:</Text>
                            <Text color={'gray'}>{Film_Stars}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >Movie Quality:</Text>
                            <Text color={'gray'}>{Movie_Quality}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >File Size:</Text>
                            <Text color={'gray'}>{File_Size}</Text>
                        </Flex>
                        <Flex px={5} fontWeight={500}>
                            <Text color={'#f17a1f'} mr={3} >Story:</Text>
                            <Text color={'gray'} textAlign={'left'}>{Story_line}</Text>
                        </Flex>
                        <Box w={'80%'} m={'auto'} my={5} >
                            <Image src={big_img} />
                        </Box>
                        <Flex textAlign={'center'} fontSize={20} fontWeight={700}>
                            <Text>Download The Complete {Title} </Text>
                        </Flex>
                        <Box p={5} m={'auto'} w={'fit-content'} >
                            <Image src='https://imgshare.info/images/2018/07/13/s8JKvN7.png' />
                        </Box>
                        <Box>
                            <Box w={'90%'} m={'auto'} boxShadow='dark-lg' p={3}>
                                <Text color={'red'} fontSize={20} fontWeight={600}>|| 480p Links ||</Text>
                            </Box>

                            <Box p={5}>
                                <Grid
                                    cursor={'pointer'}
                                    templateColumns='repeat(4, 1fr)'
                                    gap={4} w={'100%'} m={'auto'}
                                >
                                    <GridItem colSpan={2} bg={'#4285f4'} >
                                        <Text boxShadow='lg' border={'1px solid black'} p={3} h={'100%'} fontSize={[10, 15, 20]} fontWeight={800} color={'white'} >
                                            DIRECT LINK (FAST)
                                        </Text>
                                    </GridItem>
                                    <GridItem colSpan={2} bg={'red'} >
                                        <Text boxShadow='lg' border={'1px solid black'} p={3} h={'100%'} fontSize={[10, 15, 20]} fontWeight={800} color={'white'} >
                                            WATCH ONLINE
                                        </Text>
                                    </GridItem>
                                    <GridItem colSpan={2} bg={'blue'} >
                                        <Text boxShadow='lg' border={'1px solid black'} p={3} h={'100%'} fontSize={[10, 15, 20]} fontWeight={800} color={'white'} >
                                            G DRIVE & DIRECT LINK
                                        </Text>
                                    </GridItem>
                                    <GridItem onClick={handleSingleDownlord} colSpan={2} bg={'green'} >
                                        <Text boxShadow='lg' border={'1px solid black'} p={3} h={'100%'} fontSize={[10, 15, 20]} fontWeight={800} color={'white'} >
                                            SINGLE DOWNLOAD
                                        </Text>
                                    </GridItem>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                    <Text fontWeight={600} color={'white'} p={3} bg={'#4285f4'} my={10}>
                        You May Also Like
                    </Text>
                    <Box w={'fit-content'} m={'auto'} >
                        <Movies templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} />
                    </Box>
                </Box>
                <Box w={['fit-content', 'fit-content', 'fit-content', 'fit-content', 'fit-content', '25%']} m={['auto', 'auto', 'auto', 'auto', 5]} bg={'white'} >
                    <Image src='https://imgshare.info/images/2023/06/15/2880205b71c1016f388153635fce5834.jpg' />
                    <Text w={'fit-content'} bg={'#4285f4'} color={'white'} fontWeight={700} p={2}>How to Download Movies</Text>
                    <Image py={5} src='https://imgshare.info/images/2018/04/09/HOw2Bto.png' />
                    <Box w={'fit-content'} m={'auto'} >
                        <Movies templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(1, 1fr)']} />
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default MovieDetails

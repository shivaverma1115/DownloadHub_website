import { Box, Input, Spacer, Text, Table, Tbody, Tr, Td, TableContainer, Select, Button, Flex } from '@chakra-ui/react'
import React, { useContext, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContextApi/ContextProvider';

const Edit = () => {
    const {Ele,token} = useContext(AuthContext) ;
    const { _id, Title, Poster, Category, imdbID, Directed, Year, Type, Languages, Film_Stars, Movie_Quality, File_Size, Story_line, big_img, movie_drive_link } = Ele
    const [createMovie, setCreateMovie] = useState({
        "Title": Title,
        "Category": Category,
        "Directed": Directed,
        "Year": Year,
        "Type": Type,
        "Languages": Languages,
        "Film_Stars": Film_Stars,
        "Movie_Quality": Movie_Quality,
        "File_Size": File_Size,
        "Story_line": Story_line,
        "Poster": Poster,
        "big_img": big_img,
        "movie_drive_link": movie_drive_link,
    });
    const links = [
        { title: "(1) Edit Movies", path: "/adminPage/edit" },
    ]

    const [isloading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        setCreateMovie({ ...createMovie, [e.target.name]: e.target.value })
    }

    const handleShowData = async () => {
        try {
            setIsLoading(true) ;
            const res = await fetch(`https://downlordhubmongodb-production.up.railway.app/movies/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(createMovie)
            })
            const ans = await res.json();
            console.log(ans);
            setIsLoading(false) ;
        } catch (error) {
            setIsLoading(false) ;
            console.log(error) ;
        }
    }
    return (
        <Box bg={'white'}>
            <Navbar />
            <Flex display={['box', 'box', 'box', 'box', 'flex']} w={['100%', '100%', '80%']} m={'auto'} pt={'2vh'}>
                <Box w={['100%', '100%', '80%']} m={'auto'} mt={'0vh'} px={5} >
                    <Text fontSize={25} fontWeight={800} >Create a new product</Text>
                    <br />
                    <Text px={'10vh'} fontSize={15} fontWeight={700} color={'gray'} >Dashboard / Create Movie</Text>
                    <Box >
                        <Text fontSize={20} fontWeight={700}>Details</Text>
                        <Text color={'gray'} fontSize={13} fontWeight={400}>Title,short description,images...</Text>
                    </Box>
                    <Box w={'100%'} m={'auto'} fontSize={25} fontWeight={700} mt={[0, 0, '10vh']} >
                        {links.map((ele, i) => {
                            return <Link key={i} to={ele.path}><Text p={5}>{ele.title}</Text></Link>
                        })}
                    </Box>
                </Box>
                <Spacer />
                <Box p={5} w={'100%'} >
                    <TableContainer >
                        <Table variant='striped' colorScheme='gray'>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Title:
                                    </Td>
                                    <Td><Input type='text' name='Title' value={createMovie.Title} onChange={(e) => handleInput(e)} placeholder='title here...' required border={'1px solid black'} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Directed:
                                    </Td>
                                    <Td><Input type='text' name='Directed' value={createMovie.Directed} onChange={(e) => handleInput(e)} placeholder='director name here...' required border={'1px solid black'} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Year:
                                    </Td>
                                    <Td><Input type='number' name='Year' value={createMovie.Year} onChange={(e) => handleInput(e)} placeholder='year here...' required border={'1px solid black'} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Type:
                                    </Td>
                                    <Td>
                                        <Select placeholder='Select type' name='Type' value={createMovie.Type} onChange={(e) => handleInput(e)} >
                                            <option value='Action,Adventure,Sci-Fi'>Action,Adventure,Sci-Fi</option>
                                            <option value='Romantic'>Romantic</option>
                                            <option value='Commedy'>Commedy</option>
                                        </Select>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Languages:
                                    </Td>
                                    <Td>
                                        <Select placeholder='Select languages' name='Languages' value={createMovie.Languages} onChange={(e) => handleInput(e)} >
                                            <option value='Hindi'>Hindi</option>
                                            <option value='English'>English</option>
                                            <option value='Hindi,English'>Hindi,English</option>
                                        </Select>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Movie Quality:
                                    </Td>
                                    <Td>
                                        <Select placeholder='Select Quality' name='Movie_Quality' value={createMovie.Movie_Quality} onChange={(e) => handleInput(e)} >
                                            <option value='400p'>400p</option>
                                            <option value='720p'>720p</option>
                                            <option value='1080p'>1080p</option>
                                        </Select>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Film Stars:
                                    </Td>
                                    <Td><Input type='text' name='Film_Stars' value={createMovie.Film_Stars} onChange={(e) => handleInput(e)} placeholder='film stars name here...' required border={'1px solid black'} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        File Size:
                                    </Td>
                                    <Td><Input type='text' name='File_Size' value={createMovie.File_Size} onChange={(e) => handleInput(e)} placeholder='file size here...' required border={'1px solid black'} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                        Story line:
                                    </Td>
                                    <Td><Input type='TextArea' name='Story_line' value={createMovie.Story_line} onChange={(e) => handleInput(e)} placeholder='story line here...' required border={'1px solid black'} /></Td>
                                </Tr>
                            </Tbody>
                            <Box w={'fit-content'} m={'auto'} mt={5} >
                                <Button
                                    onClick={handleShowData}
                                    isLoading={isloading}
                                    colorScheme='blue'
                                    loadingText='Loading'
                                    variant='outline'
                                    spinnerPlacement='start'
                                >
                                    Edit Movie
                                </Button>
                            </Box>
                        </Table>
                    </TableContainer>
                </Box>
            </Flex>
        </Box>
    )
}

export default Edit

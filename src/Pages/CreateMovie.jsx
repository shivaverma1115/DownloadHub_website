import { Box, Input, Spacer, Text, Table, Tbody, Tr, Td, TableContainer, Select, Button } from '@chakra-ui/react'
import React, { useContext, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import CloudinaryImg from './CloudinaryImg';
import CloudinaryImg2 from './CloudinaryImg2';
import { useSelector } from 'react-redux';
import { AuthContext } from '../AuthContextApi/ContextProvider';

const CreateMovie = () => {
    const [createMovie, setCreateMovie] = useState({
        "Title": "Perfect Addiction 2023 Hindi Dubbed ORG Dual Audio 1080p 720p 480p Web-DL",
        "Category": "hollywood",
        "Directed": "Castille Landon",
        "Year": 2023,
        "Type": "Action,Adventure,Sci-Fi.",
        "Languages": "Hindi,English.",
        "Film_Stars": " Manu Bennett ,Ryan Bown ,Ross Butler.",
        "Movie_Quality": 1080,
        "File_Size": "[Hindi – English – Dual Audio – BRRip – 720p – 450MB – HEVC – ESubs]",
        "Story_line": "The story centers on successful boxing trainer Sienna Lane, who discovers that her boyfriend Jax, the reigning champion, has been cheating on her with her own sister. She sets out to get revenge by training the one man capable of dethroning him: his arch-nemesis Kayden.",
        "Poster": "https://imgshare.info/images/2023/09/15/5ba6b69cfd5aa1dc7e8b55d16bda8c16.jpg",
        "big_img": "https://imgshare.info/images/2023/09/15/39bb7c9722ce249aa227432d729e771c.jpg",
        "movie_drive_link": "https://imgshare.info/images/2023/09/15/5ba6b69cfd5aa1dc7e8b55d16bda8c16.jpg",
    });

    const [isloading, setIsLoading] = useState(false);
    

    const handleInput = (e) => {
        setCreateMovie({ ...createMovie, [e.target.name]: e.target.value })
    }

    
    const {token} = useContext(AuthContext)

    const handleShowData = async() => {
        console.log(createMovie);
       const res = await fetch(`http://localhost:4000/movies/add`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(createMovie) 
       })
       const ans = await res.json() ;
       console.log(res) ;
    }
    return (
        <Box p={5}>
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
                        <Tr>
                            <Td>
                                <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                Poster & Movie Quality Img :
                            </Td>
                            <Td>
                                <CloudinaryImg setIsLoading={setIsLoading} setCreateMovie={setCreateMovie} createMovie={createMovie} />
                            </Td>
                        </Tr>
                        {/* <Tr>
                            <Td>
                                <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                Movie Quality Img :
                            </Td>
                            <Td>
                                <CloudinaryImg2 setIsLoading={setIsLoading} setCreateMovie={setCreateMovie} createMovie={createMovie} />
                            </Td>
                        </Tr> */}
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
                            Create Movie
                        </Button>
                    </Box>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default CreateMovie

import { Box, Flex, Input, Spacer, Text, Table, Tbody, Tr, Td, TableContainer, Select, Button, AccordionPanel, AccordionButton, AccordionIcon, Accordion, AccordionItem, } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { AiTwotoneStar } from 'react-icons/ai';

const CreateMovies = () => {
    const [createMovie, setCreateMovie] = useState({
        "Title": "Iron Man 2008 Dual Audio 450MB BRRip 720p ESubs HEVC",
        "Category": "hollywood",
        "Directed": "Jon Favreau.",
        "Year": 2008,
        "Type": "Action,Adventure,Sci-Fi.",
        "Languages": "Hindi,English.",
        "Film_Stars": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard.",
        "Movie_Quality": 720,
        "File_Size": "[Hindi – English – Dual Audio – BRRip – 720p – 450MB – HEVC – ESubs]",
        "Story_line": "Iron Man 2008 Dual Audio 450MB BRRip 720p ESubs HEVC Tony Stark. Genius, billionaire, playboy, philanthropist. Son of legendary inventor and weapons co juror Howard Stark. When Tony Stark is given away to try a weapons gift to an Iraqi unit seduced by Lt. Col. James Rhodes, he’s subject to a fly on competitor lines. That propel ends sharply when Stark’s Humvee that he’s riding in is held up by foe combatants. He survives – once in a blue moon – mutually a chest perfect of shrapnel and a crate cannon reside his heart. In term to withstand he comes up mutually a process to miniaturize the battery and figures untrue that the battery gave a pink slip power something else. Thus Iron Man is born. He uses the primitive anticlimax to lead on a merry chase from the okay Iraq. Once uphold home, he previously begins function on perfecting the Iron Man suit. But the connection who was am a source of in oblige of Stark Industries has plans of his keep to take completely Tony’s technology for distinct matters Iron Man 2008 Dual Audio 450MB BRRip 720p ESubs HEVC.",
    });
    const handleInput = (e) => {
        setCreateMovie({ ...createMovie, [e.target.name]: e.target.value })
    }
    const handleShowData = () => {
        console.log(createMovie);
    }

    const [formelem,setFormElem] = useState({}) ;
    const handleSubmit =async(e)=>{
        e.preventDefault() ;
        await fetch('/createMovies/upload', {
            method: "POST",
            body: new FormData(formelem)
        })
    }

    // let formElem = document.querySelector("form");
    // formElem.addEventListener('submit', async (e) => {
    //     console.log("form submitted") ;
    //     e.preventDefault();
    //     await fetch('/createMovies/upload', {
    //         method: "POST",
    //         body: new FormData(formElem)
    //     })
    // })
    return (
        <>
            <Box bg={'white'}>
                <Navbar />
                <Box w={'80%'} m={'auto'} mt={'5vh'} >
                    <Text fontSize={25} fontWeight={800} >Create a new product</Text>
                    <br />
                    <Text px={'10vh'} fontSize={15} fontWeight={700} color={'gray'} >Dashboard / Create Movie</Text>
                </Box>
                <Flex w={'60%'} m={'auto'} p={'10vh'}>
                    <Box>
                        <Text fontSize={20} fontWeight={700}>Details</Text>
                        <Text color={'gray'} fontSize={13} fontWeight={400}>Title,short description,images...</Text>
                    </Box>
                    <Spacer />
                    <Box p={5} bg={'white'} w={'70%'} >
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Upload Movie
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
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
                                                        Thumnail:
                                                    </Td>
                                                    <Td><Input type='file' name='Poster' onChange={(e) => handleInput(e)} placeholder='movie thumnail here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                                        Show Quality Image:
                                                    </Td>
                                                    <Td><Input type='file' name='big_img' onChange={(e) => handleInput(e)} placeholder='image here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Text fontSize={8} color={'red'} ><AiTwotoneStar /></Text>
                                                        Upload Movie:
                                                    </Td>
                                                    <Td><Input type='file' name='movie_drive_link' onChange={(e) => handleInput(e)} placeholder='movie here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                            </Tbody>
                                            <Box w={'fit-content'} m={'auto'} mt={5} >
                                                <Button onClick={handleShowData} isLoading={false} colorScheme='blue'>Click me</Button>
                                            </Box>
                                        </Table>
                                    </TableContainer>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                        <form>
                            <input type="file" multiple name="Files" required onChange={(e)=>setFormElem(e.target.value)} />
                            <input type="submit" value="Upload Files" onClick={handleSubmit} />
                        </form>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default CreateMovies

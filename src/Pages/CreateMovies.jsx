import {
    Box, Flex, Input, Spacer, Text, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Select,
    Button,
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    Accordion,
    AccordionItem,
} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import { AiTwotoneStar } from 'react-icons/ai';

const CreateMovies = () => {
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
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Title:
                                                    </Td>
                                                    <Td><Input type='text' placeholder='title here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Directed:
                                                    </Td>
                                                    <Td><Input type='text' placeholder='director name here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Year:
                                                    </Td>
                                                    <Td><Input type='number' placeholder='year here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Type:
                                                    </Td>
                                                    <Td>
                                                        <Select placeholder='Select type'>
                                                            <option value='option1'>Action,Adventure,Sci-Fi</option>
                                                            <option value='option2'>Romantic</option>
                                                            <option value='option3'>Commedy</option>
                                                        </Select>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Languages:
                                                    </Td>
                                                    <Td>
                                                        <Select placeholder='Select languages'>
                                                            <option value='option1'>Hindi</option>
                                                            <option value='option2'>English</option>
                                                            <option value='option3'>Hindi,English</option>
                                                        </Select>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Movie Quality:
                                                    </Td>
                                                    <Td>
                                                        <Select placeholder='Select Quality'>
                                                            <option value='option1'>400p</option>
                                                            <option value='option2'>720p</option>
                                                            <option value='option3'>1080p</option>
                                                        </Select>
                                                    </Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Film Stars:
                                                    </Td>
                                                    <Td><Input type='text' placeholder='film stars name here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        File Size:
                                                    </Td>
                                                    <Td><Input type='text' value={'Hindi – English – Dual Audio – BRRip – 720p – 450MB – HEVC – ESubs]'} placeholder='file size here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Story line:
                                                    </Td>
                                                    <Td><Input type='TextArea' placeholder='story line here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Thumnail:
                                                    </Td>
                                                    <Td><Input type='file' placeholder='movie thumnail here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Show Quality Image:
                                                    </Td>
                                                    <Td><Input type='file' placeholder='image here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                                <Tr>
                                                    <Td>
                                                        <Box fontSize={8} color={'red'} ><AiTwotoneStar /></Box>
                                                        Upload Movie:
                                                    </Td>
                                                    <Td><Input type='file' placeholder='movie here...' required border={'1px solid black'} /></Td>
                                                </Tr>
                                            </Tbody>
                                            <Box w={'fit-content'} m={'auto'} mt={5} >
                                                <Button
                                                    isLoading={false}
                                                    colorScheme='blue'
                                                >
                                                    Click me
                                                </Button>
                                            </Box>
                                        </Table>
                                    </TableContainer>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default CreateMovies

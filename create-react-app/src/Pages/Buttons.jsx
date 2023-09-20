import { Button, Grid, GridItem } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../AuthContextApi/ContextProvider';

const Buttons = () => {
    const buttonText = [
        { title: "All Movies", q: "" },
        { title: "450Mbp Movies", q: "450" },
        { title: "720p", q: "720p" },
        { title: "Bollywood Movies", q: "Bolly" },
        { title: "Cartoon Movies", q: "Kung Fu" },
        { title: "Dual Audio", q: "Dual Audio" },
        { title: "English TV Shows", q: "English TV Shows" },
        { title: "Hindi Dubbed", q: "Hindi Dubbed" },
        { title: "Hindi TV Shows", q: "Hindi TV Shows" },
        { title: "Hollywood Movies", q: "Hollywood Movies" },
        { title: "480p", q: "480" },
        { title: "Marathi Movies", q: "Marathi Movies" },
        { title: "Mobile Movies", q: "Mobile Movies" },
        { title: "Multi Movies", q: "Multi Movies" },
        { title: "Pakistani Movies", q: "Pakistani Movies" },
        { title: "Pc Games", q: "Pc Games" },
        { title: "Web Series", q: "webseries" },
    ]
    const { setSearchBox } = useContext(AuthContext);
    return (
        <Grid w={'fit-content'} textAlign={'center'} mt={'1vh'} templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']} gap={3}>
            {
                buttonText.map((ele, i) => {
                    return <GridItem key={i}>
                        <Button onClick={() => setSearchBox(ele.q)} _hover={{ color: "none" }} fontSize={15} color={'white'} boxShadow='2xl' bg={'#4285f4'} w={'100%'} borderRadius={'none'} >
                            {ele.title}
                        </Button>
                    </GridItem>
                })
            }
        </Grid>
    )
}

export default Buttons

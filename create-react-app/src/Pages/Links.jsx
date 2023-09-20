import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsLink45Deg } from 'react-icons/bs';

const Links = () => {
  const link = [
    { l: "https://shivaverma" },
    { l: "https://shivaverma" },
    { l: "https://shivaverma" },
    { l: "https://shivaverma" },
    { l: "https://shivaverma" },
    { l: "https://shivaverma" },
    { l: "https://shivaverma" },
    { l: "https://shivaverma" },
  ]
  const nevigate = useNavigate() ;
  const handleDownload = () =>{
    nevigate('/downloadPage') ;
  }
  return (
    <Box minH={'100vh'} bg={'#cccccc'}>
      <Box bg={'black'}>
        <Flex fontSize={20} fontWeight={600} color={'white'} bg={'black'} w={'70%'} m={'auto'} >
          <Box my={'auto'}fontSize={30} ><BsLink45Deg/></Box>
          <Text display={['none','none','block']} my={'auto'} >LINKSHUB PROTECTOR-PROTECTING YOUR LINKS!</Text>
          <Spacer />
          <Text p={2} m={2} bg={'#4285f4'} >Sign up</Text>
          <Text p={2} m={2} bg={'#4285f4'}>Log in</Text>
        </Flex>
      </Box>
      <Flex display={['none','none','flex']} fontSize={20} fontWeight={600} color={'white'} w={'30%'} m={'auto'} >
        <Text p={2} m={2} bg={'#7a7771'} >HOME</Text>
        <Text p={2} m={2} bg={'#7a7771'} >EARN MONEY</Text>
        <Text p={2} m={2} bg={'#7a7771'} >FAQS</Text>
        <Text p={2} m={2} bg={'#7a7771'} >CONTACT US</Text>
      </Flex>
      <Box  bg={'#cccccc'} p={5}>
        <Box w={['100%','100%','70%']} m={'auto'} my={5} >
          <Text pt={'20px'} p={3} bg={'#dff0d8'}>Links Unlocked Now .</Text>
        </Box>
        <Box w={['100%','100%','70%']} bg={'white'} m={'auto'} p={[5,5,10]}>
          <Text fontSize={15} >Your Unlocked links is here below. You can download ans also can copy them or distributed through emails,forum and social networking website.</Text>
          <Divider />
          <Box color={'#4285f4'} p={5} bg={'#eeeeee'} w={['100%','100%','50%']} m={'auto'} my={[5,10,20]} >
            {
              link.map((ele, i) => {
                return (
                  <Box key={i} p={1} onClick={handleDownload} >
                    <Link>{ele.l}</Link>
                    <hr />
                  </Box>
                )
              })
            }
          </Box>
        </Box>
        <Box bg={'#cbc7c6'} w={'70%'} m={'auto'} my={5} >
          <Text fontSize={15} fontWeight={600} pt={'20px'} p={3} bg={'white'}>Uptolink is a free link Protector service to avoid any links from being indexed by spiders and eventually being listed on search engines. We allows you to set a time limit for the amount of time a link is valid as well as limit the number of times someone can use that link .</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Links

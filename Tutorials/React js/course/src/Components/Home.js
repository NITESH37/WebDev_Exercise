import { Heading, Stack, VStack, Text, Button, Image, Box, HStack, } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'
import  "./home.css"
import vg from "../Assets/images/bg.png"
import {CgGoogle, CgYoutube} from "react-icons/cg"
import  {SiCoursera, SiUdemy} from "react-icons/si"
import  {DiAws, } from "react-icons/di"
import introVideo from "../Assets/videos/intro.mp4"

const Home = () => {
    return (
        <section className='home'>
            <div className='container'>
                <Stack 
                direction={["column","row"]} 
                height="100%"
                justifyContent={['center','space-between']}
                alignItems="center"
                spacing={['16', '52']}
                >
                    <VStack width={"full"} alignItems={['center','flex-end']}>
                        <Heading size={'2xl'}>LEARN FROM THE EXPERT</Heading>
                        <Text children="Find Valueable Content at Reasonable Price" />
                        <Link to="/coureses">
                            <Button size={'lg'}>Explore Now </Button>
                        </Link>
                    </VStack>

                    <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit={'contain'} />
                </Stack>
            </div>

            <Box padding={"8"} bg="blackAlpha.800">
                <Heading
                 textAlign={"center"}
                 fontFamily={"body"}
                 color={"yellow.400"} 
                 children="OUR BRANDS" />
                <HStack className='brandsBanner' justifyContent={'space-evenly'} mt={4}>
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                    
                </HStack>
            </Box>

            <div className='container2'>
                <video 
                autoPlay
                controls
                controlsList='nodownload nofullsreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}
                >

                </video>
            </div>
        </section>
    )
}

export default Home
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js"
import VoxelDog from "../voxel-dog.js";

const Main = ({children, router}) => {
return(
    <Box as='main' pb={8}>
        <Head>
            <meta name="viewport" content='width=device-width' 
            initailScale={1} />
            <title>Rail`s Homepage</title>
       </Head>
        <Navbar path={router.asPath} />

       <Container maxW="container.md" pt={14} >
        <VoxelDog />
        {children}
       </Container>
    </Box>
)
}

export default Main
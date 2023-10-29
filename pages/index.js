import { Container, Box, Heading, Image, useColorModeValue, chakra, Button, List, ListItem, Link } from "@chakra-ui/react"
import Section from "../components/section"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Paragraph from "../components/paragraph"
import NextLink from 'next/link'
import { BioSection, BioYear } from "../components/bio"
import { IoLogoGithub } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const Page = () => {
    return (
       <Container > 
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
            Hello, I&apos;m a junior react-developer based in Vietnam
        </Box>

        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
                Rail Ziganshin
            </Heading>
            <p>junior frontend developer(react)</p>
            </Box>
            <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="80px"
            h="80px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profileImage.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
        </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
            Rail is a mostly self tought programmer that likes to build and design his own web apps.
            </Paragraph>
            <Box align="center" my={4}>
            <NextLink href="/works">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
                </Button>
            </NextLink>
            </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>1997</BioYear>
                Born in Kazan, Tatarstan.
            </BioSection>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/storvirkr" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @storvirkr
              </Button>
            </Link>
          </ListItem>
          </List>
          </Section>
       </Container>
    )
}

export default Page
import Logo from "./logo"
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import ThemeToggleButton from "./theme-toggle-button"
import {HamburgerIcon} from '@chakra-ui/icons'

const LinkItem = ({ href, path, target, children, ...props })=> {
    const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
    )
}

const Navbar = props => {
    const {path} = props

    return (
        <Box 
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}>
            <Container display="flex" p={1} maxW="container.md" wrap="wrap" aling="center" justify="space-between">
            <Flex align="center" mr={5}>
                <Heading as='h1' size="lg" letterSpacing={'tighter'}>
                    <Logo />
                </Heading>
            </Flex>

            <Stack 
            direction={{base: 'column', md: 'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}} 
            alignItems='center'
            flexGrow={1}
            mt={{base: 4, nmd: 0}}
            >
                <LinkItem href='/works' path={path}>
                    Works
                </LinkItem>
                <LinkItem href='/posts' path={path}>
                    Posts
                </LinkItem>
            </Stack>
<Box flex={1} align="right">
    <ThemeToggleButton />
    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
            <MenuList>
                <Link href='/' passhref="true">
                    <MenuItem>About</MenuItem>
                </Link>
                <Link href='/works' passhref="true">
                    <MenuItem>Works</MenuItem>
                </Link>
                <Link href='/posts' passhref="true">
                    <MenuItem>Posts</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    </Box>
</Box>

            </Container>
        </Box>
    )
}

export default Navbar
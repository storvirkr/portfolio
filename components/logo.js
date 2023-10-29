import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled"
import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/images/algiz.png"

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
line-heigth: 20px;
padding: 10px; 

&:hover img {
    transform: rotate{20deg};
} 
`
const Logo = () => {
     
    return(
        <Link href="/">
            <LogoBox>
                <Image src={logoImg} width={20} height={20} alt="logo" />
                    <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight='bold'
                    ml={4}>
                        Rail Ziganshin
                    </Text> 
            </LogoBox>
        </Link>
    )
    
}
export default Logo
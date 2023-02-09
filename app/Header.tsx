import { Heading, Text,Box } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box 
    textAlign={{base:"left" ,md:"left",lg:"center"}}
    pl="15px" 
    bg="#6846C1" 
    pt="90px" 
    pb="250px" 
    color="white">
        <Heading pb="10px">Simple pricing for your business</Heading>
        <Text>plans that are carefully carfted to suit your business</Text>
    </Box>
  );
}

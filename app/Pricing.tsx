import { Heading, Text,Box,Flex,Icon,Button,HStack} from '@chakra-ui/react'

import React from 'react'
import Checkmarkicon from './Checkmarkicon'

export default function Pricing() {
  return (
    <Box 
       m={"auto"} 
       maxW={"950px"}
       mx={{base:"15px" ,lg:"auto"}}
       mt="-190" bg={"white"} 
       borderRadius="16px" 
       overflow="hidden"
       boxShadow={"0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.03);"} >
        <Flex direction={{base:"column", md:"column", lg:"row"}}>
            {/* left box */}
            <Box bg={"#CBC3E3"} p="45px">
                <Text fontSize={"24px"} fontWeight={"bold"}>Premium PRO</Text>
                <Heading fontSize={"60px"} fontWeight={"bold"}>$329</Heading>
                <Text>billed just once</Text>
                <Button mt={"10px"} w={"300px"} color={"white"} bg={"#652CD3"}>Get Started</Button>
            </Box>
            {/* right box */}
            <Box pt="45px" pl="25" pr="15px">
                <Text mb="20px">Access these features when you get these pricing pakage for your business</Text>
                <HStack mb="10px">
                    <Icon as={Checkmarkicon} />
                    <Text>
                        International calling the messaging API
                    </Text>
                </HStack>
                <HStack mb="10px">
                    <Icon as={Checkmarkicon} />
                    <Text mb="20px">
                        Additional phone numbers
                    </Text>
                </HStack>
                <HStack mb="10px">
                    <Icon as={Checkmarkicon} />
                    <Text mb="20px">
                        Atuomated messages via Zapier
                    </Text>
                </HStack>
                <HStack>
                    <Icon as={Checkmarkicon} />
                    <Text>
                        24/7 support and consulting
                    </Text>
                </HStack>
            </Box>
        </Flex>

    </Box>
  )
}

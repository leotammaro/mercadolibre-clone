import { Stack, Text } from '@chakra-ui/layout'
import React from 'react'

function Home() {
    return (
       <Stack w="100%" justifyContent="center" align="center" paddingTop="50px">
           <Stack backgroundColor="white" height="9999px" width="1100px" direction="row">
               <Stack flex="0.7">
                   <Text>asd123</Text>
               </Stack>
               <Stack flex="0.3" bg="blackAlpha.100">
                   <Text>asd</Text>
                </Stack>
           </Stack>
       </Stack>
    )
}

export default Home

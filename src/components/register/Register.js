import { Button, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import FormSectionRegister from './FormSectionRegister'
import "./register.css"

function Register() {
    return (
        <Stack direction="column" alignItems="center" bg="#F7F7F7" h="100vh" paddingTop="25px" spacing={8} id="register">
           <Stack w="700px" spacing={6}>
            <Stack >
                <Text fontSize="24px" fontWeight="600">Completá tus datos</Text>
            </Stack>
            <FormSectionRegister />
            <Button w="140px" fontSize="20px" h="50px" bg="blackAlpha.200" color="gray.400">Continuar</Button>    
           </Stack>
        </Stack>
    )
}

export default Register

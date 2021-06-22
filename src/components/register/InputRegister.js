import { Stack,Input,Text } from '@chakra-ui/react'
import React from 'react'

function InputRegister({title,type,update,id}) {

    return (
        <Stack direction="column"  width="350px" padding={4} justifyContent="center" color="grey" >
            <Text fontSize="13px">{title}</Text>
            <Input onInput={(event)=>update(id,event.target.value)} type={type ? "password" : "text"}   h="20px" border="none" borderBottom="1px solid #E1E4E6" borderRadius="none" _focus={{borderBottom:"2px solid #47B5F9"}} _hover={{borderBottom:"2px solid grey"}}></Input>
        </Stack>
    )
}

export default InputRegister

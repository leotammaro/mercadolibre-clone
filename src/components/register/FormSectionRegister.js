import { Stack,Text,Checkbox} from '@chakra-ui/react'
import React from 'react'
import InputRegister from './InputRegister'

function FormSectionRegister() {
    return (
        <Stack bg="white" direction="column" borderRadius="6px" boxShadow="0 1px 3px rgb(0 0 0 / 20%)" w="100%" spacing={4}>
            <Stack direction="row">
                <InputRegister title={"Nombre"}></InputRegister>
                <InputRegister title={"Apellido"}></InputRegister>
            </Stack>
                <InputRegister  title={"DNI"}></InputRegister>
            <Stack direction="row" >
                <InputRegister  title={"E-mail"}></InputRegister>
                <InputRegister type="password"  title={"Clave"}></InputRegister>
            </Stack>
            <Stack direction="row" padding="20px 10px 30px 10px" justifyContent="space-around">
                <Checkbox  w="5px" h="20px"></Checkbox>
                <Text fontSize="13px">Acepto los Términos y Condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.</Text>
            </Stack>
         </Stack>
    )
}

export default FormSectionRegister

import { Stack,Text,Checkbox,Button} from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import InputRegister from './InputRegister'

function FormSectionRegister() {
    const [termsCheck,setTermsCHeck] = useState(false)
    const [userData,setUserData] = useState({})
    
    const updatingUserRegister = (id,value)=>{
        setUserData({...userData,[id]:value})
    }

    return (
        <Stack spacing={6}>
            <Stack bg="white" direction="column" borderRadius="6px" boxShadow="0 1px 3px rgb(0 0 0 / 20%)" w="100%" spacing={6}>
                <Stack direction="row">
                    <InputRegister title={"Nombre"} id="nombre" update={updatingUserRegister}></InputRegister>
                    <InputRegister title={"Apellido"} id="apellido" update={updatingUserRegister}></InputRegister>
                </Stack>
                    <InputRegister  title={"DNI"} id="dni" update={updatingUserRegister}></InputRegister>
                <Stack direction="row" >
                    <InputRegister  title={"E-mail"} id="email" update={updatingUserRegister}></InputRegister>
                    <InputRegister type="password"  title={"Clave"} id="clave" update={updatingUserRegister}></InputRegister>
                </Stack>
                <Stack direction="row" padding="20px 10px 30px 10px" justifyContent="space-around">
                    <Checkbox  w="5px" h="20px"  onChange={()=>{
                        setTermsCHeck(!termsCheck)
                    }}></Checkbox>
                    <Text fontSize="13px">Acepto los Términos y Condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.</Text>
                </Stack>
            
            </Stack>
            <Button w="140px" fontSize="20px" h="50px" bg={termsCheck ?  "blue.200" :"blackAlpha.200"} color={termsCheck ?  "white" :"gray.400"}>Continuar</Button>   
         </Stack>
    )
}

export default FormSectionRegister

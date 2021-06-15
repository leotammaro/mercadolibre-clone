import { Stack,Image,Text } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import Images from "../../utilities/Images"

function Section({section}) {
    const [images,setImages] = useState("")
    useEffect(()=>{
        setImages(section)
    },[section])
    return (
        <Stack direction="column" paddingTop="40px" w="100%">
            <Text fontSize="30px" color="gray.500" fontWeight="200">En relación con tu busqueda en {section}</Text>
            <Stack direction="row" justifyContent="space-between">
            {images && Images[images].map((image,index)=><Image bg="white" boxShadow="0 1px 1px 0 rgb(0 0 0 / 10%)"  borderRadius="10px" key={index} src={image}/>)}
            </Stack>
        </Stack>
    )
}

export default Section

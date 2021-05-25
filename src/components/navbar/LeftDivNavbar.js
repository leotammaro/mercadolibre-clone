import { Image } from '@chakra-ui/image'
import { UnorderedList } from '@chakra-ui/layout'
import { ListItem } from '@chakra-ui/layout'
import { Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import mapIcon from '../../assets/map.svg'

function LeftDivNavbar() {
    const categories =["Categorias","Ofertas","Historial","SuperMercado","Moda","Vender","Ayuda"]
    return (
        <Stack  w="100%"  direction="row" alignItems="center" spacing={0}> 
            <Stack direction="row" paddingRight="12px">
                <Image h="25px" src={mapIcon}></Image>
                <Stack fontSize="10px" direction="column" spacing={0} w="120px" paddingBottom="10px">
                    <Text>Enviar a LEONEL</Text>
                    <Text>ISLA TRINIDAD 390</Text>
                </Stack> 
            </Stack> 
            <UnorderedList styleType="none" display="flex" justifyContent="flex-start" mt={7} ml={0} color="rgba(0,0,0,.5)" fontSize="13px">
                <Stack direction="row" spacing={5}>
                    {categories.map((categorie,index)=><ListItem key={index}>{categorie}</ListItem>)}
                </Stack>
             </UnorderedList>
        </Stack>
    )
}

export default LeftDivNavbar

import { Image } from '@chakra-ui/image'
import { Button } from "@chakra-ui/react"
import { Input } from '@chakra-ui/input'
import { Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import Map from "../../assets/map.svg"
import Search from "../../assets/search.svg"
import User from "../../assets/user.svg"
import DownSearch from "../../assets/chevrondown.svg"
import Notification from "../../assets/notification.svg"
import Shop from "../../assets/shop.svg"
import "./styleCssFullScreen.css"

function NavbarFullScreen() {
    return (
        <Stack direction="row" justifyContent="center" display={{base:"none",xl:"flex"}} h="100px">
            <Stack w="180px" alignItems="center">
                <Image h="40px" w="130px" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo__large_plus@2x.png" />
                <Stack  direction="row" alignItems="center" h="40px">
                    <Image src={Map} h="30px" opacity="0.7"/>
                    <Stack direction="column" spacing={0} fontSize="12px">
                        <Text className="text">Enviar a LEONEL</Text>
                        <Text>ISLA TRINIDAD 390</Text>
                    </Stack>
                </Stack>
            </Stack>  
            <Stack padding="0px 40px" direction="column">
                <Stack position="relative" bg="white" direction="row" alignItems="center" w="100%" >
                    <Input w="100%" border="none"  placeholder="Buscar productos, marcas y más..." boxShadow="0 1px 2px 0 rgb(0,0,0,0.2)" borderRadius="0" ></Input>
                    <Image w="20px" src={Search} position="absolute" right="1"></Image>
                </Stack>
                <Stack direction="row" w="500px" spacing={3} justifyContent="flex-start">
                    <Stack direction="row"  alignItems="center" position="relative" justifyContent="flex-start" >
                        <Button  fontWeight="200" fontSize="13px" bg="none" _hover={{bg:"none"}} _active={{bg:"none"}} _focus={{borderColor:"none"}} paddingLeft={0}>Categorias</Button>
                        <Image src={DownSearch} opacity="0.6" h="20px" position="absolute" right={-1} top={3}/>
                    </Stack>
                    <Button  fontSize="13px" fontWeight="200"  bg="none" _hover={{bg:"none"}} _active={{bg:"none"}} _focus={{borderColor:"none"}} padding={0}>Ofertas</Button>
                    <Button fontSize="13px" fontWeight="200"  bg="none" _hover={{bg:"none"}} _active={{bg:"none"}} _focus={{borderColor:"none"}} padding={0}>Historial</Button>
                    <Button  fontSize="13px" fontWeight="200" bg="none" _hover={{bg:"none"}} _active={{bg:"none"}} _focus={{borderColor:"none"}} padding={0}>Supermercado</Button>
                    <Button fontSize="13px" fontWeight="200"  bg="none" _hover={{bg:"none"}} _active={{bg:"none"}} _focus={{borderColor:"none"}} padding={0}>Historial</Button>
                    <Button fontSize="13px" fontWeight="200" bg="none" _hover={{bg:"none"}} _active={{bg:"none"}} _focus={{borderColor:"none"}} padding={0}>Moda</Button>
                    <Button fontSize="13px" fontWeight="200" bg="none" _hover={{bg:"none"}} _active={{bg:"none"}} _focus={{borderColor:"none"}} padding={0}>Vender</Button>
                </Stack>
            </Stack>
            <Stack direction="column" justifyContent="space-around" alignItems="flex-start" w="350px">
                <Text fontWeight="600">Hasta 4 meses de regalo en Disney+</Text>
                <Stack direction="row" fontSize="13px" spacing={3}>
                    <Stack direction="row" spacing={1}>
                        <Image src={User} h="20px"/>
                        <Text >Leonel</Text>
                        <Image src={DownSearch} h="20px"/>
                    </Stack>
                    <Text>Mis compras</Text>
                    <Stack direction="row" spacing={1}>
                        <Text>Favoritos</Text>
                        <Image src={DownSearch} h="20px"/>
                    </Stack>
                    <Image src={Notification} h="20px"></Image>
                    <Image src={Shop} h="20px"></Image>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NavbarFullScreen

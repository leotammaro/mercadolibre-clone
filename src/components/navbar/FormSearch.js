import { Button } from '@chakra-ui/button'
import { FormControl } from '@chakra-ui/form-control'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/layout'
import React from 'react'

function FormSearch() {
    return (
        <Stack  h="100%" direction="row" alignItems="center">
             <Image  h="70px" paddingRight="40px" src="https://static.wixstatic.com/media/c28ad8_1caf8b25df384ba49c634467848cb4fc~mv2.png/v1/fit/w_2500,h_1330,al_c/c28ad8_1caf8b25df384ba49c634467848cb4fc~mv2.png"></Image>
            <FormControl backgroundColor="#fff" w="600px" display="flex" h="40px">
                <Input placeholder="Buscar productos, marcas y mas .." focusBorderColor="none" borderRadius="0px" flex="1"></Input>
                <Button borderRadius="0px">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </Button>
            </FormControl>
        </Stack>
    )
}

export default FormSearch

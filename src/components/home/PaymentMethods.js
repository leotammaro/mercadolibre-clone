import { Image, Stack ,Text} from '@chakra-ui/react'
import React from 'react'
import Plus from "../../assets/plus.svg"

function PaymentMethods() {
    return (
        <Stack h="90px"  bg="white" w="100%" direction="row" justifyContent="space-around" alignItems="center" boxShadow="0 1px 1px 0 rgb(0 0 0 / 10%)" borderRadius="6px">
            <Stack direction="row" h="100%" alignItems="center">
                <Image h="40px" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"/>
                <Stack>
                    <Text color="black">Tarjeta de crédito</Text>
                    <Text>Ver promociones bancarias</Text>
                </Stack>
            </Stack>
            <Stack direction="row" h="100%" alignItems="center">
            <Image h="40px" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg"/>
                <Stack>
                        <Text color="black">Tarjeta de débito</Text>
                        <Text>Ver promociones bancarias</Text>
                </Stack>
            </Stack>
            <Stack direction="row" h="100%" alignItems="center">
            <Image h="40px" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg"/>
                <Stack>
                    <Text color="black">Cuotas sin tarjeta</Text>
                    <Text>Conocé Mercado Crédito</Text>
                </Stack>
            </Stack >
            <Stack direction="row" h="100%" alignItems="center">
            <Image h="40px" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg"/>
                <Stack>
                    <Text color="black">Efectivo</Text>
                    <Text>Ver mas</Text>
                </Stack>
            </Stack>
            <Image src={Plus} h="40px" />
        </Stack>
    )
}

export default PaymentMethods

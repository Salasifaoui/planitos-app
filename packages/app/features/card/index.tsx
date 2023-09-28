import { Card, Image, Text, XStack, YStack } from "tamagui";

export default function CardPlanitos({name,price,country,image}) {
  return (
    <Card elevate borderRadius={'$4'} bordered>
      <Card.Header>
        <Image
         borderTopLeftRadius={'$4'}
         borderTopRightRadius={'$4'}
          resizeMode="stretch"
          alignSelf="center"
          source={{
            width: 150,
            height: 180,
            uri: image
          }}
        />
       
      </Card.Header>
      <Card.Footer p={'$2'} >
        <XStack flex={1} space={'$2'} justifyContent="space-between" ai={'center'}>
            <YStack justifyContent="space-between">
        <Text fontWeight={'600'}>{name}</Text>
        <Text fontWeight={'200'} color={'#82B585'}>{country}</Text>
        </YStack>
        <Text fontWeight={'bold'} color={'#135517'}>${price}</Text>
        </XStack>
      </Card.Footer>
   
        

    </Card>
  )
}


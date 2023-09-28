import { ArrowLeft, ChevronLeft, Sun, X } from '@tamagui/lucide-icons'
import { data } from 'app/api/data'
import React from 'react'
import { Alert, useWindowDimensions } from 'react-native'
import { useLink } from 'solito/link'
import { Image, XStack, YStack, Button, Text } from 'tamagui'
import PlantParams from '../components/cadre-params/PlantParams'
import { TButton } from '../components/TButton/TButton'

export default function PlantScreen({ id }) {
  const { width, height } = useWindowDimensions()

  const plant = data.find((user) => user.id === id)
  const link = useLink({
    href: '/',
  })
  return (
    <YStack f={1}>
      <XStack>
        <YStack w={width * 0.25} my={'$6'} p={'$4'}>
          <Button color="$colorTransparent" size={'$6'} {...link} icon={ArrowLeft} />
          <YStack mt={30} space={50}>
            <PlantParams  />
            <PlantParams />
            <PlantParams />
            <PlantParams />
          </YStack>
        </YStack>
        <Image
          borderTopLeftRadius={'$12'}
          borderBottomLeftRadius={'$12'}
          shadowColor={'$colors.primary'}
          shadowOpacity={0.5}
          shadowRadius={'$4'}
          shadowOffset={{
            width: 0,
            height: 4,
          }}
          resizeMode="stretch"
          source={{
            width: width * 0.75,
            height: height * 0.75,
            uri: plant?.image,
          }}
        />
      </XStack>
      <YStack  f={1} mx={10} mb={5} space={'$1'}  ai={'flex-start'}>
        <XStack w={'100%'}  justifyContent='space-between' ai='center'>
        <Text fontSize={32} fontWeight={'600'}>{plant?.name}</Text>
        <Text fontSize={22} fontWeight={'bold'} color={'$colors.price'}>${plant?.price}</Text>
        </XStack>
        <Text fontSize={22} fontWeight={'200'} color={'#82B585'}>{plant?.country}</Text>
        
        </YStack>
        <XStack w={'100%'}>
            {/* <Button bg={'$colors.primary'} size={'$4'}>
                Buy Now
            </Button> */}
            <TButton backgroundColor={'$colors.secondary'} onPress={() => Alert.alert('Clicked')}>
               <Text color={'white'}>Buy Now</Text> 
            </TButton>
            <TButton backgroundColor={'$transparent'}>
            <Text>Description</Text>
                </TButton>
            </XStack>
    </YStack>
  )
}

import {
  Avatar,
  Button,
  H3,
  SearchBar,
  Stack,
  Text,
  XStack,
  YStack
} from '@my/ui'
import { data } from 'app/api/data'
import React from 'react'
import { FlatList, Pressable } from 'react-native'
import { useLink } from 'solito/link'
import { useRouter } from 'solito/router'
import CardPlanitos from '../card'





export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })
  const { push, replace, back, parseNextPath } = useRouter()
  

  return (
    <YStack f={1} ai="center" space  bc='colors.background'>
      <XStack
        bc='$colors.primary'
        h={200}
        w={'100%'}
        paddingHorizontal={'$4'}
        borderBottomLeftRadius={'$10'}
        borderBottomRightRadius={'$10'}
        jc={'space-between'}
        ai={'center'}
      >
        <H3 ta="center" color={'white'}>
          Welcome Planitos!
        </H3>
        <Avatar circular size="$4">
          <Avatar.Image
            accessibilityLabel="Nate Wienert"
            src="https://hips.hearstapps.com/hmg-prod/images/sansevieria-royalty-free-image-1642793822.jpg"
          />
          <Avatar.Fallback delayMs={600} backgroundColor="#2D6730" />
        </Avatar>
      </XStack>

      <SearchBar />
      <YStack space={'$4'} w={'100%'} mt={'$4'} px={'$4'}>
      <XStack  jc={'space-between'} ai={'center'}>
        <Text fontSize={18} color='$colors.primary'>Recomended</Text>
        <Button bc={'$colors.primary'} letterSpacing={'$6'} borderRadius={'$8'} color={'white'}>
          See all
          
        </Button>
      </XStack>
      <XStack  w={'100%'} mt={'$4'} >
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => (
          <Pressable onPress={ () => {
            push(`/creatPost/plant/${item.id}`)}}>
            <Stack mx={'$4'} >
          <CardPlanitos 
        animation="bouncy"
        size="$2"
        width={150}
        height={150}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        image={item.image}
        name={item.name}
        country={item.country}
        price={item.price}
        />
        </Stack>
        </Pressable>
        )}
        keyExtractor={item => item.id}

        />
        
        
        </XStack>
      </YStack>
    </YStack>
  )
}



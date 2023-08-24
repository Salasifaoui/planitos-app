import {
  Anchor,
  Button,
  H3,
  Paragraph,
  Separator,
  Sheet,
  Stack,
  useToastController,
  XStack,
  Text,
  SearchBar,
  YStack,
  Input,
  Avatar,
} from '@my/ui'
import { ChevronDown, ChevronUp, Search, X } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import CardPlanitos from '../card'
import { FlatList, Pressable } from 'react-native'
import { useRouter } from 'solito/router'

const data = [
  {
    id: 1,
    name: 'Sansevieria',
    country: 'Mexico',
    price: 465,
    image: 'https://hips.hearstapps.com/hmg-prod/images/sansevieria-royalty-free-image-1642793822.jpg',
  },
  {
    id: 2,
    name: 'Nolina',
    country: 'Russia',
    price: 360,
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679338614-177111sgp_20220623-1656010778525.jpg?crop=1xw:1.00xh;center,top&resize=980:*',
  },
  {
    id: 3,
    name: 'Monstera',
    country: 'Australia',
    price: 470,
    image: 'https://media.gq.com/photos/620585087a867da56021cf9f/3:4/w_748%2Cc_limit/Rooted-aloe-vera-plant.jpg',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    country: 'Australia',
    price: 320,
    image: 'https://www.fnp.sg/images/pr/m/v20220523183506/aloe-vera-plant-in-square-vase.jpg',
  },
]

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })
  const { push, replace, back, parseNextPath } = useRouter()
  

  return (
    <YStack f={1} ai="center" space  bc={'#E8EEEB'}>
      <XStack
        bc={'#2D6730'}
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
        <Text fontSize={18}>Recomended</Text>
        <Button bc={'#2D6730'} borderRadius={'$8'} color={'white'}>
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
            push('/user/nate')}}>
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

      {/* <YStack space="$4" maw={700}>
      
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <SheetDemo /> */}
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

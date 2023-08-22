import {
  Anchor,
  Button,
  H1,

  Paragraph,
  Separator,
  Sheet,
  Stack,
  useToastController,
  XStack,
  Text,
  YStack,
  Input,
} from '@my/ui'
import { ChevronDown, ChevronUp,Search } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} ai="center" space>
      <Stack
        bc={'#2D6730'}
        h={200}
        w={'100%'}
        borderBottomLeftRadius={'$10'}
        borderBottomRightRadius={'$10'}
      />
      
          <XStack justifyContent='space-between' ai={'center'} paddingHorizontal={'$4'} bc={'white'} h={50} w={"90%"} position='absolute' t={180}  borderRadius={'$10'}>
            
            {/* <Text ta="center" color={'#448E47'}>Search</Text> */}
            <Input size="$4" bc={'white'} borderWidth={0} w={'70%'} focusable={false} fontWeight={'600'} color={'#448E47'} placeholderTextColor={'#448E47'} placeholder='Search...'/>
            <Search size={18} color={'#448E47'} />
          </XStack>
         
    
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

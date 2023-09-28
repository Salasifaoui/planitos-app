
import { Stack } from 'tamagui'
import React from 'react'
import { Sun } from '@tamagui/lucide-icons'

export default function PlantParams() {
  return (
    <Stack
              justifyContent="center"
              ai="center"
              w={50}
              h={50}
              bg="$colors.surface"
              borderRadius="$4"
              shadowColor={'$colors.primary'}
                shadowOpacity={0.5}
                shadowRadius={'$4'}
                shadowOffset={{
                  width: 0,
                  height: 4,
                }}
            >
              <Sun size={35} color={'$colors.primary'} />
            </Stack>
  )
}


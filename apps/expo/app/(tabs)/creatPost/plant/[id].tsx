import { data } from 'app/api/data'
import PlantScreen from 'app/features/plants'
import { Stack } from 'expo-router'
import React from 'react'
import { createParam } from 'solito'

export default function Screen() {
  const { useParam } = createParam<{ id: string }>()
  const [id] = useParam('id')

  const plant = data.find((user) => user.id === parseInt(id))
  return (
    <>
      <Stack.Screen
        options={{
          title: plant?.name,
        }}
      />
      {/* <UserDetailScreen /> */}
      <PlantScreen id={plant?.id} />
    </>
  )
}
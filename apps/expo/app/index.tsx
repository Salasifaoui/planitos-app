import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { Menu } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#2D6730',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',

          headerLeft: () => <Button variant="outlined" icon={<Menu size={24} color="#fff" />} />,
        }}
      />
      <HomeScreen />
    </>
  )
}

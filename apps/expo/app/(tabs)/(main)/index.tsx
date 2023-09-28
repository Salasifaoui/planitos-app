import { Stack } from 'expo-router'
import { Menu } from '@tamagui/lucide-icons'
import { Button } from 'tamagui'
import { HomeScreen } from 'app/features/home/screen';


export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '$colors.primary',
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
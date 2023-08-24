import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'
import { Stack,Slot } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()

  if (!loaded) {
    return null
  }
  return (
    <Provider>
      <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <Stack /> */}
        <Slot />
      </ThemeProvider>
    </Provider>
  )
}
// import { HomeScreen } from 'app/features/home/screen'
// import { Stack } from 'expo-router'
// import { Menu } from '@tamagui/lucide-icons'
// import { Button } from 'tamagui'

// export default function Screen() {
//   return (
//     <>
//       <Stack.Screen
//         options={{
//           title: '',
//           headerStyle: {
//             backgroundColor: '#2D6730',
//           },
//           headerTitleAlign: 'center',
//           headerTintColor: '#fff',

//           headerLeft: () => <Button variant="outlined" icon={<Menu size={24} color="#fff" />} />,
//         }}
//       />
//       <HomeScreen />
//     </>
//   )
// }

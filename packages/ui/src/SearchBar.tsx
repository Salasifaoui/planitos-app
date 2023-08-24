import { Input, XStack } from "tamagui";
import { Search } from '@tamagui/lucide-icons'


export const SearchBar = () => {
  return (
    <XStack
        justifyContent="space-between"
        ai={'center'}
        paddingHorizontal={'$4'}
        bc={'white'}
        h={50}
        w={'90%'}
        position="absolute"
        t={180}
        borderRadius={'$10'}
        

      >
        <Input
          size="$4"
          bc={'white'}
          borderWidth={0}
          w={'70%'}
          focusable={false}
          fontWeight={'600'}
          color={'#448E47'}
          placeholderTextColor={'#448E47'}
          placeholder="Search..."
        />
        <Search size={18} color={'#448E47'} />
      </XStack>
  )
}


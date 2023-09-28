import { Stack, styled } from "tamagui";


export const TButton = styled(Stack, {
    name: 'TButton',
    justifyContent: 'center',
    backgroundColor: '$colors.secondary',
 
    alignItems: 'center',
    padding: '$2',
    width: '50%',
    height: '$4',
 
    borderTopRightRadius: '$8',

    variants: {
        bg:{

            backgroundColor: '$colors.secondary',
            '&:hover': {
                backgroundColor: '$colors.primary',
            },
    }
    }as const,
   
}
)
import { SunIcon } from '@chakra-ui/icons'
import { IconButtonProps, useColorModeValue, useColorMode, IconButton } from '@chakra-ui/react'
import React from 'react'

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {

    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue("dark", "light")
    return (
        <IconButton
            size="sm"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SunIcon />}
            aria-label={`Switch to ${text} mode`}
            {...props} />


    )
}



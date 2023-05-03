import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ButtonGroup, DarkMode, Flex, HStack, Stack, Switch, Text } from "@chakra-ui/react"
import { setDarkMode, setOrigin } from "@redux/slices/appState";
import { darkTheme } from "@redux/slices/globals/darkTheme";
import { globals } from "@redux/slices/globals/globals"
import { lightTheme, theme } from "@redux/slices/globals/lightTheme";
import { RootState } from "@redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Navbar: React.FC = () => {

  const env = globals;
  const isDarkMode = useSelector((state: RootState) => state.appState.darkMode);
  const colors: theme = (isDarkMode ? darkTheme : lightTheme);

  return (
    <>
      <Flex
        w={'100vw'}
        h={[env.mobileHeight, env.mobileHeight, env.mobileHeight, env.desktopHeight]}
        bgColor={colors.navbarColor}
        position={'fixed'}
        alignItems={'center'}
        justifyContent={'space-between'}
        transition={'all 0.2s'}
        px={'100px'}
      >
        <Text color={colors.navbarTextColor} fontSize={'24px'} fontWeight={'600'} >{env.username}</Text>

        <DarkModeButton />

        <HStack spacing={'10'}>
          <Flex direction={'column'} cursor={'pointer'} borderBottom={'1px solid transparent'} _hover={{ borderBottom: '1px solid ' + colors.color, }} transition={'all 0.3s'} >
            <Text color={colors.navbarTextColor} >Home</Text>
            {/* <Flex h={'1px'} bgColor={colors.color} _hover={{ height: '5px' }} transition={'all 0.2s'}></Flex> */}
          </Flex>


        </HStack>

      </Flex>
    </>
  )
}

export const DarkModeButton: React.FC = () => {

  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.appState.darkMode);
  const origin = useSelector((state: RootState) => state.appState.origin);

  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} w={'60px'}>
      <Flex maxW={'16px'}>
        <MoonIcon boxSize={'16px'} transition={'all 0.4s'} color={darkMode ? 'white' : 'transparent'} position={'absolute'} />
        <SunIcon boxSize={'16px'} transition={'all 0.4s'} color={darkMode ? 'transparent' : 'white'} />
      </Flex>
      <Switch defaultChecked={true} size='md' onChange={() => dispatch(setDarkMode(!darkMode))} />
    </Flex>
  )

}
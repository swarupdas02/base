import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ButtonGroup, Flex, Switch, Text } from "@chakra-ui/react"
import { darkTheme } from "@redux/slices/globals/darkTheme";
import { globals } from "@redux/slices/globals/globals"
import { lightTheme, theme } from "@redux/slices/globals/lightTheme";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const env = globals;
  const [theme, setTheme] = useState('darkTheme');
  const colors: theme = theme == 'darkTheme' ? darkTheme : lightTheme;
  return (
    <>
      <Flex
        w={'100vw'}
        h={[env.mobileHeight, env.mobileHeight, env.mobileHeight, env.desktopHeight]}
        bgColor={colors.navbarColor}
        position={'fixed'}
        alignItems={'center'}
        justifyContent={'space-around'}
        transition={'all 0.2s'}
      >
        <Text color={colors.color} >{env.username}</Text>
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'60px'}>
          <Flex maxW={'16px'}>
            <MoonIcon boxSize={'16px'} transition={'all 0.4s'} color={theme == 'darkTheme' ? 'white' : 'transparent'} position={'absolute'} />
            <SunIcon boxSize={'16px'} transition={'all 0.4s'} color={theme == 'darkTheme' ? 'transparent' : 'white'} />
          </Flex>
          <Switch defaultChecked={true} size='md' onChange={() => setTheme(theme == 'darkTheme' ? 'lightTheme' : 'darkTheme')} />
        </Flex>


      </Flex>
    </>
  )
}

export const themeButton: React.FC = () => {

  return
}
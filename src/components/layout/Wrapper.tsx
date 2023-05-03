import { Flex } from "@chakra-ui/react"
import { darkTheme } from "@redux/slices/globals/darkTheme";
import { lightTheme, theme } from "@redux/slices/globals/lightTheme";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

export const Wrapper: React.FC<{
  children: React.ReactNode;
  width?: string | string[];
  bg?: string | string[];
  p?: string | string[];
}> = ({
  children,
  width = '800px',
  bg = 'bgColor',
  p = '30px'
}) => {
    const isDarkMode = useSelector((state: RootState) => state.appState.darkMode);
    const colors: theme = (isDarkMode ? darkTheme : lightTheme);

    return (
      <Flex maxW={width} minH={'100vh'} direction={'column'} bgColor={colors.bgColor} mx={'auto'} alignItems={'center'} p={p} transition={'all 0.2s'}>
        {children}
      </Flex>
    )
  }
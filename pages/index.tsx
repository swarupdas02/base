import { Flex } from "@chakra-ui/react"
import { Navbar } from "@components/layout/Navbar"
import { Wrapper } from "@components/layout/Wrapper"
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.appState.darkMode);
  return (
    <>
      <Navbar />
      <Wrapper width={'100vw'} >
        <Flex h={'9000px'}>

        </Flex>
      </Wrapper>
    </>
  )
}

export default Home
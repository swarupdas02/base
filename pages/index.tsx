import { Container, Flex, Text } from "@chakra-ui/react"
import { Wrapper } from "@components/Wrapper"
import { RootState } from "@redux/store"
import { useSelector } from "react-redux"

const Home: React.FC = () => {

  const origin = useSelector((state: RootState) => state.appState.origin);

  return (
    <>
      <Wrapper>
        {!origin ? 'Hello' : 'Goodbye'}
      </Wrapper>
    </>
  )
}

export default Home
import { Flex } from "@chakra-ui/react"
import { Navbar } from "@components/Navbar"
import { Wrapper } from "@components/Wrapper"

const Home: React.FC = () => {

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
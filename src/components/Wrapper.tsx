import { Flex } from "@chakra-ui/react"

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
    return (
      <Flex maxW={width} minH={'100vh'} direction={'column'} bgColor={bg} mx={'auto'} alignItems={'center'} p={p}>
        {children}
      </Flex>
    )
  }
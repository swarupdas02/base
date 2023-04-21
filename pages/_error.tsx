import { Box, Container, Flex, Img } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

function Error({ statusCode }) {
  return (
    <>
      <Head>
      </Head>
      <Container maxW="635px" mt={['20px', '20px', '50px', '50px']} mb={'80px'}>
        <Flex
          h={'calc(100vh - 300px)'}
          flexDirection={'column'}
          color={'#3d3d3d'}
          textAlign={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          fontWeight={'bold'}
        >
          <Img
            alt={'HobSpace Star Sad'}
            w={['190px', '190px', '300px']}
            mb={'45px'}
            src="/icons/star_icon_sad.svg"
          />
          <Box lineHeight={'30px'} fontSize={'24px'} mb={'10px'}>
            Don't worry!
          </Box>
          <Box lineHeight={'24px'} fontSize={'16px'}>
            It’s only a {statusCode} error. You may not find what
            <br />
            you’re looking for here.
          </Box>
        </Flex>
      </Container>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

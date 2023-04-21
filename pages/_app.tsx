import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider} from 'react-redux';

function Wrapper({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const id: HTMLLinkElement = document.getElementById('fonts') as HTMLLinkElement;
    if (id.rel && id.rel != 'stylesheet') id.rel = 'stylesheet';
  }, []);

  return (
    // <Provider store={undefined} children={undefined}>
      <ChakraProvider>
        <link id="fonts" rel="preload" href="/styles/fonts.css" as="style" />
        <noscript>
          <link rel="stylesheet" href="/styles/fonts.css" />
        </noscript>
      </ChakraProvider>
    // </Provider>
  );
}
export default Wrapper;
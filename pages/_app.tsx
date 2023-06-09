import { ChakraProvider, extendBaseTheme, extendTheme } from '@chakra-ui/react';
import store from '@redux/store';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

const customTheme = {
  colors: {
    bgColor: 'white',
    fontColor: 'black',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1366px',
  }
};

const theme = extendTheme(customTheme);

function BaseApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const id: HTMLLinkElement = document.getElementById('fonts') as HTMLLinkElement;
    if (id && id.rel && id.rel != 'stylesheet') id.rel = 'stylesheet';
  }, []);

  return <Component {...pageProps} />;

}

function Wrapper({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const id: HTMLLinkElement = document.getElementById('fonts') as HTMLLinkElement;
    if (id && id.rel && id.rel != 'stylesheet') id.rel = 'stylesheet';
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BaseApp Component={Component} {...pageProps} />
        <link id="fonts" rel="preload" href="/styles/fonts.css" as="style" />
        <noscript>
          <link rel="stylesheet" href="/styles/fonts.css" />
        </noscript>
      </ChakraProvider>
    </Provider>
  );
}

export default Wrapper;
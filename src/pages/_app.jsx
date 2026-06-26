import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material'
import '../styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f59e0b',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif',
  },
})

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      disable: 'mobile',
    })
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: '100vh', fontFamily: 'Geist, ui-sans-serif, system-ui, sans-serif' }}>
          <CssBaseline />
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

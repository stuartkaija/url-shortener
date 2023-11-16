'use client';

import { useState } from 'react';
import { Box, Divider } from '@mui/material';
import styles from './page.module.css'

import ShortUrl from './components/ShortUrl';
import Form from './components/Form';
import Footer from './components/Footer';

export default function Home() {
  const [shortUrl, setShortUrl] = useState('https://lil-url.net/050fbe97');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: { xs: '1rem', md: '4rem', lg: '7rem' },
        display:'flex',
        flexDirection:'column',
        border: '1px solid salmon'
      }}
    >
      <h1>URL Shortener</h1>
      <Divider
        variant='middle'
        role='presentation'
      />
      <Box
        component='main'
        sx={{
          height:'100%',
          flex:'1',
          display:'flex',
          flexDirection:'column'

        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: '1',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Form
            setShortUrl={setShortUrl}
            setErrorMessage={setErrorMessage}
          />
          <ShortUrl
            shortUrl={shortUrl}
            errorMessage={errorMessage}
          />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}
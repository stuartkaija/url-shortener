'use client';

import { useState } from 'react';
import { Box, Divider } from '@mui/material';

import ShortUrl from './components/ShortUrl';
import Form from './components/Form';
import Footer from './components/Footer';

export default function Home() {
  const [shortUrl, setShortUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box
      component='main'
      sx={{
        minHeight: '100vh',
        padding: { xs: '1rem', md: '4rem 4rem 1rem', lg: '7rem 7rem 1rem' },
        display:'flex',
        flexDirection:'column',
      }}
    >
      <h1>URL Shortener</h1>
      <Divider
        variant='middle'
        role='presentation'
      />
      <Box
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
            setIsLoading={setIsLoading}
          />
          <ShortUrl
            shortUrl={shortUrl}
            errorMessage={errorMessage}
            isLoading={isLoading}
          />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}